import { HttpClientModule } from "@angular/common/http";
import { MyLibComponent } from "../../src/public-api"
describe('MyLibComponent', () => {
  beforeEach(() => {
  });

  it('fetchData should handle success scenario', () => {
    cy.intercept('GET', 'https://dummy.restapiexample.com/api/v1/employees', { fixture: '../../projects/my-lib/cypress/fixtures/success.json' }).as('getEmployeesSuccess');
    cy.mount('<lib-my-lib> </lib-my-lib>', {
      declarations: [],
      imports: [MyLibComponent, HttpClientModule],
      providers: [],
    });
    cy.get('lib-my-lib').then(($el) => {
      const el = $el[0];
      const win = el.ownerDocument.defaultView;
      //@ts-ignore
      const component = win.ng.getComponent(el);
      component.fetchData();
      cy.wait('@getEmployeesSuccess');
    })
  });

  it('fetchData should handle success scenario', () => {
    cy.intercept('GET', 'https://dummy.restapiexample.com/api/v1/employees', {
      statusCode: 500,
      body: 'Internal Server Error',
      headers: {
        'Content-Type': 'text/plain'
      }
    }).as('getEmployeesFailure');
    cy.mount('<lib-my-lib> </lib-my-lib>', {
      declarations: [],
      imports: [MyLibComponent, HttpClientModule],
      providers: [],
    });
    cy.get('lib-my-lib').then(($el) => {
      const el = $el[0];
      const win = el.ownerDocument.defaultView;
      //@ts-ignore
      const component = win.ng.getComponent(el);
      component.fetchData();
      cy.wait('@getEmployeesFailure');
    })
  });
});
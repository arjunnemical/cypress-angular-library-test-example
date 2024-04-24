import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MyLibService } from './my-lib.service';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  templateUrl: './my-lib.component.html',
  styles: ``,
})
export class MyLibComponent {
  constructor(private http: HttpClient, private mylibService: MyLibService) {}

  ngOnInit(): void {
    this.mylibService.fetchData();
  }

  fetchData(): void {
  }
}

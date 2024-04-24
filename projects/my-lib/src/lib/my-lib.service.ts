import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor(private http: HttpClient) {}

  fetchData(): void {
    // Make a dummy GET request to a URL (replace 'https://api.example.com/data' with your dummy API URL)
    this.http
      .get<any>('https://dummy.restapiexample.com/api/v1/employees')
      .subscribe(
        (response) => {
          console.log('Dummy API response:', response);
          // Process the response data here
        },
        (error) => {
          console.error('Error fetching data:', error);
          // Handle errors here
        }
      );
  }
}

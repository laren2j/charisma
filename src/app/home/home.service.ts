import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Home } from './../model/home';
// import { HOME } from './../model/data/mock-home';

interface DataResponse {
  results: string[];
}

@Injectable()
export class HomeService implements OnInit  {

  public results: any;
  private homeUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getHomePage(): any {
    this.http
    .get<DataResponse>(this.homeUrl)
    .subscribe(
      data => { this.results = data; },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  public postHomePage(): any {
    const body = {name: 'Lionel'};
    this.http
    .post('/api/items/add', body, {
      headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
      params: new HttpParams().set('id', '3')
    })
    .subscribe(
      data => { this.results = data; },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

}

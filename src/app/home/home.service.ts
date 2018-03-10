import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpInterceptor, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Home } from './../model/home';
import { HOMEDATA } from './../model/data/mock-home';

interface DataResponse {
  results: string[];
}

@Injectable()
export class HomeService implements OnInit  {

  public results: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getHome(): Promise<Home[]> {
    return Promise.resolve(HOMEDATA);
  }
}

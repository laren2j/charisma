import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { Home } from './../model/home';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public data: Array<Home>;
  public homeData;

  constructor(private homeService: HomeService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getHome();
  }

  public getHome(): void {
    this.homeData = this.homeService.getHome()
      .then(home =>
        this.data = home
      );
  }
}

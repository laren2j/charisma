import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

import { Home } from './../model/home';
import { HomeService } from './home.service';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

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
    // this.getHomeData();
    this.getHome();
  }

  public getHome(): void {
    this.homeData = this.homeService.getHome().then(home => this.data = home);
  }

  public getHomeData(): void {
    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(
      data => {
        console.log('User Login: ' + data.login);
        console.log('Bio: ' + data.bio);
        console.log('Company: ' + data.company);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }

}

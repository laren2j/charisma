import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Google Maps';
  lat: number = 12.868764;
  lng: number = 74.859883;

  constructor() { }

  ngOnInit() {
  }

}

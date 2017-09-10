import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mega-carousel',
  templateUrl: './mega-carousel.component.html',
  styleUrls: ['./mega-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class MegaCarouselComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaCarouselComponent } from './mega-carousel.component';

describe('MegaCarouselComponent', () => {
  let component: MegaCarouselComponent;
  let fixture: ComponentFixture<MegaCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

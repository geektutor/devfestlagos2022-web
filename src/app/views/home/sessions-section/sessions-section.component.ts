import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'hm-sessions',
  templateUrl: './sessions-section.component.html',
  styleUrls: ['./sessions-section.component.scss']
})
export class SessionsSectionComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoHeight: false,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
      1400: {
        items: 3,
      },
    },
    nav: false,
  };
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, HostListener } from '@angular/core';
import { map } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'hm-sponsors',
  templateUrl: './sponsors-section.component.html',
  styleUrls: ['./sponsors-section.component.scss'],
})
export class SponsorsSectionComponent implements OnInit {
  @Input() sponsors!: any[];
  showScroller!: boolean;
  screenWidth!: number;

  constructor() {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.confrimIfToScroll();
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.confrimIfToScroll();
  }

  ngafterviewinit(): void {
    this.confrimIfToScroll();
  }

  confrimIfToScroll() {
    if (this.screenWidth > 640) this.showScroller = true;
    else this.showScroller = false;
  }

  routeToWebsite(website_url: string) {
    const httpsInUrl = website_url.split('/');
    // console.log(httpsInUrl)
    if (httpsInUrl[0] !== 'https:') {
      website_url = `https://${website_url}`;
    } else {
      website_url = website_url;
    }

    window.open(website_url, '_blank');
  }
}

import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
          this.isNavOpen = false
      }
  });
  }

  ngOnInit(): void {
  }

  toggleNav(){
    this.isNavOpen = !this.isNavOpen
  }

}

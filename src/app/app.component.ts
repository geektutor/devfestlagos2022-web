import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'Devfest22-Web';

  ngAfterViewInit(): void {
    // firebaseAnalytics.logEvent()
  }
}

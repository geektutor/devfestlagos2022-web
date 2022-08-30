import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss'],
})
export class FaqAccordionComponent implements OnInit {
  @Input() faqList: any[] = [];
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.faqList);
  }
}

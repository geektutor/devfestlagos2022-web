import { Component, OnInit } from '@angular/core';
import { faqList } from 'src/app/mock-data';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss'],
})
export class FaqsComponent implements OnInit {
  title: string = 'FAQs';
  faqList = faqList;
  
  constructor() {}

  ngOnInit(): void {}
}

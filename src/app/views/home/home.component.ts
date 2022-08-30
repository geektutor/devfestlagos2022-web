import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faqList: any[] = [
    {
      question: 'What is Devfest?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },

    {
      question: 'What are GDGs?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },

    {
      question: 'Who can register for Devfest?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },

    {
      question: 'Is it mandatory to register before attending the event?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },
    {
      question: 'Can a tech newbie attend this event?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },

    {
      question: 'How can I become a member a GDG?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, sollicitudin maecenas in est sit amet magna.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

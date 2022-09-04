import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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

  faqList: any[] = [
    {
      question: 'What is Devfest?',
      answer:
        "DevFests are local tech conferences hosted annually by Google Developer Groups (GDGs) around the world. If you're looking to connect, learn, and interact with other developers, designers, and techies generally, DevFest is a fantastic avenue to do so.",
    },

    {
      question: 'What are GDGs?',
      answer:
        'GDGs [Google Developer Groups] are tech communities across different countries and continents, consisting of techies in different fields.',
    },

    {
      question: 'Who can register for Devfest?',
      answer:
        'Anyone.',
    },

    {
      question: 'Is it mandatory to register before attending the event?',
      answer:
        'Yes, it is.',
    },
    {
      question: 'Can a tech newbie attend this event?',
      answer:
        'Yes. Each individual may register for only one ticket.',
    },

    {
      question: 'How can I become a GDG member?',
      answer:
        "Visit the Google Developers Group website (https://gdg.community.dev/) and find the nearest GDG in your location.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

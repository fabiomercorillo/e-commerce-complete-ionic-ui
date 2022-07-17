import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {
 slideOpts = {
    slidesPerView: 1,
    navigation: false,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets'},
    scrollbar: { draggable: true },
    autoplay: false
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToNext(): void {
    this.router.navigate(['login']);
  }
}

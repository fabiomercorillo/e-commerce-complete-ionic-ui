import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})
export class OnBoardingPage implements OnInit {
 swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: true
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToNext(): void {
    this.router.navigate(['login']);
  }
}

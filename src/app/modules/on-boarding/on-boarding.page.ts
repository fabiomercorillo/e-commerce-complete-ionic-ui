import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { SwiperOptions, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.page.html',
  styleUrls: ['./on-boarding.page.scss'],
})

export class OnBoardingPage implements OnInit {
 slideOpts: SwiperOptions = {
    slidesPerView: 1,
    navigation: false,
    autoplay: false
  };

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToNext(): void {
    this.router.navigate(['login']);
  }
}

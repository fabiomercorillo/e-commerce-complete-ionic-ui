import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Input() onlyToolbar: boolean; // hide back button and title for parent components
  @Input() onlySafeArea: boolean;
  @Input() color: string;
  @Input() rate: number;
  constructor(private nav: NavController) { }

  ngOnInit(): void {}

  onBackClick(): void {
    this.nav.pop();
  }
}

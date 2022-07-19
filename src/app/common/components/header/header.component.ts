import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {}

  onBackClick(): void {
    history.back();
  }
}

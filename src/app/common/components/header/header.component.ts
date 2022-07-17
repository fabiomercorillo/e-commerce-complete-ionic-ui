import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  @Input() onlyToolbar: boolean; // hide back button and title for parent components

  constructor(private router: Router) { }

  ngOnInit() {}

  onBackClick(): void {
    history.back();
  }
}

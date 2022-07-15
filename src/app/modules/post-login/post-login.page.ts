import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.page.html',
  styleUrls: ['./post-login.page.scss']
})
export class PostLoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToNext(): void {
    this.router.navigate(['tabs']);
  }
}

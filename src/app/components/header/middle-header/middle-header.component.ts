import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.styl']
})
export class MiddleHeaderComponent implements OnInit {

  navLinks: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    // Subscribe to event to update header links here.
    // // this.somethingThatEmitsNewHeaderLinks().subscribe(response => {
    // //   this.navLinks = response;
    // // });
    this.navLinks = [
      { label: 'Portfolio', route: '/portfolio' },
      { label: 'Activity', route: '/activity' },
      { label: 'Market', route: '/market' },
      { label: 'News', route: '/news' },
    ];
  }

  isOnRoute(navLink: { label: string, route: string }) {
    return this.router.url.includes(navLink.route);
  }

}

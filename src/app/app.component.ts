import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { userService } from './user.service';

import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ResolveStart
} from '@angular/router'
import { AuthService } from './auth.service';
import { AuthGaurd } from './auth-gaurd.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular';
  //Loader variable default true before page load
  loader:boolean = this.auth.loading
  
  routeFailed = false
  constructor(private router: Router,
    private authService: AuthService,
    private auth:AuthGaurd) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    })
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {

      if (event instanceof NavigationStart) {
        this.loader = true;
      }
      if (event instanceof ResolveStart) {
        setTimeout(() => {
          this.loader = false;
        }, 300);
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.loader = false;
        }, 300);
      }
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        setTimeout(() => {
          this.loader = true;
        }, 300);
      }
      if (event instanceof NavigationError) {
        setTimeout(() => {
          this.loader = true;
        }, 300);
      }

    }
}


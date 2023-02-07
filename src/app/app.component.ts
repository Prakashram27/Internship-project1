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
 
  
  routeFailed = false
  constructor(private router: Router,
    private authService: AuthService,
    private auth:AuthGaurd) {
   
  }
}


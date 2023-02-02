import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  loader!: boolean

  constructor(private userService:userService,
    private route:Router) {
      
    }  
  }
function indexOf(arg0: string) {
  throw new Error('Function not implemented.');
}


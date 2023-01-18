import { Component } from '@angular/core';
import { User } from '../costomer.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  
  
  constructor(private userService:userService){  }
  showUser = this.userService.userListItems


  loginData:User= this.userService.loginUser



}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../costomer.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: userService,
    private route: Router,
    private authService: AuthService) {  }

  showUser = this.userService.userListItems
  loginData: User = this.userService.loginUser


  onEditedItem(i: number) {
    this.userService.startedEditing.next(i)
    this.route.navigate(
      ['/edituser', i],
    );
  }

  onLogOut() {
    this.authService.logOut();
    this.route.navigate(['/login'])
  }
}

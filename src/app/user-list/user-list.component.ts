import { Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthGaurd } from '../auth-gaurd.service';
import { User } from '../costomer.model';
import { userService } from '../user.service';
import {
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  ResolveStart
} from '@angular/router'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{

  password!: string;
  password2!: any
//loding variable
  loader:boolean = this.auth.loading


  user: any;
  statusUpdate: string = "";
  id!: number;

  // PASSWORD SHOW/HIDE VARIABLE
  showPassword!: boolean
  showPassword1! : boolean

  //VALIDATION
  registerForm!: FormGroup
  submitted: boolean = false;


  @ViewChild('add1') slAddform!: NgForm
  subscription!: Subscription
confirmPassword: any;

  constructor(private userService: userService,
    private routes: ActivatedRoute,
    private form: FormBuilder,
    private activatedRoute: Router,
    private auth:AuthGaurd) {

      this.activatedRoute.events.subscribe((e: RouterEvent) => {
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
  //ADD OR EDIT BUTTON FUNCTION
  onAddUser(form: NgForm) {
    console.log('adding')
    const value = form.value
    const newUser = new User(form.value.name, form.value.email, form.value.password,form.value.role)
    this.userService.onUserAdded(newUser)
    console.log(newUser)
    form.reset()
    this.statusUpdate = "User Added SuccessFully"

  }
  // DYNAMIC COMPONENT CLOSE BUTTON
  onHandleErr() {
    this.statusUpdate = "";
    this.activatedRoute.navigate(['/home'])
  }
}




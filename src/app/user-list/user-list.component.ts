import { Component, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../costomer.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  password!: string;
  password2!: any



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
    private activatedRoute: Router) {
  }

  ngOnInit(): void { }


  //ADD OR EDIT BUTTON FUNCTION
  onAddUser(form: NgForm) {
    console.log('adding')
    const value = form.value
    console.log(form.value)
    const newUser = new User(form.value.name, form.value.email, form.value.password)
    this.userService.onUserAdded(newUser)
    form.reset()
    this.statusUpdate = "User Added SuccessFully"

  }


  ngOnDestroy(): void {

  }
  // DYNAMIC COMPONENT CLOSE BUTTON
  onHandleErr() {
    this.statusUpdate = "";
    this.activatedRoute.navigate(['/home'])
  }
}




import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../costomer.model';
import { userService } from '../user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  error:any= ""
  InitialUser!:any;
  userName!: string;
  
  
 constructor(private route:Router,
  private userService:userService,
  private authservice:AuthService){
    this.InitialUser = this.userService.userListItems
  }

  // this.loginUsers = this.userServices.userListItems;

  inputEmail:string ="";
  inputPassword:string = "";
  inputRole : string = "";

  

  

  
  
  onSubmit(form:NgForm){
    this.authservice.login()
    this.userService.userName = form.value.name
    
    this.inputEmail = form.value.email;
    this.inputPassword = form.value.password;
    // console.log(this.inputEmail)
    // console.log(this.inputPassword)
   
const currentUser = this.userService.getcrtUser(this.inputEmail,this.inputPassword)
    if(currentUser.length>0){
      this.route.navigate(['home'])
    }
    else{
      this.error = "Incorrect UserName or Password"
    }


  }
  onHandleErr(){
    console.log(this.error)
    this.error = ""
  }

}

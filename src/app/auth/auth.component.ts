import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from '../costomer.model';
import { userService } from '../user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  error:any= ""

  
  
 constructor(private route:Router,
  private userServices:userService){}

  inputEmail:string ="";
  inputPassword:string = "";
  

   loginUser: User={
    name: 'Prakash',
    email:'prakashram1327@gmail.com',
    password:'Developer'
  }
  
  
  onSubmit(form:NgForm){

    this.inputEmail = form.value.email;
    this.inputPassword = form.value.password;
    // console.log(this.inputEmail)
    // console.log(this.inputPassword)
    if(this.inputEmail === this.loginUser.email && this.inputPassword === this.loginUser.password){
      this.route.navigate(['home'])
    }
    else{
      this.error = "Incorrect UserName or Password"
    }

  }
  onHandleErr(){
    this.error=null
    console.log(this.error)
  }
}

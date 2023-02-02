import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/costomer.model';
import { userService } from 'src/app/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit,OnDestroy{
  user:any;
  statusUpdate:string = "" ;
  id!: number;
  isLoding!:boolean

  // PASSWORD SHOW/HIDE VARIABLE
  showPassword!:boolean
  showPassword1!:boolean

  //VALIDATION
  registerForm!:FormGroup
  submitted:boolean = false;


  @ViewChild('add') slform!:NgForm
  subscription!: Subscription
  editMode = false;
  editedItemUser! : number;
  editedItem!:User;

  constructor(private userService:userService,
    private routes:ActivatedRoute ,
    private form:FormBuilder,
    private activatedRoute:Router){
  }
  

  ngOnInit(): void {
    // GETTING VALUES BY SETVALUE IN EDITMODE

    

    
    this.subscription = this.routes.params.subscribe((params:Params)=>{      
      this.editedItemUser = params['id'];
      if(this.editedItemUser){
        this.editMode = true;
      }
      else{
        this.editMode = false;
      }
      this.editedItem = this.userService.getUser(params['id']);
      console.log("target",params)
       this.user = this.userService.getUser(params['id'])
    })
    setTimeout(()=>{
      console.log(this.user.name)
      this.slform.setValue({
        name: this.user.name,
        email : this.user.email,
        password : this.user.password ,
        conformPassword:this.user.password
        
        })
    },0) 
  }


//ADD OR EDIT BUTTON FUNCTION
onAddItem(form:NgForm){
  const value = form.value
  const newUser = new User(value.name,value.email,value.password)
  if(this.editMode){
    this.userService.updateUser(this.editedItemUser,newUser)
    //user update template 
    this.statusUpdate = "User Updated SuccessFully"
  }
  else{
  this.userService.onUserAdded(newUser)
  // user added Template here
  this.statusUpdate = "User Added SuccessFully"
  }
}

ngOnDestroy(): void {
  this.editMode =  false;
  this.subscription.unsubscribe();
  
}
// DYNAMIC COMPONENT CLOSE BUTTON
onHandleErr(){
  this.statusUpdate = "";
  this.activatedRoute.navigate(['home'])
  this.isLoding = true
}
}

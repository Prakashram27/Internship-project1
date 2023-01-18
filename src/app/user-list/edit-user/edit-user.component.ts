import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/costomer.model';
import { userService } from 'src/app/user.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent{


  //toggle
  showPassword: boolean= false;

  //VALIDATION

  registerForm!:FormGroup
  submitted:boolean = false;




  @ViewChild('add') slform!:NgForm
  subscription!: Subscription;
  editMode = false;
  editedItemUser! : number;
  editedItem!:User;

  constructor(private userService:userService,
    private form:FormBuilder){

  }
  

  ngOnInit(): void{
    this.subscription = this.userService.startedEditing
    .subscribe(
      (index:number)=>{
        this.editedItemUser = index;
        this.editMode = true;
        this.editedItem = this.userService.getUser(index);
        this.slform.setValue({
          name : this.editedItem.name,
          email : this.editedItem.email,
          password : this.editedItem.password 
            
          }
        )
      }
    )


    

}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  
}


onAddItem(form:NgForm){
  const value = form.value
  const newUser = new User(value.name,value.email,value.password)
  if(this.editMode){
    this.userService.updateUser(this.editedItemUser,newUser)
  }
  else{
  this.userService.onUserAdded(newUser)
  }


  //VALIDATION
  this.submitted = true
}





}

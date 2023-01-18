import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../costomer.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,OnDestroy{

  userListItems!: User[];
  private Uschanged! :Subscription;

 

  
  constructor(private userService:userService,
    private route:Router){}


  ngOnInit() {
  this.userListItems= this.userService.getUserList();
  this.Uschanged = this.userService.usersChanged
  .subscribe((user:User[])=>{
    this.userListItems = user;


  })
  }

  ngOnDestroy(): void {
    this.Uschanged.unsubscribe()
  }


  
  onEditItem(index:number){
    this.userService.startedEditing.next(index)

  }
  
}
    

  

  
// }

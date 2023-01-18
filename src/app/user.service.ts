import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { AppModule } from "./app.module";
import { User } from "./costomer.model";




@Injectable({ providedIn: 'root'})
export class userService  {

  //Login User
  loginUser: User={
    name: 'Prakash',
    email:'prakashram1327@gmail.com',
    password:'Developer'
  }


  usersChanged = new Subject<User[]>();
  startedEditing = new Subject<number>();

    constructor(){}


     //User List Array
    userListItems:User[]=[
      new User('Prakash','prakashram27@gmail.com','Angular'),
      new User('TestUser','test.test@mail.com','Testing'),
    ]

    getUserList(){
      // return this.userListItems[index]
      return this.userListItems.slice();

    }

    onUserAdded(user:User){
      this.userListItems.push(user)
      this.usersChanged.next(this.userListItems.slice())
    }

    getUser(index:number){
      return this.userListItems[index]
    }

    updateUser(index:number,newUser:User){
      this.userListItems[index] = newUser;
      this.usersChanged.next(this.userListItems.slice())
    }



    


   



      // Dummy array for Login Check 
      Authcheck :string[]= []


      // isAuthendication(){
      //   if(this.Authcheck.includes('logged')) {
      //     return true;
      //   }
      //   return false;
      // }


    

}


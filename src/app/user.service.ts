import { EventEmitter, Injectable, OnInit, Output } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { AppModule } from "./app.module";
import { User } from "./costomer.model";




@Injectable({ providedIn: 'root'})
export class userService {
  userName!:string;
  currentUser!:User[]
 @Output() currentUserEmit:EventEmitter<any>=new EventEmitter();


  //Login User
  loginUser: User={
    name: 'Prakash',
    email:'prakashram1327@gmail.com',
    password:'Developer',
    role:"Admin"
  }


  usersChanged = new Subject<User[]>();
  startedEditing = new Subject<number>();

    constructor(){}
    
    //User List Array
    userListItems:User[]=[
      new User('Prakash','prakashram27@gmail.com','123456','admin'),
      new User('TestUser','test.test@mail.com','Testing','user'),
    ]
    
    
    getcrtUser(mail:string,password:string){
      
      this.currentUser = this.userListItems.filter((user)=> user.email==mail&& user.password == password )
      // localStorage.setItem('userDetail', this.currentUser.findIndex(()))
      this.currentUserEmit.emit(this.currentUser);
      
      return this.currentUser;

    }
    
    getUserType(){
      if(this.currentUser[0].role !== 'admin'){

        return false;
      }
      else{
        return true;
      }

    
    }
    
    
    


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

  }
      // Dummy array for Login Check 
      // Authcheck :string[]= []


      // isAuthendication(){
      //   if(this.Authcheck.includes('logged')) {
      //     return true;
      //   }
      //   return false;
      // }




    




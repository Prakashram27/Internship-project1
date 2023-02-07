import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { userService } from "./user.service";

@Injectable()
export class AuthService {
    isLoggedIn = false;
    isAdmin = false;
    
constructor(private userservice:userService){}

    isAuthenticated(){
        const promise = new Promise((resolve,reject)=>
        {
        setTimeout(() => {
           resolve(this.isLoggedIn) 
        }, 2000);
        })
        return promise;
    }
    isAdminCheck(){
        const promise = new Promise((resolve,reject)=>
        {
           resolve(this.isAdmin) 
        })
        return promise;
    }

    login(){
        this.isLoggedIn = true;
        this.userservice.currentUser?.map((type)=>{
            if(type.role == 'admin'){
                this.isAdmin = true;
            }
            else{
                this.isAdmin = false;
            }
        })

    }
    logOut(){
        this.isLoggedIn = false
    }
}


const isUserLoggerdIn$ = new Subject<any>();

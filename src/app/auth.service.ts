import { Subject } from "rxjs";

export class AuthService {
    isLoggedIn = false;

    isAuthenticated(){
        const promise = new Promise((resolve,reject)=>
        {
        setTimeout(() => {
           resolve(this.isLoggedIn) 
        }, 2000);
        })
        return promise;
    }

    login(){
        this.isLoggedIn = true;

    }
    logOut(){
        this.isLoggedIn = false

    }
}


const isUserLoggerdIn$ = new Subject<any>();

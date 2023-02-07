import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, NavigationEnd, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { userService } from "./user.service";

// export class AuthGaurd implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
    
//     }
    
       
//     }
@Injectable()
export class AdminGaurd implements CanActivate{
    loading:boolean = false;

    constructor(private authservice:AuthService,
        private router:Router,
        private userService:userService){
            
        }



    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any {
console.log('worked')
return this.userService.getUserType();
    }

}
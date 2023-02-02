import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

// export class AuthGaurd implements CanActivate{
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{
    
//     }
    
       
//     }
@Injectable()
export class AuthGaurd implements CanActivate{
    constructor(private authservice:AuthService,
        private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | any {
    return this.authservice.isAuthenticated()
      .then((authendicated) => {
            if(authendicated){
                return true;
            }
            else{
                this.router.navigate(['/']);
                return false;
            }
        })
    }
    
}


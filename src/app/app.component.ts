import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  

  constructor(private userService:userService,
    private route:Router) {
      
    }
  
  // toggle = this.userService.isAuthendication() ;   
  }

 


  // Loggout button function

//   onLogout(){
//     this.userService.Authcheck.pop();
//     console.log(this.userService.Authcheck)
//     this.route.navigate(['/login'])
//     this.afterlogin = false

//   }
 

// }

function indexOf(arg0: string) {
  throw new Error('Function not implemented.');
}


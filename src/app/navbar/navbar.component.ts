import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../costomer.model';
import { userService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private route:Router,
    private authservice : AuthService, private userService:userService){
    }
    currentUser!:any;
    isAdmin!:boolean;

    ngOnInit(){
       this.currentUser=this.userService.currentUserEmit.subscribe((data)=>{
        this.currentUser=data[0];
        if(this.currentUser.role=='user'){
          this.isAdmin=false;
        }
        else{
          this.isAdmin=true;
        }  
       })
    }
}

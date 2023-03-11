import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';

import { User } from './../model/user.model';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  user:User;
  errors:string;

  constructor(private router:Router,private authService:AuthService, private flashMessage:FlashMessagesService)
  { this.user=new User();
this.errors=""; }
  ngOnInit(): void {
  }

  SignUp() {
    this.authService.SignUp(this.user).subscribe (
      result => {
        // Handle result
        setTimeout(()=>{
          console.log("ok");
          this.router.navigate(["/"]);
        },1000);
      },
      error => {
        this.errors = error.message;

        console.log("l erreeurr : "+error)

      },
      () => {
        // No errors, route to new page
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';



import { User } from './../model/user.model';
import { auth } from './../model/auth.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user:User;
  auth:auth;
  errors:string;

  constructor(private router:Router,private authService:AuthService, private flashMessage:FlashMessagesService)
  {
    this.user=new User();
    this.auth=new auth();
this.errors=""; }
  ngOnInit(): void {
  }



/*   login(){

    this.authService.authenticate(this.auth).subscribe (
      result => {
        // Handle result
        setTimeout(()=>{
          console.log("ok");

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
    this.router.navigate(["/"]);
  } */

  validerConnexion ()  {

    if ( this.auth.email  &&  this.auth.password )  {
      console.log(this.auth.email, this.auth.password);
      this.authService.authenticate (this.auth).subscribe(

        result =>  {
      console.log ( ' result is ' ,  result );

    },  erreur  =>  {
      console.log ( ' Email or Password incorrect ', erreur);
    });
    }  else  {
      alert ( ' entrer le nom utilisateur et le mot de passe ' );
    }
  }
}

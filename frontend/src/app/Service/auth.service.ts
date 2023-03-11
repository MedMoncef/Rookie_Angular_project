import { User } from './../model/user.model';
import { auth } from './../model/auth.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})


export class AuthService {
  public authToken:any;
  public user:any=null;
  public auth:any=null;

  apiURL = 'http://127.0.0.1:7000';
  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',

    })
  }


  SignUp(user:any): Observable<User> {
    console.log(user);
    return this.http.post<User>(this.apiURL + '/user', JSON.stringify(user), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // Error handling
handleError(error:any) {
  // console.log("error : ",error)
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error;
  } else {
    // Get server-side error
    errorMessage = error.error;
  }

  return throwError(errorMessage);
}


//login-user

/*   authenticate(auth:auth){
    console.log(auth);
    return this.http.post(this.apiURL + '/api/auth/login', {
      email: auth.email,
      password: auth.password
    });
  } */

  authenticate ( utilisateur :  auth ){

		return  this.http.post(this.apiURL +'/login' ,{
			email  :  utilisateur.email ,
			password  :  utilisateur.password
		})

	}


  authenticateAdmin(user:any){
    let headers=new Headers();
    return this.http.post(this.apiURL + '/api/auth/login-user',JSON.stringify(user),this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
    }

//storing data

storeUserData(token:any,user:any){
localStorage.setItem('id_token',token);
localStorage.setItem('user',JSON.stringify(user))
this.authToken=token;
this.user=user;

}
logout(){
  this.authToken=null;
  this.user=null;
  localStorage.clear();

}
loadToken() {
  const token = localStorage.getItem('id_token');
  this.authToken = token;
}


notLoggedIn(){
  this.loadToken()
  return helper.isTokenExpired(this.authToken);

}

/*
isAdmin(){


    this.user=JSON.parse(localStorage.getItem('user'))

    if(this.user['role']=="admin"){return true}else{return false}


}

connectedUser()
{
  this.user=JSON.parse(localStorage.getItem('user'))
  return this.user
}*/


}

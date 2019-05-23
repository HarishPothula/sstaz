import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _route: Router) {
  }

  sendToken(token) {
    sessionStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    const user = sessionStorage.getItem('LoggedInUser');
    if (user === 'temple@adminsstaz.com') {
      return sessionStorage.getItem('LoggedInUser');
    } else {
      return null;
    }
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    sessionStorage.removeItem('LoggedInUser');
    this._route.navigate(['']);
  }
}

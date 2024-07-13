import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   isLoggedIn = false;
  constructor(private Auth: AngularFireAuth, private router: Router) { }
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  Login(inputobj: { Email: string, Password: string }) {
    return this.Auth.signInWithEmailAndPassword(inputobj.Email, inputobj.Password).then(() => {
      localStorage.setItem('token', 'true');
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    }).catch(err => {
      Swal.fire("Try again!...", "Login Failed!...", 'warning');
      this.router.navigate(['/login']);
    });
  }

  Register(inputobj: { Email: string, Password: string }): Promise<void> {
    return this.Auth.createUserWithEmailAndPassword(inputobj.Email, inputobj.Password).then(() => {
      Swal.fire("Registration successful", "You have successfully registered!", 'success');
      this.router.navigate(['/login']);
    }).catch(err => {
      Swal.fire("Try again later", "Registration Failed!...", 'warning');
      throw err;
    });
  }

  
}

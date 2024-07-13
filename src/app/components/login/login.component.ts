import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  Submitted: boolean = false;
  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.LoginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  Login() {
    this.Submitted = true
    if (this.LoginForm.invalid) {
      return;
    }
    let inputobj = {
      "Email": this.LoginForm.controls['Email'].value,
      "Password": this.LoginForm.controls['Password'].value,
    }
    this.auth.Login(inputobj).then(() => {
      this.LoginForm.reset();
    }).catch((error: any) => {
      Swal.fire('Error', error.message, 'error');
    });
  }
  get Email() {
    return this.LoginForm.get('Email')
  }
  get Password() {
    return this.LoginForm.get('Password')
  }
}

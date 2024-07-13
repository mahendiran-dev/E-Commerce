import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  RegisterForm: FormGroup
  Submitted: boolean = false

  constructor(private fb: FormBuilder, private auth: AuthService, private toast: NgToastService) {
    this.RegisterForm = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]


    })
  }
  OnSubmit() {
    this.Submitted = true;
    if (this.RegisterForm.invalid) {
      return
    }
    let inputobj = {
      'UserName': this.RegisterForm.controls['UserName'].value,
      'Email': this.RegisterForm.controls['Email'].value,
      'Password': this.RegisterForm.controls['Password'].value
    }
    this.auth.Register(inputobj).then(() => {
      Swal.fire('Success', 'Registration successful', 'success');
      this.RegisterForm.reset();
      this.Submitted = false;
    }).catch((error: any) => {
      Swal.fire('Error', error.message, 'error');
    });
  }


  get Name() {
    return this.RegisterForm.get('UserName')
  }
  get Email() {
    return this.RegisterForm.get('Email')
  }
  get Password() {
    return this.RegisterForm.get('Password')
  }

}

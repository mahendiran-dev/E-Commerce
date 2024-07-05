import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  RegisterForm: FormGroup


  constructor(private fb: FormBuilder, private toast: ToastrService) {
    this.RegisterForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      Email: ['', [Validators.required, Validators.email]],

    })
  }
  OnSubmit() {

    this.toast.success("", "Register Details added successfully")
    this.RegisterForm.reset()
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

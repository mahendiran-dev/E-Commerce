import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup

  ngOnInit(): void {

  }

  constructor(private fb: FormBuilder) {
    this.LoginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  get UserName() {
    return this.LoginForm.get('UserName')
  }
  get Password() {
    return this.LoginForm.get('Password')
  }
}

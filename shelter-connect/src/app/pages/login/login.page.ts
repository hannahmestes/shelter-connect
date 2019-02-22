import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = new FormGroup({
      usernameFormControl: new FormControl(),
      passwordFormControl: new FormControl(),
    })
  }

  submit(){
    console.log(this.loginForm.controls['usernameFormControl'].value);
    console.log(this.loginForm.controls['passwordFormControl'].value);
  }

}

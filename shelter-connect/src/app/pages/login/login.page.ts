import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private userService: UserService) { 
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
    this.userService.login(this.loginForm.controls['usernameFormControl'].value, this.loginForm.controls['passwordFormControl'].value);
  }

}

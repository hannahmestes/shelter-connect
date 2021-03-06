import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  formError: string;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { 
    this.createForm();
    this.formError="";
  }

  ngOnInit() {
  }

  createForm(){
    this.loginForm = new FormGroup({
      usernameFormControl: new FormControl("", Validators.required),
      passwordFormControl: new FormControl("", Validators.required),
    })
  }

  submit(){
    this.authService.login(this.loginForm.controls['usernameFormControl'].value, this.loginForm.controls['passwordFormControl'].value).then(res =>{
      this.userService.setCurrentUser(this.loginForm.controls['usernameFormControl'].value);
      this.router.navigate(['/browsing']); // TODO: set to page that makes sense based on user type
    }).catch(err =>{
      console.log(err); 
      if(err.code == "auth/invalid-email"){
        this.formError = "Please enter a valid email."
      }
      else if(err.code == "auth/user-not-found"){
        this.formError = "Username not found. Please sign up!"
      }
      else if(err.code =="auth/wrong-password"){
        this.formError = "Password is incorrect."
      }
    });
  }

}

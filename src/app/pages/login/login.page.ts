import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { 
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
    this.authService.login(this.loginForm.controls['usernameFormControl'].value, this.loginForm.controls['passwordFormControl'].value).then(res =>{
      this.router.navigate(['/browsing']); // TODO: set to page that makes sense based on user type
    }).catch(err =>{
      console.log(err); // TODO: display error message on form
    });
  }

}

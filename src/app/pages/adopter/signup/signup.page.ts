import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(
    public authService: AuthService, 
    public router: Router,
    public userService: UserService
  ) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.signupForm = new FormGroup({
      firstNameFormControl: new FormControl(),
      lastNameFormControl: new FormControl(),
      emailFormControl: new FormControl(),
      locationFormControl: new FormControl(),
      passwordFormControl: new FormControl(),
      confirmPasswordFormControl: new FormControl()
    });
  }

  submit(){
    this.authService.signUp(this.signupForm.controls['emailFormControl'].value, this.signupForm.controls['passwordFormControl'].value).then(res => {
      let user = new User(this.signupForm.controls['firstNameFormControl'].value, 
                          this.signupForm.controls['lastNameFormControl'].value,
                          this.signupForm.controls['locationFormControl'].value,
                          this.signupForm.controls['emailFormControl'].value);
      this.userService.addUser(user);
      this.router.navigate(['/filter']); // TODO: set to page that makes sense based on user type
    }).catch(err =>{
      console.log(err);
    })
  }

}

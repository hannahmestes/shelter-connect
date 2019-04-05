import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { PasswordValidation } from '../../../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  user: User = new User();

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
      firstNameFormControl: new FormControl('', Validators.required),
      lastNameFormControl: new FormControl('', Validators.required),
      emailFormControl: new FormControl('', Validators.required),
      locationFormControl: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPasswordFormControl: new FormControl('', Validators.required)
    });

    this.signupForm.setValidators(PasswordValidation.MatchPassword);
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

  validationMessages = {
    firstNameFormControl: [{type: 'required', message:'First name is required.'}],
    lastNameFormControl: [{type: 'required', message:'Last name is required.'}],
    emailFormControl: [{type: 'required', message:'Email is required.'}],
    locationFormControl: [{type: 'required', message: 'Zip code is required.'},
               {type: 'minlength', message: 'Zip code must be 5 characters.'},
               {type: 'maxlength', message: 'Zip code must be 5 charatcers.'}],
    passwordFormControl: [{type: 'required', message: 'Password is required.'},
                {type: 'minlength', message: 'Password must be at least 6 characters.'}]
  }

  hasError(formControlName: string, errorName: string){
    let formControl = this.signupForm.controls[formControlName]; 
    return formControl.dirty || formControl.touched && formControl.hasError(errorName);
  }

}

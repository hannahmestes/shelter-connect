import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ShelterService } from '../../../services/shelter.service';
import { Shelter} from '../../../models/shelter';
import { PasswordValidation } from '../../../validators/password-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;
  shelter: Shelter = new Shelter();

  constructor(public authService: AuthService, 
    public router: Router,
    public shelterService: ShelterService) {
      this.createForm();
     }

  ngOnInit() {
  }

  createForm(){
    this.signupForm = new FormGroup({
      shelterNameFormControl: new FormControl('', Validators.required),
      phoneFormControl: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      bioFormControl: new FormControl('', Validators.required),
      zipCodeFormControl: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      emailFormControl: new FormControl('', Validators.required),
      addressFormControl: new FormControl('', Validators.required),
      passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPasswordFormControl: new FormControl('', Validators.required)
    });

    this.signupForm.setValidators(PasswordValidation.MatchPassword);
  }

  submit(){
    this.authService.signUp(this.signupForm.controls['emailFormControl'].value, this.signupForm.controls['passwordFormControl'].value).then(res => {
      let shelter = new Shelter(this.signupForm.controls['shelterNameFormControl'].value, 
                          this.signupForm.controls['phoneFormControl'].value,
                          this.signupForm.controls['bioFormControl'].value,
                          this.signupForm.controls['zipCodeFormControl'].value,
                          this.signupForm.controls['emailFormControl'].value,
                          this.signupForm.controls['addressFormControl'].value);
      this.shelterService.addShelter(shelter);
      this.router.navigate(['/filter']); // TODO: set to page that makes sense based on user type
    }).catch(err =>{
      console.log(err);
    })
  }

  validationMessages = {
    shelterNameFormControl: [{type: 'required', message:'Shelter name is required.'}],
    phoneFormControl: [{type: 'required', message:'Phone number is required.'},
              {type: 'minlength', message: 'Phone number must be 10 characters.'},
              {type: 'maxlength', message: 'Phone number must be 10 characters.'}],
    bioFormControl: [{type: 'required', message: 'Bio is required.'}],
    emailFormControl: [{type: 'required', message:'Email is required.'}],
    zipCodeFormControl: [{type: 'required', message: 'Zip code is required.'},
               {type: 'minlength', message: 'Zip code must be 5 characters.'},
               {type: 'maxlength', message: 'Zip code must be 5 charatcers.'}],
    addressFormControl: [{type: 'required', message: 'Address is required.'}],
    passwordFormControl: [{type: 'required', message: 'Password is required.'},
                {type: 'minlength', message: 'Password must be at least 6 characters.'}]
  }

  hasError(formControlName: string, errorName: string){
    let formControl = this.signupForm.controls[formControlName]; 
    return (formControl.dirty || formControl.touched) && formControl.hasError(errorName);
  }

}

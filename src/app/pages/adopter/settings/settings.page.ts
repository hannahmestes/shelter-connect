import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { PasswordValidation } from '../../../validators/password-match.validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  settingsForm: FormGroup;
  user: User;

  constructor(
    public authService: AuthService, 
    public router: Router,
    public userService: UserService
  ) { 
    this.createForm();
    this.authService.user$.subscribe(user => {if (user) this.populateForm(user)});
  }

  ngOnInit() {
  }

  createForm(){
    this.settingsForm = new FormGroup({
      firstNameFormControl: new FormControl('', Validators.required),
      lastNameFormControl: new FormControl('', Validators.required),
      locationFormControl: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
      passwordFormControl: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPasswordFormControl: new FormControl('', Validators.required)
    });

    this.settingsForm.setValidators(PasswordValidation.MatchPassword);
  }

  populateForm(user : User){
    this.settingsForm.controls['firstNameFormControl'].setValue(user.firstName);
    this.settingsForm.controls['lastNameFormControl'].setValue(user.lastName);
    this.settingsForm.controls['locationFormControl'].setValue(user.zipCode);
  }

  submit(){
      let user = new User(this.settingsForm.controls['firstNameFormControl'].value, 
                          this.settingsForm.controls['lastNameFormControl'].value,
                          this.settingsForm.controls['locationFormControl'].value,
                          this.settingsForm.controls['emailFormControl'].value);
      this.userService.updateUser(user);
      this.router.navigate(['/filter']); // TODO: set to page that makes sense based on user type
  }

  validationMessages = {
    firstNameFormControl: [{type: 'required', message:'First name is required.'}],
    lastNameFormControl: [{type: 'required', message:'Last name is required.'}],
    locationFormControl: [{type: 'required', message: 'Zip code is required.'},
               {type: 'minlength', message: 'Zip code must be 5 characters.'},
               {type: 'maxlength', message: 'Zip code must be 5 charatcers.'}],
    passwordFormControl: [{type: 'required', message: 'Password is required.'},
                {type: 'minlength', message: 'Password must be at least 6 characters.'}]
  }

  hasError(formControlName: string, errorName: string){
    let formControl = this.settingsForm.controls[formControlName]; 
    return (formControl.dirty || formControl.touched) && formControl.hasError(errorName);
  }

}

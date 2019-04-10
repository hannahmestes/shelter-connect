import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  
  forgotPasswordForm: FormGroup;

  constructor(public authservice:AuthService) {
    this.createForm();
   }

  ngOnInit() {
  }
submit(){ 
  let userName=this.forgotPasswordForm.controls["usernameFormControl"].value;
  this.authservice.forgotpassword(userName);
}
  createForm(){
    this.forgotPasswordForm = new FormGroup({
      usernameFormControl: new FormControl(),
      passwordFormControl: new FormControl(),
    })
  }

}

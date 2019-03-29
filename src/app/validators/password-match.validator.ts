import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('passwordFormControl').value; // to get value in input tag
       let confirmPassword = AC.get('confirmPasswordFormControl').value; // to get value in input tag
        if(password !== confirmPassword) {
            AC.get('confirmPasswordFormControl').setErrors( {matchPassword: true} )
        } else {
            return null
        }
    }
}
import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }// end login

  signUp(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }// end signUp

  logout(){
    return this.afAuth.auth.signOut();
  }// end signOut

  forgotpassword(email){
    return this.afAuth.auth.sendPasswordResetEmail(email);

  }
}

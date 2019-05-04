import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;
  userSubject: BehaviorSubject<any>;
  

  constructor(private afAuth: AngularFireAuth) { 
    this.userSubject = new BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
  }

  login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then(res => this.userSubject.next(res));
  }// end login

  signUp(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }// end signUp

  logout(){
    return this.afAuth.auth.signOut().then(res => this.userSubject.next(null));
  }// end signOut

  forgotpassword(email){
    return this.afAuth.auth.sendPasswordResetEmail(email);

  }

  changepassword(password){
    return this.afAuth.user.subscribe(user => user.updatePassword(password));

  }
}

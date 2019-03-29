import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore) { 
    this.usersCollection = db.collection('users');

  }

  addUser(user: User){
    return this.usersCollection.add(Object.assign(new Object(), user));
  }// end addUser

  updateUser(user: User){
    return this.usersCollection.doc(user.id).update(user);
  }// end updateUser
  
}

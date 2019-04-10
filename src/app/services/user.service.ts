import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore) { 
    this.usersCollection = db.collection('users');

  }

  addUser(user: User): Promise<firebase.firestore.DocumentReference>{
    return this.usersCollection.add(Object.assign(new Object(), user));
  }// end addUser

  updateUser(user: User): Promise<void>{
    return this.usersCollection.doc(user.id).update(Object.assign(new Object, user));
  }// end updateUser

  deleteUser(userId: string): Promise<void>{
    return this.usersCollection.doc(userId).delete();
  }// end deleteUser

  getUser(userId: string): Observable<User>{
    return this.usersCollection.doc<User>(userId).valueChanges();
  }// end getUser
  
}

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersCollection: AngularFirestoreCollection<User>;
  public currentUser: User

  constructor(private db: AngularFirestore) { 
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

  setCurrentUser(email: string){
    console.log(email);
    this.db.collection('users', ref=> ref.where('email', '==', email)).snapshotChanges().pipe(
      map((actions: any) =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }),
      map(
      users => {return users[0]}
    )).subscribe(user => this.currentUser = user);
  }

  likeAnimal(animalId){
      if(!this.currentUser.likedAnimals.includes(animalId)) {
        this.currentUser.likedAnimals.push(animalId);
        this.updateUser(this.currentUser);
      }
  }

  unlikeAnimal(animalId){
    this.currentUser.likedAnimals = this.currentUser.likedAnimals.filter(likedAnimalId => likedAnimalId != animalId);
    this.updateUser(this.currentUser);
  }
  
}

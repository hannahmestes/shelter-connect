import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ManageAnimalsPage } from '../pages/shelter/manage-animals/manage-animals.page';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  public animals$: Observable<Animal[]>;
  private animalsCollection: AngularFirestoreCollection<Animal>;

  constructor(db: AngularFirestore) { 

    this.animalsCollection = db.collection('animals');

    this.animals$ = this.animalsCollection.snapshotChanges().pipe(
      map((actions: any) =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );

  } // end constructor

  // returns animal with the specified id
  getAnimal(id: string): Observable<Animal>{
    return this.animalsCollection.doc<Animal>(id).valueChanges();
  }// end getAnimal

  // adds an animal to the database
  addAnimal(animal: Animal){
    return this.animalsCollection.add(Object.assign(new Object(), animal));
  }// end addAnimal

  // updates an animal's information
  updateAnimal(animal: Animal){
    return this.animalsCollection.doc(animal.id).update(Object.assign(new Object(), animal));
  }// end updateAnimal

  // deletes an animal from the database
  deleteAnimal(id: string){
    return this.animalsCollection.doc(id).delete();
  }// end deleteAnimal

}

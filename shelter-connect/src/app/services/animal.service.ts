import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animals: Observable<Animal[]>;
  private animalsCollection: AngularFirestoreCollection<Animal>;

  constructor(db: AngularFirestore) { 

    this.animalsCollection = db.collection('animals');

    this.animals = this.animalsCollection.snapshotChanges().pipe(
      map((actions: any) =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );

  } // end constructor

  // returns all animals in the database
  getAnimals(): Observable<Animal[]>{
    return this.animals;
  }// end getAnimals

  // returns animal with the specified id
  getAnimal(id: string): Animal{
    return this.animalsCollection.doc<Animal>(id).valueChanges();
  }// end getAnimal

  // adds an animal to the database
  addAnimal(animal: Animal){
    return this.animalsCollection.add(animal);
  }// end addAnimal

  // updates an animal's information
  updateAnimal(animal: Animal){
    return this.animalsCollection.doc(animal.id).update(animal);
  }// end updateAnimal

  // deletes an animal from the database
  deleteAnimal(id: string){
    return this.animalsCollection.doc(id).delete();
  }// end deleteAnimal
}

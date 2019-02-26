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

  getAnimals(){
    return this.animals;
  }

  getAnimal(id: string){
    return this.animalsCollection.doc<Animal>(id).valueChanges();
  }

  addAnimal(animal: Animal){
    return this.animalsCollection.add(animal);
  }

  deleteAnimal(id: string){
    return this.animalsCollection.doc(id).delete();
  }
}

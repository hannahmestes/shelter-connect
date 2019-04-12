import { Injectable } from '@angular/core';
import { Shelter } from '../models/shelter';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  private sheltersCollection: AngularFirestoreCollection<Shelter>;

  constructor(db: AngularFirestore) { 
    this.sheltersCollection = db.collection('shelters');

  }

  addShelter(shelter: Shelter): Promise<firebase.firestore.DocumentReference>{
    return this.sheltersCollection.add(Object.assign(new Object(), shelter));
  }// end addShelter

  updateShelter(shelter: Shelter): Promise<void>{
    return this.sheltersCollection.doc(shelter.id).update(Object.assign(new Object, shelter));
  }// end updateShelter

  deleteShelter(shelterId: string): Promise<void>{
    return this.sheltersCollection.doc(shelterId).delete();
  }// end deleteShelter

  getShelter(shelterId: string): Observable<Shelter>{
    return this.sheltersCollection.doc<Shelter>(shelterId).valueChanges();
  }// end getShelter
  
}

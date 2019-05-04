import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Filter } from '../models/filter';
import { Animal } from '../models/animal';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})


export class FilterService {
  
  currentFilter: Filter;
  private filters: Observable<Filter[]>;
  private filterCollection: AngularFirestoreCollection<Filter>;

  constructor(private db: AngularFirestore, private userService: UserService) { 
    this.getUsersFilter(this.userService.currentUser.id);

    this.filterCollection = db.collection('filters');

    this.filters = this.filterCollection.snapshotChanges().pipe(
      map((actions: any) =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      })
    );

  } // end constructor

  // returns all filters in the database
  getFilters(): Observable<Filter[]>{
    return this.filters;
  }// end getFilters

  // returns filter with the specified id
  getFilter(id: string): Observable<Filter>{
    return this.filterCollection.doc<Filter>(id).valueChanges();
  }// end getFilter

  // adds an filter to the database
  addFilter(filter: Filter){
    return this.filterCollection.add(Object.assign(new Object(), filter));
  }// end addFilter

  // updates an filter's information
  updateFilter(filter: Filter){
    return this.filterCollection.doc(filter.id).update(Object.assign(new Object(), filter));
  }// end updateFilter

  // deletes an filter from the database
  deleteFilter(id: string){
    return this.filterCollection.doc(id).delete();
  }// end deleteFilter

  getUsersFilter(id: string){
    this.db.collection('filters', ref=> ref.where('userId', '==', id)).snapshotChanges().pipe(
      map((actions: any) =>{
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }),
      map(
      filters => {return filters[0]}
    )).subscribe(filter => this.currentFilter = filter);
  }

  filterAnimals(animals: Animal[]){
    if(this.currentFilter){
      return animals.filter(animal => {
        animal.breed === this.currentFilter.breed &&
        this.currentFilter.color.some(color => color === animal.color) &&
        animal.sex === this.currentFilter.sex &&
        animal.age <= this.currentFilter.maxAge &&
        animal.age >= this.currentFilter.minAge
      });
    }
    else return animals
  }


}

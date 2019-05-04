import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'pet-listing',
  templateUrl: './pet-listing.component.html',
  styleUrls: ['./pet-listing.component.scss'],
})
export class PetListingComponent implements OnInit {

  @Input() animalId: string;
  animal: Animal;
  animalSub: Subscription;

  constructor(private animalService: AnimalService, private userService: UserService) {
    
   }

  ngOnInit() {
    console.log(this.animalId);
    this.animalSub = this.animalService.getAnimal(this.animalId).subscribe(animal => this.animal = animal);
  }

  ngOnDestroy(){
    if (this.animalSub) this.animalSub.unsubscribe();
  }

  unlike(){
    this.animal = null;
    this.userService.unlikeAnimal(this.animalId);
  }

}

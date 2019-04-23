import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.page.html',
  styleUrls: ['./browsing.page.scss'],
})
export class BrowsingPage implements OnInit {

  currentAnimal: Animal;
  browsingCounter: number = 0;
  animals: Animal[];

  /**
   * This is currently NOT a good impl for animal browsing, just for demo purposes this should work
   */


  constructor(private animalService: AnimalService, private userService: UserService) {
    this.animalService.animals$.subscribe(res => {
      this.animals = res;
      this.currentAnimal = res[0];
    });
   }

  ngOnInit() {
  }

  nextAnimal(){
    this.browsingCounter++;
    this.currentAnimal = this.animals[this.browsingCounter%this.animals.length];
  }

  prevAnimal(){
    this.browsingCounter--;
    this.currentAnimal = this.animals[this.browsingCounter%this.animals.length];
  }

  likeAnimal(){
    this.userService.likeAnimal(this.currentAnimal.id);
  }

}

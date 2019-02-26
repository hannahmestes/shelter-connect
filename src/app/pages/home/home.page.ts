import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animalService: AnimalService){
    animalService.getAnimals().subscribe(res => console.log(res));
  }



}

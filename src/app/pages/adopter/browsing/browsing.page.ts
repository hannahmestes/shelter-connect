import { Component, OnInit } from '@angular/core';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.page.html',
  styleUrls: ['./browsing.page.scss'],
})
export class BrowsingPage implements OnInit {

  mock: Animal;

  constructor() {
    this.mock = {
      id: '0',
      name: 'Rover',
      shelterId: '0',
      color: 'Red',
      age: 4,
      breed: 'Mixed',
      species: 'dog',
      sex: 'male',
      bio: 'A cool dog.'
    }
   }

  ngOnInit() {
  }

}

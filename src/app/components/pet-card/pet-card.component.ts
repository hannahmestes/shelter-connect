import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../../models/animal';


@Component({
  selector: 'pet-card',
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.scss'],
})
export class PetCardComponent implements OnInit {

  @Input() pet: Animal;

  constructor() { }

  ngOnInit() {}

}

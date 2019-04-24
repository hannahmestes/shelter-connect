import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Animal } from '../../../models/animal';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.page.html',
  styleUrls: ['./likes.page.scss'],
})
export class LikesPage implements OnInit {

  likedAnimals: string[];

  constructor(private userService: UserService) { 
    this.likedAnimals = userService.currentUser.likedAnimals;
    console.log(this.likedAnimals);
  }

  ngOnInit() {
  }

}

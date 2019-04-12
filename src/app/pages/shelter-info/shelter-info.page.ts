import { Component, OnInit } from '@angular/core';
import { Shelter } from 'src/app/models/shelter';

@Component({
  selector: 'app-shelter-info',
  templateUrl: './shelter-info.page.html',
  styleUrls: ['./shelter-info.page.scss'],
})
export class ShelterInfoPage implements OnInit {

  shelter: Shelter;
  pet_images: string[]=["http://myhswm.org/images/sized/images/animals/bruno_with_ball-256x256.jpg", "http://myhswm.org/images/sized/images/animals/goose_in_car-256x256.jpg", "http://www.rentcafe.com/dmslivecafe/UploadedImages/57ffbe5a-055d-43c1-98fa-8be16ba066ca.jpg", "https://www.adoptapet.com/blog/wp-content/uploads/2011/08/one-eye-dog.jpg", "https://www.lupinepet.com/store/pub/media/catalog/category/cache/256x/Eco_Cat.jpg"]


  constructor() { 
    this.shelter=new Shelter("Petsmart", "77382", "pet23@gmail.com", "2348 Lubbock", "289374", "eohtrog");

  }



  ngOnInit() {
  }

}

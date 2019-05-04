import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PetCardComponent } from './pet-card/pet-card.component'
import { PetListingComponent } from './pet-listing/pet-listing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PetCardComponent, PetListingComponent],
  exports: [PetCardComponent, PetListingComponent]
})
export class ComponentsModule {}

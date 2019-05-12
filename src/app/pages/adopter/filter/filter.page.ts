import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Filter } from 'src/app/models/filter';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  filterForm: FormGroup

  constructor(private userService: UserService, private filterService: FilterService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.filterForm = new FormGroup({
      species: new FormControl('', Validators.required),
      breed: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
    });

    //this.signupForm.setValidators(PasswordValidation.MatchPassword);
  }

  submit(){

    console.log(this.filterForm.controls["age"].value)
      let filter = new Filter(this.userService.currentUser.id, this.filterForm.controls["age"].value.lower, this.filterForm.controls["age"].value.upper,
      this.filterForm.controls["breed"].value, this.filterForm.controls["species"].value, this.filterForm.controls["sex"].value, 
      this.filterForm.controls["color"].value)
      console.log(filter);
      this.filterService.addFilter(filter);
  }


}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country } from '../country';
import { City } from '../city';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  public countries:any;
  public cities:any;
  public selectedCities:any;

  constructor() { }

  ngOnInit() {
    this.countries = [new Country(1, "Poland"), new Country(2, "UK"), new Country(3, "Germany")];
    this.cities = [new City(1, "Warsaw", 1), new City(2, "Lodz", 1),
    new City(3, "London", 2), new City(4, "Manchester", 2),
    new City(5, "Berlin", 3), new City(5, "Munich", 3)]
  }

  onFormSubmitted(formResult: NgForm) {
    const user = formResult.value;
    console.log(user);
  }

  onCountrySelected(countryId: number) {
    this.selectedCities = this.cities.filter((item: City) => {
      return item.countryId == countryId
    });
  }

}


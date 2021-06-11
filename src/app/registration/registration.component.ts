import { Component,OnInit} from '@angular/core';
import { CountriesService } from '../countries.service';
import {State} from '../state';
import { Validators,FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';  



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    
  states:State[]=[
   {name:'Andhra Pradesh'} ,
   {name:'Andaman and Nicobar Islands'} ,
   {name:'Arunachal Pradesh'} ,
   {name:'Assam'} ,
   {name:'Bihar'} ,
   {name:'Chandigarh'} ,
   {name:'Chhattisgarh'} ,
   {name:'Delhi'} ,
   {name:'Lakshadweep'} ,
   {name:'Puducherry'} ,
   {name:'Goa'} ,
   {name:'Gujarat'} ,
   {name:'Haryana'} ,
   {name:'Himachal Pradesh'} ,
   {name:'Jammu and Kashmir'} ,
   {name:'Jharkhand'} ,
   {name:'Karnataka'} ,
   {name:'Kerala'} ,
   {name:'Madhya Pradesh'} ,
   {name:'Maharashtra'} ,
   {name:'Manipur'} ,
   {name:'Meghalaya'} ,
   {name:'Mizoram'} ,
   {name:'Nagaland'} ,
   {name:'Odisha'} ,
   {name:'Punjab'} ,
   {name:'Rajasthan'} ,
   {name:'Sikkim'} ,
   {name:'Tamil Nadu'} ,
   {name:'Telangana'} ,
   {name:'Tripura'} ,
   {name:'Uttar Pradesh'} ,
   {name:'Uttarakhand'} ,
   {name:'West Bengal'} ,
   ]
   
 title = 'FormValidation';  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
 isValidFormSubmitted = false;  
 user = new User();  
   
   
 onFormSubmit(form: NgForm) {  
   console.log("done");
   this.isValidFormSubmitted = false;  
   if (form.invalid) {  
      return;  
   }  
   this.isValidFormSubmitted = true;  
   form.resetForm();  
}  

title1 = 'email-validation-tutorial';
userModel = new UserData('')

}  
   
export class User {  
 mobileNumber ?: string;  
}  
export class UserData {
	constructor(
	public primaryAddress: string,

	){}
}



   
  // name = 'Angular';




// userFormGroup = new FormGroup({
//  mobile: new FormControl('', [Validators.required, Validators.pattern('^(\\+?\d{1,4}[\s-])?(?!0+\s+,?$)\\d{10}\s*,?$')] ),
//  });

  // stateInfo: any[] = [];
  // countryInfo: any[] = [];
  // cityInfo: any[] = [];
 
//  constructor(private country:CountriesService) { }

//   ngOnInit() {
//     this.getCountries();
//   }


//   getCountries(){
//     this.country.allCountries().
//     subscribe(
//       data2 => {
//         this.countryInfo=data2.Countries;
//         //console.log('Data:', this.countryInfo);
//       },
//       err => console.log(err),
//       () => console.log('complete')
//     )
//   }

//   onChangeCountry(countryValue) {
//     this.stateInfo=this.countryInfo[countryValue].States;
//     this.cityInfo=this.stateInfo[0].Cities;
//     console.log(this.cityInfo);
//   }

//   onChangeState(stateValue) {
//     this.cityInfo=this.stateInfo[stateValue].Cities;
//     //console.log(this.cityInfo);
//   }



import { Component, OnInit } from '@angular/core';
import {Login} from '../login';
import { Router } from '@angular/router';
import {ServiceforjsService} from '../serviceforjs.service';
import {FormControl, Validators} from '@angular/forms';
import { MatRadioChange,MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
xyz:any;
l:Login;
types:any=['Job Seeker','Job Provider'];
hide = true;
email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private r:Router,private y:ServiceforjsService) 
  {
    this.l=new Login();
   }
   getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }  

  submit()
{  
  return this.y.callLogin(this.l).subscribe(
    (data:Login)=>{
      //console.log(data[0].emailid);
      //console.log(data[0].password);
      
  if(data[0].emailid==this.l.emailid && data[0].password==this.l.password)
  {
    this.xyz="You have successfully logged in!!";
    this.r.navigate(['/jobseeker-afterlogin','logged-in']);
  }
    else
    {
    this.xyz="Invalid Emailid or Password. Try Again!";  }
  }
  // ,(error)=>{this.xyz=JSON.stringify(error);}
  );
  
}
gotoforgotpass()
{
  this.r.navigate(['/Forgotpass']);
}

onChange(event: MatRadioChange):boolean {
  console.log(event.value);
  let mrButton: MatRadioButton = event.source;
  //console.log(mrButton.checked); 
  return mrButton.checked; 
}
  ngOnInit() 
  {

  }

}

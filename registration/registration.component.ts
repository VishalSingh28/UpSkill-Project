import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emailid: string;
  user = new User(this.emailid);
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("success");
        this._router.navigate(['/login']);
      },
      error => { console.log("error in registration"); }
    )
  }

  gotologin() {
    this._router.navigate(['/login']);
  }

}

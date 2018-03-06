import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private route: Router) {
  }

  user: User = new User('', '');


  ngOnInit() {

  }

  submitForm() {
    this.route.navigate(['home']);
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username!: String
  password!: String

  constructor () {
    this.username = ''
    this.password = ''
  }

}

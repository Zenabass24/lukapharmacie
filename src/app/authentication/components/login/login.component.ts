import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  nom: String = "Itoua"
  public username!: String
  public password!: String

  constructor () {
    this.username = ''
    this.password = ''
  }

}

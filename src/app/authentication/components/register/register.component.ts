import { Component } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';

interface IAgent {
  nom: string,
  prenom: string,
  fonction: string,
  email: string,
  telephone: string,
  username: string,
  password: string
}

interface IPharamcie {
  typePharm: string,
  nomPharm: string,
  adresse: string,
  coordonnees: {
    longitude: number,
    latitude: number
  },
  horaires: {
    ouverture: number,
    fermeture: number
  }
}

interface IDataSend {
  agent: IAgent,
  pharmacie?: IPharamcie,
  pharmacieRef: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor (
    private geolocation: GeolocationService
  ) {}

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  public registerCommande () {

  }

  public cancelCreation () {
    
  }

  public async getMyPosition () {
    const position = await this.geolocation.getCurrentLocation ()
    console.log ("Position: ", position)
  }

  public submit () {

  }

}

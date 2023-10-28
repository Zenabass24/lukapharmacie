import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { IAgent, IPharamcie } from 'src/app/interfaces';
import { DialogAlertService } from 'src/app/services/dialog-alert.service';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { AuthenticationService } from './../../services/authentication.service';
import { result } from 'lodash';
import { Router } from '@angular/router';





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
export class RegisterComponent implements OnInit {

  @ViewChild('stepper') stepper!: MatStepper;

  public pharmacie:IPharamcie = {
    typePharm: '',
    nomPharm: '',
    adresse: '',
    telPharm: '',
    emailPharm: '',
    coordinates: {
      longitude: 0,
      latitude: 0,
      accuracy: 0
    },
    horaires: {
      ouverture: '',
      fermeture: ''
    }
  }

  public agent:IAgent = {
    nom: '',
    prenom: '',
    fonction: '',
    email: '',
    telephone: '',
    username: '',
    password: ''
  }

  nextForm: boolean  = false

  constructor (
    private geolocation: GeolocationService,
    private dialogAlertController: DialogAlertService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.getConcent (), 5000)
  }

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire
  // SETP 1
  public typePharmAlertStyle: boolean = false;
  public nomPharmAlertStyle: boolean = false;
  public adressePharmAlertStyle: boolean = false;
  public telPharmAlertStyle: boolean = false;
  public emailPharmAlertStyle: boolean = false;
  public ouverturePharmAlertStyle: boolean = false;
  public fermeturePharmAlertStyle: boolean = false;
  // SETP 2
  public nomAgentAlertStyle: boolean = false;
  public prenomAgentAlertStyle: boolean = false;
  public fonctionAgentAlertStyle: boolean = false;
  public emailAgentAlertStyle: boolean = false;
  public telAgentAlertStyle: boolean = false;
  // STEP 3
  public usernameAgentAlertStyle: boolean = false;
  public passwordAgentAlertStyle: boolean = false;


  public async getMyPosition () {
    const position = await this.geolocation.getCurrentLocation ()
    console.log ("Position: ", position.coords)

    this.pharmacie.coordinates.longitude = position.coords.longitude
    this.pharmacie.coordinates.latitude = position.coords.latitude
    this.pharmacie.coordinates.accuracy = position.coords.accuracy
    console.log ("Pharmacie: ", this.pharmacie)
  }

  public async getConcent () {
    const result  = this.dialogAlertController.presentDialog()
    this.dialogAlertController.userChoice$.subscribe(
      async (result) => {
        if (result) {
          this.getMyPosition ()
        }
      }
    )
  }

  public next (form: NgForm, step: number) {

    if (step === 1) {
      this.typePharmAlertStyle = false;
      this.nomPharmAlertStyle = false;
      this.adressePharmAlertStyle = false;
      this.telPharmAlertStyle = false;
      this.emailPharmAlertStyle = false;
      this.ouverturePharmAlertStyle = false;
      this.fermeturePharmAlertStyle = false;
    }

    if ( step === 2 ) {
      this.nomAgentAlertStyle = false;
      this.prenomAgentAlertStyle = false;
      this.fonctionAgentAlertStyle = false;
      this.emailAgentAlertStyle = false;
      this.telAgentAlertStyle = false;
    }

    if ( step === 3 ) {
      this.usernameAgentAlertStyle = false;
      this.passwordAgentAlertStyle = false;
    }
    
    console.log ("FORMULAIRE: ", form.valid)

    for (const controlName in form.controls) {
      if (form.controls.hasOwnProperty(controlName)) {
        const control = form.controls[controlName];
        if (control.invalid && step === 1) {
          switch (controlName) {
            case 'typePharm':
              this.typePharmAlertStyle = true
              break;
            case 'nomPharm':
              this.nomPharmAlertStyle = true
              break;
            case 'adresse':
              this.adressePharmAlertStyle = true
              break;
            case 'telephonePharm':
              this.telPharmAlertStyle = true
              break; 
            case 'emailPharm':
              this.emailPharmAlertStyle = true
              break;
            case 'ouverture':
              this.ouverturePharmAlertStyle = true
              break;
            case 'fermeture':
              this.fermeturePharmAlertStyle = true
              break;                                                      
          
            default:
              break;
          }
          console.log(`Champ ${controlName} est invalide.`);
        }

        if (control.invalid && step === 2) {
          switch (controlName) {
            case 'nomAgent':
              this.nomAgentAlertStyle = true
              break;
            case 'prenomAgent':
              this.prenomAgentAlertStyle = true
              break;
            case 'fonctionAgent':
              this.fonctionAgentAlertStyle = true
              break;
            case 'telAgent':
              this.telAgentAlertStyle = true
              break; 
            case 'emailAgent':
              this.emailAgentAlertStyle = true
              break;                                                    
          
            default:
              break;
          }
          console.log(`Champ ${controlName} est invalide.`);
        }

        if (control.invalid && step === 2) {
          switch (controlName) {
            case 'usernameAgent':
              this.usernameAgentAlertStyle = true
              break;
            case 'passwordAgent':
              this.passwordAgentAlertStyle = true
              break;                                         
          
            default:
              break;
          }
          console.log(`Champ ${controlName} est invalide.`);
        }
      }
    }

    if (form.valid && step <= 2) {
      this.showSpinner = true
      this.nextStepper()
      this.showSpinner = false
    }

    if (form.valid && step === 3) {
      this.submit ()
    }
    return
    console.log ("Pharmacy DATA: ", this.pharmacie)
    // Controls
    // Controller que chaque champ est saisie
    // Controller aussi que l'heure saisie correspond au type de pharmacie
    // Une pharmacie ouverte H24 ne saisie plus 

  }

  private nextStepper () {
    this.stepper.next()
  }

  public submit () {
    // TODO...
    this.showSpinner = true

    console.log ("Pharmacie: ", this.pharmacie)
    console.log ("Agent: ", this.agent)

    this.authenticationService.registerPharmacie(this.pharmacie).subscribe({
      next: data => {
        console.log ("Result register pharmacie...", data.result._id)
        this.agent.pharmacieRef = data.result._id
        this.agent.roleRef = 'AGENT_PRINCIPAL'
        this.registerAgent ()
      },
      error: error => {
        console.log ("ERROR: ", error)
      },
      complete: () => {

      }
    })

  }

  private registerAgent () {
    this.authenticationService.registerAgent(this.agent).subscribe({
      next: data => {
        console.log ('AGENT RESULT...', data)
        this.router.navigate(['/auth/login'])
      },
      error: error => {
        console.log ("ERROR: ", error)
      },
      complete: () => {
        this.showSpinner = false
      }
    })
  }

  private clearAll () {
    this.pharmacie.typePharm = ''
    this.pharmacie.nomPharm = ''
    this.pharmacie.adresse = ''
    this.pharmacie.telPharm = ''
    this.pharmacie.emailPharm = ''
    this.pharmacie.coordinates.longitude = 0
    this.pharmacie.coordinates.latitude = 0
    this.pharmacie.horaires.ouverture = ''
    this.pharmacie.horaires.fermeture = ''

    this.agent.nom = ''
    this.agent.prenom = ''
    this.agent.fonction = ''
    this.agent.telephone = ''
    this.agent.email = ''
    this.agent.username = ''
    this.agent.password = ''

  }

}

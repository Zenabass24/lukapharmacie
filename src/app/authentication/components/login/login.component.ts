import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import * as _ from 'lodash';


interface AgentData {
  username: string,
  agentPassword: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  nom: String = "Itoua"
  public agentData: AgentData = {
    username : '',
    agentPassword : ''
  }

  public text!: String
  public showBanner: boolean = false

  constructor (
    private authenticationService: AuthenticationService,
        private readonly router:Router,
    private commonService: CommonService
  ) {

  }

  public login(){

    console.log('Values: ', this.agentData)

    if(!_.isEmpty(this.agentData.username) && !_.isEmpty(this.agentData.agentPassword)){

      this.authenticationService.agentLogin(this.agentData).subscribe({

        next:(data:any) =>{

          console.log('[AUTH => ]', data.data)

          // console.log("IS ACTIVATE: ", )

          if (!data.data['activated']) {
            
          }

          if( data.success ){

            window.localStorage.setItem('token',JSON.stringify(data.data))

            window.localStorage.setItem('username', JSON.stringify(data.data.username))

            if (data.data.role == 'DEV' || data.data.role == 'ADMIN') {
              this.router.navigate(['/home'])
            } else {
              this.router.navigate(['/gestion'])
            }


            // this.authSucced.emit(true)

            this.commonService.isAuth = true

          } else {

            this.showMessage ('Nom d\'utilisateur ou mot de passe incorrect!')

            this.agentData.username = ''

            this.agentData.agentPassword = ''

          }

        },
        error: (err: any) => {

          this.showMessage (err.error.message)

          this.agentData.username = ''

          this.agentData.agentPassword = ''

          console.log('[DATA USER ERROR]',err)
        }
      })
    }else{

      this.showMessage ('Veuillez renseigner tous les champs!')

    }

    //Passage sans tenir compte du control

    // window.localStorage.setItem('token', JSON.stringify(this.dataUser))

    // this.router.navigate(['/home'])

    // this.authSucced.emit(true)

    // Fin du passage

  }

  private showMessage(text: String) {

    this.showBanner = true
    this.text = text

    setTimeout(
      () => {
        this.showBanner = false
      }, 4000
    )

  }




}

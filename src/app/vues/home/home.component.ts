import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animation-icon', [
      state('initial', style({
        transform: 'translateX(0)'
      })),
      state('final', style({
        transform: 'translateX(-50px)'
      })),
      transition('initial => final', animate('0.5s ease-in-out')),
      transition('final => initial', animate('0.5s ease-in-out'))
    ]),
    trigger('animation-texte', [
      state('initial', style({
        transform: 'translateX(0)'
      })),
      state('final', style({
        transform: 'translateX(50px)'
      })),
      transition('initial => final', animate('0.5s ease-in-out')),
      transition('final => initial', animate('0.5s ease-in-out'))
    ])
  ]
})
export class HomeComponent implements OnInit {


  etatAnimationIcon = 'initial';
  etatAnimationTexte = 'initial';

  animerEnfants() {
    this.etatAnimationIcon = this.etatAnimationIcon === 'initial' ? 'final' : 'initial';
    this.etatAnimationTexte = this.etatAnimationTexte === 'initial' ? 'final' : 'initial';
  }

  currentUserRole = ''



  constructor( private readonly router: Router, public commonService: CommonService  ) { }

  ngOnInit(): void {
    this.currentUserRole = this.commonService.getCurrentUserRole() 
    console.log("CURRENT ROLE...", this.currentUserRole)
  }

  onDisconnect () {

    window.localStorage.clear()

    this.commonService.isAuth = false



    this.router.navigate([''])

  }
}

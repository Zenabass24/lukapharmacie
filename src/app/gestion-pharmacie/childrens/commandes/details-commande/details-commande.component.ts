import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss']
})
export class DetailsCommandeComponent implements OnInit {

  public showSpinner= true;
  public deliver_found = false;

  constructor (
    private route: ActivatedRoute,
    private notifationService: NotificationsService,
  ) { 
    setTimeout(() => {this.showSpinner = false}, 1000)
    setTimeout(() => {this.deliver_found = true}, 5000)
  }

  ngOnInit () {
    // Recuperation de l'id de la notification
    const notifID = this.route.snapshot.paramMap.get('notifID')
    console.log ('NOTIF ID: ', notifID)
    // Requette vers le serveur afin de recuperer la notification et mise a jours de son etat
    // Vider la liste des notifications non traites
  }

}

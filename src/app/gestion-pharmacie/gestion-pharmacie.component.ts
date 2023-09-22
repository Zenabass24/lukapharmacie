import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-pharmacie',
  templateUrl: './gestion-pharmacie.component.html',
  styleUrls: ['./gestion-pharmacie.component.scss']
})
export class GestionPharmacieComponent {
  constructor(private router: Router) { }

  isActive(link: string): boolean {
    return this.router.isActive(link, false);
  }
}

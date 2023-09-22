import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent {
  constructor(private router: Router) { }

  isActive(link: string): boolean {
    return this.router.isActive(link, false);
  }
}

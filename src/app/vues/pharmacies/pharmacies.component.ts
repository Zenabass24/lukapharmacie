import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent {
  constructor(private router: Router) { }

  isActive(link: string): boolean {
    return this.router.isActive(link, false);
  }
}

import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map!: L.Map

  constructor (
    private readonly geolocationService: GeolocationService
  ) {
  }

  ngOnInit () {
    this.map = L.map('mapID').setView([-4.2494108 , 15.2712045], 16)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-4.2494108 , 15.2712045]).addTo(this.map)
    .bindPopup('First marker.<br> Easily customizable.')
    .openPopup();

    L.marker([-4.2449118 , 15.2712055]).addTo(this.map)
    .bindPopup('Second marker.<br> Easily customizable.')
    .openPopup();
  }
}

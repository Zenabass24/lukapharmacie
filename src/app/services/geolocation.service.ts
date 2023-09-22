import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          position => {
            resolve(position);
            return position
          },
          error => {
            reject(error);
            return error
          }
        );
      } else {
        reject(new Error('La géolocalisation n\'est pas prise en charge par ce navigateur.'));
      }
    });
  }
}

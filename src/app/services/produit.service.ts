import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../url';

const headers= new HttpHeaders()
.set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseURL:String = ''

  constructor(
    private readonly http: HttpClient
  ) { 
    var token = JSON.parse(Object(window.localStorage.getItem('token')))  
    this.baseURL = `${SERVER_URL}/pharmacies/${token.pharmacieRef}/produits`
  }

  public getProducts (): Observable<any> {
    console.log (this.baseURL)
    return this.http.get(`${this.baseURL}/get`)
  }

  public registerProduct (data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/register`, data, { headers })
  }
}

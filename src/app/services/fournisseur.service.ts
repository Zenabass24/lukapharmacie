import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../url';

const baseUrl = `${SERVER_URL}/fournisseurs`

const headers= new HttpHeaders()
.set('content-type', 'application/json')

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  constructor(
    private readonly http: HttpClient
  ) { }

  public getFournisseurs (): Observable<any> {
    return this.http.get(`${baseUrl}/get`)
  }

  public registerFournisseur (data: any): Observable<any> {
    return this.http.post(`${baseUrl}/register`, data, { headers })
  }
}

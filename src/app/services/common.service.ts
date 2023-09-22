import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

const baseUrl = "http://127.0.0.1:8000/api/v1"

const headers= new HttpHeaders()

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private readonly http: HttpClient ) { }

  public isAuth: boolean  = false

  public isCreateAccount = false

  public getCurrentUserRole() {
    if (window.localStorage.getItem('token')) {
          var role =JSON.parse(Object(window.localStorage.getItem('token')))
    return role.role;
    }
    return ''

  }

  public getAllServices(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/demandes/services/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public getAllRoles(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/users/roles/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public getAllMateriel(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/materiels/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public getAllMarques(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/materiels/marques/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public getAllModeles(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/materiels/modeles/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public getAllTypes(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/materiels/types/getall`, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public registerMateriel( dataMateriel: any ): Observable<any> {
    return this.http.post<any>(`${baseUrl}/materiels/register/`, dataMateriel, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public registerDemande( dataDemande: any ): Observable<any> {
    return this.http.post<any>(`${baseUrl}/demandes/register/`, dataDemande, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  public updateDemande( dataDemande: any, id: number ): Observable<any> {
    return this.http.put<any>(`${baseUrl}/demandes/update/` + id, dataDemande, {headers:headers}).pipe(
      tap((res: any) => {
        console.log( 'res ', res )
      })
    )
  }

  deleteMateriel(id: any): Observable<any> {

    return this.http.delete(`${baseUrl}/materiels/delete/` + id)

  }

}



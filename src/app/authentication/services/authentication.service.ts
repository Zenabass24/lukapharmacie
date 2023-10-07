import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, timeout } from 'rxjs';
import { IAgent, IPharamcie } from 'src/app/interfaces';
import { SERVER_URL } from 'src/app/url';


interface AgentData {
  username: string,
  agentPassword: string
}

const baseUrl = `${SERVER_URL}/agents`

const headers= new HttpHeaders()
.set('content-type', 'application/json')
  
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {



  constructor(
    private readonly http: HttpClient
  ) { }

  public agentLogin (agentData: AgentData): Observable<any> {
    return this.http.post(`${baseUrl}/login`, agentData, {headers} ).pipe(
      timeout(5000),
      tap (res => {
        console.log('RESULT...', res)
      })
    )
  }
  public registerPharmacie(pharmacieData: IPharamcie): Observable<any>{
    return this.http.post(`${SERVER_URL}/pharmacies/register`, pharmacieData, {headers} ).pipe(
      timeout(5000),
      tap (res => {
        console.log('PHARACIE REGISER RESULT...', res)
      })
    )
  }

  public registerAgent(agentData: IAgent): Observable<any>{
    return this.http.post(`${baseUrl}/register`, agentData, {headers} ).pipe(
      timeout(5000),
      tap (res => {
        console.log('AGENT REGISER RESULT...', res)
      })
    )
  }


}

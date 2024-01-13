import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NossoPropositoService {

public API = 'http://localhost:8090';

public CONTROLLER = this.API + '/nosso-proposito';

constructor(private http: HttpClient) { }

  nossoProposito(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get(this.CONTROLLER + '/nossoProposito', { headers: headers, observe: 'response' })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiURL = environments.API_URL

  constructor(private http: HttpClient) { }

  getCard(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}

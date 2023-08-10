import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private apiURL = environments.API_URL;

  constructor(private http: HttpClient) { }

  getAccount(): Observable<any>{
    return this.http.get<any>(this.apiURL)
  }
}

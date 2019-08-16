import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }
  get(url: string) {
    console.log(environment.API_URL + url);
    return this.httpClient.get(environment.API_URL + url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

   get(url: string) {
    return this.http.get(environment.API_URL + url);
  }

  post(url: string, data: any) {
    return this.http.post(environment.API_URL + url, data);
  }

}
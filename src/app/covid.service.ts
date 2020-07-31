import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private url= "https://api.rootnet.in/covid19-in/stats/latest";
  constructor(private http: HttpClient) { }
  getCases(){
    return this.http.get(this.url);
  }
}

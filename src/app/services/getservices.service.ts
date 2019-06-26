import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {

  constructor(private http:HttpClient) {

   }
  data():Observable<any>{
    return this.http.get("http://202.65.158.172:9097/client/1/all");
  }
}

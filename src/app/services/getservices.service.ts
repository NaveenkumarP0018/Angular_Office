import { Injectable } from '@angular/core';
// import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetservicesService {

  constructor(private http:HttpClient) {

   }
  data(){
    return this.http.get("http://202.65.158.172:9097/client/1/all");
    //return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  userDetails(name:string){
    return this.http.get("http://202.65.158.172:9092/alertoffline/1/validate?alertname="+name);
    //return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
  }

  interfacedetails(){
    return this.http.get("http://202.65.158.172:9092/interfaceinfo/1/all");
}

}


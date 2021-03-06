import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private baseUrl: "http://localhost:8081"

  constructor(private http:HttpClient) { }

  doLogin(data:any){
    return this.http.post("http://localhost:8081/login",data);
  }
  
  doSignUp(data:any){
    console.log("checking signup"); 
    return this.http.post("http://localhost:8081/signup",data);
  }

  getsales(sp_id: any){
    return this.http.get('http://localhost:8081/sales/'+sp_id);
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  Url = "http://service-account-dev.acv-astra.co.id/auth/login";
  Urlget = "https://adms-stock.ibid.astra.co.id/itemstock/Getfrontend?offset=0&limit=6&&access_token=75829dfac27a7735ebf22a98a9b996de6af16005";

  constructor(private http: HttpClient) { 
  }

  login(logindata: any): Observable<any> {
    return this.http.post<any>(this.Url, logindata, httpOptions).pipe();
  }

  getdata(): Observable<any> {
    return this.http.get<any>(this.Urlget).pipe();
  }

  
}

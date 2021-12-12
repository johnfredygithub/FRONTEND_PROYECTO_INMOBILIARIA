import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/models/response';
import { Users } from 'src/models/users';


const HttpOptions ={
  headers: new HttpHeaders({
    'Contend-Type':'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class APIService{

  url: string='http://localhost:3000/asesores';
  
  constructor(
    private _http: HttpClient
  ) { }
 
  ////////GET
  getUsuarios(): Observable<Response> {
    return this._http.get<Response>(this.url);
    console.log(Response);
  }


  ////methodo post
  add(user:Users):Observable<Response>{
    return this._http.post<Response>(this.url,user,HttpOptions);
    console.log(Response);
  }


}

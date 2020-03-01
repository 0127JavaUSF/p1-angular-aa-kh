import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { NewReimb } from '../../classes/new-reimb';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  //url to where we post the data
  _url = 'http://localhost:8080/EmplReimb/create';
  
  constructor(private _http: HttpClient) { }

  create(newReimb: NewReimb){
    return this._http.post<any>(this._url, newReimb);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Update } from 'src/app/classes/reimb-update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  _url="http://localhost:8080/EmplReimb/admin"
  constructor(private _http: HttpClient) { }

  update(update: Update){
    return this._http.post<any>(this._url, update);
  }
}



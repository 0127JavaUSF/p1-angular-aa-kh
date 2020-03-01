import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reimb-sum',
  templateUrl: './reimb-sum.component.html',
  styleUrls: ['./reimb-sum.component.css']
})
export class ReimbSumComponent implements OnInit {

  constructor( private httpService: HttpClient) { }

  userReimbs: string [];
  _url = 'http://localhost:8080/EmplReimb/admin-display';

  ngOnInit(): void {
    this.httpService.get(this._url).subscribe(
      data => {
        this.userReimbs = data as string [];
      }
    );
  }
}

import {Component, OnInit} from '@angular/core';
import {ApiServices} from '../services/api.services';
@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  public currentDate = new Date();
  public donors_details: any;
  constructor(private _apiService: ApiServices) {}
  ngOnInit() {
    this._apiService.getDonorsList().subscribe(res => {
      this.donors_details = res['donors'];
    });
  }
}



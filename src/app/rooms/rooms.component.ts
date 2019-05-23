import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  ngOnInit() {
  }
  onDonate() {
    window.open('https://Simplecheckout.authorize.net/payment/CatalogPayment.aspx',   '_blank');
  }
}



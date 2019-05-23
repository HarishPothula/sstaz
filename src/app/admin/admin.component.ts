import {Component, OnInit} from '@angular/core';
import {AdminModels} from '../models/admin.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public model = AdminModels;
  myGroup: FormGroup;
  eventsForm: FormGroup;
  imagesForm: FormGroup;

  ngOnInit() {
    this.myGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });
  }

  onDonationsSubmit() {
    console.log('donations', this.myGroup.value);
  }

  onEventsSubmit() {
    console.log('events');
  }
}



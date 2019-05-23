import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'main-layout-component',
  selector: 'app-main-layout',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {
  public imageSources = ['assets/images/banner15.jpg', 'assets/images/banner16.jpg', 'assets/images/banner17.jpg'];
  constructor(private router: Router) {

  }
  public ngOnInit(): void {
  }
}


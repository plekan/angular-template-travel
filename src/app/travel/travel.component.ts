import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {

  constructor() { }
  travel1 = 'assets/img/travel1.png';
  travel2 = 'assets/img/travel2.png';
  ngOnInit(): void {
  }

}

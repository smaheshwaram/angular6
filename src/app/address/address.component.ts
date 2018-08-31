import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  user: any;

  constructor() {
    this.user = {
      name: 'Name: Suchi',
      Apt: 'Apt # 897',
      City: 'City: Kansas City',
      Phone: 'Ph No. (123)654-4456',
      email: 'suchi@gmail.com'
    };
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input('name') userName : string;
  user: any;

  constructor() {
  }

  ngOnInit() {
    this.user = {
      name: this.userName,
      Apt: 'Apt # 897',
      City: 'City: Kansas City',
      email: 'suchi@gmail.com',
      Phone: [
        '(123)654-4456',
        '(458)789-5879'
        ]
    };
  }

}

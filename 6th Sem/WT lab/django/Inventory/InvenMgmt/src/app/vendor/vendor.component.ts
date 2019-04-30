import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  imagePath = "/assets/images/final.png"
  constructor() { }

  ngOnInit() {
  }

}

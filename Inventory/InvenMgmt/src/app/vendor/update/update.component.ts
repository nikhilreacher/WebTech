import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [ProductService]
})
export class UpdateComponent implements OnInit {
  imagePath = "/assets/images/final.png"
  constructor() { }

  ngOnInit() {
  }

}

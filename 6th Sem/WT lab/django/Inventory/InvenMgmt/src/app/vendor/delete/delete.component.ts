import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  providers: [ProductService]
})
export class DeleteComponent implements OnInit {
  imagePath = "/assets/images/final.png"
  constructor() { }

  ngOnInit() {
  }

}

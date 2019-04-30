import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { NgForm } from '@angular/forms';
import { Product } from '../shared/product.model';

declare var M: any;
declare var totalProduct: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [ProductService]
})
export class AddComponent implements OnInit {
  imagePath = "/assets/images/final.png"
  oh:String;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    this.oh = "60"; 
    totalProduct =  this.productService.getTotalCount()
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.productService.selectedProduct = {
      _id: "",
      name: "",
      quantity: null
    }
  }

  onSubmit(form : NgForm) {
    
    this.productService.postProduct(new Product(form.value.name, form.value.quantity)).subscribe((res) => {
      this.resetForm(form);
      alert("Product successfully added!")
      M.toast({ html: 'Product saved', classes: 'rounded' });
    });
  }
}

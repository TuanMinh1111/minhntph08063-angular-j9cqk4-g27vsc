import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product;
  
  constructor(
    private productService : ProductService,
    private activatedRoute : ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
  }

getProduct(){
  this.activatedRoute.params.subscribe(param =>{
    this.productService.getProduct(param.id).subscribe(data =>{
      this.product = data;
    })
  });
}
}
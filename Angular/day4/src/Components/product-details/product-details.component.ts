import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from './../../Services/product.service';


@Component({
  selector: 'app-product-details',
  imports: [],
templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  providers:[ProductService]
})
export class ProductDetailsComponent implements OnInit {
  // product id from route
  productId: number = 1;
  product: IProduct | undefined;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService ){
  }
  ngOnInit(): void {
      this.productId=Number(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(this.productId)
      this.product=this.productService.getProductId(this.productId);
  }
  
}

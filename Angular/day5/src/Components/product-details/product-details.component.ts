import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from './../../Services/product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
  providers: [ProductService]
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  // product id from route
  productId: number = 1;
  product: IProduct | undefined;
  sub?:Subscription;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,private router:Router) {
  }
  ngOnInit(): void {
    this.sub=this.activatedRoute.paramMap.subscribe(params=>{
      this.productId = Number(params.get('id'));
      this.product=this.productService.getProductId(this.productId);
    });
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  goPrev() {
    let productsIds = this.productService.getIds();
    let currentIndex=productsIds.findIndex(id=>id==this.productId);
    this.router.navigate(['/product', productsIds[--currentIndex]]);
    // console.log(productsIds[--currentIndex]);
    
  }
  goNext() {
    let productsIds = this.productService.getIds();
    let currentIndex=productsIds.findIndex(id=>id==this.productId);
    this.router.navigate(['/product', productsIds[++currentIndex]]);
  }

}

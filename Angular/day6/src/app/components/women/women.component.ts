import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-women',
  imports: [ProductsComponent],
  templateUrl: './women.component.html',
  styleUrl: './women.component.scss',
})
export class WomenComponent {
  products: any[] = [];
  constructor(private productService: ProductService) {
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProductsByQuery({ categories: '67bc7a10562ec1d8703178f6' })
      .subscribe((data: any[]) => {
        this.products = data;
        console.log(data);
      });
  }
}

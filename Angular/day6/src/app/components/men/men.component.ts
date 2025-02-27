import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductsComponent } from "../products/products.component";

@Component({
  selector: 'app-men',
  imports: [ProductsComponent],
  templateUrl: './men.component.html',
  styleUrl: './men.component.scss'
})
export class MenComponent {
 products: any[] = [];
  constructor(private productService: ProductService) {
    this.getProducts();
  }
  getProducts() {
    this.productService
      .getProductsByQuery({ categories: '67bff4a56b4b0f0ba8983b62' })
      .subscribe((data: any[]) => {
        this.products = data;
        console.log(data);
      });
  }
}

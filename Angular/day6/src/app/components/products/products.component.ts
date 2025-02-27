import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input()isAdmin=false;
  productIdToDelete: string='';
  @Input() products:any[]=[]
  constructor(private productService:ProductService){}
  deleteProduct() {
    if (this.productIdToDelete) {
      this.productService.deleteProduct(this.productIdToDelete).subscribe(response => {
        console.log('Product deleted:', response);
        // Optionally, refresh the product list or handle the response
        this.products = this.products.filter(product => product._id !== this.productIdToDelete);
      });
    }
  }
}

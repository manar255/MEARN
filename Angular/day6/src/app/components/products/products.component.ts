import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() isAdmin = false;
  productIdToDelete: string = '';
  productIdToEdit: string = '';
  categoties: any[] = [];
  sizes = ['s', 'm', 'l', 'xl', 'xxl'];
  newProduct: any = {};

  @Input() products: any[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.categoties = response;
      console.log(this.categoties);
    });
  }

  deleteProduct() {
    if (this.productIdToDelete) {
      this.productService
        .deleteProduct(this.productIdToDelete)
        .subscribe((response) => {
          console.log('Product deleted:', response);
          // Optionally, refresh the product list or handle the response
          this.products = this.products.filter(
            (product) => product._id !== this.productIdToDelete
          );
        });
    }
  }

  editProduct() {
    let data = {...this.newProduct};


    if (this.newProduct.images)
      data = { ...data, images: [this.newProduct.images] };

    this.productService
      .editProduct(this.productIdToEdit, data)
      .subscribe((response) => {
        console.log('Product added:', response);
      });

    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
      console.log(this.products);
    });
  }
  
  toggleSize(size: string, event: any) {
    if (event.target.checked) {
      this.newProduct.availableSizes.push(size);
    } else {
      const index = this.newProduct.availableSizes.indexOf(size);
      if (index > -1) {
        this.newProduct.availableSizes.splice(index, 1);
      }
    }
  }
  toggleCategory(categoryId: string, event: any) {
    if (event.target.checked) {
      this.newProduct.categories.push(categoryId);
    } else {
      const index = this.newProduct.categories.indexOf(categoryId);
      if (index > -1) {
        this.newProduct.categories.splice(index, 1);
      }
    }
  }
}

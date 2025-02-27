import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule,
    ProductsComponent,
    CategoriesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  newCategory: string = '';
  categoties: any[] = [];
  sizes = ['s', 'm', 'l', 'xl', 'xxl'];
  newProduct: any = {
    name: '',
    description: '',
    price: 0,
    availableSizes: [],
    categories: [],
    images: '',
  };
  products: any[] = [];
  currentComponent = 'product';

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.getCategories();
    this.getAllProducts();
  }
  addCategory() {
    console.log('Category added:', this.newCategory);
    this.categoryService
      .addCategory({ name: this.newCategory })
      .subscribe((response) => {
        console.log('Category added:', response);
        this.newCategory = '';
      });
  }
  getCategories() {
    this.categoryService.getAllCategories().subscribe((response) => {
      this.categoties = response;
      console.log(this.categoties);
    });
  }

  addProduct() {
    console.log(this.newProduct);

    this.productService.addProduct({...this.newProduct,images:[this.newProduct.images]}).subscribe((response) => {
      console.log('Product added:', response);

      this.newProduct = {
        name: '',
        description: '',
        price: 0,
        availableSizes: [],
        categories: [],
        images: '',
      };
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
  changePage(pageName:string) {
    this.currentComponent = pageName;
  }
}

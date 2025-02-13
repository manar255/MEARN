import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';
import { DiscountOffer } from '../../Models/discount-offer';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { ProductStyleDirective } from '../../Directives/product-style.directive';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { routes } from './../../app/app.routes';


@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule,ProductStyleDirective,RouterLink],
templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers:[ProductService]
})
export class ProductComponent implements OnChanges {
  discount: any = DiscountOffer.Discount20Percent;
  store: Store = new Store('electrnic', ['qenq', 'cairo'], 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Online-shop-shopping-shop-logo-by-DEEMKA-STUDIO-3.jpg')
  clientName: string = "Manar Khaled"
  buynowFlag: boolean = true;
  @Input() selectedCategory: number = -1;
  @Input() selectedPrice: number = 0;
  filteredProduct: IProduct[] = [];
  category: ICategory[] = []

  @Output() addProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>;

  constructor(private ProductService: ProductService, private router: Router) { 
    this.category = [
      {
        id: 1,
        name: "Home & Living",
      },
      {
        id: 2,
        name: "Jewelry",
      },
      {
        id: 3,
        name: "Accessories",
      }
    ];
    

    this.filteredProduct = this.ProductService.filterProductByCategory(this.selectedCategory);

  }
  ngOnChanges(changes: SimpleChanges): void {
    let x: IProduct[] = [];
    let y: IProduct[] = [];

    x = this.ProductService.filterProductByCategory(this.selectedCategory)


    y = this.ProductService.filterProductsByPrice(this.selectedPrice);

    console.log(y);

    // return array of anly same product of x and y
    this.filteredProduct = x.filter(productX =>
      y.includes(productX)
    );
  }



  buynowToggle() {
    this.buynowFlag = !this.buynowFlag
  }

  buynow(id: number) {
    let p = this.ProductService.getProducts().find(p => p.id == id);
    if (p && p.quantity) {
      p.quantity--;
      this.addProduct.emit(p);
    }
  }


  // goDetail(id:number){
  //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    
  //   this.router.navigate(['product', id]);
  // }

}


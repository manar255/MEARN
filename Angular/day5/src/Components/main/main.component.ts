import { Component, Input } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../Models/iproduct';
import { DatePipe } from '@angular/common';
import { CreditCardPipe } from '../../Pipes/credit-card.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-main',
  imports: [SidebarComponent,ProductComponent,DatePipe,CreditCardPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  creditCart:string='0000000000000000'
cart: { product: IProduct; quantity: number,date:Date }[] = [];


 selectedCategory:number=-1;
 selectedPrice:number=0;
 
  SendCategoryId(categoryId:number){
    this.selectedCategory=categoryId;
  }
  SendSelectedPrice(price:number){
    this.selectedPrice=price;
  }
  addProductToCart(product:IProduct){
    let i=this.cart.find(p=>p.product.id==product.id);
    if(i){
      i.quantity+=1;
    }else{
      this.cart.push({product:product,quantity:1,date:new Date()});
    }
  }

}

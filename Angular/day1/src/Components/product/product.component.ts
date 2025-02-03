import { Component } from '@angular/core';
import { DiscountOffer } from '../../Models/discount-offer';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  discount: any = DiscountOffer.Discount20Percent;
  store:Store=new Store('electrnic',['qenq','cairo'],'https://www.creativefabrica.com/wp-content/uploads/2019/02/Online-shop-shopping-shop-logo-by-DEEMKA-STUDIO-3.jpg')
  clientName:string="Manar Khaled"
  product:IProduct={
    ID:'1',
    Name:'phone',
    Quantity:3,
    Price: 3000,
    Img:'https://th.bing.com/th/id/OIP.dgwJaZ716-hUKoc0HeFkUwHaHa?w=167&h=180&c=7&r=0&o=5&dpr=2.5&pid=1.7',
    CateogryID:'1',
  }

}

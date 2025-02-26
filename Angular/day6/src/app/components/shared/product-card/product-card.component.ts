import { Component, Input } from '@angular/core';
import { IProduct } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() products:IProduct[]=[];
}

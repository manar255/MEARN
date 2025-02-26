import { Component, Input } from '@angular/core';
import { IProduct } from '../../../models/product';

@Component({
  selector: 'app-product-slider',
  imports: [],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent {
@Input() title:string='lol';


constructor(){

}

}

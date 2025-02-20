import { Component } from '@angular/core';
import { ProductSliderComponent } from "../shared/product-slider/product-slider.component";

@Component({
  selector: 'app-home',
  imports: [ProductSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

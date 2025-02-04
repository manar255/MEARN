import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../Components/header/header.component';
import { ProductComponent } from '../Components/product/product.component';
import { FootorComponent } from '../Components/footor/footor.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ProductComponent,FootorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day2';
}

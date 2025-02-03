import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './../Components/header/header.component';
import { ProductComponent } from '../Components/product/product.component';
import { FootorComponent } from '../Components/footor/footor.component';
import { SidebarComponent } from '../Components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ProductComponent,FootorComponent,SidebarComponent],
templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day1';
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-sidebar',
  imports: [FormsModule],
templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  category:ICategory[]=[];
  

  constructor() { 
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
  }


  @Output()
  selectCategory:EventEmitter<number>=new EventEmitter<number>;
  set selectedCategory(value: number) {
   this.selectCategory.emit(value)
  }
  @Output()
  selectPrice:EventEmitter<number>=new EventEmitter<number>;
  set selectedPrice(value: number) {
   this.selectPrice.emit(value)
  }

  
}

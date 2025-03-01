import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IProduct } from '../../../models/product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-slider',
  imports: [CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss'
})
export class ProductSliderComponent {
@Input() title:string='lol';
@Input() isAdmin = false;
products:any[]=[]
constructor(private productService:ProductService){
  productService.getAllProducts().subscribe(data=>{
    this.products=data;
  })

}


totalCards: number = this.products.length;
currentPage: number = 1;
pagePosition: string = "0%";
cardsPerPage!: number;
totalPages!: number;
overflowWidth!: string;
cardWidth!: string;
containerWidth!: number;
@ViewChild("container", { static: true, read: ElementRef })
container!: ElementRef;
@HostListener("window:resize") windowResize() {
  let newCardsPerPage = this.getCardsPerPage();
  if (newCardsPerPage != this.cardsPerPage) {
    this.cardsPerPage = newCardsPerPage;
    this.initializeSlider();
    if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
      this.populatePagePosition();
    }
  }
}

ngOnInit() {
  this.cardsPerPage = this.getCardsPerPage();
  this.initializeSlider();
}

initializeSlider() {
  this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
  this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
    10}px)`;
  this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
    10}px) / ${this.cardsPerPage})`;
}

getCardsPerPage() {
  return Math.floor(this.container.nativeElement.offsetWidth / 200);
}

changePage(incrementor:any) {
  this.currentPage += incrementor;
  this.populatePagePosition();
}

populatePagePosition() {
  this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
    (this.currentPage - 1)}px)`;
}

}

import { Component } from '@angular/core';
import { Store } from '../../Models/store';
import { IProduct } from '../../Models/iproduct';
import { DiscountOffer } from '../../Models/discount-offer';
import { ICategory } from '../../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  discount: any = DiscountOffer.Discount20Percent;
  store: Store = new Store('electrnic', ['qenq', 'cairo'], 'https://www.creativefabrica.com/wp-content/uploads/2019/02/Online-shop-shopping-shop-logo-by-DEEMKA-STUDIO-3.jpg')
  clientName: string = "Manar Khaled"
  buynowFlag: boolean = true;
  selectedCategory: number = -1;
  filteredProduct: IProduct[] = [];
  products: IProduct[] = []
  category: ICategory[] = []
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
    this.products = [
      {
        id: 1,
        title: "Handmade Ceramic Coffee Mug",
        description: "A beautifully crafted ceramic coffee mug with a rustic glaze finish.",
        discount: DiscountOffer.NoDiscount,
        price: 25.99,
        category: 1,
        quantity: 5,
        images: [
          "https://i.etsystatic.com/21687522/r/il/d0b00e/6127206883/il_1588xN.6127206883_k9c8.jpg",
          "https://i.etsystatic.com/21687522/r/il/d2debf/6051998232/il_1588xN.6051998232_hrz6.jpg"
        ],
        seller: {
          name: "CozyCrafts",
          rating: 4.8,
          reviews: 120
        }
      },
      {
        id: 2,
        title: "Personalized Wooden Name Sign",
        description: "Custom wooden name sign, perfect for home decor or nursery rooms.",
        discount: DiscountOffer.Discount10Percent,
        price: 45.00,
        category: 1,
        quantity: 3,
        images: [
          "https://i.etsystatic.com/55472674/r/il/9c2a56/6665567977/il_1588xN.6665567977_4vfm.jpg",
          "https://i.etsystatic.com/55472674/r/il/cd0e8e/6633903373/il_1588xN.6633903373_4q91.jpg"
        ],
        seller: {
          name: "WoodWorksStudio",
          rating: 4.9,
          reviews: 250
        }
      },
      {
        id: 3,
        title: "Silver Crescent Moon Necklace",
        description: "Delicate handmade sterling silver crescent moon pendant on a dainty chain.",
        discount: DiscountOffer.Discount20Percent,
        price: 35.50,
        category: 2,
        quantity: 0,
        images: [
          "https://i.etsystatic.com/21008709/r/il/217ab7/5076137498/il_1588xN.5076137498_t280.jpg",
          "https://i.etsystatic.com/21008709/r/il/de5493/5076136266/il_1588xN.5076136266_ghw3.jpg"
        ],
        seller: {
          name: "LunaJewelry",
          rating: 4.7,
          reviews: 95
        }
      },
      {
        id: 4,
        title: "Vintage Leather Journal",
        description: "Handmade leather-bound journal with aged paper, perfect for writing and sketching.",
        discount: DiscountOffer.NoDiscount,
        price: 29.99,
        category: 3,
        quantity: 2,
        images: [
          "https://i.etsystatic.com/14859358/r/il/21d17a/6537707252/il_1588xN.6537707252_ces4.jpg",
          "https://i.etsystatic.com/14859358/r/il/f80584/5229370033/il_1588xN.5229370033_30sf.jpg"
        ],
        seller: {
          name: "VintageScribes",
          rating: 4.6,
          reviews: 180
        }
      },
      {
        id: 6,
        title: "Rustic Wooden Serving Tray",
        description: "Handmade wooden serving tray with vintage handles, ideal for breakfast in bed.",
        discount: DiscountOffer.Discount30Percent,
        price: 49.99,
        category: 1,
        quantity: 1,
        images: [
          "https://i.etsystatic.com/41689697/r/il/ba19f9/5708606814/il_1588xN.5708606814_70yo.jpg",
          "https://i.etsystatic.com/41689697/r/il/84d6f4/5756665633/il_1588xN.5756665633_trwu.jpg"
        ],
        seller: {
          name: "RusticHome",
          rating: 4.8,
          reviews: 130
        }
      },
      {
        id: 7,
        title: "Boho Macrame Wall Hanging",
        description: "Handwoven macrame wall hanging to add a bohemian touch to your space.",
        discount: DiscountOffer.Discount10Percent,
        price: 55.00,
        category: 1,
        quantity: 0,
        images: [
          "https://i.etsystatic.com/57372070/r/il/04f8a6/6618224428/il_1588xN.6618224428_ayvp.jpg",
          "https://i.etsystatic.com/57372070/r/il/04f8a6/6618224428/il_1588xN.6618224428_ayvp.jpg"
        ],
        seller: {
          name: "BohoVibes",
          rating: 4.9,
          reviews: 160
        }
      },
      {
        id: 8,
        title: "Organic Soy Wax Candle",
        description: "Eco-friendly handmade soy wax candle with essential oil scents.",
        discount: DiscountOffer.Discount20Percent,
        price: 20.99,
        category: 1,
        quantity: 2,
        images: [
          "https://i.etsystatic.com/54768534/r/il/3b0462/6377232745/il_1588xN.6377232745_5vs9.jpg",
          "https://i.etsystatic.com/54768534/r/il/55f152/6377232795/il_1588xN.6377232795_gomb.jpg"
        ],
        seller: {
          name: "PureGlow",
          rating: 4.7,
          reviews: 140
        }
      },
      {
        id: 9,
        title: "Handmade Leather Wallet",
        description: "Minimalist handmade leather wallet, crafted with high-quality genuine leather.",
        discount: DiscountOffer.Discount10Percent,
        price: 59.99,
        category: 3,
        quantity: 1,
        images: [
          "https://i.etsystatic.com/34818502/r/il/95b2cc/3994456823/il_1588xN.3994456823_hjte.jpg",
          "https://i.etsystatic.com/34818502/r/il/f74a70/3946761928/il_1588xN.3946761928_rkj9.jpg"
        ],
        seller: {
          name: "LeatherCraft",
          rating: 4.8,
          reviews: 175
        }
      }
    ];
    
    this.filteredProduct = this.products


  }


  buynowToggle() {
    this.buynowFlag = !this.buynowFlag
  }

  buynow(id: number) {
    let p = this.products.find(p => p.id == id);
    if (p && p.quantity) p.quantity--;
  }

  set filterProduct(value: number) {
    // console.log(value);
    this.filteredProduct = (value == -1) ? this.products : this.products.filter(p => p.category == value)
    // console.log(this.filteredProduct);
  }
}


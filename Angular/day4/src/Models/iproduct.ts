export interface IProduct {
    id: number;
    title :string;
    description:string;
    discount:number;
    price:number;
    quantity:number;
    category:number;
    images:string[];
    seller:{
        name:string;
        reviews:number;
        rating:number;
    };
}
/*
{
    "id": 1,
    "title": "Handmade Ceramic Coffee Mug",
    "description": "A beautifully crafted ceramic coffee mug with a rustic glaze finish.",
    "price": 25.99,
    "category": "Home & Living",
    "images": [
      "https://example.com/mug1.jpg",
      "https://example.com/mug2.jpg"
    ],
    "seller": {
      "name": "CozyCrafts",
      "rating": 4.8,
      "reviews": 120
    }
  },
*/
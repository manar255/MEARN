/**
 * Represents a product in the system.
 */
class Product {
  /**
   * Creates a new product instance with the input name, price and stock quantity=0.
   * @param {string} name - The name of the product.
   * @param {number} price - The price of the product.
   */
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.stock = 0;
  }

  /**
   * Adds stock to the product.
   * @param {number} quantity - The number of items to add to the stock.
   */
  // test this function's logic
  addStock(quantity) {
    this.stock += quantity;
  }

 

  /**
   * purchases the product with quantity and Ships it using a shipping service if stock is available.
   * @param {object} shippingService - The shipping service handling the shipment.
   * @param {function} shippingService.processShipping indicates wether the shipping process started successfully or not.
   * @returns {boolean} - Returns true if shipping is successful, false otherwise.
   */
  /* These are test cases for purchase function:
        1- processShipping method should be called
        2- should return true if the shipping process started successfully
    */
  purchase(quantity, shippingService) {
    if (this.stock >= quantity) {
      this.stock -= quantity;
      return shippingService.processShipping(this.name, this.stock);
    }
    return false;
  }
}

//  bonus:
// problem 4: search for TDD 'Test Driven Development' and use it to implement function 'removePropertyFromObject' that should pass these test cases:
/* 
    1-should take property/key and check that's defined in that object or throwing an error
    2-should return type of object
    3-should return the object without the property/key (name) passing as parameter
    ex.:
    //if obj = {a:1,b:2,c:3} and wants to remove "b" , function expect to return ==> { a: 1, c: 3 }
*/

module.exports = Product;
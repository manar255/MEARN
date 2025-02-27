const Product = require("../Product.js");

describe("addStock", () => {
  let product;

  beforeEach(() => {
    product = new Product("Sample Product", 100);
    console.log(product.name);
    
  });

  it("should add stock to the product", () => {
    console.log(product.addStock);

    product.addStock(10);
    expect(product.stock).toBe(10);
  });
});

describe("purchase", () => {
  let shippingService;
  let product;

  beforeEach(() => {
    product = new Product("Sample Product", 100);
    shippingService = {
      processShipping: jasmine
        .createSpy("processShipping")
        .and.returnValue(true),
    };
  });

  it("should call processShipping method of shippingService", () => {
    product.addStock(10);
    product.purchase(5, shippingService);
    expect(shippingService.processShipping).toHaveBeenCalled();
    

  });

  it("should return true if the shipping process started successfully", () => {
    product.addStock(10);
    const result = product.purchase(5, shippingService);
    expect(result).toBe(true);
  });
});

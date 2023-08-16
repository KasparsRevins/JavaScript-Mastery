
class Product {

    
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;

        try {
            if(price > 0){
                this.price = price;
            } else {
                throw new Error;
            }
        } catch (error) {
            while(price <= 0) {
                alert("Price must be positive");
                price = prompt("Enter product price");
                this.price = price;
            } 
        }
        this.showNames();
    }
    
    showNames() {
        console.log(this.productId);
        console.log(this.productName);
        console.log(this.price);
    }    
}

function addNewProduct() {
    let productId = prompt("Enter product id");
    let productName = prompt("Enter product name");
    let price = prompt("Enter product price");
    
    return new Product(productId, productName, price);
}


new Product(1,"Juice",10);
new Product(2,"Soda",12);
console.log(addNewProduct())
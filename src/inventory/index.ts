//Define a type for a product
interface Product {
    name: string;
    price: number;
    quantity: number;
  }

//Define an enum that represents the different categories of products that the grocery store sells
enum ProductCategory {
    Fruits = 'Fruits',
    Vegetables = 'Vegetables',
    DairyProducts = 'DairyProducts',
    MeatProducts = 'MeatProducts',
    CannedGoods = 'CannedGoods',
}

let productsList: Product[] = []; //Define an array of products, initially empty.


/*
1. Define a function that allows a user to add a product to the inventory
2. The function should create a new product object using the provided parameters, and add it to the array of products.
*/
function addProduct(product: Product): number {
    console.log("current array lenght = " + productsList.length);
    try {
        productsList.push(product);
        console.log("current array lenght = " + productsList.length)
        return productsList.length;
    } catch (error) {
        return productsList.length;
    }
}
/*
1. Define a function that allows a user to remove a product from the inventory 
2. The function should find the product with the given name in the array of products, and remove it from the array
*/

function removeProduct(name: string): void {

}

/*
1. Define a function that allows a user to update the quantity of a product in the inventory
2. The function should find the product with the given name in the array of products, and update its quantity to the provided value.
*/
function updateProduct(name: string): void {

}
/* 
Define a function that calculates the total value of the inventory. 
The function should loop through the array of products, 
and calculate the total value by multiplying the price of each product by its quantity.
*/
function calculateInventoryValue(): number {

}

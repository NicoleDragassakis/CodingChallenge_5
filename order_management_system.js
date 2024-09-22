//basic Setup
//initialize with provided data

//TASK ONE
console.log("Task One:"); //add for better console readability

const inventory = [

{ name: 'Espresso', price: 3, quantity: 10 },
    
{ name: 'Latte', price: 4, quantity: 5 },
    
{ name: 'Cappuccino', price: 4, quantity: 6 },
    
{ name: 'Mocha', price: 5, quantity: 4 },

{ name: 'Pumpkin Spice Latte', price: 6, quantity: 8 }
    
];
console.log(inventory);

//TASK TWO

let orders = [];

//TASK THREE

console.log("Task Three:");//add for better console readability

function placeOrder(customerName, itemsSelected, status){
for (let item of itemsSelected){
    const product = inventory.find (product => product.name === item.name);
    
    if(product.quantity < item.quantity){
        console.log(item.name,", Insufficent quantity availiable"); //when there is not enough product in stock
        return;
    }
};

itemsSelected.forEach(item => {
const product = inventory.find(product => product.name === item.name);
if (product){
    product.quantity -= item.quantity;
}

});

orders.push ({
    customer:customerName,
    products:itemsSelected,
    orderstatus:status
});
console.log({customerName},itemsSelected);
}
//to test function
    placeOrder("Jessie", [
        {name:"Mocha", quantity: 1 }
    ],"Pending" ); //enough quantity

placeOrder("Gabby", [
        {name:"Mocha", quantity: 19 }
    ],"Pending" ); //not enough quantity
    
//TASK FOUR

console.log("Task Four:");//add for better console readability

function calculateOrderTotal(itemsSelected) {
    return itemsSelected.reduce((total, item) => {
        const product = inventory.find(product => product.name === item.name); //identifies the products in the order
        if (product) {
            return total + (product.price * item.quantity); //calculates the total
        }
        return total;
    },0); //if you dont include the zero it is broken?
}

//testing function here
let order =[
    { name:"Mocha", quantity:1}
];

console.log("Total:", calculateOrderTotal(order)); //outputs 5 
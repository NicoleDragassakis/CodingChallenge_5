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
const order = {
    customer:customerName,
    products:itemsSelected,
    orderstatus:status || "Pending"
};

orders.push(order);
console.log(customerName,order);
return order.orderstatus;
}
//to test function
    placeOrder("Jessie", [
        {name:"Mocha", quantity: 1 }
    ], ); //enough quantity

placeOrder("Gabby", [
        {name:"Mocha", quantity: 19 }
    ], ); //not enough quantity
    
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

//testing function 
let order =[
    { name:"Mocha", quantity:1}
];

console.log("Total:", calculateOrderTotal(order)); //outputs 5 

//TASK FIVE

console.log("Task Five:");

function completeOrder(ordersCustomerName){
    const order = orders.find(order => order.customer === ordersCustomerName && order.orderstatus === "Pending"); //finds the order and checks order status
        if(!order){
            console.log(ordersCustomerName,", Order Not Found"); //to log an error if there is no order found
            return;
        }
        order.orderststus= "completed";
        console.log(ordersCustomerName, order, "Order completed:",{
            customer: order.customer
        });
        return order.orderstatus;
    }

completeOrder("Jessie"); //when order is found
completeOrder("Joan");//when order is not found
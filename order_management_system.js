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

console.log("Task Two:"); //add for better console readability

let orders = [];

//TASK THREE

console.log("Task Three:");//add for better console readability

function placeOrder(customerName, itemsSelected, status){
for (let item of itemsSelected){
    const product = inventory.find (product => product.name === item.name);
    if (!product){
        console.log (item.name, "Item Does Not Exisit");
        return;
    }
};

itemsSelected.forEach(item => {
const product = inventory.find(product => product.name === item.name);

if(product) {
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

    placeOrder("Jessie", [
        {name:"Mocha", quantity: 1 }
    ],"Pending" );
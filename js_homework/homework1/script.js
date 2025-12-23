// Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let quantity=30;
let priceOfOnePhone=119.95;
let taxRate=0.05;

let subtotal=quantity*priceOfOnePhone;
let tax=subtotal*taxRate;
let totalCost=subtotal+tax;

console.log(totalCost);
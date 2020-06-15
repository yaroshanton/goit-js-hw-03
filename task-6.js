const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
const calculateTotalPrice = function(allProdcuts, productName) {

    let total;

    for(let product of allProdcuts) {
        if(product.name.includes(productName)){
            total = product.price * product.quantity;
        };
    }; 

    return total;
 
};
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
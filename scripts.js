// alert('You are in ES6 Course officially!');


// // forEach

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// let product = 1;
// // sum
// arr1.forEach(function (val) {
//     sum += val;
// });
// console.log(`The sum is : ${sum}`);
// // prod
// function prod(value) {
//     product *= value;
// }
// arr1.forEach(prod);
// console.log(`The product is ${product}`);


// // map

// // Ex 1
// let arr2 = [10, 20, 30]
// let result = [];
// // Square
// result = arr2.map(function (number) {
//     // returning is critical, otherwise it will return undefined.
//     return number * number;
// });
// console.log(`Numbers are: ${arr2}`);
// console.log(`Square of number: ${result}`);

// // Ex 2
// let cars = [
//     { name: 'Kushaq', emi: 13400 },
//     { name: 'City', emi: 12600 },
//     { name: 'Corolla', emi: 13245 },
//     { name: 'Harrier', emi: 15472 }
// ];
// let monthlySalary = 61072;
// let budget = [];
// //Car in budget (max one - fourth of the salary);
// budget = cars.map(function (car) {
//     if (car.emi <= monthlySalary / 4) {
//         return car.name;
//     }
// });
// console.log(`The car(s) in your budget is/are: ${budget}`);


// // filter

// // Ex 1
// let products = [
//     { item: 'Corn Flakes', macros: 'Carbohydrates' },
//     { item: 'Egg Whites', macros: 'Protein' },
//     { item: 'Tofu', macros: 'Protein' },
//     { item: 'Rice', macros: 'Carbohydrates' }
// ];
// const protein = 'Protein';
// const carbohydrates = 'Carbohydrates';
// let diet = [];
// diet = products.filter(function (product) {
//     return product.macros === protein;
// });
// console.log(`The ${protein} is in : `, diet);

// // Ex 2
// let foods = [
//     { item: 'Corn Flakes', protein: 4, carb: 20, fat: 1 },
//     { item: 'Egg Whites', protein: 6, carb: 0, fat: 0 },
//     { item: 'Tofu', protein: 14, carb: 4, fat: 9 },
//     { item: 'Rice', protein: 1, carb: 40, fat: 2 }
// ];

// // Food with protein > 4, carb < 25, fat < 5
// let diet2 = [];
// diet2 = foods.filter(function (food) {
//     return food.carb < 25 && food.protein > 4 && food.fat < 5;
// });
// console.log(`The food item(s) is/are: `, diet2);

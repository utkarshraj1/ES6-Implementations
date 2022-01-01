alert('You are in ES6 Course officially!');


// forEach

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let product = 1;
// sum
arr1.forEach(function (val) {
    sum += val;
});
console.log(`The sum is : ${sum}`);
// prod
function prod(value) {
    product *= value;
}
arr1.forEach(prod);
console.log(`The product is ${product}`);


// map

// Ex 1
let arr2 = [10, 20, 30]
let result = [];
// Square
result = arr2.map(function (number) {
    // returning is critical, otherwise it will return undefined.
    return number * number;
});
console.log(`Numbers are: ${arr2}`);
console.log(`Square of number: ${result}`);

// Ex 2
let cars = [
    { name: 'Kushaq', emi: 13400 },
    { name: 'City', emi: 12600 },
    { name: 'Corolla', emi: 13245 },
    { name: 'Harrier', emi: 15472 }
];
let monthlySalary = 61072;
let budget = [];
//Car in budget (max one - fourth of the salary);
budget = cars.map(function (car) {
    if (car.emi <= monthlySalary / 4) {
        return car.name;
    }
});
console.log(`The car(s) in your budget is/are: ${budget}`);


// filter

// Ex 1
let products = [
    { item: 'Corn Flakes', macros: 'Carbohydrates' },
    { item: 'Egg Whites', macros: 'Protein' },
    { item: 'Tofu', macros: 'Protein' },
    { item: 'Rice', macros: 'Carbohydrates' }
];
const protein = 'Protein';
const carbohydrates = 'Carbohydrates';
let diet = [];
diet = products.filter(function (product) {
    return product.macros === protein;
});
console.log(`The ${protein} is in : `, diet);

// Ex 2
let foods = [
    { item: 'Corn Flakes', protein: 4, carb: 20, fat: 1 },
    { item: 'Egg Whites', protein: 6, carb: 0, fat: 0 },
    { item: 'Tofu', protein: 14, carb: 4, fat: 9 },
    { item: 'Rice', protein: 1, carb: 40, fat: 2 }
];

// Food with protein > 4, carb < 25, fat < 5
let diet2 = [];
diet2 = foods.filter(function (food) {
    return food.carb < 25 && food.protein > 4 && food.fat < 5;
});
console.log(`The food item(s) is/are: `, diet2);


// find

// Ex 1
let people = [
    { name: 'Ross', mood: 'Sad' },
    { name: 'Rachel', mood: 'Happy' },
    { name: 'Monica', mood: 'Chill' }
];
// find the person who is Happy
let person = people.find(function (obj) {
    return obj.mood === 'Happy';
}).name;
console.log(`${person} is Happy :).`);


// every and some
let data = [
    { name: 'Patrick', agent: 'CBI' },
    { name: 'Kimball', agent: 'CBI' },
    { name: 'Ronald', agent: 'FBI' },
    { name: 'Victor', agent: 'CBI' },
    { name: 'Teresa', agent: 'FBI' },
];

// every
let everyoneOfCBI = data.every(function (person) {
    return person.agent === 'CBI';
});
console.log(`Are all CBI Agents? ${this.everyoneOfCBI ? 'Yes' : 'No'}`);

// some
let someOfCBI = data.some(function (person) {
    return person.agent === 'CBI';
});
console.log(`Is there any agent of CBI? ${this.someOfCBI ? 'Yes' : 'No'}`);


// reduce

// Ex 1
let people = [
    { name: 'A', emo: 'Happy' },
    { name: 'B', emo: 'Sad' },
    { name: 'C', emo: 'Angry' },
    { name: 'D', emo: 'Crying' },
    { name: 'E', emo: 'Sad' },
];
let emotions = [];
emotions = people.reduce(function (acc, person) {
    let contain = acc.some(function (val) {
        return val === person.emo;
    });
    if (!contain) {
        acc.push(person.emo);
    }
    return acc;
}, []);
console.log(`The emotions are : ${emotions}`);

// Ex 2 - Check if the string is balanced? No of { === No of } and }{ is not considered as balanced
function balancedOrNot(str) {
    return str.split('').reduce(function (acc, value) {
        if (acc < 0) {
            return acc;
        }
        if (value === '{') {
            acc += 1;
            return acc;
        }
        if (value === '}') {
            acc -= 1;
            return acc;
        }
    }, 0);
}
const balString = '{{{{}}}}';
let balancedStatus = balancedOrNot(balString);
console.log(`The string ${balString} is ${balancedStatus === 0 ? 'Balanced' : 'Not Balanced'}.`);


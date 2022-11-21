/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

/**
 * Numbers
 */
const simple_numbers = [11, 2, 73, 4];
const totalSum = simple_numbers.reduce((sum, num) => sum + num);

console.log(totalSum);

// const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];

/**
 * Students
 */

const students = [
  {
    name: "Johan",
    points: 133,
  },
  {
    name: "Peter",
    points: 3,
  },
  {
    name: "Alicia",
    points: 42,
  },
  {
    name: "Elliot",
    points: 88,
  },
  {
    name: "Maja",
    points: 35,
  },
];

const studentPoints = students.reduce(
  (sum, student) => sum + student.points,
  0
);
console.log(studentPoints);

const products = [
  {
    sku: "CORR-BWL",
    name: "Corrosive bowl",
    in_stock: 321,
    price: 0.99,
  },
  {
    sku: "CTN-SPCE",
    name: "Cotton spice rack",
    in_stock: 2,
    price: 149.99,
  },
  {
    sku: "GOOD-COOKIES",
    name: "Inside-out Oreo cookies",
    in_stock: 18,
    price: 2.49,
  },
  {
    sku: "BACK-BREAKER",
    name: "The uncomfortable broom",
    in_stock: 1,
    price: 28.65,
  },
];

const totalStockValue = products.reduce(
  (sum, product) => sum + product.in_stock * product.price,
  0
);
console.log(totalStockValue);

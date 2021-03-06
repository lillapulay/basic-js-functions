// 1. Add function code goes here
exports.add = function add(x, y) {
  return x + y
};

// 2. Multiply function code goes here
exports.multiply = function multiply(x, y) {
  return x * y
};

// 3. OddOrEven function code goes here
exports.oddOrEven = function oddOrEven(x) {
  if(x % 2 == 0) {
    return ('even')
  } else {
    return ('odd')
  }
};

// 4. Write a function that returns an array that includes number 1 to 100
// Ex: [1,2,3,4, ..., 99, 100]
exports.arrayGenerator = function arrayGenerator() {
  let numbers = [];
  for(i=1; i<=100; i++) {
    numbers.push(i);
  }
  return(numbers);
};

// 5. Fix this function. We want to see 2 in the console instead of undefined
exports.hoisting = function hoisting() {
  let y = 2;
  return (y);
};

// 6. Write a function that accepts unlimited amount of numbers as input
// and return the smallest value
exports.minValue = function minValue(...numbers) {
  return Math.min(...numbers);
  };

// 7. Write a function that accepts an array of numbers as input
// and return a new array with all numbers doubled
// Ex: [1,2,3] => [2,4,6]
exports.doubleArray = function doubleArray(input) {
	return input.map(x => x * 2);
};

// 8. We have an array of students object, each object will have a name property
// write a function that accepts a student array as first parameter, and a name as second parameter
// and return the student with that name
// Example of student array: const students = [{ name: 'a' }, { name: 'b' }];
exports.findStudentName = function findStudentName (studentList, name) {
  return studentList.filter(student => student.name === name);
};

// 9. Transform all of the above into arrow functions below here

// 1. ADD 
const add = (x, y) => x + y;

// 2. MULTIPLY 
const multiply = (x, y) => x * y;

// 3. ODDOREVEN 
const oddOrEven = (x) => (x % 2 == 0) ? 'even' : 'odd';

// 4. ARRAYGENERATOR
const arrayGenerator = () => {
  let numbers = [];
  for(i=1; i<=100; i++) {
    numbers.push(i);
  }
  return(numbers);
};

// 5. HOISTING 
const hoisting = () => y = 2;

// 6. MINVALUE 
const minValue = (...numbers) => Math.min(...numbers);

// 7. DOUBLEARRAY
const doubleArray = (input) => input.map(x => x * 2);

// 8. FINDSTUDENTNAME
const findStudentName = (studentList, name) => studentList.filter(student => student.name === name);

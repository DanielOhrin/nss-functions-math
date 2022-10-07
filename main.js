// Create an add function that takes in 2 parameters
const add = (numOne, numTwo) => {
    const sum = numOne + numTwo;

    return sum;
}

//Create a function to multiply a single number by 2 (1 parameter)
const timesTwo = (num) => {
    const product = num * 2;

    return product;
}

const addTestOne = add(4, 14);
const timesTwoTestOne = timesTwo(addTestOne);

console.log(timesTwoTestOne);

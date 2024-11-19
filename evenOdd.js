const colors = require('colors')

// Create a function that takes in a number as a parameter and returns a string that says whether that number is even or odd
const evenOdd = (num) => {

    // Check to see if there is a number
    if (num === null || num === undefined) {
        console.log('\n\tYou need to include a number\n'.red)
        return;
    }

    // Check if number is negaive
    if (num < 0) {
        console.log('\n\tThis is a negative number\n'.yellow)
        num = num * -1
    }

    // Check if number is a decimal
    if (num % 1 !== 0) {
        console.log('\n\tDecimal numbers are not supported\n'.red)
    }

    // Using a ternary operator to check if number is even or odd and console log results
    return num % 2 === 0 ? console.log('\n\tEven\n'.brightBlue) : console.log('\n\t\Odd\n'.brightCyan)
}

// Change the number in the function argument to test the function
// Test Even
evenOdd(300)

//Test Odd
evenOdd(301)

// Test Negative number
evenOdd(-301)

// Test Decimal
evenOdd(33.33)


// Using a ternary operator saves memory and time versus using a for-loop, this is crucial with larger numbers

// Edge cases to consider:
// 1. Negative numbers
// 2. Decimal numbers
// 3. Checking for non-integer values
// 4. Checking for non-number values
// 5. Checking to see if there is a number at all

// Bonus:  Make the function work for negative numbers by mulitplying the number by -1
// Could use regex to check if the number is negative and then multiply by -1 to make it positive
// Could include a check to make sure that the number is actually a number

// fizzbuzz function to iterate through all numbers before num
const fizzBuzz = (num) => {
    for (let i = 0; i <= num; i++) {

        // Check to see if num is divisible through 3 and 5 first
        if (i % 15 === 0) {
            console.log('FizzBuzz')

            // Check if num is divisible by 5 and if so print 'Buzz'   
        } else if (i % 5 === 0) {
            console.log('Buzz')

            // Check if num is diviible by 3 and if so print 'Fizz'
        } else if (i % 3 === 0) {
            console.log('Fizz')

            // If none of the above conditions are met, print the number
        } else (console.log(i))
    }
}

fizzBuzz(100)


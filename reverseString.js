

// Function to reverse a string

const reverseString = (str) => {

    // First take string and split it into an array at each character including the spaces
    str = str.split('')

        // Reverse the array
        .reverse()

        // join the array back together into a string
        .join('')

    // Console log the reversed string
    console.log(str)

    // Optionally Return the string
    return str
}

reverseString('Hello this is David')


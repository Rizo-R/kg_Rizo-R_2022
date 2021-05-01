/* Precondition: arr is an Array of integers. Negative integers allowed. */
function convert_phonetic(arr) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(phon_equiv(arr[i]));
    }
    return res;
}

/* Converts a number to its phonetic equivalent.
 * Precondition: num is an integer. 
 */
function phon_equiv(num) {
    // Create a dictionary of phonetic equivalents
    var dict = {
        0: "Zero",
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
    }
    var res = "";
    // Check if num is negative before taking the absolute value
    var is_negative = num < 0;
    num = Math.abs(num);
    // Keep taking remainder until num < 10
    while (num >= 10) {
        res = dict[num % 10] + res;
        num = Math.floor(num / 10);
    }
    // Append the last digit
    res = dict[num] + res;
    // Append the "Minus" if num was negative
    if (is_negative) res = "Minus" + res;
    return res;
}

// Take user input and form an array to use in the functions
var nums = process.argv.slice(2);
var res = convert_phonetic(nums);

// Print the result
console.log(res.toString());
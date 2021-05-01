function convert_phonetic(arr) {
    // Precondition: all numbers are non-negative.
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(phon_equiv(arr[i]));
    }
    return res;
}

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
    // Assuming num >= 0
    while (num >= 10) {
        res = dict[num % 10] + res;
        num = Math.floor(num / 10);
    }
    res = dict[num] + res;
    return res;
}

// Take user input and form an array to use in the functions
var nums = process.argv.slice(2);
var res = convert_phonetic(nums);

// Print the result
console.log(res.toString());
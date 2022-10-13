// Challenge: To reverse a given string

// Parameter: a non-empty string
// Return: the reversed form of the string with all details preserved
// Example: reverseString("   The white space at the beginning of this string doesn't match the whitespace at the end. "), " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo gninnigeb eht ta ecaps etihw ehT   "
// PseudoCode: split the string, call the reverse method and then join the string

const reverseString = str => {
    const res = str.split('').reverse().join('');

    console.log(res);
}

reverseString("   The white space at the beginning of this string doesn't match the whitespace at the end. ");
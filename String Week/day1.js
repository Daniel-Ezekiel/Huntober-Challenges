// Challenge - We will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. Similar-looking numbers and letters have been confused in our document. We need to get them back to normal. Find the mix-ups that have been made. ***Note: the confusion happened in both directions and was case-sensitive.***


// Parameter: Single string sentence with numbers and letters mixed up because they look similar
// Return: A string with the mix-up cleared up. The string should send across the proper message.
// Example: mixUpFix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."), "PRO-TIP #498: IT'S NICE TO SAY HELLO."
// Pseudo code: My assumption is that the part of the string to be changed into numbers is the word that begins with '#'. Create an object to provide a method to track the mix-up. Split the string and for each entity, loop through and use object to replace the necessary values within. For the word beginning with '#', replace all the letters after with their number counterparts. Join the result into a single string in the end and return.

const mixUpFix = str => {
    const mixNums = {
        '0' : 'O',
        '5' : 'S',
        '1' : 'I',
        '6' : 'G',
        '2' : 'Z',
        '7' : 'L',
        '3' : 'E',
        '8' : 'B',
        '4' : 'h',
        '9' : 'q'
    };

    const mixLetters = {
        'O' : '0',
        'S' : '5',
        'I' : '1',
        'G' : '6',
        'Z' : '2',
        'L' : '7',
        'E' : '3',
        'B' : '8',
        'h' : '4',
        'q' : '9'
    }

    const strNew = str.split(' ').map(el => el.includes('#') ? el.split('').map(e => mixLetters[e] || e).join('') : el.split('').map(e => mixNums[e] || e).join(''));

    const fixed = strNew.join(' ');
    
    console.log(fixed);
    return fixed;
}

mixUpFix("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
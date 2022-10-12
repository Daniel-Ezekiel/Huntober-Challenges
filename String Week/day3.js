// Challenge: To manipulate a given string and obtain a hidden message
// Parameters: A non-empty string
// Return: a string sentence that makes sense
// Example: findHidden('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'), ' you could think this is hard to read before replacing the key characters'

// PsuedoCode: using the key characters given in the challenge, replace any instance of that key character with '' and then join using ' ' to create a meaningful sentence

const findHidden = str => {
    const keyChars = ['A','_','K','E','Y','!'];

    const res = str.split('').map(el => keyChars.includes(el) ? ' ' : el).join('');

    console.log(res);
    return res;
}

findHidden('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters');
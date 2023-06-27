function checkPalindrome(str) {

    const len = str.length;

    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            return 'False';
        }
    }
    return 'True';
}
const str = prompt('Enter a word: ');
const value = checkPalindrome(str);

console.log(value);
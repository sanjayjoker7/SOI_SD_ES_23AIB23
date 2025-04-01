function is_palindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(is_palindrome("madam")); 
console.log(is_palindrome("hello")); 

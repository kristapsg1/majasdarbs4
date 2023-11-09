

//1.uzdevums
//Write a function that takes two numbers (a and b) as argument
//Sum a and b


function add (a: number, b: number): number{
    return a + b
}  


console.log(add(1,2)) // 3
console.log(add(1,10)) // 11
console.log(add(99,1)) // 100
console.log('') // space

//2.uzdevums
//Write a function that takes a value as argument
//Return the type of the value

function getType (value: any): string {
    return typeof value
}

console.log(getType(1)); // number
console.log(getType(false)); // boolean
console.log(getType({})); // object
console.log(getType(null)); // object
console.log(getType('string')); // string
console.log(getType(['Array'])); // object
console.log('') // space


//3.uzdevums
//Write a function that takes two values, say a and b, as arguments
//Return true if the two values are equal and of the same type

function typeEquil (value1: any , value2: any): boolean {
    return value1 === value2
}

console.log(typeEquil(2, 3)); // false
console.log(typeEquil(3, 3)); // true
console.log(typeEquil(1, '1')); // false
console.log(typeEquil('10', '10')); // true
console.log(""); //space


//4.uzdevums
//Write a function that takes a string (a) and a number (n) as arguments
//Return the nth character of 'a'

function givenIndex (string: string, value: number): string {
    return string.charAt(value - 1);
}

console.log(givenIndex('abcd', 1)); // a
console.log(givenIndex('zyxbwpl', 5)); // w
console.log(givenIndex('gfedcba', 3)); // e
console.log(""); //space



//5.uzdevums
//Write a function that takes a string (a) as argument
//Remove the first 3 characters of a


function deletThree (a: string, b: number): string {
    return a.substring(b - 1)
}

console.log(deletThree('skasseit', 1)); // skasseit
console.log(deletThree('1234', 3)); // 34
console.log(deletThree('fgedcba', 2)); // gedcba
console.log(""); //space



//6.uzdevums
//Write a function that takes a string (a) as argument
//Get the first 3 characters of a



function firstThree(a: string): string {
    return a.slice(0, 3)
}

console.log(firstThree('abcdefg')); // abc
console.log(firstThree('1234')); // 123
console.log(firstThree('fgedcba')); // fge
console.log(""); //space


//7.uzdevums
//Write a function that takes a string (a) as argument
//Extract the first half a


function half(a: string) : string {
    return a.slice(0, a.length / 2)
}

console.log(half('abcdefgh')); // abcd
console.log(half('1234')); // 12
console.log(half('gedcba')); // ged
console.log(""); //space




//8.uzdevums
//Write a function that takes a string (a) as argument
//Remove the last 3 characters of a


function lastThree (a: string): string {
    return a.slice(0, -3)
}

console.log(lastThree('abcdefg')); // abcd
console.log(lastThree('1234')); // 1
console.log(lastThree('fgedcba')); // fged
console.log(""); //space


//9.uzdevums
//Write a function that takes two numbers (a and b) as argument

function procentsOf (a: number, b: number): number{
    return (a * b) / 100;
}

console.log(procentsOf(100, 50)); // abcd
console.log(procentsOf(10,1)); // 1
console.log(procentsOf(500,25)); // fged
console.log(""); //space




//10.uzdevums
//Write a function that takes 6 values (a,b,c,d,e,f) as arguments
//Sum a and b
//Then substract by c
//Then multiply by d and divide by e
//Finally raise to the power of f and return the result


function sixValues(a: number , b: number , c: number , d: number , e: number , f: number ,): number{
    let result = a + b;

    result -= c;
    result *= d;
    result /= e;
    result = Math.pow(result, f);

    return result
}

console.log(sixValues(6,5,4,3,2,1)); // 10.5
console.log(sixValues(6,2,1,4,2,3)); // 2744
console.log(sixValues(2,3,6,4,2,3)); // -8
console.log("");




//11.uzdevums
//Write a function that takes a number as argument
//If the number is even, return true


function evenNumber(a: number): boolean{
    return a % 2 === 0
}

console.log(evenNumber(10)); // true
console.log(evenNumber(-4)); // true
console.log(evenNumber(5)); // false
console.log(evenNumber(-111)); // false
console.log("");



//12.uzdevums
//Write a function that takes two strings (a and b) as arguments
//Return the number of times a occurs in b


function letterInSetence(a: string, b: string): number{
    let count = 0;
    for (let i = 0; i < b.length; i++){
        if (b[i] === a){
            count++;
        }
    }
    return count;
}


console.log(letterInSetence('m' , 'how many times does the character occur in this sentence?')); // 2
console.log(letterInSetence('h' , 'how many times does the character occur in this sentence?')); // 4
console.log(letterInSetence('?' , 'how many times does the character occur in this sentence?')); // 1
console.log(letterInSetence('z' , 'how many times does the character occur in this sentence?')); // 0
console.log("");


//13.uzdevums
//Write a function that takes a number (a) as argument
//If a is a whole number (has no decimal place), return true


function wholeNumber(a: number): boolean{
    return a % 1 === 0;
}


console.log(wholeNumber(4)); //true
console.log(wholeNumber(1.123)); //false
console.log(wholeNumber(1048)); //true
console.log(wholeNumber(10.48)); //false
console.log('');




//14.uzdevums
//Write a function that takes two numbers (a and b) as arguments
//If a is smaller than b, divide a by b
//Otherwise, multiply both numbers


function divideMultiply(a: number, b: number): number{
    if (a > b){
        return a * b;
    }
    else{
        return b / a;
    }
}


console.log(divideMultiply(10, 100)); //10
console.log(divideMultiply(90, 45)); //4050
console.log(divideMultiply(8, 20)); //2.5
console.log(divideMultiply(2, 0.5)); //1
console.log("");




//15.uzdevums
//Write a function that takes two strings (a and b) as arguments
//If a contains b, append b to the beginning of a
//If not, append it to the end


function containsInString(a: string, b: string): string{
    if (a.includes(b)){
        return b + a;
    }else{
        return a + b
    }
}


console.log(containsInString('cheese', 'cake')); //cheesecake
console.log(containsInString('lips', 's')); //slips
console.log(containsInString('Java', 'script')); //Javascript
console.log(containsInString(' think, therefore I am', 'I')); //I think, therefore I am
console.log('');



//16.uzdevums
//Write a function that takes a number (a) as argument
//Round a to the 2nd digit after the comma


function roundNumber(a: number): number{
    return Math.round(a * 100) / 100;
}


console.log(roundNumber(2.12397)); // 2.12
console.log(roundNumber(3.136)); // 3.14
console.log(roundNumber(1.12397)); // 1.12
console.log(roundNumber(26.1379)); // 26.14
console.log('');


//17.uzdevums
//Write a function that takes a number (a) as argument
//Split a into its individual digits and return them in an array

function splitNum(a: number): number[]{
    const numberString = a.toString();
    const arrayNum = numberString.split('').map(Number);
    return arrayNum
}



console.log(splitNum(10)); // Output: [1, 0]
console.log(splitNum(931)); // Output: [9, 3, 1]
console.log(splitNum(193278)); // Output: [1, 9, 3, 2, 7, 8]
console.log('');



//18.uzdevums
//It seems like something happened to these strings
//Can you figure out how to clear up the chaos?
//Write a function that joins these strings together such that they form the following words:
//'Javascript', 'Countryside', and 'Downtown'



function reconstructWords(a: string, b: string): string {
    // Replace any '%' characters in the strings with empty strings
    const clearString1 = a.replace('%', '');
    const clearString2 = b.replace('%', '');
    let revers = clearString2.split("").reverse().join("");
    let bigFirst = clearString1.charAt(0).toUpperCase() + clearString1.slice(1);

    return bigFirst + revers
}


console.log(reconstructWords('java', 'tpi%rcs')); //Javascript
console.log(reconstructWords('c%ountry', 'edis')); //Countryside
console.log(reconstructWords('down', 'nw%ot')); // Downtown
console.log('')



//19.uzdevums  /////////////////////////////////////////////////////////////////
//This challenge is a little bit more complex
//Write a function that takes a number (a) as argument
//If a is prime, return a


function isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function nextHigherPrime(a: number): number {
    if (isPrime(a)) {
        return a; // a is already prime
    }

    let nextNumber = a + 1;
    while (true) {
        if (isPrime(nextNumber)) {
            return nextNumber; // return the next higher prime number
        }
        nextNumber++;
    }
}


console.log(nextHigherPrime(38));  // Output: 41
console.log(nextHigherPrime(7));   // Output: 7
console.log(nextHigherPrime(115)); // Output: 127
console.log(nextHigherPrime(2000)); // Output: 2003
console.log('');





//20.uzdevums
//Write a function that takes two numbers, say x and y, as arguments
//Check if x is divisible by y
//If yes, return x
//If not, return the next higher natural number that is divisible by y


function divisible(x: number, y: number): number{
    if (x % y === 0){
        return x;
    }else{
        const nextDivisible = Math.ceil(x / y) * y;
        return nextDivisible
    }
}


console.log(divisible(1, 23)); //23
console.log(divisible(23, 23)); //23
console.log(divisible(7, 3)); //9
console.log(divisible(-5, 7)); //0
console.log('');



//21.uzdevums //////////////////////////////////////
//Write a function that takes two strings (a and b) as arguments
//Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
//Return the resulting string


function insertEveryThird(a: string, b: string): string {
    const n = 3; 
    let result = '';
    for (let i = a.length - 1, count = 0; i >= 0; i--, count++) {
        result = a[i] + (count % n === n - 1 ? b : '') + result;
    }
    return result;
}

// Test cases without specifying 'n'
console.log(insertEveryThird('1234567', '.')); // Output: '1.234.567'
console.log(insertEveryThird('abcde', '$'));   // Output: 'ab$cde'
console.log(insertEveryThird('zxyzxyzxyzxyzxyz', 'w'));
console.log("");





//22.uzdevums
//Write a function that takes a string as argument
//As it is, the string has no meaning
//Increment each letter to the next letter in the alphabet


function changeLetters(inputString: string): string {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (char >= 'a' && char <= 'z') {
            // Increment lowercase letters
            const nextChar = String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
            result += nextChar;
        } else if (char >= 'A' && char <= 'Z') {
            // Increment uppercase letters
            const nextChar = String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
            result += nextChar;
        } else {
            // Keep non-alphabetic characters unchanged
            result += char;
        }
    }

    return result;
}


console.log(changeLetters('bnchmf')); //coding
console.log(changeLetters('bgddrd')); //cheese
console.log(changeLetters('sdrshmf')); //testing
console.log('');




//23.uzdevums
//Write a function that takes an array (a) and a value (n) as argument
//Return the nth element of 'a'




function chooseNumb(a: number[], n: number): number | undefined {
    if (n <= a.length) {
        return a[n - 1];
    } else {
        return undefined; 
    }
}


console.log(chooseNumb([1,2,3,4,5],3)); //3
console.log(chooseNumb([10,9,8,7,6],5)); //6
console.log(chooseNumb([7,2,1,6,3],1)); //7
console.log("");



//24.uzdevums
//Write a function that takes an array (a) as argument
//Remove the first 3 elements of 'a'


function sliceThree(a: number[]): number[] {
    if (a.length >= 3) {
        return a.slice(3);
    } else {
        return [];
    }
}


console.log(sliceThree([1,2,3,4])); //[4]
console.log(sliceThree([5,4,3,2,1,0])); //[2,1,0]
console.log(sliceThree([99,1,1])); //[]
console.log("");




//25.uzdevums
//Write a function that takes an array (a) as argument
//Extract the last 3 elements of a


function logLastThree(a: number[]): number[] {
    if (a.length >= 3) {
        return a.slice(-3);
    } else {
        return a; 
    }
}


console.log(logLastThree([1,2,3,4])); //[ 2, 3, 4 ]
console.log(logLastThree([5,4,3,2,1,0])); //[ 2, 1, 0 ]
console.log(logLastThree([99,1,1])); //[ 99, 1, 1 ]
console.log("");



//26.uzdevums
//Write a function that takes an array (a) as argument
//Extract the first 3 elements of a


function logFirstThree(a: number[]): number[] {
    return a.slice(0, 3);
}


console.log(logFirstThree([1,2,3,4])); //[ 1, 2, 3 ]
console.log(logFirstThree([5,4,3,2,1,0])); //[ 5, 4, 3 ]
console.log(logFirstThree([99,1,1])); //[ 99, 1, 1 ]
console.log('');



//27.uzdevums
//Write a function that takes an array (a) and a number (n) as arguments
//It should return the last n elements of a


function returnLastN(a: number[], n: number): number[] {
    if (n >= a.length) {
        return a;
    } else {
        return a.slice(a.length - n);
    }
}


console.log(returnLastN([1, 2, 3, 4, 5], 2)); //[ 4, 5 ]
console.log(returnLastN([1, 2, 3], 6)); //[ 1, 2, 3 ]
console.log(returnLastN([1, 2, 3, 4, 5, 6, 7, 8], 3)); //[ 6, 7, 8 ]
console.log("");



//28.uzdevums
//Write a function that takes an array (a) and a value (b) as argument
//The function should clean a from all occurrences of b


function returnFiltered(a: any[], b: any): any[] {
    return a.filter(item => item !== b);
}


console.log(returnFiltered([1,2,3], 2)); // [ 1, 3 ]
console.log(returnFiltered([1,2,'2'], '2')); // [ 1, 2 ]
console.log(returnFiltered([false,'2',1], false)); // [ '2', 1 ]
console.log(returnFiltered([1,2,'2',1], 1)); // [ 2, '2' ]
console.log("");




//29.uzdevums
//Write a function that takes an array (a) as argument
//Return the number of elements in a


function countElements(a: number[]): number {
    return a.length
}


console.log(countElements([1,2,2,4])); //4
console.log(countElements([9,9,9])); //0
console.log(countElements([4,3,2,1,0])); //1
console.log('')



//30.uzdevums
//Write a function that takes an array of numbers as argument
//Return the number of negative values in the array

function countNegative(a: number[]): number {
    let count = 0;
    for (const num of a) {
        if (num < 0) {
            count++;
        }
    }
    return count;

}


console.log(countNegative([1,-2,2,-4])); //2
console.log(countNegative([0,9,1])); //0
console.log(countNegative([4,-3,2,1,0])); //1
console.log("");



//31.uzdevums
//Write a function that takes an array of numbers as argument
//It should return an array with the numbers sorted in descending order


function sortRevers(sortNum: number[]): number[] {
    return sortNum.sort((a, b) => b - a);
}


console.log(sortRevers([1,3,2])); // [ 3, 2, 1 ]
console.log(sortRevers([4,2,3,1])); // [ 4, 3, 2, 1 ]
console.log("");



//32.uzdevums
//Write a function that takes an array of strings as argument
//Sort the array elements alphabetically


function sortAlfabet(a: string[]): string[] {
    return a.sort();
}


console.log(sortAlfabet(['b', 'c', 'd', 'a'])); // [ 'a', 'b', 'c', 'd' ]
console.log(sortAlfabet(['z', 'c', 'd', 'a', 'y', 'a', 'w'])); // [ 'a', 'a', 'c','d', 'w', 'y','z']
console.log("");


//33.uzdevums
//Write a function that takes an array of numbers as argument
//It should return the average of the numbers

function sumNum(arr: number[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum / arr.length;
}


console.log(sumNum([10,100,40])); // 50
console.log(sumNum([10,100,1000])); // 370
console.log(sumNum([-50,0,50,200])); // 50
console.log("");


//34.uzdevums
//Write a function that takes an array of strings as argument
//Return the longest string

function longestString(a: string[]): string {
    let longest = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i].length > longest.length) {
            longest = a[i];
        }
    }

    return longest;
}


console.log(longestString(['help', 'me'])); // 50
console.log(longestString(['I', 'need', 'candy'])); // 370
console.log("");


//35.uzdevums
//Write a function that takes an array as argument
//It should return true if all elements in the array are equal
//It should return false otherwise


function equelElements(a: any[]): boolean {
    if (a.length === 0) {
        return true; 
    }

    const firstElement = a[0];
    return a.every(element => element === firstElement);
}


console.log(equelElements([true, true, true, true])); // true
console.log(equelElements(['test', 'test', 'test'])); // true
console.log(equelElements([1,1,1,2])); // false
console.log(equelElements(['10',10,10,10])); // false
console.log("");



//36.uzdevums
//Write a function that takes arguments an arbitrary number of arrays
//It should return an array containing the values of all arrays


function combineArrays(...a: any[][]): any[] {
    return a.flat();
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(combineArrays(['a', 'b', 'c'], [4, 5, 6])); // [ 'a', 'b', 'c', 4, 5, 6 ]
console.log(combineArrays([true, true], [1, 2], ['a', 'b'])); // [ true, true, 1, 2, 'a', 'b' ]
console.log("");


//37.uzdevums 
//Write a function that takes an array of objects as argument
//Sort the array by property b in ascending order
//Return the sorted array


function sortArrayOfObjects(arr: { a: number; b: number }[]): { a: number; b: number }[] {
    return arr.sort((obj1, obj2) => obj1.b - obj2.b);
}


console.log(sortArrayOfObjects([{a:1,b:2},{a:5,b:4}])); //[ { a: 1, b: 2 }, { a: 5, b: 4 } ]
console.log(sortArrayOfObjects([{a:2,b:10},{a:5,b:4}])); //[ { a: 5, b: 4 }, { a: 2, b: 10 } ]
console.log(sortArrayOfObjects([{a:1,b:7},{a:2,b:1}])); //[ { a: 2, b: 1 }, { a: 1, b: 7 } ]
console.log("");


//38.uzdevums
//Write a function that takes two arrays as arguments
//Merge both arrays and remove duplicate values
//Sort the merge result in ascending order


function mergeAndSortArrays(a1: number[], a2: number[]): number[] {
    const mergedArray = [...new Set([...a1, ...a2])];
    return mergedArray.sort((a, b) => a - b);
}


console.log(mergeAndSortArrays([1, 2, 3], [3, 4, 5]));
console.log(mergeAndSortArrays([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
console.log("");



//39.uzdevums
//Write a function that takes an array (a) and a number (b) as arguments
//Sum up all array elements with a value greater than b
//Return the sum


function sumElements(arr: number[], b: number): number {
    let sum = 0;
    for (const num of arr) {
        if (num > b) {
            sum += num;
        }
    }
    return sum;
}


console.log(sumElements([1, 2, 3, 4, 5, 6, 7], 2)); //25
console.log(sumElements([-10, -11, -3, 1, -4], -3)); //1
console.log(sumElements([78, 99, 100, 101, 401], 99)); //602
console.log("");




//40.uzdevums
//Write a function that takes two numbers (min and max) as arguments
//Return an array of numbers in the range min to max


function generateNum(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}


console.log(generateNum(2, 10)); //[2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(generateNum(1, 3)); //[1, 2, 3]
console.log(generateNum(-5, 5)); //[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(generateNum(2, 7)); //[2, 3, 4, 5, 6, 7]
console.log("");



//41.uzdevums
//Group those strings by their first letter
//Return an object that contains properties with keys representing first letters
//The values should be arrays of strings containing only the corresponding strings



function groupFirstLetter(arr: string[]): { [key: string]: string[] } {
    return arr.reduce((grouped: { [key: string]: string[] }, str) => {
        const firstLetter = str[0].toLowerCase();
        grouped[firstLetter] = (grouped[firstLetter] || []).concat(str);
        return grouped;
    }, {});
}


console.log(groupFirstLetter(['Ant', 'Bear', 'Bird'])); //{ a: [ 'Ant' ], b: [ 'Bear', 'Bird' ] }
console.log(groupFirstLetter(['Alf', 'Alice', 'Ben'])); //{ a: [ 'Alf', 'Alice' ], b: [ 'Ben' ] }
console.log(groupFirstLetter(['Berlin', 'Paris', 'Prague'])); // { b: [ 'Berlin' ], p: [ 'Paris', 'Prague' ] }
console.log("");



//42.uzdevums
//Write a function that takes an array with arbitrary elements and a number as arguments
//Return a new array, the first element should be either the given number itself
//or zero if the number is smaller than 6
//The other elements should be the elements of the original array


function modifyArray(arr: any[], num: number): any[] {
    return num < 6 ? [0, ...arr] : [num, ...arr];
}


console.log(modifyArray([1, 2, 3], 6)); // [ 6, 1, 2, 3 ]
console.log(modifyArray(['a', 'b'], 2)); // [ 0, 'a', 'b' ]
console.log(modifyArray([null, false], 11)); // [ 11, null, false ]
console.log("");




//43.uzdevums
//Write a function that takes an array (a) and a value (n) as arguments
//Save every nth element in a new array
//Return the new array


function nthElments(arr: any[], n: number): any[] {
    const result = [];
    for (let i = n - 1; i < arr.length; i += n) {
        result.push(arr[i]);
    }
    return result;
}

console.log(nthElments([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(nthElments(['a', 'b', 'c', 'd', 'e'], 2));
console.log(nthElments([10, 20, 30, 40, 50], 1));
console.log("");


//44.uzdevums
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key country


function getCountry(object: { continent: string; country: string }): string {
    return object.country;
}

console.log(getCountry({continent: 'Asia',  country: 'Japan'})); //Japan
console.log(getCountry({country: 'Sweden',  continent: 'Europe'})); //Sweden
console.log("");



//45.uzdevums
//Write a function that takes an object with two properties as argument
//It should return the value of the property with key 'prop-2'



function valueProp2(object: { [key: string]: any }): any {
    return object['prop-2'];
}


console.log(valueProp2({one: 1,  'prop-2': 2})); //2
console.log(valueProp2({'prop-2': 'two',  prop: 'test'})); //two
console.log("");



//46.uzdevums
//Write a function that takes an object with two properties and a string as arguments
//It should return the value of the property with key equal to the value of the string


function keyValue(obj: { [key: string]: any }, key: string): any {
    return obj[key];
}


console.log(keyValue({  continent: 'Asia',  country: 'Japan'}, 'continent')); // Asian
console.log(keyValue({  country: 'Sweden',  continent: 'Europe'}, 'country')); // Sweden
console.log("");


//47.uzdevums
//Write a function that takes an object (a) and a string (b) as argument
//Return true if a has a property with key b


function inFunction(object: { [key: string]: any }, key: string): boolean {
    return key in object;
}

console.log(inFunction({a:1,b:2,c:3},'b')); //true
console.log(inFunction({x:'a',y:'b',z:'c'},'a')); //false
console.log(inFunction({x:'a',y:'b',z:'c'},'z')); //true
console.log("");


//48.uzdevums
//Write a function that a string (a) as argument
//Create an object that has a property with key 'key' and a value of a
//Return the object


function createKey(str: string): { key: string } {
    return { key: str };
}

console.log(createKey('a')); //a
console.log(createKey('z')); //z
console.log(createKey('b')); //b
console.log("");


//49.uzdevums
//Write a function that takes two strings (a and b) as arguments
//Create an object that has a property with key 'a' and a value of 'b'
//Return the object


function createObject(a: string, b: string): { [key: string]: string } {
    const result = {} as { [key: string]: string };
    result[a] = b;
    return result;
}

console.log(createObject('a','b')); //{ a: 'b' }
console.log(createObject('z','x')); //{ z: 'x' }
console.log(createObject('b','w')); //{ b: 'w' }
console.log("");




//50.uzdevums
//Write a function that takes two arrays (a and b) as arguments
//Create an object that has properties with keys 'a' and corresponding values 'b'
//Return the object


function createObjectFor(a: any[], b: any[]): { [key: string]: any } {
    const result = {} as { [key: string]: any };

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        result[a[i]] = b[i];
    }

    return result;
}


console.log(createObjectFor(['a','b','c'],[1,2,3])); //{ a: 1, b: 2, c: 3 }
console.log(createObjectFor(['w','x','y','z'],[10,9,5,2]));//{ w: 10, x: 9, y: 5, z: 2 }
console.log(createObjectFor([1,'b'],['a',2]));//{ '1': 'a', b: 2 }
console.log("");




//51.uzdevums
//Write a function that takes an object (a) as argument
//Return an array with all object keys

function getObjectKeys(obj: { [key: string]: any }): string[] {
    return Object.keys(obj);
}


console.log(getObjectKeys({a:1,b:2,c:3})); //[ 'a', 'b', 'c' ]
console.log(getObjectKeys({j:9,i:2,x:3,z:4})); //[ 'j', 'i', 'x', 'z' ]
console.log(getObjectKeys({w:15,x:22,y:13})); //[ 'w', 'x', 'y' ]
console.log("");


//52.uzdevums
//Write a function that takes an object (a) as argument
//Return the sum of all object values


function sumObjects(obj: { [key: string]: number }): number {
    let sum = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += obj[key];
        }
    }
    return sum;
}


console.log(sumObjects({a:1,b:2,c:3})); //6
console.log(sumObjects({j:9,i:2,x:3,z:4})); //18
console.log(sumObjects({w:15,x:22,y:13})); //50
console.log("");


//53.uzdevums
//Write a function that takes an object as argument
//It should return an object with all original object properties
//except for the property with key 'b'


function removeObject(obj: { [key: string]: any }): { [key: string]: any } {
    const result = { ...obj }; 
    delete result['b']; 
    return result;
}


console.log(removeObject({ a: 1, b: 7, c: 3 })); //{ a: 1, c: 3 }
console.log(removeObject({ b: 0, a: 7, d: 8 })); //{ a: 7, d: 8 }
console.log(removeObject({ e: 6, f: 4, b: 5, a: 3 })); //{ e: 6, f: 4, a: 3 }
console.log("");



//54.uzdevums
//Write a function that takes two objects as arguments
//Unfortunately, the property 'b' in the second object has the wrong key
//should be named 'd' instead
//Merge both objects and correct the wrong property name
//Return the resulting object


function mergeObjects(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any } {
    const result = { ...obj1, ...obj2 }; // Merge the objects

    if ('b' in result) {
        result['d'] = result['b']; // Rename 'b' to 'd'
        delete result['b']; // Delete the original 'b'
    }

    return result;
}


console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); //{ a: 1, c: 3, e: 5, d: 4 }
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); //{ a: 5, c: 3, e: 2, d: 1 }
console.log("");


//55.uzdevums
//Write a function that takes an object (a) and a number (b) as arguments
//Multiply all values of 'a' by 'b'
//Return the resulting object


function multiplyObjects(obj: { [key: string]: number }, multiplier: number): { [key: string]: number } {
    const result: { [key: string]: number } = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key] * multiplier;
        }
    }

    return result;
}


console.log(multiplyObjects({a:1,b:2,c:3},3)); //{ a: 3, b: 6, c: 9 }
console.log(multiplyObjects({j:9,i:2,x:3,z:4},10)); //{ j: 90, i: 20, x: 30, z: 40 }
console.log(multiplyObjects({w:15,x:22,y:13},6)); //{ w: 90, x: 132, y: 78 }
console.log("");


//56.uzdevums
//Write a function that takes an object as argument
//Somehow, the properties and keys of the object got mixed up
//Swap the Javascript object's key with its values and return the resulting object


function swapKeys(obj: { [key: string]: any }): { [key: string]: any } {
    const result: { [key: string]: any } = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[obj[key]] = key;
        }
    }

    return result;
}


console.log(swapKeys({z:'a',y:'b',x:'c',w:'d'})); //{ a: 'z', b: 'y', c: 'x', d: 'w' }
console.log(swapKeys({2:'a',4:'b',6:'c',8:'d'})); //{ a: '2', b: '4', c: '6', d: '8' }
console.log(swapKeys({a:1,z:24})); //{ '1': 'a', '24': 'z' }
console.log("");



//57.uzdevums
//Write a function that takes an object as argument
//Some of the property values contain empty strings
//Replace empty strings and strings that contain only whitespace with null values

function replaceEmpty(obj: { [key: string]: string }): { [key: string]: string | null } {
    const result: { [key: string]: string | null } = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key].trim();
            result[key] = value === '' ? null : value;
        }
    }

    return result;
}


console.log(replaceEmpty({ a: 'a', b: 'b', c: '' })); //{ a: 'a', b: 'b', c: null }
console.log(replaceEmpty({ a: '', b: 'b', c: ' ', d: 'd' })); //{ a: null, b: 'b', c: null, d: 'd' }
console.log(replaceEmpty({ a: 'a', b: 'b ', c: ' ', d: '' })); //{ a: 'a', b: 'b', c: null, d: null }
console.log("");


//58.uzdevums
//Write a function that takes an object as argument containing properties with personal information
//Extract firstName, lastName, size, and weight if available
//If size or weight is given transform the value to a string
//Attach the unit cm to the size
//Attach the unit kg to the weight
//Return a new object with all available properties that we are interested in


function personalInfotmation(obj: { [key: string]: any }): { [key: string]: any } {
    const result: { [key: string]: any } = {
        fn: obj.fn,
        ln: obj.ln,
    };

    if (typeof obj.size === 'number') {
        result.size = obj.size + 'cm';
    }

    if (typeof obj.weight === 'number') {
        result.weight = obj.weight + 'kg';
    }

    return result;
}


console.log(personalInfotmation({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}));
console.log(personalInfotmation({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}));
console.log(personalInfotmation({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}));
console.log(personalInfotmation({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));
console.log("");




//59.uzdevums
//Write a function that takes an array of objects and a string as arguments
//Add a property with key 'continent' and value equal to the string to each of the objects
//Return the new array of objects



function addContinentToObjects(arr: { [key: string]: any }[], continent: string): { [key: string]: any }[] {
    // Create a new array with the modified objects
    const newArray = arr.map((obj) => ({
        ...obj, // Copy all existing properties from the original object
        continent, // Add the 'continent' property with the provided value
    }));

    return newArray;
}


console.log(addContinentToObjects([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')); //[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinentToObjects([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')); //[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
console.log("");


//60.uzdevums
//Write a function that takes an array of numbers as argument
//Convert the array to an object
//It should have a key for each unique value of the array
//The corresponding object value should be the number of times the key occurs within the array



function arrayCount(arr: number[]): { [key: number]: number } {
    const countObject: { [key: number]: number } = {};

    for (const num of arr) {
        if (countObject[num]) {
            countObject[num]++;
        } else {
            countObject[num] = 1;
        }
    }

    return countObject;
}


console.log(arrayCount([1,2,2,3])); //{ '1': 1, '2': 2, '3': 1 }
console.log(arrayCount([9,9,9,99])); //{ '9': 3, '99': 1 }
console.log(arrayCount([4,3,2,1])); //{ '1': 1, '2': 1, '3': 1, '4': 1 }
console.log('');



//61.uzdevums
//Write a function that takes two date instances as arguments
//It should return true if the dates are equal
//It should return false otherwise


function equalDates(date1: Date, date2: Date): boolean {
    return date1.getTime() === date2.getTime();
}


console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))); //false
console.log(equalDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //true
console.log(equalDates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))); //false
console.log('');


//62.uzdevums
//Write a function that takes two date instances as argument
//It should return the number of days that lies between those dates


function daysBetween(date1: Date, date2: Date): number {
    const timeDifference = date2.getTime() - date1.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.abs(Math.round(daysDifference));
}


console.log(daysBetween(new Date('2020-06-11'), new Date('2020-06-01')));
console.log(daysBetween(new Date('2000-01-01'), new Date('2020-06-01')));
console.log("");



//63.uzdevums
//Write a function that takes two date instances as argument
//It should return true if they fall on the exact same day
//It should return false otherwise


function datesSameDay(date1: Date, date2: Date): boolean {
    return date1.toDateString() === date2.toDateString();
}


console.log(datesSameDay(new Date('2000/01/01'), new Date('2000/01/01'))); //true
console.log(datesSameDay(new Date('2000/01/01'), new Date('2000/01/02'))); //false
console.log(datesSameDay(new Date('2001/01/01'), new Date('2000/01/01'))); //false
console.log(datesSameDay(new Date('2000/11/01'), new Date('2000/01/01'))); //false
console.log("");


//64.uzdevums
//Write a function that takes two number arrays as parameters 
//and return an array which contains elements from both 
//arrays


function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}


console.log(mergeArrays([1, 2], [3, 4])); //[ 1, 2, 3, 4 ]
console.log(mergeArrays([1, 2], [3, 4, 5, 6])); //[ 1, 2, 3, 4, 5, 6 ]
console.log('');


//65.uzdevums
//Write a function that takes an array and a string as parameters 
//and return an array which contains all elements from the given array
//and the given string as the last element


function addString(arr: string[], str: string): string[] {
    return [...arr, str];
}


console.log(addString(['Apple', 'Orange', 'Banana'], 'Kiwi')); //[ 'Apple', 'Orange', 'Banana', 'Kiwi' ]
console.log("");


//66.uzdevums
//Write a function that takes an array and a string as parameters 
//and return an array which contains all elements from the given array
//and the given string as the first element


function addStringFirst(arr: string[], str: string): string[] {
    return [str, ...arr];
}

console.log(addStringFirst(['Apple', 'Orange', 'Banana'], 'Kiwi')); //[ 'Kiwi', 'Apple', 'Orange', 'Banana' ]
console.log('');



//67.uzdevums
//Write a function that takes two objects as parameters 
//and return an object which contains properties from both 
//objects


function bouthObjects(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    return { ...obj1, ...obj2 };
}


console.log(bouthObjects({ a:1, b:2 }, { c:3, d:4 })); //{ a: 1, b: 2, c: 3, d: 4 }
console.log(bouthObjects({ a:1, b:2 }, { c:3, d:4, e:5, f:6 })); // { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
console.log("");



//68.uzdevums
//Write a function that takes an object and a string as parameters 
//and return an object which contains properties from the given object
//and a new property favoriteMovie with the value equal to the given string


function addMovie(obj: Record<string, any>, favoriteMovie: string): Record<string, any> {
    return { ...obj, favoriteMovie };
}


console.log(addMovie({ eyeColor: 'green', age: 10 }, 'Garfield')); //{ eyeColor: 'green', age: 10, favoriteMovie: 'Garfield' }
console.log(addMovie({ eyeColor: 'blue', age: 15 }, 'Twilight')); //{ eyeColor: 'blue', age: 15, favoriteMovie: 'Twilight' }



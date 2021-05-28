
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
   return text.replace("e" , " ");
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text[4]; 
}
const showChar9 = (text) => {
    return text.substr(0, 9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    return typeof text == typeof "";
}

const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(" ").length - 1; 
}
const InverseString = (text) => {
    return text.split("").reverse().join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    for(let i = 0; i < array.length; i++){
        array[i] = absoluteValue(array[i]);
    }
    return array;
}
const circleSurface = (radius) => {
    return Math.round((Math.pow(radius, 2)) * Math.PI);
}
const hypothenuse = (ab, ac) => {
    var abSquared = ab ** 2;
    var acSquared = ac ** 2;
    var sum = abSquared + acSquared;
    var res = Math.sqrt(sum);
    return res;
}
const BMI = (weight, height) => {
    var doubleHeight = Math.pow(height, 2);
    var wholeResult = weight / doubleHeight;
    return wholeResult.toFixed(2) * 1.0;
}

const createLanguagesArray = () => {
    var arr = ["Html", "CSS", "Java", "PHP"];
    return arr;
}

const createNumbersArray = () => {
    var arr = [0, 1, 2, 3, 4, 5];
    return arr;
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push("Ruby", "Python");
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-1);
    numbers.unshift(-2);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;  
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}
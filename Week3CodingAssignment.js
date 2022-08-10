let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);
ages.push(25);
console.log(ages[ages.length - 1] - ages[0]);
let sum1 = 0;
for (age of ages)
{
    sum1 = sum1 + age;
}
const average1 = sum1 / ages.length;
console.log(average1);

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum2 = 0;
for (nameElement of names)
{
    sum2 = sum2 + nameElement.length;
}
const average2 = sum2 / names.length;
console.log(average2);

let concatenation = "";
for (nameElement of names)
{
    concatenation += nameElement + " ";
}
console.log(concatenation);

let nameLengths = [];
for (nameElement in names)
{
    nameLengths.push(nameElement.length);
}

let sum3 = 0;
for (length of nameLengths)
{
    sum3 += length;
}
console.log(sum3);

function concatenateNTimes(word, n)
{
    let concatenation = "";
    for (let i = 0; i < n; i++)
    {
        concatenation += word;
    }

    return concatenation;
}
console.log("This is a test for concatenateNTimes " + concatenateNTimes("apple", 5));

function createFullName(firstName, lastName)
{
    return firstName + " " + lastName;
}
console.log("This is a test for createFullName " + createFullName("Katte", "Noel"));

function isGreaterThan100(arrayOfNumbers)
{
    let sum = arrayOfNumbers.reduce(function(accumulator, currentValue)
    { 
        accumulator + currentValue;
    })

    return (sum > 100);
}

const array = [1, 2, 3];
console.log("This is a test for isGreaterThan100 " + isGreaterThan100(array));

function averageElements(arrayOfNumbers)
{
    return arrayOfNumbers.reduce((a, b) => (a + b)) / arrayOfNumbers.length;
}
const array3 = [3, 2, 3];
console.log("This is a test for averageElements" + averageElements(array3));

function isFirstGreaterThanSecond(arrayOfNumbers1, arrayOfNumbers2)
{
    let sum1 = arrayOfNumbers1.reduce(function(accumulator, currentValue)
    {
        accumulator + currentValue;
    })
    const average1 = sum1 / arrayOfNumbers1.length;

    let sum2 = arrayOfNumbers2.reduce(function(accumulator, currentValue)
    {
        accumulator + currentValue;
    })
    const average2 = sum2 / arrayOfNumbers2.length;

    return (average1 > average2);
}
const array2 = [2, 3, 4];
console.log("This is a test for isFirstGreaterThanSecond " + isFirstGreaterThanSecond(array, array2));

function willBuyDrink(isHotOutside, moneyInPocket)
{
    return (isHotOutside && moneyInPocket > 10.5);
}
console.log("This is a test for willBuyDrink " + willBuyDrink(true, 20));

function shouldPlayAgeOfEmpires2(isBored, hasTime)
{
    return (isBored && hasTime); 
    //this functions tells me if I should play the RTS game, Age of Empires 2: Definitive Edition.
    //the function returns true if I am bored and I have time, telling me I should play the game!
}
console.log("This is a test for shouldPlayAgeOfEmpires2 " + shouldPlayAgeOfEmpires2(true, true));
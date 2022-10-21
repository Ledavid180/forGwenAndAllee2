/*
    Arrays => containers that hold more than one piece of data

    syntax =>
    var arrName = [
        item1,
        item2,
        item3,
        ...,
        itemN
    ]; ****This is an array literal


    Accessing items in an array =>
    items are zero-indexed. We start counting with zero

    Counting item in an array => 
    arrName.length

    Adding an item to an array => 
    arrName.push(item); => adds item to the end of the array
    arrName.unshift(item); => adds item to the beginning of the array

    Removing an item from an array => 
    arrName.pop(); => remove an item from the end of an array
    arrName.shift(); => removes an item from the beginning of an array

    Slice => allows you to return two values =>
    arrName.slice(7, 9);

*/

var arr1 = [1, 2, 3, 8];
console.log(arr1);
console.log(arr1.length) //4

var coders = [
    'Gwen', 'Brison', 'Angela',
    'Rhiannon', 'Sam', 'Kevin',
    'Carlos'
];
console.log(coders); //array of coders

console.log(coders[0]); //Gwen
console.log(coders[3]);

coders.push('Stephen');
console.log(coders);

coders.push('Devonte', 'Precious', 'Titi', 'Adebola', 'Jayson', 'Allee');
console.log(coders);

coders.unshift('Sandra', 'Chloe', 'Ron', 'Kevin Brown', 'Molly', 'Lori', 'Basel', 'Drew', 'Ethan', 'Aquita', 'Keith', 'Dewayne');

console.log(coders);

console.log(coders.length);//26
console.log(coders[coders.length - 1]); //Allee

var lastCoder = coders.pop();
console.log(lastCoder);//Allee
console.log(coders);//array of coders except Allee

console.clear();
var anotherCoder = coders.shift();
console.log(coders);// array of coders except Sandra
console.log(anotherCoder);//Sandra

var anotherArr = (coders.slice(7, 9));
console.log(anotherArr);
console.log(coders);


coders[16] = 'Kevin Barone'; //how to edit
console.log(coders);

console.log(coders.indexOf('Kevin Barone')); //16

//can also add a coder to the end like so
coders[24] = 'Lauren';
console.log(coders);

console.clear();

var sampleArr = [1, 'I', undefined, true, 'like', 12, -14, 'to', null]; //Arrays can have multiple types of data types; maybe not a great practice or may not need this but its good to know you can

//Multi-Dimensional Arrays 
var sampleArr2 = [
    ['Lauren', 29],
    ['Gwen', 35],
    ['Brison', 33],
    ['Steven', 29],
    ['Angela', 35],
    ['Rhiannon', 24], 
    ['Sam', 30],
    ['Kevin', 19],
    ['Carlos', 31], 
    ['Adebola', 26],
    ['Titi', 26], 
    ['Precious', 20], 
    ['Jayson', 29],
    ['Devonte', 23],
    ['Allee', 26]
];

console.log(sampleArr2);
var alleesAge = sampleArr2[sampleArr2.length - 1][1];
console.log(alleesAge); //26

//Create a hero generator. The hero generator will randomly return an adjective, hero and super power.
//Ex: The Amazing Tigerwoman can lift heavy objects with the mind.

//PseudoCode
/*
    Variables
        adjectives
        heroes
        superpowers

        adj
        hero 
        superpower

        message
        idx

    Do Stuff
        SET adjectives TO arr
        SET heroes TO arr
        SET superpowers TO arr
        SET idx TO a num

        SET adj TO adjectives[idx]
        SET hero TO heroes[idx]
        SET superpower to superpowers[idx]

        SET message TO 'The ' adj hero ' can ' superpower.
        RETURN message.

*/

var adjectives = ['Amazing', 'Mighty', 'Brave', 'Cantankerous', 'Wonderous'];
var heroes = ['Butterfly Gal', 'Radioactive Steve', 'Lady Bug', 'Dragonman', 'Milk Man', 'Goofy'];
var superpowers = [
    'blow down buildings with super breath',
    'crawl into tiny spaces',
    'shapeshift',
    'read the minds of ghosts',
    'huff and puff and blow your house down'
];

var idx;
// idx = 3;
idx = Math.floor(Math.random() * 5);
console.log(idx);
//Math.random() returns a random decimal number between 0 - 1 but never 1.
//Math.floor() rounds down to the next whole number

var adjIdx = Math.floor(Math.random() * adjectives.length);
var heroIdx = Math.floor(Math.random() * heroes.length);
var superpowerIdx = Math.floor(Math.random() * superpowers.length);

var adj = adjectives[adjIdx];
var hero = heroes[heroIdx];
var superpower = superpowers[superpowerIdx];

var message = 'The ' + adj + ' ' + hero + ' can ' + superpower + '.';
console.log(message);
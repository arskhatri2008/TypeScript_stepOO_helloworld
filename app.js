var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var message = "Hello World";
console.log(message);
// Question 2
var myName = "Sajjad";
console.log("Hello ".concat(myName, ", would you like to learn some Python today?"));
// Question 3
// Lowercase
var lowercaseName = myName.toLowerCase();
console.log("Lowercase: ".concat(lowercaseName));
// Uppercase
var uppercaseName = myName.toUpperCase();
console.log("Uppercase: ".concat(uppercaseName));
// Titlecase
var titlecaseName = myName.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
});
console.log("Titlecase: ".concat(titlecaseName));
// Question 4:
var quote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
var author = "Winston Churchill";
console.log("\"".concat(quote, "\" - ").concat(author));
// Question 5:
var secondQuote = "Success is not final, failure is not fatal: It is the courage to continue that counts.";
var famous_person = "Winston Churchill";
var secondMessage = "\"".concat(secondQuote, "\" - ").concat(famous_person);
console.log(secondMessage);
//Question 6:
var thirdName = "\t\n\t\t\tJohn Doe\t\t\t\n\t";
console.log("Original name (with whitespace):", thirdName);
var trimmedName = thirdName.trim();
console.log("Trimmed name (without whitespace):", trimmedName);
// Question 7:
// Addition
var additionResult = 4 + 4;
console.log("Addition: ".concat(additionResult));
// Subtraction
var subtractionResult = 12 - 4;
console.log("Subtraction: ".concat(subtractionResult));
// Multiplication
var multiplicationResult = 2 * 4;
console.log("Multiplication: ".concat(multiplicationResult));
// Division
var divisionResult = 32 / 4;
console.log("Division: ".concat(divisionResult));
//Question 8:
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
// Question 10:
var favoriteNumber = 7;
var favouriteMessage = "My favorite number is ".concat(favoriteNumber, ".");
console.log(favouriteMessage);
// Question 11:
//already performing with each question comment part.
// Question 12:
var myNamesList = ["Ali", "Basit", "Kareem", "Dauood"];
for (var i = 0; i < myNamesList.length; i++) {
    console.log(myNamesList[i]);
}
// Question 13:
for (var i = 0; i < myNamesList.length; i++) {
    console.log("Hi ".concat(myNamesList[i], ", I hope you're having a great day!"));
}
// Question 14:
var favoriteTransportation = ["car", "motorcycle", "bicycle", "train"];
for (var i = 0; i < favoriteTransportation.length; i++) {
    console.log("I would like to own a ".concat(favoriteTransportation[i], "."));
}
// Question 15:
var dinnerGuests = ["Ali", "Zain", "Sahab"];
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[i], ", I would be honored if you would join me for dinner."));
}
// Question 16:
// Original guest list
var dinnerGuests1 = ["Albert Einstein", "Jane Austen", "Steve Jobs"];
// New guest
var newGuest = "Marie Curie";
// Remove the guest who can't make it
dinnerGuests1.pop();
// Add the new guest
dinnerGuests1.push(newGuest);
// Print a message to each person, inviting them to dinner
for (var i = 0; i < dinnerGuests1.length; i++) {
    console.log("Dear ".concat(dinnerGuests1[i], ", I would be honored if you would join me for dinner."));
}
// Question 17:
// Original guest list
var dinnerGuests2 = ["Albert Einstein", "Jane Austen", "Steve Jobs"];
// New guest
var newGuest2 = "Marie Curie";
// Print the guest who can't make it
var cancelledGuest = dinnerGuests2.pop();
console.log("Unfortunately, ".concat(cancelledGuest, " can't make it to dinner."));
// Replace the guest who can't make it with the new guest
dinnerGuests.push(newGuest2);
// Print a message to each person, inviting them to dinner
for (var i = 0; i < dinnerGuests2.length; i++) {
    console.log("Dear ".concat(dinnerGuests2[i], ", I would be honored if you would join me for dinner."));
}
// Question 18:
var dinnerGuests3 = ["Albert Einstein", "Jane Austen", "Steve Jobs"];
// Print statement to inform about the bigger dinner table
console.log("Dear Guests, I'm pleased to announce that we have found a bigger dinner table!");
// New guests to be added to the list
var newGuests3 = ["Marie Curie", "Isaac Newton", "Leonardo da Vinci"];
var extraGuest = "Elon Musk";
// Add new guests to the list
dinnerGuests3.unshift(newGuests3[0]); // Add Marie Curie to the beginning of the list
dinnerGuests3.splice(3, 0, newGuests3[1]); // Add Isaac Newton to the middle of the list
dinnerGuests3.push(extraGuest); // Add Elon Musk to the end of the list
// Print invitation messages for each person in the list
for (var i = 0; i < dinnerGuests3.length; i++) {
    console.log("Dear ".concat(dinnerGuests3[i], ", I would be honored if you would join me for dinner."));
}
// Question 19:
var dinnerGuests4 = ["Marie Curie", "Albert Einstein", "Jane Austen", "Isaac Newton", "Steve Jobs", "Elon Musk"];
// Inform guests about the limitation
console.log("Dear Guests, unfortunately, due to unforeseen circumstances, we can only accommodate two guests for dinner.");
// Pop guests from the list until only two names remain
while (dinnerGuests4.length > 2) {
    var removedGuest = dinnerGuests4.pop();
    console.log("Dear ".concat(removedGuest, ", I'm sorry but we can't invite you to dinner."));
}
// Print invitation messages for the two remaining guests
for (var i = 0; i < dinnerGuests4.length; i++) {
    console.log("Dear ".concat(dinnerGuests4[i], ", I would be honored if you would join me for dinner."));
}
// Remove the last two names from the list to make it empty
dinnerGuests4.pop();
dinnerGuests4.pop();
// Print the empty list to verify
console.log(dinnerGuests4);
// Question 20:
var placesToVisit = ["Paris", "New York", "Tokyo", "Sydney", "Rio de Janeiro"];
// Print the array in its original order
console.log("Original order:", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", __spreadArray([], placesToVisit, true).sort());
// Print the array in its original order to show that it hasn't changed
console.log("Original order (unchanged):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
// Print the array in its original order to show that it hasn't changed
console.log("Original order (unchanged):", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", placesToVisit);
// Reverse the order of the list again
placesToVisit.reverse();
// Print the array to show that it's back to its original order
console.log("Original order (reversed back):", placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has changed
console.log("Sorted in alphabetical order:", placesToVisit);
// Sort the array to change it so it's stored in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the array to show that its order has changed
console.log("Sorted in reverse alphabetical order:", placesToVisit);
// Question 21:
var dinnerGuests5 = ["Marie Curie", "Albert Einstein", "Jane Austen", "Isaac Newton", "Steve Jobs", "Elon Musk"];
console.log("Dear Guests, I'm pleased to announce that we have found a bigger dinner table and can accommodate ".concat(dinnerGuests5.length, " guests for dinner!"));
for (var i = 0; i < dinnerGuests5.length; i++) {
    console.log("Dear ".concat(dinnerGuests5[i], ", I would be honored if you would join me for dinner."));
}
// Question 22:
var mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse", "Makalu"];
console.log("Mountains:", mountains);
// Question 23:
var country = {
    name: "Nepal",
    capital: "Kathmandu",
    population: 30000000
};
console.log("Country:", country);
// Question 24:
var rivers = ["Nile", "Amazon", "Yangtze", "Mississippi", "Indus"];
console.log("River at index 5:", rivers[5]); // This is an intentional error as the array has only 5 elements
// Question 25:
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');
console.log("Is car != 'ford'? I predict True.");
console.log(car != 'ford');
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru');
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');
console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');
console.log("Is car < 'ford'? I predict False.");
console.log(car < 'ford');
// Question 26:
// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "Hello";
var string3 = "HELLO";
console.log("Test equality with strings: ", string1 === string2); // False
console.log("Test inequality with strings: ", string1 !== string2); // True
// Tests using the lower case function
console.log("Test lower case function: ", string1.toLowerCase() === string2.toLowerCase()); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 5;
var num2 = 10;
console.log("Test numerical equality: ", num1 === num2); // False
console.log("Test numerical inequality: ", num1 !== num2); // True
console.log("Test greater than: ", num1 > num2); // False
console.log("Test less than: ", num1 < num2); // True
console.log("Test greater than or equal to: ", num1 >= num2); // False
console.log("Test less than or equal to: ", num1 <= num2); // True
// Tests using "and" and "or" operators
var bool1 = true;
var bool2 = false;
console.log("Test 'and' operator: ", bool1 && bool2); // False
console.log("Test 'or' operator: ", bool1 || bool2); // True
// Test whether an item is in an array
var arr = [1, 2, 3, 4, 5];
console.log("Test item in array: ", arr.includes(3)); // True
// Test whether an item is not in an array
console.log("Test item not in array: ", !arr.includes(6)); // True
// Question 27:
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}
else {
    console.log("No points earned.");
}
// Question 28:
var alien_color1 = 'green';
if (alien_color1 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points for shooting the alien.");
}
// Question 29:
var alien_color2 = 'red';
if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
}
else if (alien_color2 === 'yellow') {
    console.log("The player just earned 10 points for shooting the yellow alien.");
}
else if (alien_color2 === 'red') {
    console.log("The player just earned 15 points for shooting the red alien.");
}
else {
    console.log("The player just earned 0 points for shooting an alien of unknown color.");
}
// Question 30:
var age = 50;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 31:
var favorite_fruits = ['banana', 'apple', 'grapes'];
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes('grapes')) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes('kiwi')) {
    console.log("You really like kiwis!");
}
// Question 32:
var usernames = ['admin', 'john', 'jane', 'emma', 'michael'];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
// Question 33:
var usersList = ['admin', 'john', 'jane', 'emma', 'michael'];
if (usersList.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i] === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(usersList[i], ", thank you for logging in again."));
        }
    }
}
// Question 34:
var current_users = ['admin', 'john', 'jane', 'emma', 'michael'];
var new_users1 = ['bob', 'jane', 'john', 'susan', 'alice'];
for (var i = 0; i < new_users1.length; i++) {
    var usernameExists = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users1[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log("The username ".concat(new_users1[i], " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_users1[i], " is available."));
    }
}
// Question 35:
var numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers5.length; i++) {
    var number5 = numbers5[i];
    var ordinal = "";
    if (number5 === 1) {
        ordinal = "st";
    }
    else if (number5 === 2) {
        ordinal = "nd";
    }
    else if (number5 === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(number5).concat(ordinal));
}
// Questions 36:
var favorite_pizzas = ['Pepperoni', 'Hawaiian', 'Vegetarian'];
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log("I like ".concat(favorite_pizzas[i], " pizza."));
}
console.log("I really love pizza!");
// Questions 37:
// Animals
var animals = ['Dog', 'Cat', 'Rabbit'];
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
// Questions 38:
// T-Shirt
function make_shirt(size, message) {
    console.log("The shirt size is ".concat(size, " and the message is \"").concat(message, "\"."));
}
make_shirt('Large', 'I love TypeScript');
make_shirt('Medium', 'I love TypeScript');
make_shirt('Small', 'I love JavaScript');
// Questions 39:
// Cities
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Istanbul', 'Turkey');

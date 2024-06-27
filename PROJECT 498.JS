// Legal field names
var firstName = "Eden";
var lastName = "Levi";
var age = 28;
var _address = "30 Greenfield St";
var $email = "eden.levi_@example.com";

// Illegal field names
var 1stName = "David";  // Starting with a number
var last-Name = "bouker";  // Hyphen is not allowed
var @age = 22;  // Special character @ is not allowed
var first name = "Roger";  // Space is not allowed
var var = "marlima";  // Reserved keyword

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(_address);
console.log($email);
console.log(1stName);  // This will cause an error
console.log(last-Name);  // This will cause an error
console.log(@age);  // This will cause an error
console.log(first name);  // This will cause an error
console.log(var);  // This will cause an error

     
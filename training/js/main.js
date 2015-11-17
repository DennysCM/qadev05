/**
 * Created by dennyschoquecallata on 11/5/2015.
 *
 * First Session
 */


// say hello
var sayHello = function (name, age) {
    if(age > 25)
    {
        console.log(name+" you are old");
    }
    else
    {
        console.log(name+" you are young, you are lucky");
    }
};
sayHello("Dennys", "23");

// average
var getAverage = function(){
    console.log('Arguments: ', arguments);
    if(arguments.length > 0)
    {
        var sum = 0;
        for(var i = 0 ; i < arguments.length ; i++)
        {
            sum = sum + arguments[i];
        }
        return sum/arguments.length;
    }
    return 0;
}
console.log('Average: ', getAverage(5,1,3));


// get full name
var getFullName = function (firstName, lastName)
{
    return firstName + " " + lastName;
}
console.log('Full Name: ', getFullName('Dennys','Choquecallata'));

// variables
var age = 0;
var getAge = function(bornYear)
{
    var age = 2015 - bornYear;
    return age;
}

/**
 * Created by dennyschoquecallata on 11/5/2015.
 *
 * Second Session
 */

//windows object.   Add function
window.method = function (a, b)
{
    return a + " " + b;
}
window.method('uno', 'dos');

// Declare clases
var Person = function(name){
    this.name = name;
    this.run = function(){
        console.log(this.name, ' is running...!!');
    }
};

// Declare using prototype
Person.prototype.cry = function(){
    console.log(this.name, ' is Crying...!!');
}

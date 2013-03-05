// Function Can Be Assigned

var myFunc = function() {
	console.log('function 1');
}

var myFunc2 = myFunc;

myFunc();
myFunc2();


// Combined 
// (Note though, we cannot access myFunc from outside the scope of myFunc itself!) 
var myFunc2 = function myFunc(){
	console.log('function 1 assigned to function 2');
}
myFunc2();

// Functions passed as a variable

var myFunc = function(){
	console.log('functions passed as a variable');
}

console.log(myFunc);

// Declared Inline

console.log(function(){
	console.log('functions declared inline');
});
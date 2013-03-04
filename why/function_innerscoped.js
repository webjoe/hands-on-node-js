// Inner Scoped Function Call

function myFunction(){
	console.log('myfunction');
}

(function(){
	myFunction();
})();
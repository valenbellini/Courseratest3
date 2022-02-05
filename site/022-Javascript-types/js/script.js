var message = "in global";
console.log("global message = " + message);

function c(){
	console.log("c: message = " + message);

var a = function (){
	var message = "inside a";
	console.log("a: message = " + message);
	
	function b(){
	console.log("b: message = " + message);
	}
	b();
	c();
}
a();
}

console.log("Ha");
function test1(a){
	console.log(a/2);
}
test1(6);

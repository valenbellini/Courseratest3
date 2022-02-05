// Function constructors
function Circle (radius) {
  this.radius = radius;
}

Circle.prototype.getArea =
  function (){
    return Math.PI * Math.pow(this.radius,2);
  };

var myCircle = new Circle(10);
console.log("Area of first circle is: " + myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);

var anotherCircle = new Circle (15);
console.log(anotherCircle);
console.log(anotherCircle.getArea());



// Object literal and "this"

var literalCircle = { // new Object ()
  radius: 10,

  getArea: function (){
    var self = this;
    console.log(this);

    var increaseRadius = function (){
      self.radius = 20;
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius,2);
  }
};

console.log(literalCircle.getArea());
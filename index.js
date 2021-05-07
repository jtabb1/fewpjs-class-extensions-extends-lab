// Your code here

class Polygon{
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce( (a,b)=>a+b );
    }
}

class Triangle extends Polygon {
    get isValid() {
        let predicate = (this.sides.length) === 3 && (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[0] + this.sides[2] > this.sides[1]) && (this.sides[2] + this.sides[1] > this.sides[0]);
        if (predicate) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0] * this.sides[0];
    }

    get isValid() {
        let predicate = (this.sides.length) === 4 && (this.sides[0] === this.sides[1]) && (this.sides[1] === this.sides[2]) && (this.sides[2] === this.sides[3]) && (this.sides[0] === this.sides[3]);
        if (predicate) {
            return true;
        } else {
            return false;
        }
    }
}

// p = new Polygon([1,2,3]);
// t = new Triangle([4,5,6]);
// console.log(p);
// console.log(t);
// console.log(t.sides.length);
s = new Square([2,2,2,2]);
console.log(s.area);
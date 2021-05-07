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
        let predicate = (this.countSides === 3) && 
            (this.sides[0] + this.sides[1] > this.sides[2]) && 
            (this.sides[0] + this.sides[2] > this.sides[1]) && 
            (this.sides[2] + this.sides[1] > this.sides[0]);
        return predicate ? true : false;
    }
}

class Square extends Polygon {
    get area() {
        return this.sides[0] * this.sides[0];
    }

    get isValid() {
        let predicate = (this.countSides === 4) && 
            (this.sides[0] === this.sides[1]) && 
            (this.sides[1] === this.sides[2]) && 
            (this.sides[2] === this.sides[3]) && 
            (this.sides[0] === this.sides[3]);
        return predicate ? true : false;
    }
}

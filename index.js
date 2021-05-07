// Your code here

class Polygon{
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        if (!Array.isArray(this.sides)) return;
        return this.sides.length;
    }

    get perimeter() {
        if (!Array.isArray(this.sides)) return;
        return this.sides.reduce( (a,b)=>a+b );
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (!Array.isArray(this.sides)) return false;
        if (this.countSides !== 3) return false;
        return (this.sides[0] + this.sides[1] > this.sides[2]) && 
            (this.sides[0] + this.sides[2] > this.sides[1]) && 
            (this.sides[2] + this.sides[1] > this.sides[0]);
    }
}

class Square extends Polygon {
    get area() {
        if (!Array.isArray(this.sides)) return;
        if (this.countSides !== 4) return;
        return this.sides[0] * this.sides[0];
    }

    get isValid() {
        if (!Array.isArray(this.sides)) return false;
        if (this.countSides !== 4) return false;
        return (this.sides[0] === this.sides[1]) && 
            (this.sides[1] === this.sides[2]) && 
            (this.sides[2] === this.sides[3]);
    }
}

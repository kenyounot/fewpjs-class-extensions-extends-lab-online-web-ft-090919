// Your code here

class Polygon {
    constructor(params) {
        this.sideLengths = params;
    }

    get countSides() {
        return this.sideLengths.length;
    }

    get perimeter() {
        let perimeter = 0;
        for(const side of this.sideLengths) {
            perimeter += side;
        }
        return perimeter;
    }
}


class Triangle extends Polygon {
    get isValid() {
        let [a,b,c] = this.sideLengths;

        if(a+b <= c || a+c <= b || c+b <= a) {
            return false;
        }else {
            return true;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let [a,b,c,d] = this.sideLengths;

        if(a === b && b === c && c === d) {
            return true;
        } else {
            return false
        }
    }

    get area() {
        let [a,b] =  this.sideLengths;

        return a*b;
    }
}
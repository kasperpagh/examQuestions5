/**
 * Created by kaspe on 2016-11-01.
 */


class Shape {
    constructor(color)
    {
        this._color = color;
    }

    getArea()
    {
        return undefined;
    }

    getPerimeter()
    {
        return undefined;
    }

    toString()
    {
        return `this shape is of the color ${this._color}, it has an undefined area and perimeter!!`;
    }

    getColor()
    {
        return this._color;
    }

    setColor(color)
    {
        this._color = color;
    }
}

class Circle extends Shape
{

    constructor(radius, color)
    {
        super(color);
        this._radius = radius;

    }

    getArea()
    {
        return undefined;
    }

    getPerimeter()
    {
        return undefined;
    }

    toString()
    {
        return `this circle is of the color ${this._color}, a radius of ${this._radius}. It has an undefined area and perimeter!!`;
    }

    getRadius()
    {
        return this._radius;
    }

    setRaduis(radius)
    {
        this._radius = radius;
    }

}

jimbo = new Circle(42, "red");

console.log(jimbo.getColor());
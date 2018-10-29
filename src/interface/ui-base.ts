/**
 * Represents a relative alignment.
 */
export enum Alignment {
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4,
    None = 0
}; // bitmask position

export interface IRect {
    x : number;
    y : number;
    width : number;
    height : number;
    right? : number;
    bottom? : number;
};

// Represents a rectangular area
export class Rect implements IRect {
    public x : number = 0;
    public y : number = 0;
    public width : number = 0;
    public height : number = 0;

    constructor(x? : number, y? : number, width? : number, height? : number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // Returns true if the rectangle contains (x,y)
    public contains(x: number, y: number) : boolean {
        return ( (x > this.x && x <= this.x + this.width) && 
                 (y >= this.y && y <= this.y + this.height));
    }
}
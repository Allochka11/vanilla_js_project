import './01';
import {mult, sum} from "./01";

let a: number;
let b: number;
let c: number;
beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test('should be correct sum', () => {
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
});

test('should be correct mult', () => {
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
});
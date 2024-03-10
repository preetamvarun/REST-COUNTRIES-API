import { sum } from "../src/sum";

test('should test the sum function', () => { 
    const result = sum(4,4);
    //Assertion
    expect(result).toBe(8);
 })
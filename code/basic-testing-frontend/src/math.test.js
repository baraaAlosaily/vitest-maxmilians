import {expect,it, should} from 'vitest'
import {add} from './math'

it("summarize all numbers that entered",()=>{
    //Arrange
    const numbers=[1,2];

    //Act
    const result=add(numbers);

    //Assert
    const expectedResult=numbers.reduce((preValue,curValue)=>preValue+curValue,0)
    expect(result).toBe(expectedResult)
})

it("should yield NaN if a least one invalid number is provided",()=>{
    const inputs=['inavlid',1];

    const results=add(inputs);

    expect(results).toBeNaN();
})

it("should yield a correct sum if an array of numeric string values is provided",()=>{
    //Arrange
    const numbers=[1,2];

    //Act
    const result=add(numbers);

    //Assert
    const expectedResult=numbers.reduce((preValue,curValue)=>+preValue+ +curValue,0)
    expect(result).toBe(expectedResult)
})

it("should yield 0 if an empty array is provided",()=>{
    //Arrange
    const numbers=[];

    //Act
    const result=add(numbers);

    //Assert
    const expectedResult=numbers.reduce((preValue,curValue)=>+preValue+ +curValue,0)
    expect(result).toBe(expectedResult)
})


it("should throw an error if no value",()=>{
    const resultFn=()=>{
        add();
    }
    expect(resultFn).toThrow();
})

it("should throw an error if provided with multiple arguments instead of an array",()=>{
    const num1=1;
    const num2=2;
    const resultFn=()=>{
        add(num1,num2);
    }
    expect(resultFn).toThrow(/numbers is not iterable/);
})
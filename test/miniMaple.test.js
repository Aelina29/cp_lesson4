import {MiniMaple} from "../src/miniMaple";
import {diff} from "../src/miniMaple";
import {simple_diff} from "../src/miniMaple";
import {split} from "../src/miniMaple";
import expect from "expect";




//!!!!!
//низя x*y
//зя x+y


test('1', () => {
    expect(diff("4*x^3", "x")).toEqual("12*x^2");
    //expect(split("4*x^3+3")).toEqual("4*x^3+3");
    //diff("4*x^3", "x");
    //split("4*x^3+3");
    //split("43+3-39-6+63");
});

test('2', () => {
    expect(diff("4*x^3", "y")).toEqual("0");
});

test('3', () => {
    expect(diff("4*x^3-x^2", "x")).toEqual("12*x^2-2*x");
});
//============================================================================
test('4', () => {
    expect(diff("4*x", "x")).toEqual("4");
});

test('5', () => {
    expect(diff("4*x", "y")).toEqual("0");
});

test('6', () => {
    expect(diff("4*x^3-x^2-8*x^6", "x")).toEqual("12*x^2-2*x-48*x^5");
});

test('7', () => {
    expect(diff("4*x^3+x^2+8*x^6", "x")).toEqual("12*x^2+2*x+48*x^5");
});

test('8', () => {
    expect(diff("4*x^3-x^2+8*x^6", "x")).toEqual("12*x^2-2*x+48*x^5");
});

test('12', () => {
    expect(diff("y", "y")).toEqual("1");
});

test('13', () => {
    expect(diff("45", "y")).toEqual("0");
});

test('14', () => {
    expect(diff("45+98", "y")).toEqual("0");
});

test('15', () => {
    expect(diff("45*x+98", "y")).toEqual("0");
});

test('16', () => {
    expect(diff("-4*x^3", "x")).toEqual("-12*x^2");
});

test('17', () => {
    expect(diff("-4*x^3+2*x", "x")).toEqual("-12*x^2+2");
});


test('18', () => {
    expect(diff("-4*x", "x")).toEqual("-4");
});


test('19', () => {
    expect(diff("-4", "x")).toEqual("0");
});
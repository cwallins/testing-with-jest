const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

// Skapa eget unit test
// Gjort under labbtillfälle med Johan Holmberg, Emil & Mesam.
// Våra lösningar kommer därmed vara väldigt lika. 

test('pop on stack with two or more element that is being removed', () => {
    const actual = "Hej" // Konstant 
    stack.push(actual)   // Lägg till konstanten på stacken 
    expect(stack.peek()).toBe(actual); // Ser så översta elementet är konstanten
    expect(stack.pop()).toBe(actual);  // Ta väck konstanten som är överst om den är "actual"
    expect(stack.peek()).not.toBe(actual) // Se så att det som blir returnerat inte är konstanten
});
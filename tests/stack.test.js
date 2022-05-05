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

// Skapa eget test 
test('pop on stack with two or more element that is being removed', () => {
    const actual = "Hej"
    stack.push(actual)
    expect(stack.peek()).toBe(actual);
    expect(stack.pop()).toBe(actual);
    expect(stack.peek()).not.toBe(actual)
});
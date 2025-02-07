# TypeScript: Missing Property in Object Argument

This repository demonstrates a common yet subtle bug in TypeScript: the lack of compile-time errors when providing an object to a function that expects certain properties, but the provided object is missing those properties.  This leads to runtime errors.

## The Bug

The `bug.ts` file contains a function `printCoord` that expects an object with `x` and `y` properties. However, if you call `printCoord` with an object missing either `x` or `y`, TypeScript will not throw a compile-time error, yet it will produce a runtime error.

## The Solution

The `bugSolution.ts` file demonstrates several ways to resolve this:

1. **Using optional properties (?):**  Make the properties optional using the `?` symbol. This allows for objects to be passed without these properties but will cause undefined behavior if accessed.
2. **Using type guards:** We can utilize type narrowing through type guards to improve type safety when dealing with optional properties.
3. **Using `Partial<T>`:**  Use the `Partial<T>` utility type to make all properties optional.

This example highlights the importance of careful type checking and validation in TypeScript to prevent runtime errors.
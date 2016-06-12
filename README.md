# Is It Set

A one-liner to check if a property is set (not `null`, `undefined` or an empty 
string).

## Installation

Run the following command to make this package available in your project:

```
npm install is-it-set --save
```

## Usage

Import this package into your script like this:

```js
const isSet = require('is-it-set');
```

Now you can run `isSet` on any input:

```js
/*
 * Empty strings, `null` and `undefined` all return `false`
 */
isSet('')        // => false
isSet(null)      // => false
isSet(undefined) // => false

/*
 * Any other input returns `true`
 */
isSet(0)         // => true
isSet(-1)        // => true
isSet(' ')       // => true
isSet(false)     // => true
isSet('Hello')   // => true
isSet(Infinity)  // => true
isSet(Date)      // => true
```

## Why does this package exist?

JavaScript [has some opinions](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) 
on what should be considered falsy, and that's great for developer convenience
when dealing with variable data. 

However, sometimes the only values that should not pass a test (like an `if()`) 
should be data types that purposefully mean "no data" -- `null`, `undefined` and
the empty string (`''`). Empty strings are often used as a no-data indicator in
JSON documents.

### A Simple Example

```js
function squareNumber(input) {
  /**
   * A simple check to make sure there's data to work with
   */
  if (isSet(input)) {
    return input * input;	  
  } else {
    throw new ReferenceError('No input given');
  }
}
```

## Versioning

This repo follows SemVer

## Tests

To run the tests for this package, clone the repo and run the following in your
terminal:

```
npm install
npm test
```
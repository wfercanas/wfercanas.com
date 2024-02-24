When working with JavaScript, two concepts will come your way sooner or later: transpile and polyfill. This article is about placing those two concepts in context, why do they exist and how they operate.

There are three pieces in the puzzle that explain why we have to deal with transpilation and creation of polyfills. Let's see each one of them.

## Puzzle pieces

### JavaScript releases

**JavaScript is a language that is improving regularly**. This process is handled by [ECMA International](https://ecma-international.org/), an organization dedicated to standardization of information and communication systems and who has the responsibility of controlling the future of ECMAScript --or JavaScript as we know it--.

If we look at the language history, we can see a series of new releases through the years. Just looking at the years where ECMA is the releaser we have multiple [editions](https://ecma-international.org/publications-and-standards/standards/ecma-262/):

<figure>
  <img src="https://res.cloudinary.com/wfercanas/image/upload/v1707854993/wfercanas.com/articles/240217/js-versions.png" alt="Timeline with ecmascript editions">
  <figcaption>Timeline with ECMAScript editions</figcaption>
</figure>

These variations to the language specification constitute the first piece of the puzzle.

### The promise

These releases embody a fundamental promise, one that will define what we can expect from any change that is accepted as valid JavaScript in any release: **no change in the language will be accepted if that change deprecates or makes invalid a part of the language that once was valid JavaScript.**

This is known as backwards compatibility and to make a promise like this is not a small thing. If we, today, decide to write JavaScript as we used to when we were working with the 1st Edition of the ECMA specification, that JavaScript is still valid today. There may be very very special situations in which some features of the language are not valid today, but that is also noted in the specification and apply for long studied corner cases.

This promise is the second piece of the puzzle.

### The environment isn't yours

JavaScript's destiny is connected to the Web's destiny. They are intertwined and will continue like that for many years to come. That connection materializes through browsers.

Browsers are our doors to the Web and are software that we as developers or software companies can't control. They are variables given to us and we must learn to deal with them on a daily basis.

There are just a bunch of companies that develop the browsers we use, and each one has their own roadmap about how to make their products evolve over time. In that roadmap is included how the browser will conform to the JavaScript specification --e.g. how to implement what is necessary in the browser to support JavaScript--.

Since a huge part of the code we write in JavaScript will end up running in a browser we don't own, we end up with a major challenge to solve. **How to make our code run properly in those foreign environments**.

This is the third piece of the puzzle.

## A Browser trapped in time

Let's use the pieces to see the whole picture. Let's say that we have installed in our computer a browser and that we haven't update it since the day we installed it.

If that installation happened in 2013, our browser will look like this in our timeline:

<figure>
  <img src="https://res.cloudinary.com/wfercanas/image/upload/v1707857022/wfercanas.com/articles/240217/browser.png" alt="browser in timeline">
  <figcaption>Browser installed in 2013</figcaption>
</figure>

### Backwards compatibility

As stated before, if all the JavaScript code that our good old browser tries to run was created following the standards prior to 2013, we will have no problem at all.

The promise piece assures us that all JavaScript code that was valid, remains valid over time. So, if our browser supports the standard version 5.1, we can implement all our features with JavaScript in that version or prior and everything should be ok.

### Forwards compatibility

Here is where issues appear. The promise doesn't cover the future. In our example, the promise doesn't cover our good old browser from having problems trying to execute JavaScript code that is valid in 2015, 2016, etc. --those standards are the future related to our 2013 browser--.

We can form two groups of problems when attempting to run that code in our browser: syntax problems and API problems.

### Syntax problems

You will find in the JavaScript jargon the expression: ES6. That expression is related to the 6th edition of the ECMAScript standard, the one you can see in 2015 in out timeline graph.

That version of the specification released multiple new features, one of them being the famous **arrow functions**.

```js
// Declaring functions prior ES6
function helloWorld() {}

// Assigning functions prior ES6
var helloWorld = function () {};

// Assigning an arrow function (ES6)
const helloWorld = () => {};

// This is an arrow function
() => {};
```

If we try to use our helloWorld arrow function in the 2013 browser we will get a syntax error. When the browser is trying to execute our code, the expression of the function is something the browser cannot recognize, so it doesn't know what to do with it.

For now, let's just include in our diagram this situation before explaining how to deal with it.

<figure>
  <img src="https://res.cloudinary.com/wfercanas/image/upload/v1707859530/wfercanas.com/articles/240217/syntax.png" alt="Syntax error">
  <figcaption>SyntaxError for using Arrow Functions (ES6)</figcaption>
</figure>

### API problems

These problems happen not because the browser doesn't understand the code, the syntax is correct. They happen because we're trying to use functionality that the environment doesn't support.

Methods like _document.getElementById()_ or functions like _setTimeout()_ need to be part of the environment in which you are running your code. If those functionalities are not present, trying to run them will break the program.

For the upcoming 2024 ES release, a new method will be published for the Object class: _Object.groupBy()_. This method will allow you to pass an iterable, iterate over all its items and form groups with them. You can get a list of numbers and group the odd ones and the even ones, get a list of letters and group the vowels and the consonants or get the list of products in your ecommerce and group the references of shirts, shoes, trousers, and joggers.

If we try to group words by length, and use the _Object.groupBy()_ method in an environment that supports the method, we will get something like this:

```js
const words = [
  "hello",
  "sun",
  "flow",
  "ant",
  "mic",
  "fever",
  "mega",
  "looks",
  "finds",
  "reads",
  "init",
  "mark",
  "december",
];

console.log(Object.groupBy(words, (item) => item.length));
```

```bash
[Object: null prototype] {
  '3': [ 'sun', 'ant', 'mic' ],
  '4': [ 'flow', 'mega', 'init', 'mark' ],
  '5': [ 'hello', 'fever', 'looks', 'finds', 'reads' ],
  '8': [ 'december' ]
}
```

If we try to run the same code in an environment that doesn't support the method (like our 2013 Browser), we will get something like this:

```bash
/home/groupByLength.js:28
console.log(Object.groupBy(words, (item) => item.length));
                   ^

TypeError: Object.groupBy is not a function
    at Object.<anonymous> (/home/groupByLength.js:28:20)
    at Module._compile (internal/modules/cjs/loader.js:1114:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1143:10)
    at Module.load (internal/modules/cjs/loader.js:979:32)
    at Function.Module._load (internal/modules/cjs/loader.js:819:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47
```

As you can see, we have now a problem because we're trying to run a functionality that is not supported in the environment we're using.

> If you want to learn more about this method you can see [here](https://www.wfercanas.com/article/how-to-group-items-from-an-iterable-in-javascript) the article I published recently about how to use it.

Let's add this problem to our timeline:

<figure>
  <img src="https://res.cloudinary.com/wfercanas/image/upload/v1707860767/wfercanas.com/articles/240217/groupby.png" alt="Type Error">
  <figcaption>TypeError for trying to use Object.groupby()</figcaption>
</figure>

**With these elements settled, we're ready to talk about transpilers and polyfills**

## Transpilers

Transpile is a verb that the dev community invented to talk about taking some come and convert it in an equivalent form so that it can be properly executed in a different environment. Equivalent because the functionality of the code should remain intact, the outcome of the program should remain still.

This is helpful for us in the scenarios in which we have SyntaxErrors, because our environment doesn't know how to read the program we're running. So, the idea here is that we can transform (transpile) our program to an equivalent version of it that our environment (target environment) can understand.

A huge player in this context is [Babel](https://babeljs.io/), whose transpiler is widely used in multiple apps to achieve this very result.

Let's see how does [Babel transpiler](https://babeljs.io/repl) helps us to solve the situation in which our code uses arrow functions, _const_ variables, object destructuring and string interpolation (features not available in our old browser, which we will set as firefox v30):

Our code:

```js
const player = {
  name: "Januar",
  city: "Quibdó",
};

const greet = ({ name, city }) => {
  console.log(`Hello ${name} from ${city}`);
};

greet(player);
```

Babel transpilation:

```js
var player = {
  name: "Januar",
  city: "Quibdó",
};
var greet = function greet(_ref) {
  var name = _ref.name,
    city = _ref.city;
  console.log("Hello ".concat(name, " from ").concat(city));
};

greet(player);
```

As you can see, Babel changes the structure of the program but not its functionality. It still works as intended, but the language features we're using now are included in old JavaScript.

Here we're:

1. Using _var_ definitions, not const --nor let--.
2. Getting an object as a parameter and then creating variables using the object properties for initialization, not destructuring.
3. Using the method _concat()_ of Strings to print our greeting, not using string interpolation.

**So, in conclusion, our transpiler requires the code to transpile and the target --environment-- where we intend to run our code as basic parameters and with that it creates an equivalent version of our program using the syntax our target can understand.**

## Polyfills

We saw that when we try to run a method like _Object.groupBy()_ in an environment that doesn't support it, we will get a TypeError. So, the solution for this problem is to provide our environment with the code required to make the program work. This means, that if the environment doesn't know our method, we will make it know it.

Polyfills are then that code. One that ideally follows the ECMAScript specification for our functionality and that we can inject into our environment so we can work as if it were an updated one.

Typically, when using a polyfill, we ask first if the functionality exists or not, because if it does we don't want to replace the environment's native functionalities for our own. It it doesn't exist, we can use our own.

This is how the polyfill for Object.groupBy() may look like --this is an educational piece of code, not one that you should use in production--:

```js
if (!Object.groupBy) {
  Object.groupBy = function (iterable, callback) {
    const groups = {};
    for (let item of iterable) {
      const result = callback(item);
      if (!groups[result]) {
        groups[result] = [item];
      } else {
        groups[result].push(item);
      }
    }
    return groups;
  };
}
```

**With this addition, we can now use _Object.groupBy()_. We can then do the same with any modern API in the language that our target environment doesn't support.**

## Final Remarks

Three fundamental pieces explain why we need transpiling and polyfills in JavaScript:

1. The language is evolving, creating a gap where up-to-date JavaScript may not be supported by certain target environment (yet).
2. The language is backwards-compatible but not forwards-compatible, so future syntax or functionalities of the language don't have to be supported by old environments.
3. You don't control the environments, you just have to deal with them.

In this context, we can end up in a situation where we're attempting to run modern JavaScript code but get SyntaxErrors or TypeErrors. Each one of them has one solution:

1. **Transpiling**: take your code and convert it into an equivalent form that an old environment can understand. The way the program is written changes, but the results of it while running remain intact. Babel is a key companion here.
2. **Polyfill**: ask your environment if it knows/supports a new functionality/api. If it does, you can go on and run your code without problems. If it doesn't, then we need to inform our environment what it is supposed to do when we attempt to run that functionality. Polyfills are then the code that run instead of a built-in functionality of our environment. The advice is that you get your polyfills from libraries that follow the ECMAScript standards.

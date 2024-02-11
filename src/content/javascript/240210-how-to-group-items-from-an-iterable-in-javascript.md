We often have an iterable data structure that contains a whole bunch of items that we would like to accomodate in different groups depending on some operation or property.

This article presents how we would do it manually, test our implementation and compare it with a new addition to JavaScript: _Object.groupBy_. This static method of the Object class will simplify how we can achieve the same results.

## Group numbers

Let's say we have a list of numbers and we need to create two groups with them: one with all the odd numbers in the list and a second one with all the even numbers.

**Our mission is to build a custom groupBy function to perform this grouping**, along with a test function to check that everything is ok. Given a list of 5 numbers, this is how the transformation should look like:

```js
const numbers = [1, 2, 3, 4, 5]; // -> {odd: [1, 3, 5], even: [2, 4]}
```

### Even vs Odd

Let's start by defining how we can evaluate if a given number is even or odd. With this function, we will be able to test any number and decide in which group it should go.

```js
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}
```

The function checks if the remainder of a division by 2 is equal to zero, in which case the number is even and the function returns **"even"**. On the contrary, the function returns **"odd"**.

Let's simplify a bit:

```js
function evenOrOdd(number) {
  return number % 2 === 0 ? "even" : "odd";
}
```

### Implementation

With the aid of our _evenOrOdd_ function, we can continue creating a function to make the grouping work. Let's begin with a function that works only for our current scenario:

```js
function groupBy(numbers) {
  const groups = {};
  for (let number of numbers) {
    const result = evenOrOdd(number);
    if (!groups[result]) {
      groups[result] = [number];
    } else {
      groups[result].push(number);
    }
  }
  return groups;
}
```

### Test function

We can use the function directly and log the results to test if everything works as intended. But let's create a test function to organize the execution of the function and improve the readibility of the outcomes.

Our test function has access to groupBy because they are defined in the same scope.

```js
function testGroupBy(numbers, expected) {
  let test = "Passed";
  const groups = groupBy(numbers);
  const result = {
    test,
    result: JSON.stringify(groups),
    expected: JSON.stringify(expected),
  };

  const groupsKeys = Object.keys(groups);
  const expectedKeys = Object.keys(expected);

  if (groupsKeys.length !== expectedKeys.length) {
    test = "Failed";
    return result;
  }

  for (let key of groupsKeys) {
    if (!expectedKeys.includes(key)) {
      test = "Failed";
      return result;
    }

    if (groups[key] !== expected[key]) {
      test = "Failed";
      return result;
    }
  }

  return result;
}
```

Good. Let's create then a set of test scenarios and run them:

```js
const naturals = [1, 2, 3, 4, 5];
const odds = [1, 3, 5, 7];
const evens = [2, 4, 6, 8];
const empty = [];

console.table([
  testGroupBy(naturals, { odd: [1, 3, 5], even: [2, 4] }),
  testGroupBy(odds, { odd: [1, 3, 5, 7] }),
  testGroupBy(evens, { even: [2, 4, 6, 8] }),
  testGroupBy(empty, {}),
]);
```

Results:

```bash
┌─────────┬──────────┬────────────────────────────────┐
│ (index) │ test     │ result                         │
├─────────┼──────────┼────────────────────────────────┤
│ 0       │ 'Passed' │ '{"odd":[1,3,5],"even":[2,4]}' │
│ 1       │ 'Passed' │ '{"odd":[1,3,5,7]}'            │
│ 2       │ 'Passed' │ '{"even":[2,4,6,8]}'           │
│ 3       │ 'Passed' │ '{}'                           │
└─────────┴──────────┴────────────────────────────────┘
```

### More scenarios

Our implementation seems to work just fine, but only for the scenario in which we're grouping numbers into odd and even groups. In the next section we will refactor our implementation to make it work in more scenarios.

## Group letters

Let's imagine that now we don't need to group a list of numbers in terms of odd or even numbers, but that we must group a list of letters in two groups: vowels and consonants. Sadly, our implementation as it is right now is far from working in this new scenario.

So, now we have to check how to extend our implementation so we can create a more useful **groupBy** function. If we analyze our code, we can see that we're currently expecting a list of numbers as a parameter and assume that we can iterate over that list to check if each number is odd or not.

Let's see how we can make some adjustments to create a more general **groupBy** function.

### Refactoring

We can refactor our function to:

1. Don't expect just numbers, but a list of items.
2. Since we're going to use a for..of bucle, we're assuming that the list is iterable. So we can rename the parameter to **iterable**.
3. We have the function that returns the group an item belongs to inside our **groupBy** implementation, we can change this and instead receive the function through parameters. Let's call this parameter **callback**.

```js
function groupBy(iterable, callback) {
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
```

With this change our program will throw a **TypeError** if we try to execute it, because when testing our function we're not using the callback property. So, we must refactor the test function as well:

```js
function testGroupBy(iterable, callback, expected) {
  let test = "Passed";
  const groups = groupBy(iterable, callback);

  /*
    Same code as before ...
  */
}
```

Finally, let's change our test executions:

```js
console.table([
  testGroupBy(naturals, oddOrEven, { odd: [1, 3, 5], even: [2, 4] }),
  testGroupBy(odds, oddOrEven, { odd: [1, 3, 5, 7] }),
  testGroupBy(evens, oddOrEven, { even: [2, 4, 6, 8] }),
  testGroupBy(empty, oddOrEven, {}),
]);
```

### Callback for grouping letters

With our refactor in place, we can now focus in our new scenario. Let's create a function that check if a letter is a vowel or a consonant.

```js
function vowelOrConsonant(letter) {
  const vowels = "aeiou";
  const consonants = "bcdfghjklmnpqrstvwxyz";

  if (vowels.includes(letter)) {
    return "vowels";
  }

  if (consonants.includes(letter)) {
    return "consonants";
  }
}
```

### Test cases for letters

Good. We can now write some test cases and execute them to check if our refactored implementation can handle this new situation:

```js
const hello = ["h", "e", "l", "l", "o"];
const vowels = ["a", "a", "e", "o"];
const consonants = ["w", "r", "l", "d", "d"];
const numbers = [1, 2, 3];
const greet = "helloworld";

console.table([
  testGroupBy(hello, vowelOrConsonant, {
    vowels: ["e", "o"],
    consonants: ["h", "l", "l"],
  }),
  testGroupBy(vowels, vowelOrConsonant, {
    vowels: ["a", "a", "e", "o"],
  }),
  testGroupBy(consonants, vowelOrConsonant, {
    consonants: ["w", "r", "d", "d"],
  }),
  testGroupBy(numbers, vowelOrConsonant, {}),
  testGroupBy(greet, vowelOrConsonant, {
    vowels: ["e", "o", "o"],
    consonants: ["h", "l", "l", "w", "r", "l", "d"],
  }),
]);
```

```bash
┌─────────┬──────────┬───────────────────────────────────────────────────────────────────────┐
│ (index) │ test     │ result                                                                │
├─────────┼──────────┼───────────────────────────────────────────────────────────────────────┤
│ 0       │ 'Passed' │ '{"consonants":["h","l","l"],"vowels":["e","o"]}'                     │
│ 1       │ 'Passed' │ '{"vowels":["a","a","e","o"]}'                                        │
│ 2       │ 'Passed' │ '{"consonants":["w","r","l","d","d"]}'                                │
│ 3       │ 'Passed' │ '{"undefined":[1,2,3]}'                                               │
│ 4       │ 'Passed' │ '{"consonants":["h","l","l","w","r","l","d"],"vowels":["e","o","o"]}' │
└─────────┴──────────┴───────────────────────────────────────────────────────────────────────┘
```

Everything seems to be ok, but the result of test 3 is kind of weird. Our callback returns undefined when a is checking a character that is not a letter, and we're forming a group with a key named "undefined".

We could try to fix this by throwing an error in our callback or by refactoring our groupBy function to prevent pushing values when is not appropiate, but let's leave it as is so we can compare this with the results of the new _Object.groupBy_ static method.

Apart from this, our refactored function seems to be working great! it even works when we pass a string instead of an array as we can see in test 5. This is to be expected since strings are iterables.

## Object.groupBy

Alright. Now we have our tailor made groupBy, which seems to work just fine when we can assure that we're passing an iterable and kind of ok when passing callbacks. This because we saw in the previous exercise that if we pass a callback that cannot group an item, we end up with a result that is not what we expected.

Let's see how we can implement the same two exercises using now the static method _Object.groupBy()_.

**Note**: this feature is new, and is expected to be published by TC39 in 2024. So check if your environment supports it. **This exercises were executed in Node v21.6.1 where the method is supported.**

### Numbers

```js
// Odd and even numbers
console.log(Object.groupBy(naturals, evenOrOdd));
console.log(Object.groupBy(odds, evenOrOdd));
console.log(Object.groupBy(evens, evenOrOdd));
console.log(Object.groupBy(empty, evenOrOdd));
```

Result:

```bash
[Object: null prototype] { odd: [ 1, 3, 5 ], even: [ 2, 4 ] }
[Object: null prototype] { odd: [ 1, 3, 5, 7 ] }
[Object: null prototype] { even: [ 2, 4, 6, 8 ] }
[Object: null prototype] {}
```

Wow!, here we can take some notes about this standard implementation of the method:

1. The returned object that contain the groups is an object that is not connected through a prototypal chain to any other prototype. Our basic implementation doesn't comply with this.
2. We were correct when we assumed that if a potential group doesn't have items, that group is not present in the result of the method.
3. We were also correct when we assumed that if no group could be formed, the result is an empty object.

### Letters

```js
console.table([
  Object.groupBy(hello, vowelOrConsonant),
  Object.groupBy(vowels, vowelOrConsonant),
  Object.groupBy(consonants, vowelOrConsonant),
  Object.groupBy(numbers, vowelOrConsonant),
  Object.groupBy(greet, vowelOrConsonant),
]);
```

Result:

```bash
┌─────────┬─────────────────────────────────────┬────────────────────────────────────┬─────────────┐
│ (index) │ consonants                          │ vowels                             │ undefined   │
├─────────┼─────────────────────────────────────┼────────────────────────────────────┼─────────────┤
│ 0       │ [ 'h', 'l', 'l' ]                   │ [ 'e', 'o' ]                       │             │
│ 1       │                                     │ [ 'a', 'a', 'e', ... 1 more item ] │             │
│ 2       │ [ 'w', 'r', 'l', ... 2 more items ] │                                    │             │
│ 3       │                                     │                                    │ [ 1, 2, 3 ] │
│ 4       │ [ 'h', 'l', 'l', ... 4 more items ] │ [ 'e', 'o', 'o' ]                  │             │
└─────────┴─────────────────────────────────────┴────────────────────────────────────┴─────────────┘
```

Nice. This execution can also serve us to learn more about the method:

1. The method doesn't check if the value was already inside the assigned group to decide if it should add it or not. The method does push the value regardless of the content of the group. This was a good assumption from our part too.
2. I thought we would have to refactor our code because of that undefined group! This run indicates that the standard method also forms an undefined group with the values that could not be grouped inside the callback.

## Final remarks

1. We could create a function that makes grouping with the help of a callback function. This basic implementation can help us understand what the new Object.groupBy method does.
2. This is just a model of what the method is. Nonetheless, always try to use the standard version of the method. You can find the proposal for this addition to Javascript in [here](https://github.com/tc39/proposal-array-grouping). Also check MDN to [see more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy).
3. Check if your environment supports the method before trying to execute the code. The resource in MDN can help you check.
4. We explored just one part of the proposal. There is also the _Map.groupBy()_ static method. I invite you to see how it works and think about which of the assumptions made about the results of the method groupBy() should be reconsidered.
5. I talked many times about iterables. You can check more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/is_not_iterable).

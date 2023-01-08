---
title: 'Sort effectively: Understanding Array.prototype.sort()'
description: Don't get caught off guard! You don't know when you'll need to sort a list of complicated objects. Know the ins and outs of Array.prototype.sort().
published: 2022-03-19
slug: sort-effectively
thumbnail: "./images/thumbnail.png"
type: post
---

Sorting algorithms are one of the first things you will learn when you start programming but most likely forget when you land a job. It is seldom needed in your day-to-day life as a software engineer (I might be wrong!). You will be surprised that one day the need for a sorting algorithm pops up then you will be scrambling to learn that again! Luckily JavaScript has a sorting method built-in in the Array class!

In this article, I will do my best to explain how you can sort strings, numbers, and objects using the `Array.prototype.sort()` method and also how to implement our own `sort()` function!

## Sorting an array of strings

If you have an array of strings, you can easily call the `sort()` method to sort the array in ascending order.

```typescript
const names = ['Matthew', 'Mark', 'Luke', 'John']
const sortedNames = names.sort()

console.log(sortedNames) // ['John', 'Luke', 'Mark', 'Matthew']
```

The `sort()` method sorts the array in-place, meaning it does not create a new array but only changes the positions of the elements in the original array. Since it does not create a new array, the return value will also be the original array.

By default, `sort()` will convert the elements into strings, then compare their sequences of UTF-16 code units values and order them ascendingly. This is just a fancy way of saying that it will sort your elements from A to Z.

Alright! You now know how to sort strings in ascending order, but how would you do it in descending order? Or what if you want to order an array of numbers?

## Sorting an array of numbers

If you have an array of numbers and try to call `sort()`, you would notice that it may behave differently from what you expect.

```typescript
const numbers = [10, 5, 2, 43, 16, 25]
const sortedNumbers = numbers.sort()

console.log(sortedNumbers) // [10, 16, 2, 25, 43, 5]
```

You would think that `2` should be the first number on the sorted array, but because numbers are converted to strings, `10` and `16` come before `2` in the Unicode order. Not to fear, we can supply a compare function to suit our needs!

The compare function has the following form:
```typescript
function compare(a, b) {
    if (a should come first before b) {
      return -1; // Or any negative number
    }

    if (b should come first before a) {
      return 1; // Or any positive number
    }

    // a and b should remain in-place
    return 0;
}
```

Let's try to sort numbers with a compare function!
```typescript
function compareInAscendingOrder (a, b) {
    if (a > b) {
      return 1
    }
    
    if (a < b) {
      return -1
    }
    
    return 0;
}

const numbers = [10, 5, 2, 43, 16, 25]
const sortedNumbers = numbers.sort(compareInAscendingOrder)

console.log(sortedNumbers) // [2, 5, 10, 16, 25, 43]
```

It got sorted correctly! Let us break it down. If you wanted to sort it in ascending order, you want the lower number to come first, so if a higher number comes first before a lower number, you want to swap them. The compare function exactly does this if you. If you switch the values, meaning `b` comes first before `a`; return a positive number otherwise return a negative number. In `compareInAscendingOrder` function above, a swap would happen if `a` is larger than `b`. So if `a` is 5 and `b` is 4, the function will swap them and sort them ascendingly.

We can further refactor the code to:
```typescript
const sortedAscendingly = number.sort((a, b) => a - b)

console.log(sortedNumbers) // [2, 5, 10, 16, 25, 43]
```

If `a` is smaller than `b` the result will always be negative (3 -5 = -2). But if `a` is larger than `b` the result will be a positive number, meaning the values would be swapped. You just need to subtract `b` with `a` to sort it in descending order.

```typescript
const sortedDescendingly = number.sort((a, b) => b - a)

console.log(sortedDescendingly) // [43, 25, 16, 10, 5, 2]
```

## Sorting an array of objects

Now we know how to use a compare function it is extremely easy for us to sort objects. So what if we what to sort an array of student objects:
```typescript
const students = [
    { name: 'Peter Parker', age: 21 },
    { name: 'Tony Stark', age: 24 },
    { name: 'Steve Rogers', age: 35 },
    { name: 'Scott Lang', age: 26 },
    { name: 'Bruce Banner', age: 22 }
]
```

We need to provide a comparator that we will use to compare each object in the array. In the array of objects above, we can use either the name or age property as a comparator.

```typescript
const sortFromYoungestToOldest = (previousStudent, incomingStudent) => {
   return previousStudent.age - incomingStudent.age
}

const sortedStudents = students.sort(sortFromYoungestToOldest)

console.log(sortedStudents)
// [
//   { name: 'Peter Parker', age: 21 },
//   { name: 'Bruce Banner', age: 22 },
//   { name: 'Tony Stark', age: 24 },
//   { name: 'Scott Lang', age: 26 },
//   { name: 'Steve Rogers', age: 35 }
// ]
```

## Implementing a sort function

Just for fun and for deeper understanding, would it be cool to implement our own sort function?! I am hearing a resounding yes, so let us dig in! The [previous](https://github.com/v8/v8/blob/bde786283aa6bf4e0b0c61ec25297a160a36f9b8/src/js/array.js#L645) and [current](https://github.com/v8/v8/blob/master/third_party/v8/builtins/array-sort.tq) implementation of the sort method of V8 (Google's JavaScript engine) uses [insertion sort](https://en.wikipedia.org/wiki/Insertion_sort) for arrays with smaller sizes. If you are playing cards, it is how you sort your cards in hand! 

If you have not fully grasped how insertion sort works yet, I will just leave it as a fun assignment! It took me a whole hour to understand it! But in the code shown below is an example of how you can implement your own sort function using insertion sort! It also accepts a compare function, so you can sort strings, numbers, and objects in the order you prefer.

```typescript
function insertionSort (array: any[], compareFunc: (a: any, b: any) => number) {
    for (const [outerIndex, value] of array.entries()) {
        if (outerIndex === 0) continue

        let currentValueIndex = outerIndex

        for (let innerIndex = outerIndex - 1; innerIndex >= 0; innerIndex--) {
            const currentValue = array[currentValueIndex]
            const comparedValue = array[innerIndex]

            const result = compareFunc(comparedValue, currentValue)

            if (result > 0) {
                array[currentValueIndex] = comparedValue
                array[innerIndex] = currentValue

                currentValueIndex = innerIndex
            } else {
                break
            }
        }
    }

    return array
}

const numbers = [10, 5, 2, 43, 16, 25]
const sortedNumbers = insertionSort(numbers, compareInAscendingOrder)

console.log(sortedNumbers) // [2, 5, 10, 16, 25, 43]
```

## Conclusion

Thank you guys for sticking with me till the end! That is a lot of sorting! In this article, we have reviewed how you can sort arrays using `Array.prototype.sort()` function. We also tackled how to use the compare function to sort numbers and objects in different sorting orders (ascending and descending). And I also showed you a sample example of how you can implement a sort function yourself! Hopefully, you can use what you have learned here when you need to display a sorted table or provide a sorting dropdown (sort by name, age, or date created) for the customer table!
---
title: How I used Regex in TypeScript
description: Etiam sed fringilla nisl. Nulla felis augue, blandit at placerat ac, consequat in orci. Proin vulputate urna ac metus molestie tempor. Nulla facilisi. Vivamus nec placerat nunc. Nulla nunc dolor, semper condimentum turpis elementum, posuere mattis elit. Cras dui mauris, viverra sed vulputate vel, pretium quis libero.
description-two: A blog post where I explained some of the scenarios where I used regular expressions to help me solve a problem.
published: 2021-11-01
slug: how-i-used-regex-in-typescript
thumbnail: "./images/thumbnail.png"
type: post
---

### Introduction

Indeed, you don't know what you don't know. I never thought there would be a ton of use cases of Regex before the time that I've known how to use them. Now that I have an idea of how to use regex, it's like a new world out there (you might think that I'm exaggerating but trust me, I'm not.). I would just like to share a few of the many instances that I used regex at work. I hope that it will help you when you stumble into similar scenarios.

### What is Regex

Regex is short for *Regular expression*. It's a sequence of characters that allows you to create patterns that help match, locate, and manage text/string. Regex can be used in almost all programming languages (I've used it in JavaScript, Python, and bash scripts.) and even with word processors like Google doc and Microsoft word. I'm mostly using TypeScript at work and on this site so I'll write my examples in TypeScript! But the regex pattern can be used regardless of what programming language you are using.

### Trim trailing slashes

We had a middleware in our server-side code that fails whenever we pass a route that has a trailing slash in it e.g. `https://www.google.com/`. I needed to find a way to trim the trailing slash `/` at the end. Regex to the rescue!! 

```typescript
function trimTrailingSlash (route: string) {
    return route.replace( /\/+$/, '')  
}
```

We only have one regex pattern here `/\/+$/` and I would like to break this pattern starting at the end. `$` is what we call an [anchor](https://javascript.info/regexp-anchors), it is a special token that doesn't match any character but directs the regex method e.g. (`match`, `replace`, `test`, etc) where to start looking. In our use case, we want to start looking at the end of the string by adding the `$` anchor at the end of your Regex pattern. In the example below, `lamb` is matched but not `little` because `little` is not at the end of the string `lamb` is.

```typescript
const str = 'Mary had a little lamb'

console.log(str.match(/lamb$/g)) // ['lamb']
console.log(str.match(/little$/g)) // null
```

Basically, `/\/+$/` tries to match all the slashes at the end of the string. By adding this pattern in a `replace` method and replacing it with an empty string, we would be able to trim those nasty slash/es!

```typescript
function trimTrailingSlash (route: string) {
    return route.replace( /\/+$/, '')  
}

console.log(trimTrailingSlash('kopifohlayf.com/')) // kopifohlayf.com
console.log(trimTrailingSlash('https://animeforevah.com////')) // https://animeforevah.com
```
<br/>

### Build a file name

I had to build a file name for a report; the report file name should be a combination of the city where the person who needs the report lives and the name of the person stitched by a hyphen (`-`). The challenge was that some of the cities and names have multiple spaces or tabs in between. We could use the `split` method and split them using whitespace but there will be instances that there will be entries in the resulting array that only contains whitespace.

```typescript
const data = 'Jose    Rizal'
const split = data.split(' ')
console.log(split) // ['Jose', '', '', '', 'Rizal']
```

We could avoid this issue by passing a regex pattern instead! By using `/\s+/` we are sure that all spaces will be matched, and we are left with only the characters we want. `+` is a [regex quantifier](https://javascript.info/regexp-quantifiers) that enable you to specify how many of the character or group you want to be matched. `+` is a quantifier that means match at least one. As you can see below, without the quantifier `onlyMatchOneNumber` would only match one digit resulting in five separate numbers in the array of matches. But when you add `+` on the side of `\d` it would match all consecutive numbers.

```typescript
const onlyMatchOneNumber = /\d/g
const matchAllConsecutiveNumbers = /\d+/g
const digits = '12345'

console.log(digits.match(onlyMatchOneNumber)) // ['1', '2', '3', '4', '5']
console.log(digits.match(matchAllConsecutiveNumbers)) // ['12345']
```

Same with the example above we can match any number of consecutive whitespaces and use it to split a string!

```typescript
const name = 'Jose      Rizal'
const split = data.split(/\s+/)
console.log(split) // ['Jose', 'Rizal']
```

Great! All we have to do now is string everything (literally!) together. Here is the function I created at work!

```typescript
function buildFileName (name: string, cityAddress: string, ....additionalArgs: string[]) {
    const formattedDescoName = descoName.split(/\s+/).join('-').toLowerCase()
    const formattedVillageName = villageName.split(/\s+/).join('-').toLowerCase()
    
    return [formattedDescoName, formattedVillageName, ...additionalArgs].join('-')
}
```

### Manually formatting a date

I wanted to minimize the use of external libraries within my website so I create little utility functions for little things like formatting dates. I have dates objects that I need to format to something like `Nov 04, 2021`, those are the ones I used in my article cards. So I thought regex can help me with this one!

```typescript
export class DateUtil {
    public static toAbbrevDateTime (date: Date) {
        const dateTimeRegex = /^(?<=[\w]{3}[\s])(.+)/g
        const dateString = date.toDateString()

        const match = dateString.match(dateTimeRegex)

        if (!match?.length) throw new Error(`Invalid date: ${dateString}`)

        return match[0].replace(/(?<=\d)\s(?=\d)/g,', ')
    }
}
```

So I've used two regex patterns here. One is to extract the part of the date that I need (`/(?<=[\w]{3}[\s])(.+)/g`) and second is to replace a certain space into a comma (`/(?<=\d)\s(?=\d)/g`).

#### Get the date!

The goal of `/(?<=[\w]{3}[\s])(.+)/g` is to get `Oct 26 2021` from `Tue Oct 26 2021`. `/(?<=[\w]{3}[\s])(.+)/g` can be broken further to two groups: 
`/(?<=[\w]{3}[\s])/g` this what we call a [lookbehind](https://javascript.info/regexp-lookahead-lookbehind#lookbehind), it allows us to match a pattern if there's something before it.

```typescript
// The pattern matches B, but only if there is A before it.
// The character or pattern inside the lookbehind will be excluded
//  in the match which is in this instance is A.

const str = 'ABC'
console.log(str.match(/(?<=A)B/g)) // ['B']
```

Inside the lookbehind group `/(?<=)/` is a pattern to match the first three letters and a space `[\w]{3}[\s]`. `[]` The parenthesis is what we call a [set](https://javascript.info/regexp-character-sets-and-ranges), it matches any character that is inside it, e.g. `[abc]` would match `'a'`, `'b'`, or `'c'`. `\w` and `\s` are [character classes](https://javascript.info/regexp-character-classes), they are special notation for certain sets. They are like pre-defined sets. `\w` would match any alphanumeric character and underscore `_` while `\s` would match any whitespace (spaces, tabs, and newlines).

```typescript
const str = 'ABC123*^'
console.log(str.match(/[\w]/g)) // ['A','B','C','1','2','3']
```

`{3}` is a quantifier. It tells you how many characters should be matched. so `[\w]{3}` would match any 3 consecutive alphanumeric characters.
```typescript
const str = 'ABC123*^'
console.log(str.match(/[\w]/g)) // ['ABC','123']
```

Putting it together the lookbehind group `(?<=[\w]{3}[\s])` would match any three alphanumeric characters and a space. But the lookbehind should have something from behind to have a match which is the second group `/(.)+/`. `.` basically is any character and `+` is a quantifier meaning at least one. So it would match all characters given that there is at least one character to match. And then we are just wrapping all the characters in one group by enclosing it in parentheses `()`.

To sum it all up, `/(?<=[\w]{3}[\s])(.+)/g` would match any characters behind a three alphanumeric character followed by a space! Remember that the match would not include any pattern matched inside the lookbehind (the three characters (Mon, Tues, Wed, etc.) and the space that followed). That is why we are only getting anything after that which is the remaining date!
```typescript
const date = 'Tue Oct 26 2021'
console.log(date.match(`/(?<=[\w]{3}[\s])(.+)/g`)) // ['Oct 26 2021']
```

#### Add that comma

The goal `/(?<=\d)\s(?=\d)/g` is to get the space that is surrounded by two digits. Once we have that space we can replace it with a comma and a space turning `Oct 26 2021` to `Oct 26, 2021`. The `\s` character class is to capture that single space, and we wrapped it in both lookbehind (`?<=\d)`) and lookahead (`(?=\d)`) that are expecting both single digits. The [lookahead](https://javascript.info/regexp-lookahead-lookbehind#lookahead) is almost the same function as the lookbehind but the pattern only matches if there is something in front of it rather than behind. Both lookahead and lookbehind patterns would not be included in the matched result we would be left with the space that we want to replace with a comma and a space by using the `replace` method. The [replace method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) can be used by any string.

```typescript
const data = 'Oct 26 2021'
console.log(data.replace(/(?<=\d)\s(?=\d)/g,', ')) // Oct 26, 2021
```

Whew! That's a lot of explaining just to get the date and add a freaking comma! So let us put it all together! Below I have a function that accepts a date and would call the `toDateString()` to get the date (e.g. `Tue Oct 26 2021`) string but this includes the day (*Mon, Tue, Wed, etc.*) that we do not want. We would be extracting the parts that we do want (e.g. `Oct 26 2021`) by using the [`match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) and passing the Regex pattern `/^(?<=[\w]{3}[\s])(.+)/g`.

After getting the date that we need, we just need to squeeze that comma in by using the `replace` method. And we are done! We would now get our newly formatted date e.g. (`Oct 26, 2021`).

```typescript
export class DateUtil {
    public static toAbbrevDateTime (date: Date) {
        const dateTimeRegex = /^(?<=[\w]{3}[\s])(.+)/g // Define the regex
        const dateString = date.toDateString() // Tue Oct 26 2021

        const match = dateString.match(dateTimeRegex) // ['Oct 26 2021']

        if (!match?.length) throw new Error(`Invalid date: ${dateString}`)

        return match[0].replace(/(?<=\d)\s(?=\d)/g,', ') // 'Oct 26, 2021'
    }
}
```

Please note that this pattern can also match different things like if pass `The blind mice` our first Regex pattern would match `blind mice`. Our second regex could match a tab rather than a single space but since we know that we would always get the same pattern of characters (by calling `toDateString()`), we are sure to get the formatted data that we want.

### Conclusion

Whew! That is a lot of regex patterns! Hopefully, with all the examples that I've given, you will see how regex could be super useful and fun! If you have any interesting use cases for regular expressions, please share them with me! If you want to go deep into how regular expressions work, I advise starting with [Mastering Regular Expressions by Jeffrey Friedl](https://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124). It is one of the best programming books I have ever read!
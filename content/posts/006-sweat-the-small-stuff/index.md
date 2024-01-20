---
title: "Sweat the small stuff: How the small nitpicks make the huge difference"
description: I was fortunate enough to find a mentor. Here are the most important things about writing code that I learned from him.
published: 2024-01-07
slug: sweat-the-small-stuff
thumbnail: "./images/thumbnail.png"
type: post
---

![Damian redistributing the force to this young padawan](images/damo-matt-meetup.jpg)

Last December, I left the most incredible company I ever worked for, Okra, and moved to New Zealand. During the holiday season, I had the time to ponder and realize how far I've come as a software engineer. It was only possible because I worked for Okra, and Damian was my team lead and mentor.

Damian has been my team leader since day one. Damian has always been meticulous in reviewing code, especially during my early days when my code was ugly as hell. How challenging it might've been to read and review my MRs (merge requests)!

I didn't have an idea of what beautiful code should look like. As long as it works, it should be fine, right? Why is Damian always sweating the small stuff? Why is he always giving me a hard time making me rewrite a whole chunk of logic in my code? He even criticizes (as kind and respectful as a saint can be) the naming of my variables?!

But as Steve Jobs had said, "You can't connect the dots looking forward; you can only connect them looking backward.". I didn't know how much of an impact these small stuffs bring to the codebase, not until I came back and needed to refactor a big chunk of it myself or not until I needed to onboard someone new and explain how the code works. It's only now that I see how these details matter.

So, in this blog, I want to share what Damian taught me—the seemingly small things that turned out to be game-changers. Join me as I break down these lessons, showing how they've shaped my understanding of how simple and maintainable code looks like.

### Clear is better than clever

During my early years at Okra, I always wanted to prove myself. I wanted to show that they did the right thing by hiring me. With that in mind and the level of freedom Damian gave me, I really dug into the new ways to do things or how to do something with fewer lines of code. 

It was all well and good until Damian pointed out that clever is not always better. Code will be read more times than it will be written. Programmers' time is gold; it is ridiculously finite, especially if you're only a team of two to four people. If your code is clever but unreadable, it is most likely complex, and if it's complex, it will take forever for other programmers to understand your code. Think of the time they need to waste to understand your clever yet complex code rather than just doing their jobs of either implementing a new feature or fixing a bug.

For example, look at the two code blocks below.

```typescript
public getTotalCountPerPastry (pastryShops: PastryShop[]) {
    const totalCount = pastryShops.reduce((totalCount, nextShop) => ({
        croissant: nextShop.croissant + totalCount.croissant,
        muffin: nextShop.muffin + totalCount.muffin,
        brownie: nextShop.brownies + totalCount.brownies,
        cookie: nextShop.cookies + totalCount.cookies
    }), { croissant: 0, muffin: 0, brownies: 0, cookies: 0 })

    return totalCount
}
```

```typescript
public getTotalCountPerPastry (pastryShops: PastryShop[]) {
    const totalCount = {
        croissant: 0,
        muffin: 0,
        brownie: 0,
        cookie: 0,
    }

    for (const shop of pastryShops) {
        totalCount.croissant += pastryShops.croissant
        totalCount.muffin += pastryShops.muffin
        totalCount.brownie += pastryShops.brownie
        totalCount.cookie += pastryShops.cookie
    }

    return totalCount
}
```

If you need to refactor or fix this part of the codebase and you're not familiar with `Array.prototype.reduce()`, you'll spend a significant amount of time just trying to understand how this function works. You might end up searching it in Google or creating a sandbox just to figure out how it works. 

But look at the second version of the function is implemented. It might be longer, but it is straightforward. It will take you less than 10 seconds to understand what it's trying to do. If you need to add another type of pastry, you just need to chuck it in the `totalCount` object and include it inside the for loop, and you're done. Even programmers from a different language can go to this function and change it.

Remember the last time you returned from a piece of code you'd written months ago and didn't understand a thing? By writing clear and readable code, you're protecting not only your colleague's time but also your own.

### Long descriptive names are always better

I have to admit that one of my biggest weaknesses is naming things. I had the tendency to make everything shorter and vague. I would often name functions and variables as short as possible. I'll try to squeeze it into one to two words if possible. I thought to myself that three-word variables or functions are unbearable.

If I can't think of a way to shorten it, I would look for a different name for it. When I'm finished thinking of the shortest name possible, I'll add a massive block of code comments to describe what the function or variable even means or does, just like the code below.

```typescript
    class Bread {
        /**
         * Checks if the pastry is for takeout.
         */
        public isToGo () {
            // implementation
        }

        /**
         * Checks the pastry is properly packed and sealed.
         * We are checking the package to ensure that the pastry
         * will stay fresh until the expiration date.
         */
        public isSealed () {
            // implementation
        }
    }
```

Damian pointed out that this is counterproductive. It will not only take up space in our codebase but also take more of our time because it's another thing to maintain and keep up-to-date. He said that the code should be self-documenting.

He encourages us to make the names of our classes, functions, and variables descriptive. It's okay for the names to be long or form phrases as long as they clearly describe what it does. Look at the refactored code below. It does not need any code comments. Each method clearly conveys what its functions are.

```typescript
class Bread {
    public isForTakeout () {
        // implementation
    }

    public isSealedToEnsureFreshness () {
        // implementation
    }
}
```

###  Consistency is king

Your names are long and descriptive, but are they consistent with the things already in the codebase? When you are a programmer, you should be curious, right? You usually are excited to explore the codebase. You want to know the ins and outs of every class and function. But when I was starting out, I was far from as curious as I could be. I just wanted to get it done and move to the next thing I needed to do. I was careless.

But this meant my changes were inconsistent or not in line with code already in the codebase. Take a look at the example below.

```typescript
// api/IngredientApi.ts
class IngredientApi {
    public editIngredient (ingredientId: number) {
        // implementation
    }

    public createIngredient (ingredientId: number) {
        // implementation
    }

    public removeIngredient (ingredientId: number) {
        // implementation
    }
}

// api/PackagingApi.ts
class PackagingApi {
    public updatePackaging (packagingId: number) {
        // implementation
    }

    public insertPackaging (packagingId: number) {
        // implementation
    }

    public deletePackaging (packagingId: number) {
        // implementation
    }
}
```

If you're not careful, changes like this can be sprinkled in your codebase. You'd think it's a small thing. It still works, but a few more inconsistencies will weigh you down. Instead of just remembering three keywords, it will be six. You would be thinking, what is the right thing to use? Is it `update` or `edit`? What's the difference? Is there any difference at all?

Imagine the time you'll spend updating all the files and tests when you finally decide to stick with one. You'd be lucky if you had time to do that. Most likely, it will just be a tech debt buried along with all the tech debts you already have. I was the mastermind of too many tech debts because of my inconsistencies. Sorry, team!

### Clean as you go

Boy Scouts have a rule, "Always leave the campground cleaner than you found it". This rule encourages the scouts to care about their environment and ensures that anyone using the campground after them will have a good or even better time. This last one wasn't explicitly taught to me by Damian. I just noticed it in almost all the MRs he submitted for review. 

Whenever he works on a specific part of the codebase, he always leaves it cleaner and more aesthetic than it was before. If he sees a bunch of utility functions lying around, he'll try to wrap it in a more descriptive class. If he sees a variable that can have a more meaningful name, he'll immediately rename it. If a class is too big or does several things, he'll break it into smaller classes that do only one thing each. He'll do every one of these and so much more.

What are the advantages of doing this? Is this just extra work for him and the reviewer? Yes, it might be extra work, but I honestly think all of it was worth it. The advantages for me as a mentee/colleague were:
- It's a huge learning experience. It was like watching a YouTube tutorial about refactoring! You don't know what you don't know. As a beginner, you'll see a chunk of code and almost always be amazed! You only know it can be more understandable and beautiful once you see it being refactored in a change request.
- It creates less or even eliminates tech debt. We implement certain things slowly, like removing HOCs and replacing them with hooks (in our React codebase). Damian usually does this. When he is working on a file and notices that he can do the tech debt for that file, he immediately cleans it up and implements it. This way, we slowly remove the tech debts even without creating tickets to do them specifically.
- It's contagious. As Boy Scouts were encouraged to care about the environment, it inspired me to care about our codebase. Through these change requests, I saw how Damian really cared about our codebases. He wants to keep clean and tidy at all costs. He wants to protect it from complex, unreadable code. And that affected me in the most positive way possible. I never thought I would love our codebases as I do now, but I did. It sounds cheesy, but it's true!

Even if I'm working on a different codebase, I have continued this habit. Imagine how clean and tidy your codebase would be if everyone in your team cleaned it every time they did a PR/MR?!

### Conclusion

The devil is in the details, and Damian always had the ability to catch these sneaky bad guys. He has a keen eye for details. He also had a thing for beautiful, simple, and readable code. I would be so proud of myself if I were half as observant and diligent as he. I'm looking forward to the day we'll be able to work again in one codebase (or two? The more, the merrier!)!

I wouldn't learn as much if he stopped sweating the small stuff in my MRs. So please be patient and open-minded if your senior or anyone is nitpicking in your MRs. You might learn a thing or two (in my case a ton)!
# Getting Started

## Scripts
### Installation

```
$ yarn
```

If you don't have yarn installed, you can install it with:

```
$ npm i -g yarn
```

### Run

```
$ yarn start
```

# Details

## State Management

Since the task was simple, the app was quite shallow, and as it turned out, all the state it needs is stored in the pathname. As a result, I leveraged pathname to determine whether a change had occurred, and to trigger internal processes, like rerenders and side effects.

## Fetching

Since I decided to throw in some animations, I realized fetch, in conjunction with all of the processing of the response, was going to destroy the framerate. I threw a classic XHR request into a web worker and used it as a fetch client to offset some of the overhead. I could have thrown a lot more in there to solve some FPS issues, but alas, time isn't working with me.

## JSDoc vs Typescript

If I were to create an app that multiple people are working on, I would've added traditional typescript. But since I only needed it for a few things, I opted for `//ts-check` in conjunction with a few `d.ts` files and JSDoc since it does the same job (works with the 'native' VS Code typescript server).

## Look and Feel

Have you ever watched the Great British Baking Show? When I started coding, I began imagining myself talking to the judges about my work. Code decisions can be interesting, but flavor is something that appeals to everyone. So I decided to add a bit of flavor to the application to show common visual appeals I appreciate -- like dark themes (easy on the eyes) and hot swatches, which remind me of the 80's. It captures a bit of nostalgia, and has a modern edge.

## Tests

I learned about this assignment Friday afternoon, and had a busy weekend planned. So due to time constraints, I wasn't able to add tests. I hope you'll accept it as-is.


# Advent Calendar

Clone ❄️, degit 🎁 or steal ⛄ and spread the joy 🌈

## How to:

Add images to `/docs/images` (it works best with square images, because all the boxes are square)
Add entries for each day in `/advent.json`

Install dependencies `npm install`
Check it out `npm run dev`
Build it `npm run build`

Deploy wherever your ❤️ desires 

## How it works

Obviously with [Svelte](http://www.svelte.dev) !! 😉

The _"app"_ will simply render 24 boxes that you can click, revealing a surprise behind it.
It checks the date by comparing it to the day of the month, that's me being lazy 😴 because it means that on November 24 you can actually allready open everything 🙄 which is _obviously_ done for debugging reasons.

If you _absolutely_ want to change that modify lines 14 and 15 in `/src/store.js` 🥨

The _"app"_ will keep track of which boxes you already opened in your localStorage as a simple array, that is read when opening it (or lacking it simply filled up a bunch of _falses_). 🍒

The final image (because 25 makes a better grid, has to be always called `xmas.png`) or you change it yourself on line 33 in `/src/App.svelte`. 🍿

## Serving the page

The default configuration puts everything in the folder `/docs` which is somehow one of the default paths to deploy Github Pages, so that can be easily done there.
If you deploy to other services, remember to change your configuration to point to `/docs` or alternatively change the path in `rollup.config.js`.

## Happy Holidays

[@StephaneVanraes](http://www.twitter.com/StephaneVanraes)

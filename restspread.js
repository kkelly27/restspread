/* Write an ES2015 Version */

const filterOutOdds = (args) => (v => v % 2 === 0)


/* findMin */

const findMin = (args) => Math.min(args)

/*mergeObjects*/

const mergeObjects = (ob1, ob2) => ({...ob1, ob2})


/* doubleAndReturnArgs*/


const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)]



/* Slice & Dice */
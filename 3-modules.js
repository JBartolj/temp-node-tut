// // CommonJS, every file is module (by default)
// // Modules - Encapsulated Code (only share minimum)
// const names = require('./4-names')
// const sayHi = require('./5-utils')
// const data = require('./6-alternative-flavor')
// console.log(data);
// require('./7-mind-grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// sayHi(data) //kako pokllicem s to funkcijo ime 'bob' iz file-a 6-alternative-flavor.js?


const poklic = require ('os')
const user = poklic.userInfo ()

console.log(user);

const uptime = poklic.uptime ()
console.log(`Ta racunalnik je "pokonc" ${uptime} sekund`);

const objekt = {
    verzija: poklic.version (),
    spomin: poklic.freemem(),
    masina: poklic.machine(),

}
console.log (objekt)

console.log (__filename)
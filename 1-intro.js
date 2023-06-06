const starost = process.argv[2]

const output = starost > 36 ? 'mlajsa' : starost < 36 ? 'starejsa' : 'stara'
console.log(`Diana je ${output} kot ${starost}`)

// if (starost > 36) {
//     console.log (`Diana je mlajsa kot ${starost}`);
// }
// else if (starost < 36) {
//     console.log (`Diana je starejsa kot ${starost}`);
// }

// else if (starost === 36) {
//     console.log (`Res je, Diana je stara ${starost}`);
// } else {

// }

//console.log ('Hello world');

// const amount = 9

// if (amount < 10) {
//   console.log('small number')
// } else {
//   console.log('large number')
// }

// console.log(`hey it's my first node app!!!`)
import { Match } from "../index.js"

var result = Match(null , {
    1: () => 6,
    '2': 'Result 2',
    default: 'Default Value'
})

console.log(result)
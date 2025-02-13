import { MatchX } from '../index.js'

var result2 = MatchX(3, [
    {
        case: (val) => val === 1,
        result: () => 1
    },
    {
        case: (val) => val === 2,
        result: '2'
    },
    {
        default: '0'
    }
])

console.log(result2)
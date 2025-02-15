# MatchJS

Pattern matching and Pattern matching with a list of conditions

## _Match example_

```js
import { Match } from 'teseract-matchjs'

let value1 = 3
let value2 = 1
let value3 = '2'

const conditions = {
    1: () => 6,
    '2': 'Result 2',
    default: 'Default Value'
}

let result1 = Match(value1, conditions)
let result2 = Match(value2, conditions)
let result3 = Match(value3, conditions)

console.log(result1) // return 'Default Value'
console.log(result2) // return 6
console.log(result3) // return 'Result 2'
```

## _MatchX example_

```js
import { MatchX } from 'teseract-matchjs'

let value1 = 3
let value2 = 1
let value3 = 2

const caseAndResult = [
    {
        case: (val) => val === 1,
        result: () => 3 * 9
    },
    {
        case: (val) => val > 1 && val < 3,
        result: 'The value is 2'
    },
    {
        default: '0'
    }
]

let result1 = MatchX(value1, caseAndResult)
let result2 = MatchX(value2, caseAndResult)
let result3 = MatchX(value3, caseAndResult)


console.log(result1) // return '0'
console.log(result2) // return 27
console.log(result3) // return 'The value is 2'
```
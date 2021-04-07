// DYNAMIC NAMESPACES
import * as constants from './constants'
// STATIC NAMESPACES
import * as assert from './assert'
// DEFAULT EXPORTS
import answer from './answer.js'

/* TREE-SHAKING */
import { cube } from './maths.js'

Object.keys(constants).forEach(key => {
  console.log(`The value of ${key} is ${constants[key]}`)
})

assert.equal(1 + 1, 2)

export const foo = 1

export function bar () {
  return foo // try changing this to `foo++`
}

function baz () {
  return bar()
}

export { baz }
// NAMED EXPORTS
export * from './qux'

export default function () {
  console.log('the answer is ' + answer)
}

console.log(cube(5)) // 125

const displayMath = 1
// DYNAMIC IMPORTS
if (displayMath) {
  import('./dynamic.js').then(function (maths) {
    console.log(maths.square(5))
    console.log(maths.cube(5))
  })
}

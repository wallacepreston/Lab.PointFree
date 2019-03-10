'use strict'

const { pipe, compose } = require('ramda')

// Predefined, already-curried functions you can use. See `./functions.js`.

const {
    square, // square(4) === 16
    add, // add(1, 2) === 3
    multiply, // multiply(1, 2) === 2
    map, // map(toLower, ['HEY', 'YO']) -> ['hey', 'yo']
    filter, // filter(isEven, [2, 5, 8, 10, 1]) -> [2, 8, 10]
    reduce, // reduce(add, 'start-', ['point-', 'free']) === 'start-point-free'
    length, // length(['currying', 'is', 'cool']) === 3
    take, // take(5, 'hello world') === 'hello'
    equals, // equals(1, 1) === true,
    isGreaterThan, // isGreaterThan(3, 5) === true
    and, // and(true, false) === false,
    not, // not(true) === false
    both, // both(isEven, is2, 2) === true
    either, // either(isEven, is1, 2) === true
    prop, // prop('name', { name: 'Jo' }) === 'Jo'
} = require('./functions')

/**
 * Functions you must derive. Note that for this exercise, you may only create
 * functions by partially applying existing functions and/or composing
 * existing functions together. For composition, you may use Ramda's `compose`
 * and/or `pipe`, already imported for you in this module. Again, do NOT define
 * new functions from scratch (using `function` or arrows or "cheats" like
 * `eval`) – you may only "remix" starting functions and ones you derive.
 */

// inc :: Number -> Number
const inc = pipe(add(1))

// negate :: Number -> Number
const negate = pipe(multiply(-1))

// negateThenInc :: Number -> Number
const negateThenInc = pipe(multiply(-1), add(1))

// doubleThenDec :: Number -> Number
const doubleThenDec = pipe(multiply(2), add(-1))

// circleArea :: Number -> Number
// (Remember, circle area = radius^2 * pi)
const circleArea = pipe(multiply(Math.PI))

// incAll :: [Number] -> [Number]
const incAll = pipe(map(add(1)))

// incThenNegateAll :: [Number] -> [Number]
const incThenNegateAll = pipe(map(add(1)), map(multiply(-1)))

// takeTwoDoubles :: [Number] -> [Number]
const takeTwoDoubles = pipe(map(multiply(2)), take(2))

// sum :: [Number] -> Number
const sum = reduce(add, 0)

// product :: [Number] -> Number
const product = reduce(multiply, 1)

// allTrue :: [Boolean] -> Boolean
const allTrue = reduce(and, true)

// isSpace :: String -> Boolean
const isSpace = undefined

// howManyPoints :: [String] -> Number
const howManyPoints = undefined

// rejectPoints :: [String] -> [String]
const rejectPoints = undefined

// isAtLeast25 :: Number -> Boolean
const isAtLeast25 = undefined

// ageIsAtLeast25 :: Object -> Boolean
const ageIsAtLeast25 = undefined

// isLicensed :: Object -> Boolean
const isLicensed = undefined

// canRentCarWithoutSurcharge :: Object -> Boolean
const canRentCarWithoutSurcharge = undefined

// getTwoEligibleRenterNames :: [Object] -> [String]
const getTwoEligibleRenterNames = undefined

module.exports = {
    inc,
    negate,
    negateThenInc,
    doubleThenDec,
    circleArea,
    incAll,
    incThenNegateAll,
    takeTwoDoubles,
    sum,
    product,
    allTrue,
    isSpace,
    howManyPoints,
    rejectPoints,
    isAtLeast25,
    ageIsAtLeast25,
    isLicensed,
    canRentCarWithoutSurcharge,
    getTwoEligibleRenterNames,
}

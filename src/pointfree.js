'use strict'

const { pipe, compose } = require('ramda')

// Predefined, already-curried functions you can use. See `./functions.js`.

const {
    square, // square(4) === 16
    add, // add(1, 2) === 3
    multiply, // multiply(1, 2) === 2
    map, // map(toLower, ['HEY', 'YO']) -> ['hey', 'yo']
    append, // append('-free', 'point') === 'point-free'
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
const inc = undefined

// ask :: String -> String
const ask = undefined

// negate :: Number -> Number
const negate = undefined

// negateThenInc :: Number -> Number
const negateThenInc = undefined

// doubleThenDec :: Number -> Number
const doubleThenDec = undefined

// circleArea :: Number -> Number
// (Remember, circle area = pi * radius^2)
const circleArea = undefined

// incAll :: [Number] -> [Number]
const incAll = undefined

// incThenNegateAll :: [Number] -> [Number]
const incThenNegateAll = undefined

// takeTwoDoubles :: [Number] -> [Number]
const takeTwoDoubles = undefined

// sum :: [Number] -> Number
const sum = undefined

// product :: [Number] -> Number
const product = undefined

// allTrue :: [Boolean] -> Boolean
const allTrue = undefined

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
    ask,
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

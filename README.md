# numbers-scale

[![npm version](https://badge.fury.io/js/numbers-scale.svg)](http://badge.fury.io/js/numbers-scale) 
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fnumbers-scale)](https://bit.dev/joshk/numbers-scale/numbers-scale) 
[![Build Status](https://travis-ci.org/hunnble/numbers-scale.svg?branch=master)](https://travis-ci.org/hunnble/numbers-scale)
[![install size](https://packagephobia.now.sh/badge?p=numbers-scale)](https://packagephobia.now.sh/result?p=numbers-scale)
![downloads-image](https://img.shields.io/npm/dw/numbers-scale.svg) 
![downloads-image](https://img.shields.io/npm/dm/numbers-scale.svg)
[![GitHub stars](https://img.shields.io/github/stars/hunnble/numbers-scale)](https://github.com/hunnble/numbers-scale/stargazers)

Scale of numbers.  
[Live demo with tests and examples.](https://bit.dev/joshk/numbers-scale/numbers-scale)

### Install
```shell
npm install numbers-scale
```

### Usage examples
```js
const { Scale } = require('numbers-scale')

// get scaled instance
const number = 65536
const scale = new Scale(number)

// how to use
scale.output() // output returns '65k'
scale.raw // raw is 65536
scale.num // num is 65
scale.symbol // symbol is 'k'
scale.valid() // validation returns true
```
```js
const { Scale } = require('numbers-scale')

// get scaled instance
const number = 100000000
const scale = new Scale(number)

// how to use
scale.output() // output returns '100M'
scale.raw // raw is 100000000
scale.num // num is 100
scale.symbol // symbol is 'M'
scale.valid() // validation returns true
```
```js
const { Scale } = require('numbers-scale')

// get scaled instance
const number = 1000000000
const scale = new Scale(number)

// how to use
scale.output() // output returns '1G'
scale.raw // raw is 1000000000
scale.num // num is 1
scale.symbol // symbol is 'G'
scale.valid() // validation returns true
```

# numbers-scale

![npm-image](https://img.shields.io/npm/v/numbers-scale.svg)
[![Build Status](https://travis-ci.org/hunnble/numbers-scale.svg?branch=master)](https://travis-ci.org/hunnble/numbers-scale)
[![install size](https://packagephobia.now.sh/badge?p=numbers-scale)](https://packagephobia.now.sh/result?p=numbers-scale)
![downloads-image](https://img.shields.io/npm/dw/numbers-scale.svg)
![downloads-image](https://img.shields.io/npm/dm/numbers-scale.svg)
![downloads-image](https://img.shields.io/npm/dy/numbers-scale.svg)
![downloads-image](https://img.shields.io/npm/dt/numbers-scale.svg)
[![GitHub stars](https://img.shields.io/github/stars/hunnble/numbers-scale)](https://github.com/hunnble/numbers-scale/stargazers)

Scale of numbers.  
[Live demo.](https://bit.dev/joshk/numbers-scale/numbers-scale)

### install
```shell
npm install numbers-scale
```

### example
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

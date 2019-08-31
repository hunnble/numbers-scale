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

### Installation
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

### Licence

MIT License

Copyright (c) 2019 Noski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

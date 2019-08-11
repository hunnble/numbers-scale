# numbers-scale

Scale of numbers.

### install
```shell
npm install numbers-scale
```

### example
```js
const Scale = require('numbers-scale')

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

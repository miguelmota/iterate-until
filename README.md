# iterate-until

Iteratively invokes a function until condition is met.

# Install

```bash
npm install iterate-until
```

```bash
bower install iterate-until
```

# Usage

```javascript
var iterateUntil = require('iterate-until');

function addTwo(i) {
  return i + 2;
}

function isLessThanEight(n) {
  return n < 8;
}

var initial = 0;

var result = iterateUntil(isLessThanEight, addTwo, initial);

console.log(result); // [2,4,6]
```

# License

MIT

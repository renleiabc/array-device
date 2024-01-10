Handle your array objects with ease

Install it

```
npm install array-device
```

Specific usage:

Array object deduplication

```javascript
import { reduce } from 'array-device';
const arr = [
  {
    id: 1,
    name: 'noah',
    age: 18
  },
  {
    id: 1,
    name: 'mark',
    age: 18
  }
];
console.log(reduce(arr, 'id'));
//[{id: 1, name: 'noah', age: 18]
```

Add the selected field to the matching array, suitable for all selections and half selections

```javascript
import { all } from 'array-device';
let a = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 }
];
let c = [1, 4];
console.log(all(a, c, 'id', 'boo'));
//[{id: 1, a: 123, b: 1234, boo: true}，{id: 2, a: 123, b: 1234, boo: false}]
```

Filter out the array of objects that meet the criteria

```javascript
import { part } from 'array-device';
let b = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 },
  { id: 3, a: 123, b: 1234 },
  { id: 4, a: 123, b: 1234 }
];
let c = [1, 4];
console.log(part(b, c, 'id'));
//[{id: 1, a: 123, b: 1234},{id: 4, a: 123, b: 1234}]
```

Filter out an array of objects that do not meet the criteria

```javascript
import { other } from 'array-device';
let b = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 },
  { id: 3, a: 123, b: 1234 },
  { id: 4, a: 123, b: 1234 }
];
let c = [1, 4];
console.log(other(b, c, 'id'));
//[{id: 2, a: 123, b: 1234},{id: 3, a: 123, b: 1234}]
```

Find the intersection of two arrays of objects

```javascript
import { intersection } from 'array-device';
let a = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 }
];
let b = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 },
  { id: 3, a: 123, b: 1234 },
  { id: 4, a: 123, b: 1234 }
];
console.log(intersection(a, b, 'id'));
//[{"id":1,"a":123,"b":1234},{"id":2,"a":123,"b":1234}]
```

Find the difference of two arrays of objects

```javascript
import { difference } from 'array-device';
let a = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 }
];
let b = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 },
  { id: 3, a: 123, b: 1234 },
  { id: 4, a: 123, b: 1234 }
];
console.log(difference(b, a, 'id'));
//[{"id":3,"a":123,"b":1234},{"id":4,"a":123,"b":1234}]
```

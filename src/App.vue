<script setup lang="ts">
// import { ref, reactive } from 'vue';
import typescriptLogo from './typescript.svg';
import { reduce, difference, part, other, version } from '../lib/main';

console.log(version);
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
console.log(reduce(arr));
const a = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 }
];
const b = [
  { id: 1, a: 123, b: 1234 },
  { id: 2, a: 123, b: 1234 },
  { id: 3, a: 123, b: 1234 },
  { id: 4, a: 123, b: 1234 }
];
const arr1 = [...b].filter((x) => [...a].some((y) => y.id === x.id));
console.log('arr', arr1);
console.log(JSON.stringify(difference(b, a, 'id')));
console.log(difference(a, b, 'id'));
const c = [1, 4];
console.log(part(b, c, 'id'));
const arr3 = b.filter((item) => {
  //  item.select = c.some((el) => el === item.id);
  return c.some((el) => el === item.id);
});
console.log(arr3);
// console.log(part(, c, 'id'));
const arr4 = b.filter((item) => {
  return c.every((el) => el !== item.id);
});
console.log(arr4);
console.log(other(b, c, 'id'));
</script>

<template>
  <div>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="./vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img
          :src="`${typescriptLogo}`"
          class="logo vanilla"
          alt="TypeScript logo"
        />
      </a>
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  </div>
</template>

// Exercice 2

let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;

console.log({ a, b });

[a, b] = [b, a];

console.log({ a, b });

temp = a + b;
a = temp - a;
b = temp - b;

console.log({ a, b });

let x = 3;
let y = 4;
let z = 5;

// Exercice 3
[y, z, x] = [x, y, z];

console.log({ x, y, z });

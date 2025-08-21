// Task 1
let number = 0; 
if (number > 0) {
  console.log("Positive Number");
} else if (number < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// Task 2
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 3
let i = 1;
while (i <= 50) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// Task 4
let a = 10;
let b = 25;
let c = 5;

if (a >= b && a >= c) {
  console.log(a + " is the largest");
} else if (b >= a && b >= c) {
  console.log(b + " is the largest");
} else {
  console.log(c + " is the largest");
}

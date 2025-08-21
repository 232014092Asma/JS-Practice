// Task 1
function addNumbers(a, b) {
    return a + b;
}
console.log("Sum:", addNumbers(10, 5));

// Task 2
let students = ["Rahim", "Karim", "Anika", "Sonia", "Jamal"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Task 3
function averageArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
let nums = [10, 20, 30];
console.log("Average:", averageArray(nums));

// Task 4
function numbersGreaterThan10(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            result.push(arr[i]);
        }
    }
    return result;
}
let arr = [5, 12, 8, 25, 3];
console.log("Numbers > 10:", numbersGreaterThan10(arr));

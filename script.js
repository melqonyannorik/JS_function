//6. Տրված են a,b,c բնական թվերը, որոնք եռանկյան կողմերի երկարություններն են: Արտածել YES, եթե a,b,c կողմերով եռանկյունը

//ա) հավասարակողմ է,

// function number(a, b, c) {
//   if (a === b && b === c && a === c) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(2, 2, 2);

// բ) հավասարասրուն է

// function number(a, b, c) {
//   if ((a === b && b !== c) || (b === c && a !== c) || (a === c && b !== c)) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }

// number(4, 4, 2);

//գ) ուղղանկյուն է:

// function number(a, b, c) {
//   if (a ** 2 + b ** 2 === c ** 2) {
//     console.log("Yes");
//   } else {
//     console.log("No");
//   }
// }
// number(2, 4, 5);

//7. Տրված են երեք ամբողջ թվեր: Արտածել

//ա) դրանցից փոքրագույնի արժեքը,

// function number(a, b, c) {
//   if (a < b && a < c) {
//     return a;
//   } else if (b < c && b < a) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(number(9, 1, 5));

//բ) դրանցից մեծագույնի արժեքը

// function number(a, b, c) {
//   if (a > b && a > c) {
//     return a;
//   } else if (b > c && b > a) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(number(9, 1, 11));

//գ) մեծությամբ երկրորդ թվի արժեքը,

// function number(a, b, c) {
//   if ((a > b && a < c) || (a < b && a > c)) {
//     return a;
//   } else if ((b > a && b < c) || (b < a && b > c)) {
//     return b;
//   } else {
//     return c;
//   }
// }
// console.log(number(18, 5, 4));

const max = process.argv[2];
   let FizzBuzz = {
     [Symbol.iterator]() {
       // here belongs the FizzBuzz logic
       // Hint：
       // When it's finished you have to return an object
       // with the property `done: true` but before you
       // have to set `done: false`
     }
   }

   for (var n of FizzBuzz) {
     console.log(n);
   // 1
   // 2
   // Fizz
   // 4
   // Buzz
   // Fizz
   // 7
   // 8
   // Fizz
   // Buzz
   // 11
   // Fizz
   // 13
   // 14
   // FizzBuzz
   // 16
   // 17
   // Fizz
   // 19
   // Buzz
   // Fizz
   // 22
   // 23
   // Fizz
   // Buzz
   // 26
   // Fizz
   // 28
   // 29
   // FizzBuzz
   // ...
   }

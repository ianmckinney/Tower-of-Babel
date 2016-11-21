
       // here belongs the FizzBuzz logic
       // Hint：
       // When it's finished you have to return an object
       // with the property `done: true` but before you
       // have to set `done: false`


   const max = +process.argv[2];
   let FizzBuzz = {
       [Symbol.iterator]() {
           let numbers = 1;
           return {
               next() {
                   if(numbers > max)
                       return { done: true };
                   let value = numbers;
                   if(numbers % 15 === 0)
                       value = 'FizzBuzz';
                   else if(numbers % 3 === 0)
                       value = 'Fizz';
                   else if(numbers % 5 === 0)
                       value = 'Buzz';
                   ++numbers;
                   return { done: false, value: value };
             }
         };
     }
   };

   for(var n of FizzBuzz) {
     console.log(n);
   }

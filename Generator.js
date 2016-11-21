
let FizzBuzz = function*(){
    let numbers = 1;

    while (numbers <= process.argv[2]){
                if(numbers % 15 === 0){
                    numbers++;
                    yield 'FizzBuzz';
                    }
                else if(numbers % 3 === 0){
                    numbers++;
                    yield 'Fizz';
                }
                else if(numbers % 5 === 0){
                    numbers++;
                    yield 'Buzz';
                }
                else{
                yield numbers++
            }

          }
      }();


  for(var n of FizzBuzz) {
    console.log(n);
}

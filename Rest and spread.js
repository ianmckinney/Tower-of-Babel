var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

    // write a function called `avg` here that calculates the average.
    let avg = function(...nums) {
      return nums.reduce((total, num) => total + num, 0) / nums.length;
};
console.log(avg(...args));

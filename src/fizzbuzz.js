function fizzbuzz(num, num2) {

    num2 = 30;
    // let numberValue;
    for(let number = 1; number<num2;number++){
        if (number%3 === 0){
           console.log('Fizz');
        }
        if (number%5 === 0){
            console.log('Buzz');
        }
        if (number%5 === 0 && number%5 === 0){
            console.log("FizzBuzz");
        }
        console.log(number);
    }
}

export default fizzbuzz;

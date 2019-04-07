//function for 1st input box
$(function () {
    // Set up some data and variables
    const data = [4, 6, 22, 78],
        input = $('.input1'),
        submit = $('.submit1'),
        resultSum = $('.result1');
    // Click event on the submit input
    submit.on('click', function () {
        // Grab the input value and parse it into a number
        const val = input.val();
        const num = parseInt(val);
        // Verify the user gave us a real number
        if (!isNaN(num)) {
            // Add our new number to the data array
            data.push(num);
            // Use reduce to convert our array of numbers into a single value - the sum of all of the numbers
            const sum = data.reduce((acc, curr) => acc + curr);
            // Add our new total to the page
            resultSum.text(sum);
            // Reset the input value to an empty string
            input.val('');
        }
    });
});

//function for 2nd input box
$(function (){
  //set up variables
  const data = [4, 6, 22, 78],
        input = $('.input2'),
        submit = $('.submit2'),
        result = $('.result2');
  //click event on submit button
  submit.on('click', function() {
    //grab the input value and parse it ion to a number
    const val2 = input.val();
    const num = parseInt(val2);
    //use map to add the input on to each value in the Array
    let newArray = data.map(function(value) {
      return value + num;
    });
    //Display the new Array on the page
    result.text(newArray);
    //Reset the input value to an empty string
    input.val('');
  });
});

//function for 3rd input box
$(function (){
  //set up variables
  const data = [4, 6, 22, 78],
        input = $('.input3'),
        submit = $('.submit3'),
        result = $('.result3');
  //click event on submit button
  submit.on('click', function() {
    //grab the input value and parse it ion to a number
    const val2 = input.val();
    const num = parseInt(val2);
    //use includes to check if input is part of the Array
    let answer = data.includes(num);
    //Display the new Array on the page
    result.text(answer);
    //Reset the input value to an empty string
    input.val('');
  });
});

//function for 4th input box
$(function (){
  //set up variables
  const data = [4, 6, 22, 78],
        input = $('.input4'),
        submit = $('.submit4'),
        result = $('.result4');
  //click event on submit button
  submit.on('click', function() {
    //grab the input value and parse it ion to a number
    const val2 = input.val();
    const num = parseInt(val2);
    //use filter function to filter all values above numer entered
    let answer = data.filter(function(value) {
      return value > num;
    });
    //Display the new Array on the page
    result.text(answer);
    //Reset the input value to an empty string
    input.val('');
  });
});

// Reverse the given string
//split the string into array of characters
//reverse the order of the element in the string
// join the character back together

function reverse_string(str){
  return str.split('').reverse().join('');
}

//calling the function
string_reversed = reverse_string('hello');
console.log(string_reversed);
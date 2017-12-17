//factorial
function factorial(n) {
 if (n < 0) {
    return - 1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}


//reverse string
function reverseString(string) {  
   if ( str.length <= 1 ) {    
          return str;  
   }  
      return reverse(string.substr(1)) + string[ 0 ];
}
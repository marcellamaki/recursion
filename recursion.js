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


// palindrome checker 

function isPalindrome(string) {      
   if (string.length === 0 || string.length === 1) {        
       return true;    
    }        
   if (string[0] === string[string.length - 1]) {        
     return isPalindrome( string.slice(1, string.length - 1) );     
   }       
  return false;
};
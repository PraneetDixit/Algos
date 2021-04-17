// Finding lcm of two integers "a" and "b" by property :-
//HCF(a, b) * LCM(a, b) = a*b

import hcf from './hcf'; // Helper function

function lcm(a, b){
  return (a*b)/hcf(a, b);  
}

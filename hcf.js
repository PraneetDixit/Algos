// Finding HCF of numbers using Euclid's division algorithm

/**
** Core function :-
** Accepts two integers num1 and num2
**/

function hcf(num1, num2){
	let a = Math.max(n1, n2);
	let b = Math.min(n1, n2);
	let r = a;
	while(r){
		a = b;
		b = r;
		r = a%b;
	}
	return b;
}

/**
** Implementation for more than two numbers :-
** Accepts and array arr of integers
**/

function hcfMultiple(arr){
	let init = hcf(arr[0], arr[1]);
	for(let i=2; i<arr.length; i++){
		init = hcf(init, arr[i]);
	}
	return init;
}

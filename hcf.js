// Finding HCF of two numbers using Euclid's division algorithm

function hcf(n1, n2){
	let a = Math.max(n1, n2);
	let b = Math.min(n1, n2);
	let r = 1;
	while(r){
		a = b;
		b = r;
		r = a%b;
	}
	return b;
}

export {hcf as default}; // For importing in other files

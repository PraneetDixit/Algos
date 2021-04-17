// Finding HCF of two numbers using Euclid's division algorithm

function hcf(n1, n2){
	let a = Math.max(n1, n2);
	let b = Math.min(n1, n2);
	let r = a%b;
	
	while(r){
		a = b;
		b = r;
		r = a%b;
	}
	
	return b;
}

hcf(5, 5); // 5
hcf(196, 38220); // 196
hcf(867, 255); // 51
hcf(4052, 12567); // 4

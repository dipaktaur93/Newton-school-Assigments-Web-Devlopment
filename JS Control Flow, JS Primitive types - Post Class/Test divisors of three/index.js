function test_divisors(low, high) {
let s ="";
	for(let i=low; i<=high;i++){
		if(i%3==0){
			s= s+ i+" "+"div3"+" ";
		}
		else{
			s=s+i+" ";
		}
	}
	console.log(s);
}

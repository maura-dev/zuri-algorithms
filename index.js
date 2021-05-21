function convertFahrToCelsius(num){

	if(Array.isArray(num)==true){

		return `[${num}] is not a valid number but a/an array`
	}

	else if(typeof(num)=="boolean"){
		return `${num} is not a valid number but a/an ${typeof(num)}`;
	}

	else if(num===""){
			return ` "" is not a valid number but a/an string`;
		}


	else if(isNaN(num)==true){
		var inputType= typeof(num);
		if(inputType=="object"){
			var objectParams= JSON.stringify(num);
			return `${objectParams} is not a valid number but a/an ${inputType}`;
		}

		else{
			return `${num} is not a valid number but a/an ${inputType}`;
		}
		
	} 

	else{
		var x= Number(num)-32;
		var y= 0.55555556 * x;
		return Number(y.toFixed(4))
	}
}

//convertFahrToCelsius(0)
//convertFahrToCelsius([1,2,3])
//convertFahrToCelsius({"temp":0})



function checkYuGiOh(n){
	
	if(isNaN(n)==true){
		return `invalid parameter: "${n}"`
	}

	else if(typeof(n)=="boolean"){
		return `invalid parameter: "${n}"`
	}

	else if(n===""){
		return `invalid parameter: ""`
	}

	else if(n===0|| n==="0"){
		return `invalid parameter: ${n}`
	}

	else{
		var arr=[];
		let num=Number(n);
		for(var i=1; i<num+1; i++){
			if(i%2==0&&i%3==0&&i%5==0){
				arr.push("yu-gi-oh")
			}
			else if(i%2==0&&i%3==0&&i%5!=0){
				arr.push("yu-gi")
			}
			else if(i%2==0&&i%3!=0&&i%5==0){
				arr.push("yu-oh")
			}
			else if(i%2!=0&&i%3==0&&i%5==0){
				arr.push("gi-oh")
			}
			else if(i%2==0&&i%3!=0&&i%5!=0){
				arr.push("yu")
			}
			else if(i%2!=0&&i%3==0&&i%5!=0){
				arr.push("gi")
			}
			else if(i%2!=0&&i%3!=0&&i%5==0){
				arr.push("oh")
			}
			else{
				arr.push(i);
			}
		}
		return arr;
	}

}

//checkYuGiOh(10)
//checkYuGiOh("5")
//checkYuGiOh("fizzbuzz is meh")













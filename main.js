
function BMI() {
	let w = document.getElementById("weight").value;
	let h = document.getElementById("height").value;
	var i = Math.round(w/(Math.pow(h,2)))

	if (i < 18.5) {
		document.getElementById('calculate').innerHTML = 'Your BMI is ' + i + '!' + ' You are underweight' + '.';
	} 
	else if (i >= 18.5 && i <= 24.9) {
		document.getElementById('calculate').innerHTML = 'Your BMI is ' + i + '!' + ' You have normal weight' + '.';
	} 
	else if (i >=25 && i <= 29.9) {
		document.getElementById('calculate').innerHTML = 'Your BMI is ' + i + '!' + ' You are overweight' + '.';
	} 
	else {
		document.getElementById('calculate').innerHTML = 'Your BMI is ' + i + '!' + ' You are obese' + '.';
	}
}
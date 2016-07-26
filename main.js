// Generate a big array of 2 digit numbers
var arrayLength = [1002, 5001, 50001, 150000, 400002, 800001, 2000001, 6000000, 12000000];

function standardParse(array){
	var result = [];
	var startTime = new Date();
	for (var i = 0; i < array.length; i += 3){
		var obj = {
			x: array[i] * 2 / 4 * 6,
			y: array[i+1] * 2 / 4 * 6,
			z: array[i+2] * 2 / 4 * 6,
		}
		result.push(obj);
	}
	var endTime = new Date();
	var totalTime = (endTime.getTime() - startTime.getTime()) / 1000;
	return [result, totalTime];
}


function setLengthParse(array){
	var startTime = new Date();
	var result = new Array(array.length / 3);
	var entryIndex = 0;
	for (var i = 0; i < array.length; i+= 3){
		result[entryIndex] = {
			x: array[i] * 2 / 4 * 6,
			y: array[i+1] * 2 / 4 * 6,
			z: array[i+2] * 2 / 4 * 6,
		}
		entryIndex++;
	}
	var endTime = new Date();
	var totalTime = (endTime.getTime() - startTime.getTime()) / 1000;
	return [result, totalTime];
}


for (var i = 0; i < arrayLength.length; i++){
	var testArray = [];
	while (testArray.length < arrayLength[i]){
		testArray.push(Math.floor(Math.random() * 89 + 10)); // Always 2 digits
	}
	console.log('\n');
	console.log('Array Length: ', testArray.length);
	console.log('Push to Array:    ', standardParse(testArray)[1], ' seconds');
	console.log('Set Length Array: ', setLengthParse(testArray)[1], ' seconds');
}

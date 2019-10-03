//Given an array and a number k where k is smaller than the size of the array, we need to 

//find the k’th smallest element in the given array. It is given that all array elements 

//are 

//distinct.


//Examples:

//Input: arr[] = {7, 10, 4, 3, 20, 15}
//     k = 3
//Output: 7

//Input: arr[] = {7, 10, 4, 3, 20, 15}
//     k = 4
//Output: 10

var inputArr = [7, 10, 4, 3, 20, 15]

function selectionSort(inputArr) {
	//outer for loop
	for (let i = 0; i < inputArr.length; i++) {
		let currMin = inputArr[i];
		//inner for loop
		for (let j = i + 1; j < inputArr.length; j++) {
			if (currMin > inputArr[j]) {
				currMin = inputArr[j];
			}
		}
		let tempIdxVal = inputArr.indexOf(currMin);
		let temp = inputArr[i];
		inputArr[i] = inputArr[tempIdxVal];
		inputArr[tempIdxVal] = temp;
	}
	return inputArr;
}

var resultArr = selectionSort(inputArr);
console.log(resultArr);

function kthSmallest(k, resultArr) {
	return resultArr[k - 1];
}

function kthLargest(k, resultArr) {
	let length = resultArr.length - k;
	return resultArr[length];
}

var small = kthSmallest(3, resultArr);
var large = kthLargest(2, resultArr);

console.log(small);
console.log(large);
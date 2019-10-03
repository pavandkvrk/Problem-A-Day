//Given an array of integers and an integer k, you need to find the total number of ////  

//continuous subarrays whose sum equals to k.

//Example 1:
//Input:nums = [1,1,1], k = 2
//Output: 2

var nums = [1,2,3];

function subArr(nums, k) {
	let count = 0;
	if (nums.length == 0) {
		return 0;
	}
	if (nums.length == 1 && k == 1) {
		return 1;
	}
	if (nums.length == 0 && k != 1) {
		return 0;
	}
	for (let i = 0; i < nums.length; i++) {
		let sum = nums[i];
		if (sum == k) {
			count++;
		}
		for (let j = i + 1; j < nums.length; j++) {
			sum = sum + nums[j];
			if (sum == k) {
				count++;

			}
		}
	}
	return count;

}

var x = subArr(nums, 3);
console.log(x);
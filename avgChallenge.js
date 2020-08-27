// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2


// First try, no function, just a for loop

// const arr = [75,76,80,95,100];

// function avg(arr){
//     let total = 0;
//     for (let num of arr){
//         total += num;
//     }
//     let res = total/arr.length;
//     return res;
// }





function avg(arr) {
	let total = 0;
	//loop over each num
	for (let num of arr) {
		//add them together
		total += num;
	}
	//divide by number of nums
    let res = total / arr.length;
    return res;
}
const number =[1,2,3,4,5,]
function printSum(array){
   const result=array.reduce((previous, next)=>{
       return previous+next
   })
   console.log(result)
}

function compareTriplets(a, b) {
    // Write your code here
    let alicePoint=0
    let bobPoint=0
    
    // Loop through and compare the various indexes of the two arrays
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
          alicePoint+=1
        }else if(b[i]>a[i]){
          bobPoint+=1
        }
    }

    let finalArray=[]
    // Add alice and bobs point to the array
    finalArray.push(alicePoint)
    finalArray.push(bobPoint)
    
    return finalArray
}

function positiveNegativeZero(arr)
{
	// Store the array length into
	// the variable len.
	let len = arr.length;

	// Initialize the postiveCount,
	// negativeCount, and zeroCountby
	// 0 which will count the total number
	// of positive, negative and zero elements
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

	// Traverse the array and count the
	// total number of positive, negative,
	// and zero elements.
	for(let i = 0; i < len; i++)
	{
		if (arr[i] > 0)
		{
			positiveCount++;
		}
		else if (arr[i] < 0)
		{
			negativeCount++;
		}
		else if (arr[i] == 0)
		{
			zeroCount++;
		}
	}

	// Print the ratio of positive,
	// negative, and zero elements
	// in the array up to four decimal places.
	console.log((positiveCount / len).toFixed(4) + " ");
	console.log((negativeCount / len).toFixed(4) + " ");
	console.log((zeroCount / len).toFixed(4));
}

function firstFunction(num1, num2){
  console.log(num1 + num2);
}


// Write a function which takes an array and prints the majority element (if it exists), otherwise prints “No Majority Element”. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element).  
  
// Examples :  
  
// Input : {3, 3, 4, 2, 4, 4, 2, 4, 4} 
// Output : 4 
// Explanation: The frequency of 4 is 5 which is greater 
// than the half of the size of the array size.  
  
// Input : {3, 3, 4, 2, 4, 4, 2, 4} 
// Output : No Majority Element 
// Explanation: There is no element whose frequency is 
// greater than the half of the size of the array size. 


function majorityElement(input) {
    let halfLength=(input.length)/2;
    let result=[];
    const noDuplicates=input.filter((x,index)=>{
        return input.indexOf(x)===index;
    });
    for (let i of noDuplicates){
        let count=0;
        for (let j of input){
            if (i===j){
                count+=1;
            }
        }
        if (count >halfLength){
            result.push(i);
        }
    }
    result.length!==0 ? console.log(...result):console.log("No Majority Element");
	}
 
	
let input= [ 3, 3, 4, 2, 4, 4, 2, 4, 4];
majorityElement(input);
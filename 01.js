// Write a function rotate(ar[], d, n) that rotates arr[] of size n by d elements.   
// Example 
// Input :   
// ar[] =1 2 3 4 5 
// d = 2  
// n = 5 
  
// Output: 
// 3 4 5 1 2 


function rotatesNTimesByDelements(array,d,n) {
    let nElements=array.slice(0,n);
    let noOfTimesRotates=(d%n);
    let first=nElements.slice(noOfTimesRotates,nElements.length);
    let second=nElements.slice(0,noOfTimesRotates);
    let finalArry=first.concat(second);
    let result="";
    for (let i of finalArry){
        result+=i+" ";
    }
	console.log(result.trim());
	}
 
	
const array= [ 1, 2, 3, 4, 5];
d = 2;
n = 5;
rotatesNTimesByDelements(array,d,n);
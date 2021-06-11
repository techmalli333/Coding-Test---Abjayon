//  Given a Boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.  
  
// Example:   
  
// Input matrix 
// 0 1 1 1 
// 0 0 1 1 
// 1 1 1 1  // this row has maximum 1s 
// 0 0 0 0 
  
// Output: 2 


function maxOnesArryIndex(array) {
    let result=[];
    for (let i=0; i<array.length;i++){
        let count=0;
        for (let j=0; j<array[i].length;j++){
            if (array[i][j]===1){
                count+=1;
            }
        }
        result.push(count);
    }
    let max=result[0];
    for (let i of result){
        if (i>max){
            max=i;
        }
    }
    console.log(result.indexOf(max));
	}
 
const array= [[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]];
maxOnesArryIndex(array);
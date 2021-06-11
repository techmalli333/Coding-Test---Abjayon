// Three arrays of same size are given. Find a triplet such that maximum – minimum in that triplet is minimum of all the triplets. A triplet should be selected in a way such that it should have one number from each of the three given arrays.  
// If there are 2 or more smallest difference triplets, then the one with the smallest sum of its 	elements should be displayed. 
 
// Examples :  
  
// Input : arr1[] = {5, 2, 8} 
//     arr2[] = {10, 7, 12} 
//     arr3[] = {9, 14, 6} 
// Output : 7, 6, 5 
  
// Input : arr1[] = {15, 12, 18, 9} 
//     arr2[] = {10, 17, 13, 8} 
//     arr3[] = {14, 16, 11, 5} 
// Output : 11, 10, 9 
// Note:The elements of the triplet are displayed in non-decreasing order. 



function findTriplets(arr1,arr2,arr3){
    let length=arr1.length;
    let result=[];
    let result_difference=[];
    for (let i=0; i<length; i++) {
        for (let j=0; j<length; j++) {
            for (let k=0; k<length; k++){
                if (((arr1[i]- arr2[j])=== (arr2[j]- arr3[k])) | ((arr2[j]-arr3[k]) === (arr3[k]-arr1[i]))){
                    let value=[arr1[i],arr2[j],arr3[k]];
                    value.sort();
                    value.reverse();
                    result.push(value);
                }
            }
        }
    }
    for (let i of result){
        let diff=i[0]-i[1];
        result_difference.push(diff);
    }
    let min=result_difference[0];
    for (let i of result_difference){
        if (i<min){
            min=i;
        }
    }
    let final_reslult=[];
    for (let i=0; i<result.length; i++){
        if (min==result_difference[i]){
            final_reslult.push(result[i]);
        }
    }
    if(final_reslult.length>1){
        let total=final_reslult[0].reduce((a,b)=>a+b);
        let index=0;
        for (let i=0; i<final_reslult.length; i++){
            let sum=final_reslult[i].reduce((a,b)=>a+b);
            if ( sum<total ){
                total=sum;
                index=i;
            }
        }
        console.log((final_reslult[index]).join(", "))
        }
    }

    

let arr1 = [5, 2, 8];
let arr2 = [10, 7, 12];
let arr3 = [9, 14, 6];

arr1.sort();
arr2.sort();
arr3.sort();

findTriplets(arr1,arr2,arr3);
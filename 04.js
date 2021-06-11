// Given a matrix of N * M. Find the maximum path sum in matrix. The maximum path is sum of all elements from first row to last row where you are allowed to move only down or diagonally to left or right. You can start from any element in first row. 
  
// Examples:  
  
// Input : mat[][] = 10 10  2  0 20  4 
//                   1  0  0 30  2  5 
//                   0 10  4  0  2  0 
//                   1  0  2 20  0  4 
// Output : 74 
// The maximum sum path is 20-30-4-20. 
  
// Input : mat[][] = 1 2 3 
//                   9 8 7 
//                   4 5 6 
// Output : 17 
// The maximum sum path is 3-8-6. 


function result(arry,m,n){
    let total=0;
    let maxValue=arry[0][0];
    for (let i of arry[0]){
        if (i>maxValue){
            maxValue=i;
        }
    }
    let maxValueIndex=arry[0].indexOf(maxValue);
    for (let i of arry){
        if (maxValueIndex<n-1){
            if ((i[maxValueIndex-1]>i[maxValueIndex]) & (i[maxValueIndex-1]>i[maxValueIndex+1])){
                total+=i[maxValueIndex-1];
                maxValueIndex-=1;
            }
            else if(i[maxValueIndex]>i[maxValueIndex+1]){
                total+=i[maxValueIndex];
            }
            else{
                total+=i[maxValueIndex+1];
                maxValueIndex+=1;
            }
        }
        else{
            if(i[maxValueIndex-1]>i[maxValueIndex]){
                total+=i[maxValueIndex-1];
                maxValueIndex=i[maxValueIndex-1];
            }
            else{
                total+=i[maxValueIndex];
                maxValueIndex=i[maxValueIndex];
            }
        }
    }
    console.log(total);
}
 
arry = [[ 10, 10, 2, 0, 20, 4 ],[ 1, 0, 0, 30, 2, 5 ],[ 0, 10, 4, 0, 2, 0 ],[ 1, 0, 2, 20, 0, 4 ]];
m=arry.length;
n=arry[0].length;
result(arry,m,n);
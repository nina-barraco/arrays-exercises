//Write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)
function printReverse(array) {
    //array.length - 1 because the length is always 1 greater than the greatest index.
    for(var i = array.length - 1; i >= 0; i--) {
      console.log(array[i]);
    }
  }
  
  printReverse([3,6,2,5]);
//to read a 


//write a function isUniform() which takes an array as an argument and return true if all elements int he array are identical. Cool!
function isUniform(array) {
    var result = true;
    for(var i = 0; i <= array.length - 2; i++) {
      if(array[i] != array[i + 1]) {
        result = false;
      }
    }
    return result;
  }
  
  isUniform([1,1,1,1]);
//could also write like..
function isUniform(arr) {
    var first = arr[0];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] !== first) {
        return false
      }
    }
    return true
  }
  
    isUniform([1,1,1,1]);


//write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array
//my stab..
function sumArray(nums) {
  var sum = nums[i] += nums[i];
  for(var i = 1; i < nums.length; i++) {
    sum += nums[i];
  }
  // console.log(sum)
}

sumArray([1,2,3,4]);
//apparently the right way which errors..
function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element){
      total += element;
    });
    return total
  }
  
  sumArray(1,2,3,4);


//write a function max() that accepts an aray of numbers and return the maximum number in the array
function max(arr) {
    var max = arr[0];
    for(var i = 1; i < arr.length; i++) {
      if(arr[i] > max) {
        max = arr[i];
      }
    }
    return max
  }
  
  max([1,8,5]);

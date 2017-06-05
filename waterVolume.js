/**
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water
collected by the buildings represented by the array?
*/

function volume (heights) {
  // Track indexes of max height per building
  var maxIndexes = [];
  var currMax = -1;
  var maxIndex = 0;

  // Function to add up between 2 indexes
  function sumBetween(i1, i2) {
    var tot = 0;
    var min = Math.min(heights[i1], heights[i2]);
    if(heights[i1] <= heights[i2]){
      for(var i = i1 + 1; i < i2; i++) {
        if(heights[i] < min) tot += min - heights[i];
        else break;
      }
    }
    else {
      for(var i = i2 - 1; i > i1; i--) {
        if(heights[i] < min) tot += min - heights[i];
        else break;
      }
    }
    return tot;
  }

  for(var i = 0; i < heights.length; i++) {
    // new building
    if(heights[i] === 0) {
      maxIndexes.push(maxIndex);
      maxIndex = i;
      currMax = 0;
    }
    else if(heights[i] > currMax) {
      currMax = heights[i];
      maxIndex = i;
    }
  }

  // Push last max
  maxIndexes.push(maxIndex);

  var total = 0;
  for(var i = 0; i < maxIndexes.length - 1; i++) {
    total += sumBetween(maxIndexes[i], maxIndexes[i+1]);
  }
  return total;
}

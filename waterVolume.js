/**
You are given an array of numbers that each represent the height of an adjoining building. During torrential rain, water collects in the spaces between buildings. What is the maximum amount of water
collected by the buildings represented by the array?
*/

function volume (heights) {
  var maxIndexes = [];
  var currMax = -1;
  var maxIndex = 0;

  function sumBetween(i1, i2) {
    var tot = 0;
    var min = Math.min(heights[i1], heights[i2]);
    for(var i = i1 + 1; i < i2; i++) {
      if(heights[i] < min) tot += min - heights[i];
      else break;
    }
    return tot;
  }
  
  for(var i = 0; i < heights.length; i++) {
    // new building
    if(heights[i] === 0) maxIndexes.push(maxIndex);
    else if(heights[i] > currMax) {
      currMax = heights[i];
      maxIndex = i;
    }
  }
}

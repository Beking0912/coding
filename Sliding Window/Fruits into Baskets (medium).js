/**
 * You are visiting a farm to collect fruits. The farm has a single row of fruit trees. 
 * You will be given two baskets, and your goal is to pick as many fruits as possible 
 * to be placed in the given baskets.
 * You will be given an array of characters where each character represents a fruit tree. 
 * The farm has following restrictions:
 * 
 * Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
 * You can start with any tree, but you can’t skip a tree once you have started.
 * You will pick exactly one fruit from every tree until you cannot, 
 * i.e., you will stop when you have to pick from a third fruit type.
 * 
 * Write a function to return the maximum number of fruits in both baskets.
 * 
 * Time Complexity O(N)
 * Space Complexity O(1)
 * 
 * Similar Problems
 * Longest Substring with at most 2 distinct characters
 * Given a string, find the length of the longest substring in it with at most two distinct characters.
 */
const fruits_into_baskets = function(fruits) {
  let startIndex = 0;
  let maxLength = 0;
  const fruitFrequency = {};

  for (let endIndex = 0; endIndex < fruits.length; endIndex++) {
    const fruit = fruits[endIndex]
    fruitFrequency[fruit] = (fruitFrequency[fruit] || 0) + 1;
    
    while (Object.keys(fruitFrequency).length > 2) {
      const curFruit = fruits[startIndex];
      fruitFrequency[curFruit] -= 1;
      if (fruitFrequency[curFruit] === 0) delete fruitFrequency[curFruit];
      startIndex++;
    }

    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
  }

  return maxLength;
};

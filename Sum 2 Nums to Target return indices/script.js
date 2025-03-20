let nums = [2,7,11,15];
let target = 26;

/*
first Algoeithm O(n^2)
let twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i+1; j < nums.length; j++ ){
      if(target == nums[i] + nums[j]){
        return [i, j];
      };
    };
  };
  return [];
};
console.log(twoSum(nums,target));
*/


/*
Second Algorithm O(n) 2-pass
let twoSum2 = function(nums, target) {
  const map = new Map();
  
  for (let i = 0; i < nums.length; i++){
    map.set(nums[i], i);
  };
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i]
    if (map.has(compliment)) {
      return [map.get(compliment), i]
    } 
  };
};

console.log(twoSum2(nums, target));
*/


//Third algorithm O(n) 1-pass
let twoSum3 = function(nums, target) {
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
    compliment = target - nums[i];
    
    if (map.has(compliment)) {
      return [map.get(compliment), i]
    };
  };
};

console.log(twoSum3(nums, target));

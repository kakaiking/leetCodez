//Median of 2 arrays
let nums1 = [1,7,12,22];
let nums2 = [4,6,2,11];

const findMedian = (nums1, nums2) =>{
  let concatt = nums1.concat(nums2);
  let sorted = concatt.sort(function(a, b) { return a - b });
  
  console.log(sorted);
  let lengthz = sorted.length;
  
  if(lengthz % 2 == 1){
    //odd length
    return sorted[Math.floor(lengthz / 2)];
  } else {
    //even length
    let mid = lengthz / 2
    return (sorted[mid] + sorted[mid-1]) / 2;
  };
};


console.log(findMedian(nums1, nums2))
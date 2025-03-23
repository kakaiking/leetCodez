//longest substring
let text = 'pwwkew';

const longestSubString = (text) =>{
  let longestSString = 0;
  let sett = new Set;
  
  let right = 0;
  let left = 0;
  
  while (right < text.length){
    let letter = text[right];
    if (!sett.has(letter)) {
      sett.add(letter);
      right++;
      longestSString = Math.max(sett.size, longestSString);
    } else {
      sett.delete(text[left]);
      left++;
    };
  };
  return longestSString;
};

console.log(longestSubString(text))
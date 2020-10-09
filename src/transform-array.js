const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!Array.isArray(arr) || arr === undefined) {
  throw new Error();
};
const newArr = [];

for (let i  = 0; i < arr.length; i++) {
  if (arr[i] === '--discard-next' && i + 1 < arr.length) {
    i++;
  } else if (arr[i] === '--discard-prev' && i - 1 > 0) {
    newArr.pop();
  } else if (arr[1] === '--double-next' && i + 1 < arr.length) {
      newArr.push(arr[i + 1]);
  } else if (arr[i] === '--double-prev' && i - 1 > 0) {
    newArr.push(arr[i - 1]);
  } else {
      newArr.push(arr[i]);
  }
}
const result = [];
for (let j = 0; j < newArr.length; j++) {
  if (typeof newArr[j] == 'number') {
    result.push(newArr[j]);
  }
}
return result;
};

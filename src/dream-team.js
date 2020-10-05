const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//console.log(members);
if (!Array.isArray(members)) return false;
const arrayNames = [];
const result = [];
for (let i = 0; i < members.length; i++) {
  if (typeof members[i] === 'string') {
    arrayNames.push(members[i].trim());
  } 
} 
for (let j = 0; j < arrayNames.length; j++) {
  result.push((arrayNames[j][0]).toUpperCase());
  } 
return result.sort().join('');
};

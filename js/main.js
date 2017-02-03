/*
TASK 0
Вам дано предложение, верните массив из слов, которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые, они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]    
solution(["Some another sample"]) expected ["another" "sample"]    
solution(["Do, do, do, do... do it!"]) expected []
*/
function solution(arr) {
  let myArr = arr.join('').match(/[\w\s]/g).join('').split(' ');
  let averageWordLength = myArr.reduce(function (sum, elem) {
    return sum += elem.length;
  }, 0) / myArr.length;
  return myArr.filter(function (el) { return el.length > averageWordLength });
}

console.log(solution(["This is a sample string"]));  //["This" "sample" "string"]
console.log(solution(["Do, do, do, do... do it!"])); //  []
console.log(solution(["Some another sample"])); // ["another" "sample"] 




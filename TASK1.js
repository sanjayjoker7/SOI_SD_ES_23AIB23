//removeDub{[1,2,2,2,10]}   //output [1,2,10]

function removeDub(arr) {
    return [...new Set(arr)];
}

console.log(removeDub([1, 2, 2, 2, 10,2])); 
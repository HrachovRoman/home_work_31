function arrFlat(arg) {
    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    } 
    const ourArr = [arg];
    const newArr = [];
    while (ourArr.length) {
    const next = ourArr.pop();
        if (Array.isArray(next)) {
            ourArr.push(...next);
        } else {
            newArr.push(next);
        }
    }
    return newArr.reverse();  
}

const arr1 = [1, 2, [3, [3, 5, 7], 4, [5, 6]]]; 
const arr2 = [1, 2, 3, 4, 5]; 
console.log(arrFlat(arr1)); //[1, 2, 3, 3, 5, 7, 4, 5, 6]
console.log(arrFlat(arr2)); // [1, 2, 3, 4, 5]
console.log(arrFlat(arr1, arr2)); //выдает ошибку


/**
 * Use class Set to add element, but this one is add only if this one is different
 * */

const exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2]);

exampleSet.add(5);
exampleSet.add(5);
exampleSet.add("truc");
exampleSet.add("machin");
exampleSet.add("machin");

console.log(exampleSet.delete(5)); // return true because this elment exist

/**
 * There is a lot of function : like has(), clear() ...
 */
console.log(exampleSet.size);

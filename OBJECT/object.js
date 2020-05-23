let obj = {};
console.log("typeof(obj) is",typeof(obj));
obj = null;
console.log("typeof(obj) is",typeof(obj), "the old bug");
console.log("typeof(null) is",typeof(null), "the old bug");
// maybe it's tricky to use undefined to disable object ?
obj = undefined;
console.log("typeof(obj) is",typeof(obj));

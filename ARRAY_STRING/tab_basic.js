
let tab_basic = ["truc","machin","bidule"];

for (let elem of tab_basic) {
  console.log("un autre point fort",elem);
}

console.log("\nune shift molle");
tab_basic.unshift("chtruc");

for (let i = 0, max = tab_basic.length ; i < max ; i++) {
  console.log("je suis là",i, "et je vous montre",tab_basic[i]);
}

console.log("\npush de là");
tab_basic.push("oh");
tab_basic.push("ah");
tab_basic.push("oh");
tab_basic.push("ah");
tab_basic.push("oh");
tab_basic.push("ah");
tab_basic.push("oh");
tab_basic.push("ah");

for (let i = 0, max = tab_basic.length ; i < max ; i++) {
	console.log("je suis là",i, "et je vous montre",tab_basic[i]);
}

console.log("\nsplice moi le sel");
let from = 1;
let how_many = 5;
tab_basic.splice(from,how_many);

for (let i = 0, max = tab_basic.length ; i < max ; i++) {
	console.log("je suis là",i, "et je vous montre",tab_basic[i]);
}

console.log("\net pop() disparu la dernière des bulles");
let len = tab_basic.length;
console.log("mon dernier est",tab_basic[len -1], "et je suis long comme",len);
tab_basic.pop();
len = tab_basic.length;
console.log("mon dernier est",tab_basic[len -1], "et je suis long comme",len);


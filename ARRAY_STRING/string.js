let str = "le covid19 c'est pas cool\nmais c'est pas mieux que rien";
console.log("je suis long comme ça", str.length);
console.log(str);
console.log("je suis malade", str.indexOf("covid19"));
console.log("je suis malade", str.indexOf("covid19", 20));
console.log("je commence à être malade", str.startsWith("covid19"));
console.log("je commence à être malade", str.startsWith("le"));
console.log("je fini par être malade", str.endsWith("covid19"));
console.log("je fini par être malade", str.endsWith("rien"));

let a = "Stanislas";
let b = "Knupel";

const res_a = a + " " + b;
const res_b = `${a} ${b}`;
// go to the line easily by this way with /n
const res_c = `${a} 
${b}`;
console.log(res_a);
console.log(res_b);
console.log(res_c);

let split = str.split("\n");
console.log("je suis coupé en", split.length);
for (let i = 0; i < split.length; i++) {
  console.log("partie", i, split[i]);
}

console.log("\nconvert string to array tab");
let tab_str = Array.from(split[0]);
tab_str.forEach((elem) => {
  console.log(elem);
});

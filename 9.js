const a = [1,2,999,56,"Mithun",1234,"PW"];

for (let i =0;i<a.length;i++){
  if (typeof a[i] === "string") {
    console.log(`Found The First String: ${a[i]}`);
    break;
  }
}

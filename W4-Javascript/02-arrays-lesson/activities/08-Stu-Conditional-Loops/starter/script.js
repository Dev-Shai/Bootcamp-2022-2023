// Write your code here

let myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for (let i = 0; i < myFarm.length; i++) {
    if (myFarm[i][0] === "c" || myFarm[i][0] === "o") {
    alert('Animal name starts with c or o: ' + [myFarm[i]]);
    }
}
var amitabh = new Object();
console.log(amitabh);
amitabh.name = "Amitabh";
amitabh.familyname = "Bacchan";
console.log(amitabh.__proto__);

var abhishek = Object.create(amitabh);
abhishek.name = "BUNTY";
console.log(abhishek);
console.log(abhishek.familyname);
console.log(abhishek.__proto__);

abhishek.__proto__.familyname = "Patel";
console.log(amitabh.familyname);

var shweta = Object.create(abhishek);
shweta.name = "Shona";
console.log(shweta.__proto__.__proto__.familyname);
console.log(shweta)
let Box = require('box-node-sdk');

let client = Box.getBasicClient('7nRK1oEQbl6syBrySx893XgIp9l47vLU');
// got the token from box.developers.com, console, custom app, create developer token

let count = 0;

let countFile = function(entry) {
  if (entry.type === "file") {
    count ++;
    console.log(entry.name);
  }
};

let start = async function() {
  let result = await client.folders.get("0");
  // let result = await client.folders.get("0", { limit: 10 });
  // why is "0" a string? Because depending on what bit size computer uses to store numbers, a too large number might 
  // lead to an overflow -> box does everything with strings. 
  result.item_collection.entries.forEach(countFile);
  console.log(count);
};


// You could also do this with a filter: 

// let filterFile = function(entry) {
//   return (entry.type === "file") 
// };

// let start = async function() {
//   let result = await client.folders.get("0");
//   // let result = await client.folders.get("0", { limit: 10 });
//   // why is "0" a string? Because depending on what bit size computer uses to store numbers, a too large number might 
//   // lead to an overflow -> box does everything with strings. 
//   count = result.item_collection.entries.filter(filterFile).length;
//   console.log(count);
// };

start();

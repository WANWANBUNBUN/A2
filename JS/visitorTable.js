let visitorsData = [
    {month:"Jan",visitors:"50"},
    {month:"Feb",visitors:"60"},
    {month:"Mar",visitors:"70"},
    {month:"Apr",visitors:"80"},
    {month:"May",visitors:"90"},
    {month:"Jun",visitors:"200"},
];

let tableTag = document.createElement("table");
let tableNameTag = document.createElement("h2");
tableNameTag.appendChild("The number of site visitors each month for the last 6 months");

 // how to console.log to find the bug frm here??


let tableRowM = document.createElement("tr");
let tableRowV = document.createElement("tr");

let tableHeadM = document.createElement("th");
let tableHeadV = document.createElement("th");

let tableDataM = document.createElement("td");
let tableDataV = document.createElement("td");

tableTag.appendChild(tableRowM);
tableTag.appendChild(tableRowV);

tableRowM.appendChild(tableHeadM);tableHeadM.appendChild("Month");
tableRowM.appendChild(tableDataM);

tableRowV.appendChild(tableHeadV);tableHeadV.appendChild(Visitors);
tableRowV.appendChild(tableDataV);

for(let i=0; i<visitorsData.length; i++){
    console.log("swsws");
    tableDataM(visitorsData.month[i]);
    tableDataV(visitorsData.visitors[i]);
};

let table = document.getElementById("#visitorsTable");
table.appendChild(tableTag);
console.log("i hate this");

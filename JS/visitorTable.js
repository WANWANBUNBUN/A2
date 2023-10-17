
let visitorsData = [
    {month:"MONTH",visitors:"VISITORS"},
    { month: "Jan", visitors: "50" },
    { month: "Feb", visitors: "60" },
    { month: "Mar", visitors: "70" },
    { month: "Apr", visitors: "80" },
    { month: "May", visitors: "90" },
    { month: "Jun", visitors: "200" },
];

let table = document.querySelector(".visitorsTable");

let tableTag = document.createElement("table");
table.appendChild(tableTag);
let tableNameTag = document.createElement("h2");
tableTag.appendChild(tableNameTag);

let tableName = document.createTextNode("The number of site visitors each month for the last 6 months");
tableNameTag.appendChild(tableName);

let tableRow = document.createElement("tr");
tableTag.appendChild(tableRow);
let tableHead = document.createElement("th");
tableTag.appendChild(tableHead);
let tableData = document.createElement("td");
tableRow.appendChild(tableData);

// let month = document.createTextNode("MONTH");
// tableHead.appendChild(month);



// let monthText = document.createTextNode("MONTH");
// tableHead.appendChild(monthText);
// let visitorsText = document.createTextNode("VISITORS");
// tableHead.appendChild(visitorsText);



for (let i=1; i < visitorsData.length; i++) {
    let monthRow = document.createTextNode(visitorsData[i].month);
    tableData.appendChild(monthRow);
    
};




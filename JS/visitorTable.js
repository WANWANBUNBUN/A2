
let visitorsData = [
    { month: "Jan", visitors: "50" },
    { month: "Feb", visitors: "60" },
    { month: "Mar", visitors: "70" },
    { month: "Apr", visitors: "80" },
    { month: "May", visitors: "90" },
    { month: "Jun", visitors: "200" },
];

let div = document.querySelector(".visitorsTable");
let tableTag = document.createElement("table");
div.appendChild(tableTag);
let tableNameTag = document.createElement("h2");
tableTag.appendChild(tableNameTag);

let tableName = document.createTextNode("The number of site visitors each month for the last 6 months");
tableNameTag.appendChild(tableName);

let monthRow = document.createElement("tr");
tableTag.appendChild(monthRow);

for(let i=0; i<visitorsData.length; i++){
    let tableHead = document.createElement("th");
    tableHead.textContent = visitorsData[i].month;
    monthRow.appendChild(tableHead);
}

let visitorsRow = document.createElement("tr");
tableTag.appendChild(visitorsRow);

for(let i=0; i<visitorsData.length; i++){
    let tableData = document.createElement("td");
    tableData.textContent = visitorsData[i].visitors;
    visitorsRow.appendChild(tableData);
}



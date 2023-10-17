
let visitorsData = [
    { month: "MONTH", visitors: "VISITORS" },
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

let tableRow = document.createElement("tr");
tableTag.appendChild(tableRow);

for (let i = 1; i < visitorsData.length; i++) {
    let tableHead = document.createElement("th");
    tableRow.appendChild(tableHead);
    tableHead.textContents = visitorsData[0].month; //?
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);
    let month = document.createTextNode(visitorsData[i].month);
    tableData.appendChild(month);
};

for (let i = 1; i < visitorsData.length; i++) {
    let tableHead = document.createElement("th");
    tableRow.appendChild(tableHead);
    tableHead.textContents = visitorsData[0].visitors; //?
    let tableData = document.createElement("td");
    tableRow.appendChild(tableData);
    let visitors = document.createTextNode(visitorsData[i].visitors);
    tableData.appendChild(visitors);
    console.log(visitors)
};




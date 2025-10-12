// what typscript does is that it will not allow you to make mistake bceause it will check the types of the variables
// for example if you try to assign a string to a number variable it will give you an error
import data from './data.js'; // import the data from data.ts
const threats = JSON.parse(data);
console.log(threats);
function addRow(table, threat) {
    let tr = table.querySelector("tbody").insertRow(); //I learned here that the ! is a not going to be null or undefined, it tells TS that this value will never be null or undefined, so it can be used without any checks. This is useful when you are sure that the value will never be null or undefined, but TS cannot infer that from the code. In this case, we are sure that the tbody element will always be present in the table, so we can use the ! operator to tell TS that it is safe to use it without any checks.
    const ID = tr.insertCell();
    ID.appendChild(document.createTextNode(`${threat.id}`)); // using template literals to insert the id of the threat
    const Threat = tr.insertCell();
    Threat.appendChild(document.createTextNode(`${threat.threatName}`));
    const Severity = tr.insertCell();
    Severity.appendChild(document.createTextNode(`${threat.severity}`));
    // ==================== While working in this i couldnt understand why the "else" part keeps showing up for the whole row, turns out theres a missing s for all the affectedSystem lol 10-11-25 ============================
    const AffectedSystem = tr.insertCell();
    if (threat.affectedSystems) {
        if (typeof threat.affectedSystems === 'string') { // check if affectedSystem is a string
            AffectedSystem.appendChild(document.createTextNode(threat.affectedSystems));
        }
        else {
            let areas = "";
            threat.affectedSystems.forEach(area => {
                areas += area + ", ";
            });
            AffectedSystem.appendChild(document.createTextNode(areas.slice(0, -2))); // remove the last comma and space
        }
    }
    else {
        AffectedSystem.appendChild(document.createTextNode("N/A")); // if affectedSystem is undefined, display N/A
    }
    const logs = tr.insertCell();
    logs.appendChild(document.createTextNode(`${threat.logs}`));
    const Status = tr.insertCell();
    if (threat.dateResolved) {
        Status.appendChild(document.createTextNode('Quarantined'));
    }
    else {
        Status.appendChild(document.createTextNode(`Infected`));
    }
}
// select HTML table
function selectTable() {
    return document.querySelector("#SecurityTable"); // type assertion to tell TS that this is an HTMLTableElement
}
function refreshTable(table, threats) {
    table.querySelector("tbody").innerHTML = ""; //the refresh table function is to clear the table before adding new rows, so that we don't have duplicate rows
    threats.forEach(threat => {
        addRow(table, threat);
    });
}
window.onload = function () {
    refreshTable(selectTable(), threats);
};

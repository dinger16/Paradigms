// import the NodeJS modules
const { resolveObjectURL } = require('buffer');
const { clear } = require('console');
const fs = require('fs');               // module for file I/O
const readline = require("readline");   // module for reading line-by-line from file

class Defect {
    constructor(bug_id, component, status, resolution, summary, changed, severity, number_comments, os, assignee_id, 
                            reporter_id, open_date, closed_date, blocks, depends, fixed_by_username, fixed_by_real_name) {
                    this.bug_id = bug_id;
                    this.component = component;
                    this.status = status;
                    this.resolution = resolution;
                    this.summary = summary;
                    this.changed = changed;
                    this.severity = severity;
                    this.number_comments = number_comments;
                    this.os = os;
                    this.assignee_id = assignee_id;
                    this.reporter_id = reporter_id;
                    this.open_date = open_date;
                    this.closed_date = closed_date;
                    this.blocks = blocks;
                    this.depends = depends;
                    this.fixed_by_username = fixed_by_username;
                    this.fixed_by_real_name = fixed_by_real_name;
                }
}

function loadObjects(){

    /* ... Your implementation here ... */
    // You can use the readFile from the fs module
    // See the documentation: https://nodejs.org/en/knowledge/file-system/how-to-read-files-in-nodejs/
    // The CSV files are comma-separated

    let defectsCSV = fs.readFileSync("defects.csv","utf8");    
    let dependsCSV = fs.readFileSync("test_depends.csv","utf8");
    let blocksCSV = fs.readFileSync("test_blocks.csv","utf8");
    let developersCSV = fs.readFileSync("developers.csv","utf8");

    let defectsRows = []
    defectsCSV.split("\r\n").forEach(row =>{
        defectsRows.push(row.split(','));
    });

    // check delimiter
    let dependsRows = []
    dependsCSV.split("\n").forEach(row =>{
        dependsRows.push(row.split(','));
    });
    console.log(dependsRows)

    // check delimiter
    let blocksRows = []
    blocksCSV.split("\n").forEach(row =>{
        blocksRows.push(row.split(','));
    });

    let developersRows = []
    developersCSV.split("\r\n").forEach(row =>{
        developersRows.push(row.split(','));
    });

    objects = []
    for (let i = 1; i < defectsRows.length; i++) {
        let obj = new Defect(...defectsRows[i].slice(0, (defectsRows[i].length-1)));

        let blocksArray = blocksRows.filter(row => row[0] == obj.bug_id);
        obj.blocks = blocksArray.map(row => row[1]);

        let dependsArray = dependsRows.filter(row => row[0] == obj.bug_id);
        obj.depends = dependsArray.map(row => row[1]);

        obj.fixed_by_username = defectsRows[i][defectsRows[0].length-1];
        let realNameList = developersRows.find(row => row[1] == obj.fixed_by_username);
        if (realNameList != undefined) obj.fixed_by_real_name = realNameList[0];
        else obj.fixed_by_real_name = null;
        objects.push(obj)
    }

    console.log(objects[3])

    return objects;
}


function query1(defects){
    return defects.filter(obj => obj.status === "RESOLVED" && obj.resolution === "FIXED").length;
}

function query2(defects){
    return defects.filter(obj => {
        for (let i = 0; i < obj.summary.length - "buildbot".length + 1; i++) {
            if (obj.summary.substring(i,i+"buildbot".length).toLowerCase() === "buildbot")
                return true;
        }
        return false;
    }).length;
}

function query3(defects){
    return Number(((defects.filter(obj => obj.status != "RESOLVED").length / defects.length) * 100).toFixed(2));
}

function query4(defects){
    let components = new Map()
    for (let i = 0; i < defects.length; i++) {
        if (components.has(defects[i].component)) components.set(defects[i].component, components.get(defects[i].component)+1);
        else components.set(defects[i].component, 1);
    }

    let curMaxValue = 0;
    let curMaxComp = "";
    for (let [key, value] of components) {
        if (value > curMaxValue) {
            curMaxValue = value;
            curMaxComp = key;
        }
    }
    return curMaxComp;
}

function query5(defects){
    let fixed = defects.filter(obj => obj.status === "RESOLVED" && obj.resolution === "FIXED" && obj.component === "Documentation");

    let devs = new Map()
    fixed.forEach(obj => {
        if (devs.has(obj.fixed_by_username)) devs.set(obj.fixed_by_username, devs.get(obj.fixed_by_username)+1);
        else devs.set(obj.fixed_by_username, 1);
    })

    let curMaxValues = [0, 0]
    let curMaxDevs = ["", ""]
    for (let [key, value] of devs) {
        if (value > curMaxValues[1]) {
            curMaxValues[1] = value;
            curMaxDevs[1] = key;

            if (curMaxValues[1] > curMaxValues[0]) {
                let tempVal = curMaxValues[1];
                curMaxValues[1] = curMaxValues[0];
                curMaxValues[0] = tempVal;
                let tempDev = curMaxDevs[1];
                curMaxDevs[1] = curMaxDevs[0];
                curMaxDevs[0] = tempDev;
            }
        }
    }
    return curMaxDevs;
}

function query6(defects){
    for (let i = 0; i < defects.length; i++) {
        if (bfs_target(defects, defects[i]) == true) return true;
    }
    return false;
}

function findByID(defects, id) {return defects.find(obj => obj.bug_id === id)}

function bfs_target(graph, initialObj) {
    let queue = [initialObj];
    let visited = new Set();

    while (queue.length != 0) {
        let node = queue.shift()
        visited.add(node.bug_id)

        for (let i = 0; i < node.blocks.length; i++) {
            id = node.blocks[i];

            if (id == initialObj.bug_id) 
                return true;
            if (!visited.has(id) && !queue.includes(id)) 
                queue.push(findByID(graph, id));
        }
    }
    return false;
}


let defects = loadObjects();
console.log(query1(defects));
console.log(query2(defects));
console.log(query3(defects));
console.log(query4(defects));
console.log(query5(defects));
console.log(query6(defects));




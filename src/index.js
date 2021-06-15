const exportUsersToExcel = require('./exportService');
const users = [
    {
        id: 1,
        name: "Peter",
        age: "37",
    },
    {
        id: 2,
        name: "Gonzalo",
        age: "30",
    },
    {
        id: 3,
        name: "John",
        age: "27",
    },
    {
        id: 4,
        name: "Christian",
        age: "21",
    },
    {
        id: 5,
        name: "Samuel",
        age: "57",
    },
    {
        id: 6,
        name: "Michael",
        age: "50",
    },
];

const workSeetColumnNames = [
    "ID",
    "Name",
    "Age",
];

const workSeetName = "Users";

const filePath = "./excel-from-js.xlsx";

exportUsersToExcel(users, workSeetColumnNames, workSeetName, filePath)
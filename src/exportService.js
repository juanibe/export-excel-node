const xlsx = require('xlsx');
const path = require('path')

const exportExcel = (data, workSeetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSeetColumnNames,
        ...data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath))
}

const exportUsersToExcel = (users, workSeetColumnNames, workSeetName, filePath) => {
    const data = users.map(user => {
        return [user.id, user.name, user.age];
    })
    exportExcel(data, workSeetColumnNames, workSeetName, filePath)
}


module.exports = exportUsersToExcel;
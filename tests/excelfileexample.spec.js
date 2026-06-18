const { test, expect } = require('@playwright/test');
const ExcelJS = require('exceljs');
import * as XLSX from 'xlsx';

async function readexcelfile(){

let output={row:-1,column:-1}

const workbook = new ExcelJS.Workbook();
const path=await workbook.xlsx.readFile("C:/Users/ANUSHA/Downloads/download.xlsx");
const worksheet=workbook.getWorksheet('Sheet1');
await worksheet.eachRow((row, rowNumber) =>
{
row.eachCell((cell,colNumber)=>
{
//console.log(cell.value);
if( cell.value === "Spring")
{
    output.row=rowNumber;
    output.column=colNumber;


}
})


})

if (output.row === -1 || output.column === -1) {
  throw new Error('Value not found in worksheet');
}

const cell = worksheet.getCell(output.row, output.column);
cell.value = 'Monsoon';
await workbook.xlsx.writeFile("C:/Users/ANUSHA/Downloads/download.xlsx");


}
readexcelfile()



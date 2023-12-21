'use strict'

const ExcelJS = require('exceljs');

class ExcelService {
  constructor() {
    this._formatName = "formato"
    this._extension = "xlsx"
    this._fileName = `${this._formatName}.${this._extension}`
    this._workbook = new ExcelJS.Workbook()
  }

  async processFile() {
    await this._workbook.xlsx.readFile(`src/resources/${this._fileName}`)
    const worksheet = this._workbook.getWorksheet("Formulario220");
    
    var row = worksheet.getRow(10);
    row.getCell("R").value = 'Martinez';
    row.getCell("X").value = 'Morales';
    row.getCell("AD").value = 'Juan';
    row.getCell("AI").value = 'Camilo Node Js';
    row.commit();
    return this._workbook.xlsx.writeFile(`src/outputs/${this._fileName}`);
  }
}

module.exports = ExcelService
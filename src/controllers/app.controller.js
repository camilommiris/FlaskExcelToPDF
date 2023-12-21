'use strict'

const ExcelService = require('../services/excel.service')
const LibreOfficeService = require('../services/libreoffice.service')

class AppController {
  processFile() {
    const excelService = new ExcelService()
    const libreOfficeService = new LibreOfficeService()
    excelService.processFile()
    libreOfficeService.processFile()
    return { 'result': 'OK' }
  }
}

module.exports = AppController
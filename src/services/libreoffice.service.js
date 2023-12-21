'use strict'

const subProcess = require('child_process')

class LibreOfficeService {
  constructor () {
    this._formatName = "formato"
    this._extension = "xlsx"
    this._outputExtension = "pdf"
    this._fileName = `${this._formatName}.${this._extension}`
    this._outputFileName = `${this._formatName}.${this._outputExtension}`
  }

  processFile () {
    subProcess.exec(`libreoffice --convert-to pdf src/outputs/${this._fileName} --outdir src/outputs/`, (err, stdout, stderr) => {
      if (err) {
        console.error(err)
        process.exit(1)
      } else {
        console.log(`The stdout Buffer from shell: ${stdout.toString()}`)
        console.log(`The stderr Buffer from shell: ${stderr.toString()}`)
      }
    })
  }
}

module.exports = LibreOfficeService
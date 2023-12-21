'use strict'

const AppController = require('./src/controllers/app.controller')

const handler = async (event, context) => {
  const appController = new AppController()
  const response = appController.processFile()
  return response
}

handler({}, {})

exports.handler = handler

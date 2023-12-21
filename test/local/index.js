const { handler } = require('../../index')

const event = {}

const context = {}

const logger = (log) => {
  const prefix = 'TEST: '
  console.log(prefix, log)
}

/**
 * Function para ejecutar de handler localmente
 */
const localTest = async () => {
  try {
    console.time('lambda runtime')
    const response = await handler(event, context)
    logger(response)
    console.timeEnd('lambda runtime')
  } catch (e) {
    console.error('ERROR: ', e)
  }
}

localTest()
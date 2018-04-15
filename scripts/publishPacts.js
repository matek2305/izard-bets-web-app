const pact = require('@pact-foundation/pact-node');
const path = require('path');

const argv = require('minimist')(process.argv.slice(2));
const opts = {
  pactFilesOrDirs: [path.resolve(__dirname, '../pacts/')],
  pactBroker: 'https://matek2305.pact.dius.com.au',
  consumerVersion: '1.0.0-SNAPSHOT',
  pactBrokerUsername: argv['pactBrokerUsername'],
  pactBrokerPassword: argv['pactBrokerPassword'],
}

pact.publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!')
  })
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
  })

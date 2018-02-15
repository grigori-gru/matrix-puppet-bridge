const MatrixSdk = require('matrix-js-sdk');
const HttpBackend = require("matrix-mock-request");

if (process.env.NODE_ENV === 'test') {
    const httpBackend = new HttpBackend();
    MatrixSdk.request(httpBackend.requestFn);
}

module.exports = {
  Puppet: require('./src/puppet'),
  MatrixPuppetBridgeBase: require('./src/base'),
  MatrixAppServiceBridge: require('matrix-appservice-bridge'),
  MatrixSdk,
  utils: require('./src/utils'),
};

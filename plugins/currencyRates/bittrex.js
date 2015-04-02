var _ = require('lodash');

module.exports.id = 'Bittrex';
module.exports.url = 'https://bittrex.com/api/v1.1/public/getticker?market=btc-start';

module.exports.parseFn = function(raw) {
  return [{
    code: 'BTC',
    rate: parseFloat(raw.result.last)
  }];
};

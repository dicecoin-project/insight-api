var _ = require('lodash');

module.exports.id = 'Bittrex';
module.exports.url = 'https://rates.startwallet.com/bittrex';

module.exports.parseFn = function(raw) {
  return [{
    code: 'BTC',
    rate: parseFloat(raw.result.last)
  }];
};

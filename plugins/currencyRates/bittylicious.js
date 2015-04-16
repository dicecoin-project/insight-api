var _ = require('lodash');

module.exports.id = 'Bittylicious';
module.exports.url = 'https://rates.startwallet.com/bittylicious';

var pairs = ["EUR", "GBP"];

module.exports.parseFn = function(raw) {
  /*
    {
	  "EURSTART": {
	    "avg_1h": null,
	    "avg_3h": null,
	    "avg_6h": null,
	    "avg_12h": null,
	    "avg_24h": null,
	    "volume_24h": "0.00000000",
	    "rates": {
	      "last": "0.010856"
	    }
	  },
	  "GBPSTART" : {
		...
	  }
    }
  */
  var rates = _.compact(_.map(pairs, function(pair) {
  	var code = pair + "START";
  	if (!raw[code]) return null;
  	return {
      code: pair,
      rate: parseFloat(raw[code].rates.last),
    };
  }));
  return rates;
};

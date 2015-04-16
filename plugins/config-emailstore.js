var smtpTransport = require('nodemailer-smtp-transport');

var auth = {
    host: '46.101.13.239',
    port: 25,
    ignoreTLS: true
};

module.exports = {
    confirmEmailHost: 'https://yourhost.com',
    email: smtpTransport(auth)
};

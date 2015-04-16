var smtpTransport = require('nodemailer-smtp-transport');

var auth = {
    host: 'localhost',
    port: 25,
    ignoreTLS: true
};

module.exports = {
    confirmEmailHost: 'https://yourhost.com',
    email: smtpTransport(auth)
};

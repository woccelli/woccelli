const keys = require('../config/keys')
const mailgun = require("mailgun-js");
const DOMAIN = 'mg.woccelli.com';

module.exports = sendResume = async (dest, template) => {
    const mg = mailgun({apiKey: keys.mailgunKey, domain: DOMAIN, host: "api.eu.mailgun.net"});
    const data = {
        from: 'contact@woccelli.com',
        to: dest,
        subject: "William Occelli's resume",
        html: template
    };
    await mg.messages().send(data);
}




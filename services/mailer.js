const keys = require('../config/keys')
const DOMAIN = 'mg.woccelli.com';
const mailgun = require("mailgun-js")({apiKey: keys.mailgunKey, domain: DOMAIN, host: "api.eu.mailgun.net"});
const path = require('path')
const fs = require('fs')

module.exports = sendResume = async (dest, template) => {
    const pathName = path.join(__dirname, 'data', 'occelli-william-resume.pdf')
    const file = fs.readFileSync(pathName);
    const stat = fs.statSync(pathName);
    const attach = new mailgun.Attachment({data: file, filename:"occelli-william-resume.pdf", filename:"occelli-william-resume.pdf", contentType: 'application/pdf', knownLength: stat.size})
    const data = {
        from: 'william.occelli@gmail.com',
        to: dest,
        subject: "My resume",
        html: template,
        attachment: attach
    };
    await mailgun.messages().send(data);
}
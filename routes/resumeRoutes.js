const sendResume = require('../services/mailer')
const resumeTemplate = require('../services/emailTemplates/resumeTemplate')
const fs = require('fs')
const path = require('path')
const rateLimit = require("express-rate-limit");

module.exports = app => {
    app.set('trust proxy', 1)
        
    const sendResumeLimiter = rateLimit({
        windowMs: 60 * 60 * 1000, // 1 hour window
        max: 3, // start blocking after 3 requests
        message:
          "Sorry, the limit of requests for this IP address has been reached, try again in 1 hour. This limit is fixed to avoid unnecessary traffic."
    });

    app.post('/api/send-resume',  async (req, res) => {
        const { dest } = req.body
        try {
            await sendResume(dest, resumeTemplate())
            res.send(dest)
        } catch (err) {
            res.status(422).send(err)
        }
    })


    app.get('/api/download-resume', (req, res) => {
        const pathName = path.join(__dirname,'..', 'services', 'data', 'occelli-william-resume.pdf')
        const file = fs.createReadStream(pathName);
        const stat = fs.statSync(pathName);
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=occelli-william-resume.pdf');
        file.pipe(res);
    })
}
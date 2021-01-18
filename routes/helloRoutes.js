const sendResume = require('../services/mailer')
const resumeTemplate = require('../services/emailTemplates/resumeTemplate')

module.exports = app => {
    app.get('/api', (req, res) => {
        res.send({msg: 'Hello World !'})
    })

    app.post('/send-resume', async (req, res) => {
        const { dest } = req.body
        try {
            await sendResume(dest, resumeTemplate())
            res.sendStatus(200)
        } catch (err) {
            console.log(err)
            res.status(422).send(err)
        }
        
    })
}
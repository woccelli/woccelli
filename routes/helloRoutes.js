const sendResume = require('../services/mailer')
const resumeTemplate = require('../services/emailTemplates/resumeTemplate')

module.exports = app => {
    app.get('/api', (req, res) => {
        res.send({msg: 'Hello World !'})
    })

    app.post('/api/send-resume', async (req, res) => {
        const { dest } = req.body
        try {
            await sendResume(dest, resumeTemplate())
            console.log(dest)
            res.send(dest)
        } catch (err) {
            console.log(err)
            res.status(422).send(err)
        }
        
    })
}
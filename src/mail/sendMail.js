import nodemailer from 'nodemailer'

// create a transport
const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'hbfl3x@gmail.com',
        pass: 'hvipirpcwtgznahr'
    }
})

const sendMail = async (from, to, subject, text) => {
    // track mail activity
    const mailInfo = { loading: true, info: '', error: '' }

    // mail details
    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    }
    // send mail
    await transport.sendMail(mailOptions, (err, info) => {
        if(err) {
            mailInfo.error = err
            mailInfo.loading = false
            return
        }

        mailInfo.loading = false
        mailInfo.info = info
    })

    return mailInfo
}

export default sendMail
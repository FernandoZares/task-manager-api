const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fernandozares@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fernandozares@gmail.com',
        subject: 'Sorry to see you go',
        text: `It's sad to watch you leaving us ${name}. Is there anything that we could have done that could have kept you onboad? Please let us know so we can improve our services. Thank you very much. `
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
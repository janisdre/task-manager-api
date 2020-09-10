const sgMail= require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jdregeris@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'jdregeris@gmail.com',
        subject: 'Deleting your account!',
        text: `You just deleted your account, ${name}. Sorry to see you leave.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}
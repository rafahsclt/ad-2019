import nodemailer, { Transporter } from 'nodemailer'

export default class EtherealMailProvider {
    private client: Transporter

    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            })

            this.client = transporter
        })
    }

    public async sendMail(to: string, body: string) {
        const message = await this.client.sendMail({
            from: 'Equipe Amigo Secreto <sf@mail.com>',
            to,
            subject: 'Este é o seu amigo secreto!',
            text: body,
        })

        console.log('Message sent: %s', message.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}
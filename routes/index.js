const { Router } = require('express');
const res = require('express/lib/response');
const nodemailer = require('nodemailer');
const router = Router();



router.post('/send-email', async(req, res) => {
    const { name, email, tel, textomensaje, selector } = req.body;

    const contentHTML = `
        <h1>Información del Correo</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Dirección de Correo: ${email}</li>
            <li>Teléfono: ${tel}</li>
            <li>Motivo: ${selector}</li>
        </ul>
        <p>${textomensaje}</p>
    `;

    transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use TLS
        auth: {
            user: "jlginmobiliaria2020@gmail.com",
            pass: "xoziiazglfgbxtzc",
        },
    });

    let info = await transporter.sendMail({
        from: "'JLG Web' <jlginmobiliaria2020@gmail.com>",
        to: 'pablorex2012@gmail.com',
        subject: 'Formulario de Contacto Web JLG',
        html: contentHTML
    });
    console.log('message sent', info.messageId);
    // console.log('mensaje enviado');
    res.redirect('index');


});
module.exports = router;
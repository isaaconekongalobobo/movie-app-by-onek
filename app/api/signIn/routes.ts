import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { firstName, lastName, email, password } = body;
    console.log("Ici", firstName);
    

}
// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'onekdev5@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
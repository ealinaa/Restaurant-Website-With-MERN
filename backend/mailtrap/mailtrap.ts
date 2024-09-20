
import { MailtrapClient } from "mailtrap";


export const client = new MailtrapClient({
  token: process.env.MAILTRAP_API_TOKEN!,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: " Restaurant Test",
};
export const recipients = [
  {
    email: "077bcsit006.alina@scst.edu.np",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);
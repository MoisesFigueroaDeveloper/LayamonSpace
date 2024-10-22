const { MailtrapClient } = require("mailtrap");

const TOKEN = "e85c00271d965edd1ecbaefbbdd1cbb9";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@layamon.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "moisesfigueroadeveloper@gmail.com",
  },
];

client.bulk
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    text: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);

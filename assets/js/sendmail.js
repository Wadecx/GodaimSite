function sendEmail()
{
    Email.send({
        SecureToken : "cf0b9b35-0d4a-47dc-a2b0-8b5d6eebd87d",
        To : 'tyronmorcel@gmail.com',
        From : "wadecpro@gmail.com",
        Subject : "Nouveau Message de GODAIM",
        Body : "Email : " + document.getElementById("email").value
        + "<br> Objet : " + document.getElementById("object").value
        + "<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message envoyé avec succès ! ")
    );
}
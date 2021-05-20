
function sendEmail(contact){
    emailjs.send("service_mbyy3ju","PokerQuiz", {
        from_name: contact.firstname.value,
        from_email: contact.email.value,
        message: contact.message.value
    })
    .then(function (response) {
                const form = document.getElementById('form');
                form.classList.add('hide');
                const sendEmailForm = document.getElementById('send-email-form');
                const sent = document.createElement("p");
                
                sent.innerText = "Thanks for your message!";
                sendEmailForm.appendChild(sent);
                console.log('hello', response);
            }),
            function (error) {
                alert("Oh No! There's been an error. Please refresh the page and fill out the form again", error);
            };
    
    return false;
}
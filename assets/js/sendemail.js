function sendEmail(contact){
    emailjs.send("service_mbyy3ju","PokerQuiz", {
        "from_name": contact.first-name.value,
        "from_email": contactForm.email.value,
        "message": contact.message.value,
    })
    return false;
}
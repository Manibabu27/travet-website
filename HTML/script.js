function sendMail(params) {
    var tempParams = {
    first_name: document.getElementById("firstname").value,
    contact_number: document.getElementById("number").value,
         from_gmail: document.getElementById("Gmail id").value,
        // to_name: document.getElementById("toName").value,
        message: document.getElementById("msg").value,
        
    };
    emailjs.send('service_m4pp9ca','template_qnozirn',tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
    
}
console.log('hi')

const success = document.getElementById('success-know').innerText;
const pending = document.getElementById('pending-know').innerText;

if (success === "true") {
    console.log(success)

    const id = document.getElementById('success');
    const orderID = document.createTextNode('Successful')

    let html = "<p>Thanks for joining the <span style=\"font-family:northen; color:#86C03E\">Evolution</span> family! We will be calling you soon.<br />You can contact us at: <a href=\"tel\">+201050006974</a> <br/><br/><br/> Return to our <a href=\"/\">website</a></p>";

    document.getElementById('info').innerHTML = html

    id.appendChild(orderID)

} else if (pending === "true") {

    const id = document.getElementById('success');
    const orderID = document.createTextNode('Pending')

    let html = "Your payment is pending.<br />You can contact us at: <a href=\"tel\">+201050006974</a> <br/><br/><br/> Return to our <a href=\"/\">website</a>.</p>";

    document.getElementById('info').innerHTML = html


    id.style.background = "#FFFF33"
    id.appendChild(orderID)
} else {



    const id = document.getElementById('success');
    const orderID = document.createTextNode('Declined')

    let html = "Your card declined. <br/>  You can still join us by contacting us at: <a href=\"tel\">+201050006974</a><br/> <br /><br /><strong>If you are using valU, this is maybe because you entered your OTP incorrectly or you have insufficient balance to complete the process.<br/><br/><br/>Return to our <a href=\"/\">website</a>.  </p>";

    document.getElementById('info').innerHTML = html

    id.style.background = "red"
    id.appendChild(orderID)


}

const know = document.getElementById('created-at-know').innerText;
const createdAt = document.getElementById('created-at');
const createdText = document.createTextNode(know.slice(0, 10) + ', ' + know.slice(11, 19))

createdAt.appendChild(createdText)



const centsKnow = document.getElementById('cents-know').innerText;
const cents = document.getElementById('amount-cents');
const centsText = document.createTextNode(centsKnow.slice(0, -2) + ' EGP')

cents.appendChild(centsText)



function plantsLike(plant) {
    const mails = {
        gmail: localStorage.getItem('gmailAuth'),
        mail: localStorage.getItem('auth')
    }

    const req = {}

    if (mails.gmail) {
        req.mail = JSON.parse(mails.gmail)
        req.name = JSON.stringify(plant.textContent)
    } else if (mails.mail) {
        req.mail = JSON.parse(mails.mail)
        req.name = JSON.stringify(plant.textContent)
    } else {
        return
    }

    fetch('/vue/accountConnectG.php', {
        method: "POST",
        body: JSON.stringify(req),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
}




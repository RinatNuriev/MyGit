window.addEventListener('DOMContentLoaded', () => {
    const mails = {
        gmail: localStorage.getItem('gmailAuth'),
        mail: localStorage.getItem('auth')
    }

    const req = {}

    if (mails.gmail) {
        req.mail = JSON.parse(mails.gmail)
    } else if (mails.mail) {
        req.mail = JSON.parse(mails.mail)
    } else {
        document.querySelector('.accountCheck').style.display = 'none'
        document.querySelector('.person__btn').style.display = 'block'
        return
    }

    document.querySelector('.accountCheck').style.display = 'block'
    document.querySelector('.person__btn').style.display = 'none'
    console.log('req ', req);
    fetch('/vue/accountConnectG.php', {
        method: "POST",
        body: JSON.stringify(req),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
        .then((data) => {
            document.querySelector('.accountCheck_img').src = data.info[0].profile_pic
            console.log(data.info[0]);
        })
})

function toAccount() {
    document.location = 'account.html'
}

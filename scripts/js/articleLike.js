function articleLike(article) {
    // console.log( article.children[0]);
    const mails = {
        gmail: localStorage.getItem('gmailAuth'),
        mail: localStorage.getItem('auth'),
        idVk: localStorage.getItem('vkAuthId'),
    }

    const req = {}

    if (mails.gmail) {
        req.mail = JSON.parse(mails.gmail)
        req.id = article.id
    } else if (mails.mail) {
        req.mail = JSON.parse(mails.mail)
        req.id = article.id
    } else if (mails.idVk) {
        req.mail = JSON.parse(mails.idVk)
        req.id = article.id
    } else {
        return
    }

    console.log(req);

    fetch('/scripts/php/articleLike.php', {
        method: "POST",
        body: JSON.stringify(req),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then((response) => response.json())
        .then(data => {
            // console.log(data);
            if (data == 'Лайк добавлен') {
                article.children[0].style.stroke = 'red'
            } else if (data == 'Лайк убран') {
                article.children[0].style.stroke = '#3A4736'
            }

        })
}

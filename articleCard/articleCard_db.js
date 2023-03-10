const articleId = {}

function articleLoad(article) {
    let a = article.id.split('-')[1]
    localStorage.setItem('articleId', JSON.stringify(a))
    window.open('article.html', '_blank')
}

articleId.id = JSON.parse(localStorage.getItem('articleId'))

fetch('scripts/php/cardArticleConnect.php', {
    method: 'POST',
    body: JSON.stringify(articleId),
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
}).then(res => res.json())
    .then(data => console.log(data))
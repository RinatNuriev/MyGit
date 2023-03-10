const articleId = {}

// console.log('from article card');

function articleLoad(article) {
    if (article.tagName == 'DIV') {
        localStorage.setItem('articleId', JSON.stringify(article.id))
    }
    if (article.tagName == 'IMG') {
        localStorage.setItem('articleId', JSON.stringify(article.id))
    }
    // let a = article.id.split('-')[1]
    // localStorage.setItem('articleId', JSON.stringify(a))
    window.open('/article.html', '_blank')
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
    .then(data => {
        // console.log(data);
        document.querySelector('.articleTitle').innerHTML = data.info[0].head
        // document.querySelector('.whiteconteiner_topBlock_leftPart').style.background = `url('${data.info[0].foto}') no-repeat center`
        // document.querySelector('.whiteconteiner_topBlock_leftPart').style.backgroundSize = 'cover'
        document.querySelector('.rightPart_text').innerHTML = data.info[0].introduction
        document.querySelector('.whiteconteiner_topBlock_leftPart_nameAndIcons_name').innerHTML = data.info[0].author
        document.querySelector('.whiteconteiner_topBlock_leftPart_nameAndIcons_date').innerHTML = data.info[0].date

        for (let i = 0; i < data.info.length; i++) {
            let article = document.createElement('article')

            let divCard = document.createElement('div')
            divCard.className = 'articlelBlock_card'

            let h2 = document.createElement('h2')
            h2.className = 'articlelBlock_card_title'
            h2.innerHTML = data.info[i].title

            let divImg = document.createElement('div')
            divImg.className = 'articlelBlock_card_image'
            // divImg.style.background = `url('${data.info[i].Photo}') no-repeat center`
            // divImg.style.backgroundSize  = 'cover'
            if (data.info[i].Photo != '') {
                let img = document.createElement('img')
                img.className = 'article-card_img'
                img.src = data.info[i].Photo

                divImg.append(img)
            }



            let p = document.createElement('p')
            p.className = 'articlelBlock_card_text'
            p.innerHTML = data.info[i].description

            divCard.append(h2)
            divCard.append(divImg)
            divCard.append(p)

            article.append(divCard)

            document.querySelector('.articlelBlock').append(article)
        }
    })


fetch('scripts/php/articlesConnect.php')
    .then(result => result.json())
    .then(data => {
        // console.log('from article card', data);
        function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        }
        let count = data.info
        shuffle(count);
        // console.log('count', count[0].foto);

        for (let i = 0; i < 4; i++) {
            let div = document.createElement('div')
            div.className = 'asideBlockCard'

            let figure = document.createElement('figure')

            let divImg = document.createElement('div')
            divImg.className = 'asideBlockCard_img'
            divImg.style.background = `url('${count[i].foto}') no-repeat center`
            divImg.style.backgroundSize = 'cover'

            let figcaption = document.createElement('figcaption')

            let h3 = document.createElement('h3')
            h3.className = 'asideBlockCard_title'
            h3.innerHTML = count[i].head

            let anotherDiv = document.createElement('div')
            anotherDiv.className = 'asideBlockCard_siteAndDate'

            let p = document.createElement('p')
            p.className = 'asideBlockCard_siteAndDate_site'
            p.innerHTML = count[i].author

            let anotherP = document.createElement('p')
            anotherP.className = 'asideBlockCard_siteAndDate_date'
            anotherP.innerHTML = count[i].date

            figure.append(divImg)
            figcaption.append(h3)
            figure.append(figcaption)

            anotherDiv.append(p)
            anotherDiv.append(anotherP)

            div.append(figure)
            div.append(anotherDiv)

            document.querySelector('.asideBlock').append(div)

        }
    })
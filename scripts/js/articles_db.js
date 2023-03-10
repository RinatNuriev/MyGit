fetch('scripts/php/articlesConnect.php')
    .then(result => result.json())
    .then(data => {
        for (let i = 0; i < data.info.length; i++) {
            let divSlide = document.createElement('div')
            divSlide.className = 'swiper-slide'
            divSlide.id = data.info[i].id_article

            let divCardImg = document.createElement('div')
            divCardImg.className = 'articles__card_img'
            let img = document.createElement('img')
            img.src = data.info[i].foto
            img.alt = data.info[i].head
            img.id = data.info[i].id_article
            img.onclick = function () { articleLoad(this) }

            let divTitle = document.createElement('div')
            divTitle.className = 'article-title_div'
            divTitle.id = data.info[i].id_article
            divTitle.onclick = function () { articleLoad(this) }
            let h5Name = document.createElement('h5')
            h5Name.className = 'article-title'
            h5Name.textContent = data.info[i].head

            divTitle.append(h5Name)
            divCardImg.append(img)

            divSlide.append(divCardImg)
            divSlide.append(divTitle)


            let divLike = document.createElement('div')
            divLike.className = 'article-like'
            divLike.onclick = function () { articleLike(this) }
            divLike.innerHTML = `
            <svg id="${data.info[i].id_article}" class="article-like-svg" onclick="articleLike(this)" width="28" height="26" viewBox="0 0 28 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
                                    stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
            `
            divSlide.append(divLike)

            document.querySelector('.swiper-wrapper__articles').append(divSlide)


        }
        checkLikeArticle()
    })



function checkLikeArticle() {
    const mails = {
        gmail: localStorage.getItem('gmailAuth'),
        mail: localStorage.getItem('auth'),
        idVk: localStorage.getItem('vkAuthId'),
    }

    const req = {}

    if (mails.gmail) {
        req.mail = JSON.parse(mails.gmail)
    } else if (mails.mail) {
        req.mail = JSON.parse(mails.mail)
    } else if (mails.idVk) {
        req.mail = JSON.parse(mails.idVk)
    } else {
        return
    }

    fetch('/scripts/php/articleCheckLike.php', {
        method: "POST",
        body: JSON.stringify(req),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.info.length; i++) {
                document.querySelectorAll('.article-like-svg').forEach(elem => {
                    if (elem.id == data.info[i].id_article) {
                        elem.style.stroke = 'red'
                    }
                })
            }
        })
}
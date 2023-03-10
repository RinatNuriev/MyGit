fetch('scripts/php/greenbookConnectAll.php')
    .then(res => res.json())
    .then(data => {
        let arr = JSON.parse(JSON.stringify(data));
        document.querySelector('.greenbook-gallery').prepend(createDataGreenbook(arr))
        checkLikeGreenbook()
        after()
    })

const plantsType = {
    count: 16,
}

const startFrom = {
    count: 16,
}


document.body.addEventListener('click', (e) => {
    if (e.target.parentNode.className.includes('plants-species')) {
        document.querySelector('.plants-species__input').innerHTML = e.target.innerHTML
        if (window.innerWidth < 600) {
            document.querySelectorAll('.select-item').forEach(elem => {
                elem.style.background = '#EDE1DE'
            })
            e.target.style.background = 'white'
        }
        plantsType.species = e.target.textContent
        plantsType.count = 16
        if (e.target.className.includes('all_feat')) {
            if (window.innerWidth > 600) {
                document.querySelector('.plants-species__input').style.background = '#fff'
                document.querySelector('.head-species').style.background = '#fff'
            }
        } else {
            document.querySelector('.head-species').style.background = '#EDE1DE'
            document.querySelector('.plants-species__input').style.background = '#EDE1DE'
        }
        filter()
        checkLikeGreenbook()
    }
    if (e.target.parentNode.className.includes('plants-type')) {
        document.querySelector('.plants-type__input').innerHTML = e.target.innerHTML
        if (window.innerWidth < 600) {
            document.querySelectorAll('.select-item').forEach(elem => {
                elem.style.background = '#EDE1DE'
            })
            e.target.style.background = 'white'
        }
        plantsType.type = e.target.classList[0]
        plantsType.count = 16
        if (e.target.className.includes('all_feat')) {
            if (window.innerWidth > 600) {
                document.querySelector('.plants-type__input').style.background = '#fff'
                document.querySelector('.head-type').style.background = '#fff'
            }
        } else {
            document.querySelector('.head-type').style.background = '#EDE1DE'
            document.querySelector('.plants-type__input').style.background = '#EDE1DE'
        }
        filter()
        checkLikeGreenbook()
    }
    if (e.target.className.includes('sort-by-rating') || e.target.className.includes('sort-by-rating-text')) {
        if (plantsType.rating === 'rate') {
            plantsType.rating = ''
        } else {
            plantsType.rating = 'rate'
        }
    }
    if (e.target.className.includes('sort-by-alphabet') || e.target.className.includes('sort-by-alphabet-text')) {
        if (window.innerWidth < 600) {
            document.querySelector('.sort-by-alphabet-text').classList.toggle('sort-select')
        }
        document.querySelector('.sort-by-alphabet').classList.toggle('select-by-sort')
        if (plantsType.alpha === 'alpha') {
            plantsType.alpha = ''
        } else {
            plantsType.alpha = 'alpha'
        }
        plantsType.count = 16
        filter()
        checkLikeGreenbook()
    }
})

document.querySelector('.loadMore_btn').addEventListener('click', () => {
    loadMore()
    checkLikeGreenbook()
    return
})

async function loadMore() {
    fetch('scripts/php/lazyLoad.php', {
        method: 'POST',
        body: JSON.stringify(plantsType),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.code === 'ok') {
                addCount()
                let arr = JSON.parse(JSON.stringify(data));
                document.querySelector('.greenbook-gallery').append(createDataGreenbook(arr))
            };
        })
}

function addCount() {
    plantsType.count += 16
}

async function filter() {
    fetch('scripts/php/greenbookConnectAll.php', {
        method: 'POST',
        body: JSON.stringify(plantsType),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => {
            let arr = JSON.parse(JSON.stringify(data));
            if (arr.info.length == 0) {
                let container = document.createElement('div')
                container.className = 'container'
                document.querySelector('.greenbook-gallery').innerHTML = ''
                container.innerHTML = `<h1 style="margin-top: 20px;">К сожалению, по вашему запросу ничего не найдено :(</h1>`
                document.querySelector('.greenbook-gallery').append(container)
            } else {
                document.querySelector('.greenbook-gallery').innerHTML = ''
                document.querySelector('.greenbook-gallery').prepend(createDataGreenbook(arr))
                after()
            }

        })
}

function createDataGreenbook(data) {
    let container = document.createElement('div')
    container.className = 'container'

    let count = Math.ceil(data.info.length / 8)
    // console.log('count ' + count);
    for (let j = 0; j < count; j++) {
        if (j % 2 === 0) {
            // console.log('====> j1 ' + j);
            let firstDiv = document.createElement('div')
            firstDiv.className = 'greenbook-cards_first'
            for (let i = j * 8; i < (j + 1) * 8; i++) {
                if (i == data.info.length) break
                // console.log('i1 ' + i);
                let divCard = document.createElement('div')
                divCard.className = 'greenbook-card'
                // divCard.onclick = function () { plantLoad(this) }

                let divCardImg = document.createElement('div')
                divCardImg.className = 'greenbook-card__img-div'
                let img = document.createElement('img')
                img.onclick = function () { plantLoad(this) }
                img.className = 'greenbook-card__img'
                img.src = data.info[i].foto
                img.alt = `Уход за комнатным растением ${data.info[i].name}`

                let divCaption = document.createElement('div')
                divCaption.className = 'greenbook-card__caption'
                divCaption.onclick = function () { plantLoad(this) }
                let pName = document.createElement('p')
                pName.className = 'greenbook-card__text'
                pName.textContent = data.info[i].name

                divCaption.append(pName)
                divCardImg.append(img)

                divCard.append(divCardImg)
                divCard.append(divCaption)

                let divLike = document.createElement('div')
                divLike.className = 'greenbook-card__like'
                divLike.onclick = function () { plantLike(this) }
                divLike.innerHTML = `
                    <svg id="${data.info[i].name}" class="greenbook-like-svg" onclick="plantLike(this)" width="28" height="26" viewBox="0 0 28 26" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
                                        stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                    `
                divCard.append(divLike)
                firstDiv.append(divCard)
            }
            container.append(firstDiv)
        }

        if (j % 2 === 1) {
            let secondtDiv = document.createElement('div')
            secondtDiv.className = 'greenbook-cards_second'
            // console.log('====> j2 ' + j);
            for (let i = j * 8; i < (j + 1) * 8; i++) {
                if (i == data.info.length) break
                // console.log('i2 ' + i);
                let divCard = document.createElement('div')
                divCard.className = 'greenbook-card'
                // divCard.onclick = function () { plantLoad(this) }

                let divCardImg = document.createElement('div')
                divCardImg.className = 'greenbook-card__img-div'
                let img = document.createElement('img')
                img.onclick = function () { plantLoad(this) }
                img.className = 'greenbook-card__img'
                img.src = data.info[i].foto
                img.alt = `Уход за комнатным растением ${data.info[i].name}`

                let divCaption = document.createElement('div')
                divCaption.className = 'greenbook-card__caption'
                divCaption.onclick = function () { plantLoad(this) }
                let pName = document.createElement('p')
                pName.className = 'greenbook-card__text'
                pName.textContent = data.info[i].name

                divCaption.append(pName)
                divCardImg.append(img)

                divCard.append(divCardImg)
                divCard.append(divCaption)

                let divLike = document.createElement('div')
                divLike.className = 'greenbook-card__like'
                // divLike.onclick = function () { plantLike(this) }
                divLike.innerHTML = `
                            <svg id="${data.info[i].name}" class="greenbook-like-svg" onclick="plantLike(this)" width="28" height="26" viewBox="0 0 28 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
                                                stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                            `
                divCard.append(divLike)
                secondtDiv.append(divCard)

            }
            container.append(secondtDiv)
        }
    }
    return container
}

async function after() {
    document.querySelector('.greenbook-cards_first').classList.add('greenbook-cards_unview')
    document.querySelector('.greenbook-cards_second').classList.add('greenbook-cards_view')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.greenbook-gallery').style.opacity = '1'
            }
        });
    });
    observer.observe(document.querySelector('.greenbook-gallery'));

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.background-between').style.opacity = '1'
            }
        });
    });
    observer2.observe(document.querySelector('.greenbook-cards_view'));

    document.querySelector('.sort-by-rating-text').onselectstart = () => false
    document.querySelector('.sort-by-alphabet-text').onselectstart = () => false
}

function checkLikeGreenbook() {
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

    fetch('/scripts/php/checkLikePlant.php', {
        method: "POST",
        body: JSON.stringify(req),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.info.length; i++) {
                document.querySelectorAll('.greenbook-like-svg').forEach(elem => {
                    if (elem.id == data.info[i].name) {
                        elem.style.stroke = 'red'
                    }
                })
            }
        })
}
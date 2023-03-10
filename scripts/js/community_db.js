fetch('scripts/php/communityConnect.php')
    .then(res => res.json())
    .then(data => {
        document.querySelector('.community-container').append(createDataCommunity(data))
    })

const topicType = {}

document.body.addEventListener('click', (e) => {
    if (e.target.parentNode.className.includes('community-filter')) {
        document.querySelector('.community-filter_input').innerHTML = e.target.innerHTML
        topicType.type = e.target.innerHTML
        communityFilter()
    }
})

async function communityFilter() {
    // document.querySelector('.greenbook-gallery').innerHTML = 'Loading...'
    console.log(topicType);
    fetch('scripts/php/communityConnect.php', {
        method: 'POST',
        body: JSON.stringify(topicType),
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => {
            let arr = JSON.parse(JSON.stringify(data));
            document.querySelector('.community-container').innerHTML = ''
            document.querySelector('.community-container').append(createDataCommunity(data))
        })
}

function createDataCommunity(data) {
    let divCards = document.createElement('div')
    divCards.className = 'community-cards'

    for (let i = 0; i < data.info.length; i++) {
        let divCard = document.createElement('div')
        divCard.className = 'community-card'

        let divImg = document.createElement('div')
        divImg.className = 'community-card_img'
        divImg.style.background = `url('${data.info[i].photo}') no-repeat center`
        divImg.style.backgroundSize = 'cover'

        let divIcons = document.createElement('div')
        divIcons.className = 'community-card_icons'

        let divIconView = document.createElement('div')
        divIconView.className = 'community-card_icon-view community-icon'
        divIconView.innerHTML = `<svg
                                        xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12"
                                        fill="none">
                                        <path
                                            d="M1 6C1 6 3.72727 1 8.5 1C13.2727 1 16 6 16 6C16 6 13.2727 11 8.5 11C3.72727 11 1 6 1 6Z"
                                            stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M8.49858 7.875C9.62825 7.875 10.544 7.03553 10.544 6C10.544 4.96447 9.62825 4.125 8.49858 4.125C7.36891 4.125 6.45312 4.96447 6.45312 6C6.45312 7.03553 7.36891 7.875 8.49858 7.875Z"
                                            stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="icon-view_count">${data.info[i].count_view}</p>`

        let divIconChat = document.createElement('div')
        divIconChat.className = 'community-card_icon-chat community-icon'
        divIconChat.innerHTML = `<svg width="14" height="14"
                                        viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13 6.66668C13.0023 7.54659 12.7967 8.4146 12.4 9.20001C11.9296 10.1412 11.2065 10.9328 10.3116 11.4862C9.41675 12.0396 8.38548 12.3329 7.33332 12.3333C6.45341 12.3356 5.5854 12.13 4.79999 11.7333L1 13L2.26666 9.20001C1.86995 8.4146 1.66437 7.54659 1.66667 6.66668C1.66707 5.61452 1.96041 4.58325 2.51381 3.68838C3.06721 2.79352 3.85883 2.0704 4.79999 1.60002C5.5854 1.20331 6.45341 0.997725 7.33332 1.00002H7.66666C9.05622 1.07668 10.3687 1.66319 11.3527 2.64726C12.3368 3.63132 12.9233 4.94378 13 6.33334V6.66668Z"
                                            stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="icon-chat_count">${data.info[i].count_message}</p>`

        let divIconFavorite = document.createElement('div')
        divIconFavorite.className = 'community-card_icon-favorite community-icon'
        divIconFavorite.innerHTML = `<svg width="8" height="10"
                                        viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 9.5L4 7L0.5 9.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H6.5C6.76522 0.5 7.01957 0.605357 7.20711 0.792893C7.39464 0.98043 7.5 1.23478 7.5 1.5V9.5Z"
                                            stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="icon-favorite_count">${data.info[i].count_favor}</p>`

        let divIconLike = document.createElement('div')
        divIconLike.className = 'community-card_icon-like community-icon'
        divIconLike.innerHTML = `<svg width="12" height="12"
                                        viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.5 11H2C1.73478 11 1.48043 10.8946 1.29289 10.7071C1.10536 10.5196 1 10.2652 1 10V6.5C1 6.23478 1.10536 5.98043 1.29289 5.79289C1.48043 5.60536 1.73478 5.5 2 5.5H3.5M7 4.5V2.5C7 2.10218 6.84196 1.72064 6.56066 1.43934C6.27936 1.15804 5.89782 1 5.5 1L3.5 5.5V11H9.14C9.38116 11.0027 9.61519 10.9182 9.79895 10.762C9.98272 10.6058 10.1038 10.3885 10.14 10.15L10.83 5.65C10.8518 5.50668 10.8421 5.36034 10.8017 5.22113C10.7613 5.08191 10.6911 4.95315 10.5959 4.84376C10.5008 4.73437 10.383 4.64697 10.2508 4.58761C10.1185 4.52825 9.97495 4.49836 9.83 4.5H7Z"
                                            stroke-width="0.81" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <p class="icon-like_count">${data.info[i].count_like}</p>`



        let divCaption = document.createElement('div')
        divCaption.className = 'community-card_caption'

        let type = document.createElement('p')
        type.className = 'community-card_caption-type'
        type.innerHTML = data.info[i].type

        let title = document.createElement('p')
        title.className = 'community-card_captio-title'
        title.innerHTML = data.info[i].head


        let divLine = document.createElement('div')
        divLine.className = 'community-card_line'

        let readMore = document.createElement('p')
        readMore.className = 'community-card_read-more'
        readMore.innerHTML = 'Читать дальше'

        divIcons.append(divIconView)
        divIcons.append(divIconChat)
        divIcons.append(divIconFavorite)
        divIcons.append(divIconLike)

        divImg.append(divIcons)

        divCard.append(divImg)

        divCaption.append(type)
        divCaption.append(title)
        divCaption.append(divLine)
        divCaption.append(readMore)

        divCard.append(divCaption)

        divCards.append(divCard)
    }

    return divCards
}

fetch('scripts/php/articlesConnect.php')
    .then(result => result.json())
    .then(data => {
        // console.log('from article ', data);
        for (let i = 0; i < data.info.length; i++) {
            let divSlide = document.createElement('div')
            divSlide.className = 'swiper-slide'
            divSlide.id = `item-${data.info[i].id_article}`
            divSlide.onclick = function () { articleLoad(this) }

            let divCardImg = document.createElement('div')
            divCardImg.className = 'community-slider__card_img'
            let img = document.createElement('img')
            img.src = data.info[i].foto
            img.alt = data.info[i].head

            let divTitle = document.createElement('div')
            divTitle.className = 'community-slider_div'
            let h5Name = document.createElement('h5')
            h5Name.className = 'community-slider_div-title'
            h5Name.textContent = data.info[i].head

            divTitle.append(h5Name)
            divCardImg.append(img)

            divSlide.append(divCardImg)
            divSlide.append(divTitle)


            let divLike = document.createElement('div')
            divLike.className = 'community-slider_like'
            divLike.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                <path d="M25 27L13 19.7778L1 27V3.88889C1 3.12271 1.36122 2.38791 2.00421 1.84614C2.64719 1.30436 3.51926 1 4.42857 1H21.5714C22.4807 1 23.3528 1.30436 23.9958 1.84614C24.6388 2.38791 25 3.12271 25 3.88889V27Z" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
            `
            divSlide.append(divLike)

            document.querySelector('.swiper-wrapper__community').append(divSlide)
        }
    })
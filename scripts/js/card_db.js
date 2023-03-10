const plantName = {}
// console.log('card here');

function plantLoad(plant) {
    if (plant.tagName == 'DIV') {
        localStorage.setItem('plant', JSON.stringify(plant.textContent))
    }
    if (plant.tagName == 'IMG') {
        let split = plant.alt.substr(28)
        localStorage.setItem('plant', JSON.stringify(split))
    }

    window.open('/card.html', '_blank')
}

let a = localStorage.getItem('plant')
plantName.name = JSON.parse(a).trim()
// document.title = JSON.parse(a).trim()
// console.log(plantName);

fetch('scripts/php/cardConnect.php', {
    method: 'POST',
    body: JSON.stringify(plantName),
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
}).then(res => res.json())
    .then(data => {
        // console.log(data.info);
        // let arr = []

        // console.log(arr);
        document.querySelector('.plants-card_main-name').innerHTML = data.info[0].name
        document.querySelector('.plants-card_location').innerHTML = data.info[0].location
        document.querySelector('.plants-card_link-name').innerHTML = data.info[0].name
        document.querySelector('.card-main-img').style.background = `url('${data.info[0].foto}') no-repeat center`
        document.querySelector('.card-main-img').style.backgroundSize = 'cover'
        document.querySelector('.plants-card_type').innerHTML = data.info[0].type
        document.querySelector('.plants-card_complexity').innerHTML = data.info[0].s_complexity
        document.querySelector('.plants-card_size').innerHTML = data.info[0].s_size
        document.querySelector('.plants-card_watering').innerHTML = data.info[0].s_watering
        document.querySelector('.plants-card_lighting').innerHTML = data.info[0].s_light
        document.querySelector('.infoText-text').innerHTML = data.info[0].reference
        document.querySelector('.care-text').innerHTML = data.info[0].care
        document.querySelector('.watering-text').innerHTML = data.info[0].watering
        document.querySelector('.transplantation-text').innerHTML = data.info[0].transplanting
        document.querySelector('.problem-text').innerHTML = data.info[0].problems
        document.querySelector('.reproduction-text').innerHTML = data.info[0].reproduction
        document.querySelector('.actuality-text').innerHTML = data.info[0].interesting


        for (elem of data.info) {


            let imgDivPhone = document.createElement('div')
            imgDivPhone.className = 'slider_imageInterier_block-phone'

            let imgPhone = document.createElement('img')
            imgPhone.className = 'slider_imageInterier_img-phone'
            imgPhone.src = elem.interiorFoto

            imgDivPhone.append(imgPhone)

            document.querySelector('.slider_imageInterier-phone').append(imgDivPhone)


            let imgDiv = document.createElement('div')
            imgDiv.className = 'slider_imageInterier_block'

            let img = document.createElement('img')
            img.className = 'slider_imageInterier_img'
            img.src = elem.interiorFoto

            imgDiv.append(img)

            document.querySelector('.slider_imageInterier').append(imgDiv)


        }
    })












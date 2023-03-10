// for (let j = 0; j <= count; j++) {
//     if (j % 2 === 0) {
//         let firstDiv = document.createElement('div')
//         firstDiv.className = 'greenbook-cards_first'
//         for (let i = j * 8; i < (j + 1) * 8; i++) {
//             console.log('first ' + i);

//             if (i === data.info.length - 1) {
//                 break
//             }
//         }
//     }
//     if (j % 2 === 1) {
//         let secondtDiv = document.createElement('div')
//         secondtDiv.className = 'greenbook-cards_second'
//         for (let i = j * 8; i < (j + 1) * 8; i++) {
//             console.log('second ' + i);
//             if (i === data.info.length - 1) {
//                 break
//             }
//         }
//     }
// }



    // for (let i = 0; i < data.info.length; i++) {
    //     if ((i / 8) % 2 < 1) {
    //         let divCard = document.createElement('div')
    //         divCard.className = 'greenbook-card'

    //         let divCardImg = document.createElement('div')
    //         divCardImg.className = 'greenbook-card__img-div'
    //         let img = document.createElement('img')
    //         img.className = 'greenbook-card__img'
    //         img.src = data.info[i].foto

    //         let divCaption = document.createElement('div')
    //         divCaption.className = 'greenbook-card__caption'
    //         let pName = document.createElement('p')
    //         pName.className = 'greenbook-card__text'
    //         pName.textContent = data.info[i].name

    //         divCaption.append(pName)
    //         divCardImg.append(img)

    //         divCard.append(divCardImg)
    //         divCard.append(divCaption)

    //         let divLike = document.createElement('div')
    //         divLike.className = 'greenbook-card__like'
    //         divLike.innerHTML = `
    //             <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
    //                             xmlns="http://www.w3.org/2000/svg">
    //                             <path
    //                                 d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
    //                                 stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
    //                         </svg>
    //             `
    //         divCard.append(divLike)
    //         firstDiv.append(divCard)
    //         container.append(firstDiv)
    //     }
    //     if (!((i / 8) % 2 < 1)) {
    //         let divCard = document.createElement('div')
    //         divCard.className = 'greenbook-card'

    //         let divCardImg = document.createElement('div')
    //         divCardImg.className = 'greenbook-card__img-div'
    //         let img = document.createElement('img')
    //         img.className = 'greenbook-card__img'
    //         img.src = data.info[i].foto

    //         let divCaption = document.createElement('div')
    //         divCaption.className = 'greenbook-card__caption'
    //         let pName = document.createElement('p')
    //         pName.className = 'greenbook-card__text'
    //         pName.textContent = data.info[i].name

    //         divCaption.append(pName)
    //         divCardImg.append(img)

    //         divCard.append(divCardImg)
    //         divCard.append(divCaption)

    //         let divLike = document.createElement('div')
    //         divLike.className = 'greenbook-card__like'
    //         divLike.innerHTML = `
    //                     <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
    //                                     xmlns="http://www.w3.org/2000/svg">
    //                                     <path
    //                                         d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
    //                                         stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
    //                                 </svg>
    //                     `
    //         divCard.append(divLike)
    //         secondtDiv.append(divCard)
    //         container.append(secondtDiv)
    //     }
    // }





    // function createData(data) {

    //     // let container = document.createElement('div')
    //     // container.className = 'container'
    
    //     let count = Math.ceil(data / 8)
    //     console.log('count ' + count);
    //     for (let j = 0; j < count; j++) {
    //         if (j % 2 === 0) {
    //             console.log('====> j1 ' + j);
    //             // let firstDiv = document.createElement('div')
    //             // firstDiv.className = 'greenbook-cards_first'
    //             for (let i = j * 8; i < (j + 1) * 8; i++) {
    //                 console.log('i1 ' + i);
    //                 if (i == data - 1) break
    //                 // let divCard = document.createElement('div')
    //                 // divCard.className = 'greenbook-card'
    
    //                 // let divCardImg = document.createElement('div')
    //                 // divCardImg.className = 'greenbook-card__img-div'
    //                 // let img = document.createElement('img')
    //                 // img.className = 'greenbook-card__img'
    //                 // img.src = data.info[i].foto
    
    //                 // let divCaption = document.createElement('div')
    //                 // divCaption.className = 'greenbook-card__caption'
    //                 // let pName = document.createElement('p')
    //                 // pName.className = 'greenbook-card__text'
    //                 // pName.textContent = data.info[i].name
    
    //                 // divCaption.append(pName)
    //                 // divCardImg.append(img)
    
    //                 // divCard.append(divCardImg)
    //                 // divCard.append(divCaption)
    
    //                 // let divLike = document.createElement('div')
    //                 // divLike.className = 'greenbook-card__like'
    //                 // divLike.innerHTML = `
    //                 //     <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
    //                 //                     xmlns="http://www.w3.org/2000/svg">
    //                 //                     <path
    //                 //                         d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
    //                 //                         stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
    //                 //                 </svg>
    //                 //     `
    //                 // divCard.append(divLike)
    //                 // firstDiv.append(divCard)
    //                 // container.append(firstDiv)
    
    //             }
    //         }
    
    //         if (j % 2 === 1) {
    //             // let secondtDiv = document.createElement('div')
    //             // secondtDiv.className = 'greenbook-cards_second'
    //             console.log('====> j2 ' + j);
    //             for (let i = j * 8; i < (j + 1) * 8; i++) {
    //                 console.log('i2 ' + i);
    //                 if (i == data - 1) break
    //                 // let divCard = document.createElement('div')
    //                 // divCard.className = 'greenbook-card'
    
    //                 // let divCardImg = document.createElement('div')
    //                 // divCardImg.className = 'greenbook-card__img-div'
    //                 // let img = document.createElement('img')
    //                 // img.className = 'greenbook-card__img'
    //                 // img.src = data.info[i].foto
    
    //                 // let divCaption = document.createElement('div')
    //                 // divCaption.className = 'greenbook-card__caption'
    //                 // let pName = document.createElement('p')
    //                 // pName.className = 'greenbook-card__text'
    //                 // pName.textContent = data.info[i].name
    
    //                 // divCaption.append(pName)
    //                 // divCardImg.append(img)
    
    //                 // divCard.append(divCardImg)
    //                 // divCard.append(divCaption)
    
    //                 // let divLike = document.createElement('div')
    //                 // divLike.className = 'greenbook-card__like'
    //                 // divLike.innerHTML = `
    //                 //             <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
    //                 //                             xmlns="http://www.w3.org/2000/svg">
    //                 //                             <path
    //                 //                                 d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
    //                 //                                 stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
    //                 //                         </svg>
    //                 //             `
    //                 // divCard.append(divLike)
    //                 // secondtDiv.append(divCard)
    //                 // container.append(secondtDiv)
    
    //             }
    
    //         }
    //     }
    
    //     // return container
    
    
    // }

    // fetch('scripts/php/greenbookConnectnext.php')
//     .then(res => res.json())
//     .then(data => {

//         for (let i = 0; i < data.info.length; i++) {
//             let divCard = document.createElement('div')
//             divCard.className = 'greenbook-card'

//             let divCardImg = document.createElement('div')
//             divCardImg.className = 'greenbook-card__img-div'
//             let img = document.createElement('img')
//             img.className = 'greenbook-card__img'
//             img.src = data.info[i].foto

//             let divCaption = document.createElement('div')
//             divCaption.className = 'greenbook-card__caption'
//             let pName = document.createElement('p')
//             pName.className = 'greenbook-card__text'
//             pName.textContent = data.info[i].name

//             divCaption.append(pName)
//             divCardImg.append(img)

//             divCard.append(divCardImg)
//             divCard.append(divCaption)

//             let divLike = document.createElement('div')
//             divLike.className = 'greenbook-card__like'
//             divLike.innerHTML = `
//             <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
//                                 stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//             `
//             divCard.append(divLike)


//             document.querySelector('.greenbook-cards_second').append(divCard)
//         }
//     })





////////////////////////////////////////////////////


//////////////////////////////////////////////////
// fetch('scripts/php/greenbookConnect.php')
//     .then(res => res.json())
//     .then(data => {

//         for (let i = 0; i < data.info.length; i++) {
//             let divCard = document.createElement('div')
//             divCard.className = 'greenbook-card'

//             let divCardImg = document.createElement('div')
//             divCardImg.className = 'greenbook-card__img-div'
//             let img = document.createElement('img')
//             img.className = 'greenbook-card__img'
//             img.src = data.info[i].foto

//             let divCaption = document.createElement('div')
//             divCaption.className = 'greenbook-card__caption'
//             let pName = document.createElement('p')
//             pName.className = 'greenbook-card__text'
//             pName.textContent = data.info[i].name

//             divCaption.append(pName)
//             divCardImg.append(img)

//             divCard.append(divCardImg)
//             divCard.append(divCaption)

//             let divLike = document.createElement('div')
//             divLike.className = 'greenbook-card__like'
//             divLike.innerHTML = `
//             <svg width="28" height="26" viewBox="0 0 28 26" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M24.9952 3.53337C24.3599 2.88873 23.6056 2.37736 22.7754 2.02847C21.9451 1.67958 21.0553 1.5 20.1566 1.5C19.258 1.5 18.3681 1.67958 17.5379 2.02847C16.7077 2.37736 15.9534 2.88873 15.3181 3.53337L13.9997 4.87059L12.6812 3.53337C11.398 2.23186 9.65749 1.50067 7.84269 1.50067C6.0279 1.50067 4.28743 2.23186 3.00418 3.53337C1.72092 4.83488 1 6.6001 1 8.44072C1 10.2813 1.72092 12.0466 3.00418 13.3481L4.32264 14.6853L13.9997 24.5L23.6767 14.6853L24.9952 13.3481C25.6307 12.7037 26.1349 11.9387 26.4789 11.0967C26.8229 10.2547 27 9.35216 27 8.44072C27 7.52928 26.8229 6.62677 26.4789 5.78475C26.1349 4.94273 25.6307 4.1777 24.9952 3.53337Z"
//                                 stroke-width="1.6126" stroke-linecap="round" stroke-linejoin="round" />
//                         </svg>
//             `
//             divCard.append(divLike)


//             document.querySelector('.greenbook-cards_first').append(divCard)
//         }
//     })


///////////////////////////////////////////////


 // const lazyImages = document.querySelectorAll('.greenbook-cards_view');
    // const loadMapBlock = document.querySelector('.greenbook-cards_unview');
    // const windowHeight = document.documentElement.clientHeight;

    // console.log(loadMapBlock.getBoundingClientRect().top + pageYOffset);

    // let lazyImagesPositions = [];
    // if (lazyImages.length > 0) {
    //     lazyImages.forEach(img => {
    //         lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset)
    //         scrollCheck();
    //     })
    // }

    // window.addEventListener('scroll', lazyScroll)
    // document.querySelector('.greenbook-cards_unview').addEventListener('mouseenter', () => {
    //     document.querySelector('.greenbook-gallery').style.overflow = 'hidden'
    // })

    // document.querySelector('.greenbook-cards_unview').addEventListener('mouseleave', () => {
    //     document.querySelector('.greenbook-gallery').style.overflow = 'auto'
    // })

    // window.addEventListener('wheel', () => {

    //     console.log(window.scrollY + document.documentElement.clientHeight);


    // })
    // console.log(document.body.scrollHeight);
    // window.addEventListener('wheel', (e) => {
    //     var delta = e.detail;
    //     console.log(delta);
    //     if(e.target.className.includes('greenbook-cards_view')) {
    //         document.querySelector('.greenbook-gallery').style.overflow = 'scroll'
    //     } else if (e.target.className.includes('greenbook-cards_unview')) {
    //         document.querySelector('.greenbook-gallery').style.overflow = 'hidden'
    //     };
    // })

    // function lazyScroll() {
    //     if (document.querySelectorAll('.greenbook-cards_view').length > 0) {
    //         scrollCheck()
    //     }
    // }


    // function scrollCheck() {
    //     let imgIndex = lazyImagesPositions.findIndex(
    //         item => pageYOffset > item - windowHeight
    //     );
    //     if (imgIndex >= 0) {
    //         document.querySelector('.greenbook-gallery').style.overflow = 'scroll'
    //     }
    //     delete lazyImagesPositions[imgIndex]
    // }


    // document.querySelector('.greenbook-cards_view').addEventListener('mouseenter', () => {
    //     document.querySelector('.greenbook-gallery').style.overflow = 'scroll'

    // })

    // document.querySelector('.greenbook-cards_unview').addEventListener('mouseenter', () => {
    //     document.querySelector('.greenbook-gallery').style.overflow = 'hidden'
    // })

    // document.querySelector('.background-between').addEventListener('mouseenter', () => {
    //     document.querySelector('.greenbook-gallery').style.overflow = 'scroll'
    // })


// document.querySelector('.sort-by-alphabet').addEventListener('click', alphabet)



///////////////////////////////////////

// document.querySelectorAll('.select').forEach(elem => {
//     elem.addEventListener('click', (e) => {
//         if (e.currentTarget.className.includes('plants-species')) {
//             document.querySelector('.plants-species__input').innerHTML = e.target.innerHTML
//             plantsType.species = e.target.textContent

//         }
//         if (e.currentTarget.className.includes('plants-type')) {
//             document.querySelector('.plants-type__input').innerHTML = e.target.innerHTML
//             plantsType.type = e.target.classList[0]
//         }

//         document.querySelector('.greenbook-gallery').innerHTML = ''
//         fetch('scripts/php/greenbookConnectAll.php', {
//             method: 'POST',
//             body: JSON.stringify(plantsType),
//             credentials: "same-origin",
//             headers: {
//                 "Content-Type": "application/json; charset=UTF-8"
//             }
//         }).then(res => res.json())
//             .then(data => {
//                 let arr = JSON.parse(JSON.stringify(data));
//                 // console.log(arr);
//                 if (arr.info.length == 0) {
//                     let container = document.createElement('div')
//                     container.className = 'container'
//                     container.innerHTML = `<h1>К сожалению, по вашему запросу ничего не найдено</h1>`

//                     document.querySelector('.greenbook-gallery').append(container)
//                 }
//                 document.querySelector('.greenbook-gallery').prepend(createData(arr))
//             })

//     })
// });



///////////////
    // function filter() {
    //     document.querySelector('.greenbook-gallery').innerHTML = 'Loading...'
    //     console.log(plantsType);
    //     fetch('scripts/php/greenbookConnectAll.php', {
    //         method: 'POST',
    //         body: JSON.stringify(plantsType),
    //         credentials: "same-origin",
    //         headers: {
    //             "Content-Type": "application/json; charset=UTF-8"
    //         }
    //     }).then(res => res.json())
    //         .then(data => {
    //             let arr = JSON.parse(JSON.stringify(data));
    //             if (arr.info.length == 0) {
    //                 let container = document.createElement('div')
    //                 container.className = 'container'
    //                 document.querySelector('.greenbook-gallery').innerHTML = ''
    //                 container.innerHTML = `<h1>К сожалению, по вашему запросу ничего не найдено</h1>`
    //                 document.querySelector('.greenbook-gallery').append(container)
    //             } else {
    //                 document.querySelector('.greenbook-gallery').innerHTML = ''
    //                 document.querySelector('.greenbook-gallery').prepend(createData(arr))
    //                 after()
    //             }
                
    //         })
    // }

    /////////////////////////////////////////
    
     // document.querySelectorAll('.select').forEach(elem => {
    //     elem.addEventListener('click', (e) => {
    //         if (e.currentTarget.className.includes('plants-species')) {
    //             console.log(e.target.textContent);
    //             document.querySelector('.plants-species__input').innerHTML = e.target.innerHTML

    //         }
    //         if (e.currentTarget.className.includes('plants-type')) {
    //             console.log(e.target.textContent);
    //             document.querySelector('.plants-type__input').innerHTML = e.target.innerHTML
    //         }
    //     })
    // });

    // document.querySelectorAll('.sort').forEach(elem => {
    //     elem.addEventListener('click', (e) => {
    //         if (e.target.className.includes('sort-by-rating') || e.target.className.includes('sort-by-rating-text')) {
    //             elem.classList.toggle('select-by-sort')
    //             elem.onselectstart = () => false
    //         }
    //         if (e.target.className.includes('sort-by-alphabet') || e.target.className.includes('sort-by-alphabet-text')) {
    //             elem.classList.toggle('select-by-sort')
    //             elem.onselectstart = () => false
    //             alphabet()
    //         }
    //     })
    // })

    // function alphabet() {
    //     document.querySelectorAll('.container').forEach(elem => {
    //         console.log(elem);
    //     })

        // let arr = document.querySelectorAll('.greenbook-card')
        // let afterSort = [...arr].map(elem => elem.childNodes[1].textContent)
        // Array.from(document.querySelectorAll('.greenbook-card').sort((a, b) => {
        //     if (a.childNodes[1].textContent > b.childNodes[1].textContent) return 1
        //     if (a.childNodes[1].textContent < b.childNodes[1].textContent) return -1
        //     return 0
        // }))
    // }
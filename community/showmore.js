fetch('scripts/php/communityConnect.php')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })



  

function createData(data) {
  let container = document.createElement("section");
  container.className = "cards_sec";
  let divCards = document.createElement("div");
  container.className = "cards";
  //Запрос должен быть в кол-ве 12
  let count = Math.ceil(data.info.lenght / 4);
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      let evenDiv = document.createElement("div");
      evenDiv.className = "four_cards";
      for (let j = i * 4; j < (i + 1) * 4; j++) {
        if (j == data.info.length - 1) break;
        let divCard = document.createElement("div");
        divCard.className = "card card_var_1";
        let cardTop = document.createElement("div");
        cardTop.className = "card_top_1";
        let linkImage = document.createElement("a");
        let cardImage = document.createElement("img");
        cardImage.src = data.info[i].photo;
        let cardStats = document.createElement("div");
        cardStats.className = "card_stats";
        for (let h = 0; h < 4; h++) {
          let cardStat = document.createElement("div");
          cardStat.className = "card_stat";
          let iconStat = document.createElement("a");
          // Думаю легче хранить иконки в виде строки - <svg></svg>
          iconStat.innerHTML = JSON.parse(data.info.icon[h]);
          let paragraph = document.createElement("p");
          paragraph.innerText = data.info[i].stat[h];
          cardStat.append(iconStat);
          cardStat.append(paragraph);
          cardStats.append(cardStat);
        }

        let cardBottom = document.createElement("div");
        cardBottom.className = "card_bottom";
        let cardHelp = document.createElement("div");
        cardHelp.className = "card_help";
        let helpLink = document.createElement("a");
        helpLink.innerText = "нужна помощь";
        let cardText = document.createElement("div");
        cardText.className = "card_text";
        let textLink = document.createElement("a");
        textLink.innerText = data.info[i].title;
        let cardLine = document.createElement("div");
        cardLine.className = "card_line";
        let cardNext = document.createElement("div");
        cardNext.className = "card_next";
        let nextLink = document.createElement("a");
        nextLink.innerText = "Читать далее";

        linkImage.append(cardImage);
        cardTop.append(linkImage);
        cardTop.append(cardStats);

        cardHelp.append(helpLink);
        cardText.append(textLink);
        cardNext.append(nextLink);
        cardBottom.append(cardHelp);
        cardBottom.append(cardText);
        cardBottom.append(cardLine);
        cardBottom.append(cardNext);

        divCard.append(cardTop);
        divCard.append(cardBottom);

        evenDiv.append(divCard);
      }
      divCards.append(evenDiv);
    } else {
      let evenDiv = document.createElement("div");
      evenDiv.className = "four_cards";
      for (let j = i * 4; j < (i + 1) * 4; j++) {
        if (j == data.info.length - 1) break;
        let divCard = document.createElement("div");
        divCard.className = "card card_var_2";
        let cardTop = document.createElement("div");
        cardTop.className = "card_top_2";
        let linkImage = document.createElement("a");
        let cardImage = document.createElement("img");
        cardImage.src = data.info[i].photo;
        let cardStats = document.createElement("div");
        cardStats.className = "card_stats";
        for (let h = 0; h < 4; h++) {
          let cardStat = document.createElement("div");
          cardStat.className = "card_stat";
          let iconStat = document.createElement("a");
          // Думаю легче хранить иконки в виде строки - <svg></svg>
          iconStat.innerHTML = JSON.parse(data.info.icon[h]);
          let paragraph = document.createElement("p");
          paragraph.innerText = data.info[i].stat[h];
          cardStat.append(iconStat);
          cardStat.append(paragraph);
          cardStats.append(cardStat);
        }

        let cardBottom = document.createElement("div");
        cardBottom.className = "card_bottom";
        let cardHelp = document.createElement("div");
        cardHelp.className = "card_help";
        let helpLink = document.createElement("a");
        helpLink.innerText = "нужна помощь";
        let cardText = document.createElement("div");
        cardText.className = "card_text";
        let textLink = document.createElement("a");
        textLink.innerText = data.info[i].title;
        let cardLine = document.createElement("div");
        cardLine.className = "card_line";
        let cardNext = document.createElement("div");
        cardNext.className = "card_next";
        let nextLink = document.createElement("a");
        nextLink.innerText = "Читать далее";

        linkImage.append(cardImage);
        cardTop.append(linkImage);
        cardTop.append(cardStats);

        cardHelp.append(helpLink);
        cardText.append(textLink);
        cardNext.append(nextLink);
        cardBottom.append(cardHelp);
        cardBottom.append(cardText);
        cardBottom.append(cardLine);
        cardBottom.append(cardNext);

        divCard.append(cardTop);
        divCard.append(cardBottom);

        evenDiv.append(divCard);
      }
      divCards.append(evenDiv);
    }
    divCards.append(evenDiv);
  }
}

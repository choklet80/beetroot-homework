let CardDeck = {
    Suits: [
        `
        <svg class="Suit" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>clubs</title>
        <path d="M24.588 12.274c-1.845 0-3.503 0.769-4.683 2.022-0.5 0.531-1.368 1.16-2.306 1.713 0.441-1.683 1.834-3.803 2.801-4.733 1.239-1.193 2-2.87 2-4.734 0-3.59-2.859-6.503-6.4-6.541-3.541 0.038-6.4 2.951-6.4 6.541 0 1.865 0.761 3.542 2 4.734 0.967 0.93 2.36 3.050 2.801 4.733-0.939-0.553-1.806-1.182-2.306-1.713-1.18-1.253-2.838-2.022-4.683-2.022-3.575 0-6.471 2.927-6.471 6.541s2.897 6.542 6.471 6.542c1.845 0 3.503-0.792 4.683-2.045 0.525-0.558 1.451-1.254 2.447-1.832-0.094 4.615-2.298 8.005-4.541 9.341v1.179h12v-1.179c-2.244-1.335-4.448-4.726-4.541-9.341 0.995 0.578 1.922 1.274 2.447 1.832 1.18 1.253 2.838 2.045 4.683 2.045 3.575 0 6.471-2.928 6.471-6.542s-2.897-6.541-6.471-6.541z"></path>
        </svg>
        `,
        `<svg class="Suit" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>heart</title>
        <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
        </svg>
        `,
        `<svg class="Suit" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>diamonds</title>
        <path d="M16 0l-10 16 10 16 10-16z"></path>
        </svg>
        `,
        `<svg class="Suit" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <title>spades</title>
        <path d="M25.549 10.88c-6.049-4.496-8.133-8.094-9.549-10.88v0c-0 0-0-0-0-0v0c-1.415 2.785-3.5 6.384-9.549 10.88-10.314 7.665-0.606 18.365 7.93 12.476-0.556 3.654-2.454 6.318-4.381 7.465v1.179h12.001v-1.179c-1.928-1.147-3.825-3.811-4.382-7.465 8.535 5.889 18.244-4.811 7.93-12.476z"></path>
        </svg>
        `
    ],
    cardFace: [
        
        `<img class="cardFace" src="J.png" alt="cardFace">`,
        
        `<img class="cardFace" src="Q.png" alt="cardFace">`,
        
        `<img class="cardFace" src="K.png" alt="cardFace">`,
        
        `<img class="cardFace" src="T.png" alt="cardFace">`
        
    ]
}


let getCardTemplate = (Suit,cardFace) => 
    `
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <img class="img" src="card-back.png" alt="card-back" />
          </div>
          <div style="background-color: rgb(231, 231, 231)" class="back">
            ${Suit}
            <div class="card-back-img">${cardFace}</div>
          </div>
        </div>
      </div>
    `

function createCardDeck(CardDeck){
    let listHtml = ``
    let SuitCount = 0;
    let FaceCount = 6;
    let CardFace = 0;
    for(let i = 0; i < 9; ++i)
    {
        if(i < 5)
        {
            for(let j = 0; j < 4; ++j)
            {
                listHtml += getCardTemplate(CardDeck.Suits[SuitCount++],FaceCount)
            }
            FaceCount++
            SuitCount = 0
        }
        else
        {
            
            for(let j = 0; j < 4; ++j)
            {
                listHtml += getCardTemplate(CardDeck.Suits[SuitCount++],CardDeck.cardFace[CardFace])
            }
            CardFace++
            SuitCount = 0
        }
    }

    $('#app').html(listHtml);
}

createCardDeck(CardDeck)

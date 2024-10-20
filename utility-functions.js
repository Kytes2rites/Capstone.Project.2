function convertCard(cardObject) {
  let cardString = '<div class="card">';
  cardString += '<img class="card-image-top" src="' + cardObject.src + '">';
  cardString += '<div class="card-body">';
  cardString += '<h3 class="card-title">' + cardObject.title + "</h3>";
  cardString += cardObject.description;
  cardString += "</div>";
  cardString += "</div>";
  return cardString;
}

function display(message) {
  debugger;
  document.write(message);
}

function output(message) {
  outputTag.innerHTML += message + "<br>";
}

  // const cards = [card1, card2, card3];
        // for (position = 0; position < cards.length; position++) {
        //   const card = cards[position];
        //   const cardString = convertCard(card);
        //   mainTag.innerHTML = mainTag.innerHTML + cardString;
        // }
 
//         const card1 = {};
//         card1.src =
//           "https://cdn.glitch.global/7b0247e2-bf85-4ecb-8f0f-a6d27beeacf2/Large-Parking-Lot-Commercial-Paving.jpg?v=1726056561723";
//         card1.title = "We have the best spaces!";
//         card1.description = "Voted #1 in Parking Times Magazine.";

//         const card2 = {};
//         card2.src =
//           "https://cdn.glitch.global/7b0247e2-bf85-4ecb-8f0f-a6d27beeacf2/590ef44cf89729ee34ba27e3d990ec52.jpg?v=1726056515009";
//         card2.title = "Our customer service can't be beat!";
//         card2.description = "Community Choice Awards winner 3 years in a row!";

//         const card3 = {};
//         card3.src =
//           "https://cdn.glitch.global/7b0247e2-bf85-4ecb-8f0f-a6d27beeacf2/b7918603271e3f85e81c1fb4cbcd8807.jpg?v=1726056526878";
//         card3.title = "Parking Place at the greatest parking place! ";
//         card3.description = "Paradise Parkers";

// ANdrea said the is destruting the javascript objects. did not teach in class

// function convertCard(cardObject) {
//   const { src = '', title = 'No Title', description = 'No Description' } = cardObject;

//   const cardString = `
//     <div class="card">
//       <img class="card-image-top" src="${src}">
//       <div class="card-body">
//         <h3 class="card-title">${title}</h3>
//         <p>${description}</p>
//       </div>
//     </div>
//   `;

//   return cardString;
// }

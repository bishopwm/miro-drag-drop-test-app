// App Cards Playground

async function createAppCard(){

  let cardTitle = document.getElementById('card-title').value;
  let cardDescription = document.getElementById('card-description').value;
  let cardTag1 = document.getElementById('tag-name-1').value;
  //let cardTag1Tooltip = document.getElementById('tag-tooltip-1').value;
  let cardTag2 = document.getElementById('tag-name-2').value;
  //let cardTag2Tooltip = document.getElementById('tag-tooltip-2').value;
  
  //let cardIcon = document.getElementById('card-icon').value;
  //console.log("app card! with name" + cardTitle)

  const appCard = await miro.board.createAppCard({
    title: cardTitle,
    description: cardDescription,
    style: {
      cardTheme: '#2d9bf0',
    },
    fields: [
      {
        value: cardTag1,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/646/646094.png',
        iconShape: 'square',
        fillColor: '#FBE983',
        textColor: '#F83A22',
        tooltip: "I'm an example of a tag tooltip!",
      },
      {
        value: cardTag2,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/580/580740.png',
        iconShape: 'round',
        fillColor: '#F8D878',
        textColor: '#503000',
        tooltip: "I'm an example of a tag tooltip!",
      }
    ],
    x: 2000,
    y: 2000,
    width: 320,
    rotation: 0.0,
  });

  // Output the created item to the developer console
  console.log(appCard);

  // restart form flow:
  document.getElementById("modal-url-details").setAttribute("style", "visibility: hidden");
}

createAppCard();

function proceedNextStep(){
  document.getElementById("modal-url-details").setAttribute("style", "display: block");
}

proceedNextStep();

function showPortfolioUrl(){
  document.getElementById("portfolio-url").setAttribute("style", "display: block")
}
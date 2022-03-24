// App Cards Playground

async function createAppCard(){

  // define `appCard` attributes based on user inputs
  // cardTitle = appCard.title, cardDescription = appCard.description, cardTag = appCard.fields.value
  let cardTitle = document.getElementById('card-title').value;
  let cardDescription = document.getElementById('card-description').value;
  let cardTag1 = document.getElementById('tag-name-1').value;
  let cardTag2 = document.getElementById('tag-name-2').value;

  // call SDK method to create appCard
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

  // refresh app.html form on card generation:
  document.getElementById("modal-url-details").setAttribute("style", "visibility: hidden");
}
createAppCard();

// expose modal inputs on 'Next' button click
function proceedNextStep(){  
  console.log(document.getElementById('card-title').value.length > 0 && document.getElementById('card-description').value.length > 0 && document.getElementById('tag-name-1').value.length > 0 && document.getElementById('tag-name-2').value.length > 0)
  if(document.getElementById('card-title').value.length > 0 && document.getElementById('card-description').value.length > 0 && document.getElementById('tag-name-1').value.length > 0 && document.getElementById('tag-name-2').value.length > 0){
    document.getElementById("next-checkmark").setAttribute("style", "display: block");
    document.getElementById("modal-url-details").setAttribute("style", "display: block");
  } else {
    alert("Please fill out missing fields.")
  }
  
  
}

// expose https:// url input on toggle click for 'specify your own portfolio/site?'
function showPortfolioUrl(){
  document.getElementById("portfolio-url").setAttribute("style", "display: block")
}
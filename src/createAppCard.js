// App Cards Playground

async function createAppCard(){
  // define `appCard` attributes based on user inputs
  // cardTitle = appCard.title, cardDescription = appCard.description, cardTag = appCard.fields.value
  let cardTitle = document.getElementById('card-title').value;
  let cardOrg = document.getElementById('card-org').value;
  let cardDescription = document.getElementById('card-description').value;
  let cardTag1 = document.getElementById('tag-name-1').value;
  let cardTag2 = document.getElementById('tag-name-2').value;
  let cardTag3 = document.getElementById('tag-name-3').value;

  function determineUrl(){

    if(document.getElementById("site-checkbox").checked){
      portfolioUrl = document.getElementById("portfolio-url").value
    } else {
      portfolioUrl = `https://miro.com/app/settings/user-profile`
    }
    return portfolioUrl;
  }
  determineUrl();

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
        iconShape: 'square',
        fillColor: '#F8D878',
        textColor: '#503000',
        tooltip: "I'm an example of a tag tooltip!",
      },
      {
        value: cardTag3,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
        iconShape: 'square',
        fillColor: '#F8D878',
        textColor: '#503000',
        tooltip: "I'm an example of a tag tooltip!",
      },
      {
        value: cardOrg,
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/2891/2891526.png',
        iconShape: 'square',
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

  // Save appCard `id` and site/url preference to localstorage 
  // --> We will use this in index.js when the appCard modal is opened, to know which URL content should be used, based on `id`
  localStorage.setItem(appCard.id, `${portfolioUrl}`);
  console.log("Saved to local Storage: " + localStorage.getItem(appCard.id));

  // refresh app.html form on card generation:
  document.getElementById("modal-url-details").setAttribute("style", "visibility: hidden");

  // Expose create flow again once card is generated
  document.getElementById("next-button").setAttribute("style", "display: block");

  //clear input values in form after card is generated:
  document.getElementById('card-title').value = null;
  document.getElementById('card-org').value = null;
  document.getElementById('card-description').value = null;
  document.getElementById('tag-name-1').value = null;
  document.getElementById('tag-name-2').value = null;
  document.getElementById("next-checkmark").setAttribute("style", "visibility: hidden");
  document.getElementById("site-checkbox").checked = false;
  document.getElementById("portfolio-url").setAttribute("style", "visibility:hidden");
  document.getElementById("portfolio-url").value = null;

}
createAppCard();

// expose portfolio site inputs on 'Next' button click
function proceedNextStep(){  
  if(
    // if these fields are filled out, you can proceed
    document.getElementById('card-title').value.length > 0 
    && document.getElementById('card-description').value.length > 0){
      document.getElementById("next-checkmark").setAttribute("style", "display: block");
      document.getElementById("modal-url-details").setAttribute("style", "display: block");
      document.getElementById("next-button").setAttribute("style", "visibility: hidden");
  } else {
    // otherwise, message to fill out required fields
    alert("Please fill out missing fields.")
  }
}

// expose https:// url input on toggle click for 'specify your own portfolio/site?'
function showPortfolioUrl(){
  document.getElementById("portfolio-url").setAttribute("style", "display: block")
}
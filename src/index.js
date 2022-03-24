// NOTE: index.js contains the specific Miro Web SDK methods that you'd like to call 

// init function to open SDK panel on icon click
async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}
init();



miro.board.ui.on('app_card:open', (event) => {
  console.log('Subscribed to app card open event', event);
  const {appCard} = event;

  let urlPreference = localStorage.getItem(appCard.id)

  // Fetch a specific app card by specifying its ID
  const url = `${urlPreference}?appCardId=${appCard.id}`;

  // Open the modal to display the content of the fetched app card
  miro.board.ui.openModal({
    url,
  });
});




// ORIGINAL >>>>>>

// Listen to the 'app_card:open' event
// miro.board.ui.on('app_card:open', (event) => {
//   console.log('Subscribed to app card open event', event);
//   const {appCard} = event;

//   let portfolioUrl = '';
//   // function to determine if user has provided their own URL for modal content. 
//   // If yes, use this URL. If not, use Miro profile for current user.
//   function determineUrl(){
//     if(document.getElementById("site-checkbox").checked){
//       portfolioUrl = document.getElementById("portfolio-url").value
//     } else {
//       portfolioUrl = "https://miro.com/app/settings/company/3074457345821140946/user-profile"
//     }
//     return portfolioUrl
//   }
//   determineUrl();
  
//   // Set URL for modal content based on logic above.
//   const url = `${portfolioUrl}`;

//   // Fetch a specific app card by specifying its ID
//   const specificCard = appCard;
//   console.log(specificCard);

//   // Open the modal to display the content of the fetched app card
//   miro.board.ui.openModal({
//     url,
//     fullscreen: false
//   });
//   console.log(appCard)
// });
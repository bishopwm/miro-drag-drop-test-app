// NOTE: index.js contains the specific Miro Web SDK methods that you'd like to call 

async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();

//const portfolioOptions = [];

// Listen to the 'app_card:open' event
miro.board.ui.on('app_card:open', (event) => {
  console.log('Subscribed to app card open event', event);
  const {appCard} = event;

  let portfolioUrl = '';
  function determineUrl(){
    if(document.getElementById("site-checkbox").checked){
      portfolioUrl = document.getElementById("portfolio-url").value
    } else {
      portfolioUrl = "https://miro.com/app/settings/company/3074457345821140946/user-profile"
    }
    return portfolioUrl
  }
  determineUrl();

  
  // Fetch a specific app card by specifying its ID
  const url = `${portfolioUrl}`;
  // const userInfo = await miro.board.getUserInfo();
  // const url = `https://miro.com/app/settings/company/${userInfo.id}/user-profile`;

  // Open the modal to display the content of the fetched app card
  miro.board.ui.openModal({
    url,
    fullscreen: true
  });
});

// async function setProfileUrl(){
//   console.log("miro profile selected")
  
//   const userInfo = await miro.board.getUserInfo();
//   console.log("User ID: " + userInfo.id); // => "3658432978520043388"

//   let url = `https://miro.com/app/settings/company/3074457345821140946/user-profile`;

//   // Open the modal to display the content of the fetched app card
//   miro.board.ui.openModal({
//     url,
//     fullscreen: true
//   });

// }
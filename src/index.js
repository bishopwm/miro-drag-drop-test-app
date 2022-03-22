// NOTE: index.js contains the specific Miro Web SDK methods that you'd like to call 

async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

init();



// Listen to the 'app_card:open' event
miro.board.ui.on('app_card:open', (event) => {
  console.log('Subscribed to app card open event', event);
  const {appCard} = event;

  let portfolioUrl = document.getElementById("portfolio-url").value
  // Fetch a specific app card by specifying its ID
  const url = `https://${portfolioUrl}`;

  // Open the modal to display the content of the fetched app card
  miro.board.ui.openModal({
    url,
    fullscreen: false
  });
});
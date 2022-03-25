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
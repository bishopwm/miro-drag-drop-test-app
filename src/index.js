// NOTE: index.js contains the specific Miro Web SDK methods that you'd like to call 

async function init() {
  miro.board.ui.on('icon:click', async () => {
    await miro.board.ui.openPanel({url: 'app.html'});
  });
}

//   miro.board.ui.openPanel({
//     url: 'https://bishwm.me',
//     height: 600,
// });

init();

async function getSelection(){
  const selection = await miro.board.getSelection();
  console.log(selection);
}

getSelection()
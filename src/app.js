// NOTE: app.js contains the the app logic for this starter app.

// ---> FUNCTION TO CREATE A STICKY NOTE AND ZOOM TO IT ON SDK LOAD:

// async function init() {
//   const stickyNote = await miro.board.createStickyNote({
//     content: 'hello, puppets!',
//   });

//   const shape = await miro.board.createShape({
//     content: '<p>This is a very yellow star shape.</p>',
//     shape: 'star',
//     style: {
//       fillColor: '#FEFF45',
//     },
//     x: 200,
//     y: 200,
//     width: 280,
//     height: 280,
//   });

//   await miro.board.viewport.zoomTo(stickyNote);
//   //await miro.board.viewport.zoomTo(shape);
// }

init();

// ---> FUNCTION TO ENABLE DRAG/DROP OF AN IMAGE FROM OPEN PANEL AFTER SDK IS LOADED:

async function init() {
  
  // Enable the 'drop' event on the app panel. Active on 'miro-draggable' HTML elements
  await miro.board.ui.on('drop', async ({x, y, target}) => {
    // In this example: when the HTML element is dropped on the board, a sticky note is created
    await miro.board.createImage({
      x,
      y,
      url: target.src
      // content: target.textContent,
    });
  });
}

init();


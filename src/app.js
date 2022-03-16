// NOTE: app.js contains the the app logic for this starter app.

// ---> FUNCTION TO (1) ENABLE DRAG/DROP OF AN IMAGE FROM OPEN PANEL AFTER SDK IS LOADED, (2) LOAD PLACHOLDERS TO DRAG ITEMS TO

async function init() {
  
  // Enable the 'drop' event on the app panel. Active on 'miro-draggable' HTML elements
  await miro.board.ui.on('drop', async ({x, y, target}) => {
    // In this example: when the HTML element is dropped on the board, an image is created
  
    await miro.board.createImage({    
      // Grab image description based on HTML alt text attribute
      title: `<strong>Item</strong>: ${target.alt}`,
      x,
      y,
      // Grab image url based on HTML src attribute
      url: target.src
      // content: target.textContent,
    });
  });

}

init();
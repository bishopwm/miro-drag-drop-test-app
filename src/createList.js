function createList(){
    var listOne = document.getElementById('listOne').value
    console.log(listOne)

    const frameOne = miro.board.createFrame({
        title: listOne,
        style: {
          fillColor: '#ffffff',
        },
        x: 400, 
        y: 0, 
        width: 1800,
        height: 4000,
      });
}

createList();

async function getListContents(){
    // Get all items from the board
    const items = await miro.board.get();

    //console.log(items);

    // Count all card and shape items on the board
    let images = 0;

    items.forEach((items) => {
      switch (items.type) {
        case 'image':
          images++;
      }
      //console.log(images);
    });
    console.log(images)
    //return images;
    // Output to the console the total amount of card and shape items
    
}


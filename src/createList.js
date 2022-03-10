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
    // Get items from the board
    const items = await miro.board.get();

    let images = 0;
    items.forEach((items) => {
      switch (items.type) {
        case 'image':
          images++;
      }
    });
    alert("You have " + images + " items in your list. Time to go shopping. :) ")  
}

getListContents()
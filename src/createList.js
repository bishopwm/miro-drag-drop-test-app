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
        width: 800,
        height: 450,
      });
}

createList();
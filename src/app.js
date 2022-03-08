async function init() {
  const stickyNote = await miro.board.createStickyNote({
    content: 'Hello, World!',
  });

  await miro.board.viewport.zoomTo(stickyNote);
}

init();

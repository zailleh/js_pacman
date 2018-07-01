// keybinds for arrow keys --- sets direction of travel on Pacman
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp': console.log('ArrowUp');
      pacman.direction = {x: 0, y: -1}
      break;
    case 'ArrowDown':
      pacman.direction = {x: 0, y: 1}
      break;
    case 'ArrowLeft':
      pacman.direction = {x: -1, y: 0}
      break;
    case 'ArrowRight':
      pacman.direction = {x: 1, y: 0}
      break;
  }
});

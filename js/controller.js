// keybinds for arrow keys --- sets direction of travel on Pacman
document.addEventListener('keydown', (e) => {

  switch (e.key) {
    case 'ArrowUp':
      e.preventDefault();
      game.pacman.direction = {x: 0, y: -1}
      break;
    case 'ArrowDown':
      e.preventDefault();
      game.pacman.direction = {x: 0, y: 1}
      break;
    case 'ArrowLeft':
      e.preventDefault();
      game.pacman.direction = {x: -1, y: 0}
      break;
    case 'ArrowRight':
      e.preventDefault();
      game.pacman.direction = {x: 1, y: 0}
      break;
  }
});

console.log('hello')


var squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('click', event => {
  square.textContent = 'X'
  });
})

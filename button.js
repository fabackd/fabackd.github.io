var $btn = document.querySelector('.btn');

$btn.addEventListener('click', e => {
  window.requestAnimationFrame(() => {
    $btn.classList.remove('is-animating');
    
    window.requestAnimationFrame(() => {
      $btn.classList.add('is-animating');
    });
  });
});
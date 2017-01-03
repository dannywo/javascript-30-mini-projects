document.addEventListener('DOMContentLoaded', function () {

  function playSound(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop function from running if key does not correspond to given options
    audio.currentTime = 0; // Reset audio time if key is pressed rapidly
    audio.play();
    key.classList.add("playing");
  }

  function touchSound(){    
    var key = this.getAttribute('data-key')
    var audio = document.querySelector('audio[data-key="' + key + '"]');

    audio.currentTime = 0; // Reset audio time if key is pressed rapidly
    audio.play();
    this.classList.add("playing");
  }

  function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing')
  }

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
  keys.forEach(key => key.addEventListener('click', touchSound))
  window.addEventListener('keydown', playSound);
})
function onLoad() {
  let buttons = document.querySelectorAll(".key");
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let sound = e.currentTarget.querySelector(".sound").innerHTML;
      let audio = new Audio("sounds/" + sound + ".wav");
      audio.play();
    });
  });

  window.addEventListener('keypress', (e) => {
    document.querySelectorAll('audio').forEach((audio) => {
      if(e.key.toUpperCase() == String.fromCharCode(audio.attributes['data-key'].value)){
        audio.play();
      };
    });
  });
};

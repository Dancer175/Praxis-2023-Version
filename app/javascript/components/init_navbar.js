const initNavbar = () => {

  const burger = document.querySelector('#burger');

  if (document.getElementById("toggle") !=null) {
    document.getElementById("toggle").addEventListener('change', function() {
      if (this.checked) {
        burger.classList.add('active');
      }
      else {
        burger.classList.remove('active');
      }
   });
  }
}

export { initNavbar };

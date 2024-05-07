const initVisibilitySwitch = () => {

const visibilityButton = document.querySelector('#visibility-switch');
const textField = document.querySelector('.page-text');
const backgroundBox = document.querySelector('.nav-folders-wrapper');

textField.style.display = 'block';
backgroundBox.style.display = 'block';

visibilityButton.addEventListener('click', function() {
  if (textField.style.display === "none") {
    backgroundBox.style.display = 'block';
    textField.style.display = "block";
  } else {
    backgroundBox.style.display = 'none';
    textField.style.display = "none";
  }
  });

  // infoCross.addEventListener('click', function() {
  //   infoBar.style.display = "none";
  // });
}

export { initVisibilitySwitch };


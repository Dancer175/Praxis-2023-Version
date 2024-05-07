const initVisibilitySwitch = () => {

const visibilityButton = document.querySelector('#visibility-switch');
const textField = document.querySelector('.page-text');
const backgroundBox = document.querySelector('.nav-folders-wrapper');
const showImage = document.querySelector('#show-image');
const showText = document.querySelector('#show-text');

textField.style.display = 'block';
backgroundBox.style.display = 'block';

visibilityButton.addEventListener('click', function() {
  if (textField.style.display === "none") {
    backgroundBox.style.display = 'block';
    textField.style.display = "block";
    showImage.style.display = "block";
    showText.style.display = "none";
  } else {
    backgroundBox.style.display = 'none';
    textField.style.display = "none";
    showImage.style.display = "none";
    showText.style.display = "block";
  }
  });
}

export { initVisibilitySwitch };


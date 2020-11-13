//ale
const image1 = document.querySelector('#img1');

let ale1 = "images/ale1.jpg";
let ale2 = "images/ale2.jpg";

image1.onmouseenter = (e) => {
   e.target.setAttribute('src', ale2);
};

image1.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', ale1);
};

//khush
const image2 = document.querySelector('#img2');

let khush1 = "images/khush1.jpg";
let khush2 = "images/khush2.jpg";

image2.onmouseenter = (e) => {
  e.target.setAttribute('src',khush2);
};

image2.onmouseleave = (e) => {
  e.target.setAttribute('src', khush1);
};



const clicker = document.querySelector('#button1');
const myText = document.querySelector('#frothybutton');
myText.style.display = 'none';

clicker.onclick = showAndHide;

function showAndHide() {
  if (myText.classList.contains('showing')) {
    myText.style.display = 'none';
    myText.classList.remove('showing');
  } else {
    myText.style.display = 'block';
    myText.classList.add('showing');
  }
}

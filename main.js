// console.log('this is called from ====outside===== a function');

function myFirstFunction() {
  console.log('this is called from inside a function');
}

function createText() {
  const article = document.querySelector('.wrapper');
  const p = document.createElement('p');
  p.textContent = 'hello world';
  article.appendChild(p);
}

// myFirstFunction();
// createText()

function changeBodyColor() {
  // console.log('you are going to change body color here')
  document.body.style.setProperty('background-color','#00f')
}

document.querySelector('[data-btn]').addEventListener('click',changeBodyColor)

function addImage() {
  const figure = document.querySelector('figure')
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/id/1074/500'
  img.width = 300
  img.setAttribute('alt','some image alt')
  figure.appendChild(img)
}

function addClassToBody() {
  document.body.classList.add('dark')
}

document.querySelector('#fake-button').addEventListener('click', addClassToBody)

function dblClicked() {
  console.log('you doubled clicked this button')
}

function lastButtonAction() {
  console.log('last button action works')
}

document.querySelector('[data-last-button]').addEventListener('mouseover', lastButtonAction)
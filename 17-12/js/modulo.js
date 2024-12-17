function testWindow(){
  console.log(window);
  console.log(window.document);
  console.log(window.location);
  window.open('https://www.google.com');
  alert('teste do caio');

}

function testDocument() {
  console.log(document);
  console.log(document.forms);
  console.log(document.links);
  console.log(document.images);
}

const btn = document.getElementById('btn');
btn.addEventListener('click',testWindow);
const btn01 = document.getElementById('btn01');
btn01.addEventListener('click', testDocument);


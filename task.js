const node = document.querySelector('.messages li');
node.innerHTML = 'We will learn about <em>The DOM</em>';

const homeTitle = document.getElementById('title');
homeTitle.style.color = 'navy';

const list = document.querySelector('.messages'); //use class to select first! more flexible
const listItem = document.createElement('li');
var bulletText = document.createTextNode('Appended text');
listItem.appendChild(bulletText);
list.appendChild(listItem); //will add bullet to the bottom of the list

let button = document.getElementById('myBtn');
button.addEventListener('click', function(event) {
    alert('Hi');
});

const mouse = document.querySelector('button');
mouse.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
    event.target.style.color = "orange";
  
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "";
    }, 700);
  }, false);

const anchorLink = document.querySelectorAll('a');
anchorLink.addEventListener('click', function(event2) {
        alert('are you sure you want to go to Bing...?');
    
});
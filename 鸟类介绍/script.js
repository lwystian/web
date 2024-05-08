var preButton = document.querySelector('.pre');
var nextButton = document.querySelector('.next');
var content = document.querySelector('.content');

var count = 0;
preButton.addEventListener('click', () => {
  content.classList.add('no-animation')
  count += 60;
  if (count > 360) {
    count = 60;
  }
  content.style.transform = `translateZ(-30vw) rotateY(${count}deg)`;
});

nextButton.addEventListener('click', () => {
  content.classList.add('no-animation')
  count -= 60;
  if (count < -360) {
    count = -60;
  }
  content.style.transform = `translateZ(-30vw) rotateY(${count}deg)`;
});

var display = document.querySelector('.display')
var picture = document.querySelector('.picture')
var text = document.querySelector('.text')
var link = document.querySelector('.link')
var title = document.querySelector('.title')
var cancel = document.querySelector('.cancel')
function show(item) {
  var titleContent = item.querySelector('a').getAttribute('title')
  var description = item.querySelector('a').innerHTML
  var img = getComputedStyle(item).backgroundImage
  var pictureLink = item.querySelector('a').getAttribute('href')
  display.classList.add('introduce')
  text.innerHTML = description
  title.innerHTML = titleContent
  picture.style.backgroundImage = img
  link.href = pictureLink
}

cancel.addEventListener('click', () => {
  display.classList.remove('introduce')
})
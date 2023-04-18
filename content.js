var images = document.querySelectorAll('img[src*="/image/layout_set_logo"]');

for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'https://raw.githubusercontent.com/Piekielniok/perrito-extension/master/layout_set_logo.png';
}
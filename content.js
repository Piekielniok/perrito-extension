var logoImage = document.querySelectorAll('img[src*="/image/layout_set_logo"]');
var welcomeText = document.querySelector('.journal-content-article p:nth-of-type(2)');
var promoImage = document.querySelectorAll('img[src*="/documents/20151/1589696/extranet+in+merito+300x250.jpg"]');

welcomeText.innerHTML = 'Od teraz jesteśmy Uniwersytetem WSB Perrito. Odwiedź specjalnie przygotowaną witrynę i dowiedz się więcej. Do logowania wystarczy uczelniane konto i hasło, z którego korzystasz w narzędziach Microsoft 365, takich jak MS Teams.';

for (var i = 0; i < logoImage.length; i++) {
  logoImage[i].src = 'https://raw.githubusercontent.com/Piekielniok/perrito-extension/master/layout_set_logo.png';
}

for (var j = 0; j < promoImage.length; j++) {
  promoImage[i].src = 'https://raw.githubusercontent.com/Piekielniok/perrito-extension/master/extranet_in_perrito_300x250.jpg';
}
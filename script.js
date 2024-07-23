let cardActive = 'standby';
let currentCard = 'standby'
let cardID = document.getElementById('d1');
let cardStyle = window.getComputedStyle(cardID);
let zIndexVal = cardStyle.getPropertyValue('z-index');

function toFront(cardActive) {
  
  if (currentCard === 'standby') {
    cardID = document.getElementById(cardActive);
    cardStyle = window.getComputedStyle(cardID);
    zIndexVal = cardStyle.getPropertyValue('z-index');
    document.getElementById(cardActive).style.zIndex = '100';
    currentCard = cardActive;
  } else if (currentCard === cardActive) {
    document.getElementById(cardActive).style.zIndex = zIndexVal;
    currentCard = 'standby';
  } else {

  };
  
};
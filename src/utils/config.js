const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexName = /^[A-Za-zА-Яа-я -]+$/;
const shortyDuration = 40;
const shownCardsDesktop = 12;
const shownCardsTablet= 8;
const shownCardsSmartphone = 5;
const addedCardsDesktop = 3;
const addedCardsNoDesktop = 2;

module.exports = {
    regexEmail,
    regexName,
    shortyDuration,
    shownCardsDesktop,
    shownCardsTablet,
    shownCardsSmartphone,
    addedCardsDesktop,
    addedCardsNoDesktop
  };
  
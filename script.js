'use strict';

function mailTo (address) {
  window.location.href = 'mailto:' + address;
};

function iScrollTo (id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
};
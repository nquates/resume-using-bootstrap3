var $, fill;

$ = require('jquery', 'bootstrap');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Now seeking a new challenging position');

fill;

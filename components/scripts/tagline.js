var $, fill;

$ = require('jquery', 'bootstrap');

(fill = function(item) {
  return $('.tagline').append("" + item);
})('Now seeking new challenging position.');

fill;

$ = require 'jquery'
do fill = (item = 'Now seeking new challenging position.') ->
  $('.tagline').append "#{item}"
fill
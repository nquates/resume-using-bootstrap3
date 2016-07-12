$ = require 'jquery','bootstrap'

do fill = (item = 'Now seeking new challenging position.') ->
  $('.tagline').append "#{item}"
fill

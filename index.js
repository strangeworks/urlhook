'use strict'

var data = require('data'),
    dom  = require('dom')

module.exports = function() {
  var hookNodes = dom('[data-hook]');
  
  hookNodes.each(function(el) {
    el.attr('href', data(el, 'hook-url'))
  })
}
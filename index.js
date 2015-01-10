'use strict'

var data = require('data'),
    dom  = require('dom')

module.exports = function() {
  var nodes = dom('[data-hook]'),
      hookUrl = data(el, 'hook-url')

  nodes.forEach(function(element, index){
    element.attr('href', urlHook)  
  });
}
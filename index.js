'use strict'

var dom  = require('dom')

var defaults = {
  selector: '[data-hook]',
  urlAttr: 'data-hook-url'
}

module.exports = function() {
  var hookNodes = dom(defaults.selector);

  hookNodes.each(function(el) {
    var url = el.attr(defaults.urlAttr)

    el.attr('href', url)
  })
}

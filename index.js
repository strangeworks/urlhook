'use strict'

module.exports = function(el) {
  var urlHook = el.data('urlhook');

  el.attr('href', urlHook)
}
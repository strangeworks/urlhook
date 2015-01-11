describe('urlhook test', function () {

  var assert = require('assert'),
      urlhook = require('urlhook'),
      domify = require('domify')

  it('should set proper href', function () {
    var url = domify('<a href="http://instagram.com/batman" data-hook data-hook-url="instagram://user?username=batman">Batman Instagram</a>')
    urlhook()

    assert('instagram://user?username=batman' == url.href)
  });

});
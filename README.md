## Urlhook - friendly app hoooks

Urlhooks helps to provide a flexible way of adding native mobile app hooks. Simple example is social accounts, you want to provide a much more user friendly way to view your social profile.

More info about hook urls you can find [here](http://instagram.com/developer/mobile-sharing/iphone-hooks/) or [here](http://wiki.akosma.com/IPhone_URL_Schemes).

### Usage:

```html
<a href="http://instagram.com/batman" data-hook data-hook-url="instagram://user?username=batman">Batman Instagram</a>
```

TODO:

* iPhone/iPad detection
* replace href only for mobile clients
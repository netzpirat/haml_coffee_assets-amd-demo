# Haml Coffee Assets & Require JS

This is a simple example Rails application that shows how to set up
[Haml Coffee Assets](https://github.com/netzpirat/haml_coffee_assets) with [RequireJS](http://requirejs.org/).

## Setup

### 1. Install gems

Add the following gems to your `Gemfile`:

```Ruby
gem 'haml_coffee_assets'
gem 'requirejs-rails'
```

and install them with `bundle`.

### 2. Configure sprockets and Haml Coffee Assets

Remove all sprockets directives from `application.js` and do not require any Haml Coffee template.

Configure Haml Coffee Assets to serve AMD modules instead of JST templates:

```Ruby
if defined? ::HamlCoffeeAssets
  config.hamlcoffee.placement = 'amd'
end
```

### 3. Write your templates

For this showcase only one simple template `app/assets/javascripts/templates/test.hamlc` exists:

```Haml
%h1 Test template rendering
%ul
  - for number in @numbers
    %li= number
```

### 4. Load template and render

Load the template in your app and render it:

```JavaScript
require(['jquery', 'templates/test'], function ($, test) {
  $(function() {
      $('body').append(test({ numbers: ['1', '2', '3'] }));
  });
});
```

## Partials

Haml Coffee AMD support detects partials in your templates and adds them automatically to the module dependencies,
allowing you to render another template like:

```Haml
%h1 Partials!!!
%p!= require('partial')()
```

## Author

Developed by Michael Kessler, [mksoft.ch](https://mksoft.ch).

If you like Haml Coffee Assets, you can watch the repository at [GitHub](https://github.com/netzpirat/haml_coffee_assets) and
follow [@netzpirat](https://twitter.com/#!/netzpirat) on Twitter for project updates.

## License

(The MIT License)

Copyright (c) 2012 Michael Kessler

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




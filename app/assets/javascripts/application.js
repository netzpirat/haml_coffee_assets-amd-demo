require(['jquery', 'hamlcoffee', 'templates/test', 'templates/another/works'], function ($, hc, test, works) {
  $(function() {
      $('body').append(test({ numbers: ['1', '2', '3'] }));
      $('body').append(works());
  });
});



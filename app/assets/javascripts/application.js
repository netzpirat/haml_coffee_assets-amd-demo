require(['jquery', 'hamlcoffee', 'templates/test'], function ($, hc, test) {
  $(function() {
      $('body').append(test({ numbers: ['1', '2', '3'] }));
  });
});



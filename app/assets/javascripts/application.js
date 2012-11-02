require(['jquery', 'templates/test'], function ($, test) {
  $(function() {
      $('body').append(test({ numbers: ['1', '2', '3'] }));
  });
});

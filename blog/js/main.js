$('article').readingTime();
  $(function() {
    var $article = $('article');

    $article.readingTime({
      wordsPerMinute: 190,
      lang: 'en',
      success: function() {
        console.log('It Works');
      },
      error: function(message) {
        console.log(message);
        $article.find('.eta').remove();
      }
    });
  });

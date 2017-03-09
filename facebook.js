const listOfThreads = [
  {
    "title" : "Health",
    "articles": [
      {
        "url" : "https://www.nytimes.com/2017/03/09/us/politics/health-bill-clears-house-panel-in-pre-dawn-hours.html",
        "thumbnail": "https://static01.nyt.com/images/2017/03/10/us/10health1/10health1-master768.jpg",
        "title": "unrelated"
      },
      {
        "url" : "https://www.nytimes.com/2017/03/09/us/politics/health-bill-clears-house-panel-in-pre-dawn-hours.html",
        "thumbnail": "https://static01.nyt.com/images/2017/03/10/us/10health1/10health1-master768.jpg",
        "title": "unrelated"
      }
    ]
  },
  { "title" : "Wikileaks",
    "articles": [
      {
        "url" : "https://www.nytimes.com/2017/03/09/us/politics/health-bill-clears-house-panel-in-pre-dawn-hours.html",
        "thumbnail": "https://static01.nyt.com/images/2017/03/10/us/10health1/10health1-master768.jpg",
        "title": "before"
      },
      {
        "url" : "https://www.nytimes.com/2017/03/08/us/politics/affordable-care-act-obama-care-health.html",
        "thumbnail": "https://www.nytimes.com/2017/03/08/us/politics/affordable-care-act-obama-care-health.html",
        "title": "the article i'm looking for"
      },
      {
        "url" : "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
        "thumbnail": "https://static01.nyt.com/images/2017/03/10/us/10health1/10health1-master768.jpg",
        "title": "after"
      }
    ]
  }
];

var extractThread = function(url) {
  var threads = listOfThreads;

  for (var thread = 0; thread < threads.length; thread++) {
    var currentThread = threads[thread];
    var articles = currentThread.articles;

    for (var i = 0; i < articles.length; i++) {
      if (articles[i].url == url) {
         var indexOfArticle = articles.indexOf(articles[i]);
        var previous = articles.slice(0, indexOfArticle);
        var next = articles.slice(indexOfArticle + 1, articles.length);
      }
    }
  }

  return { previousArticles: previous, nextArticles: next }
};

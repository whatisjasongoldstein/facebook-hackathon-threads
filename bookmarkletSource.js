const listOfThreads = [
  {
    "title" : "Renewable energy",
    "articles": [
      {
        "url" : "http://www.npr.org/2017/03/08/518988840/wind-energy-takes-flight-in-the-heart-of-texas-oil-country",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/07/-wind-img_7024-edit-daa38c839ec1b42a40a3146c70c4c6e10f6be454-s1600-c85.jpg",
        "title": "Wind Energy Takes Flight In The Heart Of Texas Oil Country"
      }
    ]
  },
  { "title" : "Healthcare",
    "articles": [
      {
        "url" : "http://www.npr.org/2017/03/08/519091030/freedom-caucus-members-face-crossroads-over-health-care-proposal",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/08/gettyimages-649333788_wide-533224c64631fa037e0c02dcf1d3ba298ddbceae-s1600-c85.jpg",
        "title": "Trump Won Big In House Conservatives' Districts — Will They Defy Him On Health Care?"
      },
      {
        "url" : "http://www.npr.org/sections/health-shots/2017/03/09/519304881/5-things-to-watch-with-the-gop-health-law-overhaul",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/08/gop-bill_custom-8525a282f7362ae54eedd816bcc81407b92c9edd-s1600-c85.jpg",
        "title": "5 Key Takeaways From The GOP Health Overhaul Plan"
      },
       {
        "url" : "http://www.npr.org/2017/03/09/519450642/medical-hospital-groups-oppose-gop-health-care-plan",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/09/ap_17068560544062_wide-ac77c2fa3957004e80d09aefee31781aef382824-s1600-c85.jpg",
        "title": "Medical, Hospital Groups Oppose GOP Health Care Plan"
      }
    ]
  }
];

var extractThread = function(url) {
  for (var thread = 0; thread < listOfThreads.length; thread++) {
    var currentThread = listOfThreads[thread];
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

function getRelatedLinksHTML( link ) {
	var html = '';
	var thread = extractThread( link );

	if( thread.previousArticles ) thread.previousArticles.forEach( function( element ) { html += '<div>' + element.url + '</div>' } );
	if( thread.nextArticles ) thread.nextArticles.forEach( function( element ) { html += '<div>' + element.url + '</div>' } );

	return html;
}

function insertContentMaybe( postCard ) {
	var link = postCard.querySelector( '._6ks a' );

  relatedLinksHTML = getRelatedLinksHTML( link );

  if( relatedLinksHTML ) postCard.innerHTML += relatedLinksHTML;
}


document.querySelectorAll( '._3x-2' ).forEach( function( postCard ){ insertContentMaybe( postCard ) } );

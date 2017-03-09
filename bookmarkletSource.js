const listOfThreads = [
  {
    "title" : "The Affordable Care Act, In-Depth",
    "articles": [
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/sickaroundamerica/",
        "thumbnail": "http://i0.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2009/03/Sick-Around-America.jpg?resize=1200%2C630",
        "title": "Healthcare Before The ACA"
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/divided-states-of-america/",
        "thumbnail": "http://i0.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/1409943771_ObamasDealHD.png?resize=1200%2C630",
        "title": "All you need to know about Obamacare: The Divide"
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/obamasdeal/",
        "thumbnail": "http://i2.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2016/11/FL_DividedStatesOfAmerica.jpg?resize=1200%2C630",
        "title": "Obama's Deal"
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/article/health-care-rulings-winners-and-losers/",
        "thumbnail": "http://i1.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/201262810599_1101.jpg?resize=1200%2C630",
        "title": "View from 2012: Obamacare Winners and Losers"
      }
    ]
  },
    {
    "title" : "Western Journalism on Wikileaks Vault 7",
    "articles": [
      {
        "url" : "http://www.westernjournalism.com/assange-to-share-more-details-about-cia-hacking-techniques-with-tech-companies/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/03/julianassange-vid.jpg",
        "title": "Assange To Share More Details About CIA Hacking Techniques With Tech Companies"
      },
      {
        "url" : "http://www.westernjournalism.com/wikileaks-spills-cias-hacking-secrets/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/01/assange.jpg",
        "title": "WikiLeaks Spills CIA’s Hacking Secrets"
      },
      {
        "url" : "http://www.westernjournalism.com/limbaugh-wikileaks-revelation-cia-mimics-russian-hackers-changes-narrative/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/03/rush-sbs-wikileaks-2.jpg",
        "title": "Limbaugh: WikiLeaks Revelation That CIA Mimics Russian Hackers Changes Narrative "
      },
      {
        "url" : "http://www.westernjournalism.com/wikileaks-reveals-cia-hacked-tvs-can-spy-owners/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2016/10/julianassange.jpg",
        "title": "WikiLeaks Reveals CIA-Hacked TVs Can Spy On Their Owners"
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

	if( thread.previousArticles ) thread.previousArticles.forEach( function( element ) { html += '<div>Prev: ' + element.url + '</div>' } );
	if( thread.nextArticles ) thread.nextArticles.forEach( function( element ) { html += '<div>Next: ' + element.url + '</div>' } );

	return html;
}

function insertContentMaybe( postCard ) {
	var link = postCard.querySelector( '._6ks a, a.touchable' );

	if( ! link ) return;

	link = link.getAttribute( 'href' )
		.replace("https://l.facebook.com/l.php?u=", "")
		.replace("https://lm.facebook.com/l.php?u=", "")
		.replace(/%3A/gi, ":")
		.replace(/%F/gi, "/")
		.replace(/%2F/gi, "/")
		.split( '&' )[0];

	console.log( link );

	relatedLinksHTML = getRelatedLinksHTML( link );

	if( relatedLinksHTML ) postCard.innerHTML += relatedLinksHTML;
}


document.querySelectorAll( '._3x-2, div[data-sigil=m-feed-story-attachments-element' ).forEach( function( postCard ){ insertContentMaybe( postCard ) } );

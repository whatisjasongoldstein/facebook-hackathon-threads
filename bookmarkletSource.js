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
	var html = `
<div>
<div class="hack-group-parent">
    <strong class="hack-group-label">More in this thread</strong>
    <div class="hack-group-wrapper">
        <div class="hack-group">
            <ul class="hack-ul">`;
	var thread = extractThread( link );

	if( thread.previousArticles ) thread.previousArticles.forEach( function( element ) { html += '<li class="hack-article"><img class="hack-img" src="' + element.thumbnail + '" width="100" />' + element.title + '<div class="_52jc _24u0 _1xvv _5tg_">nytimes.com</div></li>' } );
	if( thread.nextArticles ) thread.nextArticles.forEach( function( element ) { html += '<li class="hack-article"><img class="hack-img" src="' + element.thumbnail + '" width="100" />' + element.title + '<div class="_52jc _24u0 _1xvv _5tg_">nytimes.com</div></li>' } );

	html += `</ul>
        </div>
    </div>
</div>
</div>`;

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

if( typeof styleInserted == 'undefined' ) {
	var divNode = document.createElement("div");
	divNode.innerHTML = `
	<style>
	    .hack-group-parent {
	        padding-left: 5px;
	    }
	    .hack-group-wrapper {
	        height: 90px;
	        overflow:hidden;
	    }
	    .hack-group {
	        width: 100%;
	        overflow-x: scroll;
	        height: 101px;
	        margin-left: 6px;
	    }
	    .hack-group-label {
	        font-weight: bold;
	        padding-bottom: 5px;
	        padding-left: 5px;
	    }
	    .hack-ul {
	        width: 1000px;
	    }
	    .hack-article {
	        width: 150px;
	        height: 100px;
	        width: 270px;
	        margin-right: 10px;
	        float: left;
	    }
	    .hack-img {
	        float: left;
	        margin-right: 10px;
	    }
	</style>`;
	document.body.appendChild(divNode);
	var styleInserted = true;
}
document.querySelectorAll( '._3x-2, section.touchable' ).forEach( function( postCard ){ insertContentMaybe( postCard ) } );
const listOfThreads = [
  {
    "title" : "The Affordable Care Act, In-Depth",
    "articles": [
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/sickaroundamerica/",
        "thumbnail": "http://i0.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2009/03/Sick-Around-America.jpg?resize=1200%2C630",
        "title": "Healthcare Before The ACA",
        "type": "Background story"
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/divided-states-of-america/",
        "thumbnail": "http://i0.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/1409943771_ObamasDealHD.png?resize=1200%2C630",
        "title": "All you need to know about Obamacare: The Divide",
        "type" :"Summary of events"
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/film/obamasdeal/",
        "thumbnail": "http://i2.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2016/11/FL_DividedStatesOfAmerica.jpg?resize=1200%2C630",
        "title": "Obama's Deal",
      },
      {
        "url" : "http://www.pbs.org/wgbh/frontline/article/health-care-rulings-winners-and-losers/",
        "thumbnail": "http://i1.wp.com/www.pbs.org/wgbh/frontline/wp-content/uploads/2015/11/201262810599_1101.jpg?resize=1200%2C630",
        "title": "View from 2012: Obamacare Winners and Losers",
        "type": "Opinion"
      }
    ]
  },
    {
    "title" : "Western Journalism on Wikileaks Vault 7",
    "articles": [
      {
        "url" : "http://www.westernjournalism.com/assange-to-share-more-details-about-cia-hacking-techniques-with-tech-companies/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/03/julianassange-vid.jpg",
        "title": "Assange To Share More Details About CIA Hacking Techniques With Tech Companies",
        "type": "Breaking"
      },
      {
        "url" : "http://www.westernjournalism.com/wikileaks-spills-cias-hacking-secrets/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/01/assange.jpg",
        "title": "WikiLeaks Spills CIA’s Hacking Secrets",
        "type": "Background story"
      },
      {
        "url" : "http://www.westernjournalism.com/limbaugh-wikileaks-revelation-cia-mimics-russian-hackers-changes-narrative/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2017/03/rush-sbs-wikileaks-2.jpg",
        "title": "Limbaugh: WikiLeaks Revelation That CIA Mimics Russian Hackers Changes Narrative ",
        "type": "Documents"
      },
      {
        "url" : "http://www.westernjournalism.com/wikileaks-reveals-cia-hacked-tvs-can-spy-owners/",
        "thumbnail": "http://static.westernjournalism.com/wp-content/uploads/2016/10/julianassange.jpg",
        "title": "WikiLeaks Reveals CIA-Hacked TVs Can Spy On Their Owners",
        "type": "Opinion"
      }
    ]
  },
  { "title" : "Healthcare",
    "articles": [
      {
        "url" : "http://www.npr.org/2017/03/08/519091030/freedom-caucus-members-face-crossroads-over-health-care-proposal",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/08/gettyimages-649333788_wide-533224c64631fa037e0c02dcf1d3ba298ddbceae-s1600-c85.jpg",
        "title": "Trump Won Big In House Conservatives' Districts",
        "type": "Background story"
      },
      {
        "url" : "http://www.npr.org/sections/health-shots/2017/03/09/519304881/5-things-to-watch-with-the-gop-health-law-overhaul",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/08/gop-bill_custom-8525a282f7362ae54eedd816bcc81407b92c9edd-s1600-c85.jpg",
        "title": "5 Key Takeaways From The GOP Health Overhaul Plan",
        "type" :"Summary of events"
      },
       {
        "url" : "http://www.npr.org/2017/03/09/519450642/medical-hospital-groups-oppose-gop-health-care-plan",
        "thumbnail": "http://media.npr.org/assets/img/2017/03/09/ap_17068560544062_wide-ac77c2fa3957004e80d09aefee31781aef382824-s1600-c85.jpg",
        "title": "Medical, Hospital Groups Oppose GOP",
        "type": "Opinion"
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

  if( ! thread.previousArticles && ! thread.previousArticles ) return '';

  if( thread.previousArticles ) thread.previousArticles.forEach( function( element ) {
	var parser = document.createElement('a');
	parser.href = element.url;
	html += '<li class="hack-article"><img class="hack-img" src="' + element.thumbnail + '" width="100" /><a href="'+ element.url + '" target="_blank">' + element.title + '</a><div class="_52jc _24u0 _1xvv _5tg_">' + parser.hostname + '</div><div class="_52jc _24u0 _1xvv _5tg_"><i>' + element.type + '</i></div></li>';
  } );
  if( thread.nextArticles ) thread.nextArticles.forEach( function( element ) {
  	var parser = document.createElement('a');
	parser.href = element.url;
	html += '<li class="hack-article"><img class="hack-img" src="' + element.thumbnail + '" width="100" /><a href="'+ element.url + '" target="_blank">' + element.title + '</a><div class="_52jc _24u0 _1xvv _5tg_">' + parser.hostname + '</div><div class="_52jc _24u0 _1xvv _5tg_"><i>' + element.type + '</i></div></li>';
  } );

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


  relatedLinksHTML = getRelatedLinksHTML( link );

  if (relatedLinksHTML) {
    var threadBox = document.createElement("div");
    threadBox.innerHTML = relatedLinksHTML;
    postCard.parentElement.append(threadBox);
  }
}

if( typeof styleInserted == 'undefined' ) {
  var divNode = document.createElement("div");
  divNode.innerHTML = `
  <style>
      .hack-group-parent {
          padding-left: 5px;
          margin-top: 10px;
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
          color: #90949c;
          font-size: 11px;
          line-height: 15px;
          text-transform: uppercase;
          margin-bottom: 10px;
      }
      .hack-ul {
          width: 1000px;
      }
      .hack-article {
          width: 150px;
          height: 100px;
          width: 270px;
          float: left;
          font-size: 11px;
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

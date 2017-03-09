function getRelatedLinksHTML() {
	
	return '<div>xyzz</div>';
}

function insertContentMaybe( postCard ) {
	var link = postCard.querySelector( '._6ks a' );
  
  relatedLinksHTML = getRelatedLinksHTML( link );
  
  if( relatedLinksHTML ) postCard.innerHTML += relatedLinksHTML;
}


document.querySelectorAll( '._3x-2' ).forEach( function( postCard ){ insertContentMaybe( postCard ) } );
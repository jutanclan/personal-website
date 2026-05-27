jQuery.noConflict();
jQuery(document).ready(function($){

/*
 * Enable prettyPhoto and apply dark_rounded theme
 */
//<![CDATA[

    $('a[rel^="prettyPhoto"]').prettyPhoto({
        theme: 'dark_rounded'
    });
    
/* Enable prettyPhoto Photo Album */

	$('.thumbnail-frame').each(function(i,item){
		$('a:first',this).attr(
			'rel','prettyPhoto[gallery1]'
		).attr(
			'href',
			$('a:first',this).children('img')[0].src.replace(/\-thumb/,'-full')
		).attr(
			'title',
			$('p.thumbnail-caption:first',this).text()
		);
	});

	$('.thumbnail-frame a').prettyPhoto({theme:'dark_rounded'});
    
//]]>

});
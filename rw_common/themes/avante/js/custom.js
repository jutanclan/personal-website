jQuery.noConflict();
jQuery(document).ready(function($){

//]]>
/**
 * Controlls the dropdown menus and improves them with javascript
 */

/*********************
//* jQuery Multi Level CSS Menu #2- By Dynamic Drive: http://www.dynamicdrive.com/
//* Last update: Nov 7th, 08': Limit # of queued animations to minmize animation stuttering
//* Menu avaiable at DD CSS Library: http://www.dynamicdrive.com/style/
*********************/

//Update: April 12th, 10: Fixed compat issue with jquery 1.4x

//Specify full URL to down and right arrow images:
var arrowimages = {down: ['downarrowclass', 'images/arrow-light-down.png'], right: ['rightarrowclass', 'images/arrow-dark.png']}

var jqueryslidemenu={

animateduration: {over: 200, out: 100}, //duration of slide in/ out animation, in milliseconds

buildmenu:function(menuid, arrowsvar){
		var $mainmenu=$("#"+menuid+">ul")
		var $headers=$mainmenu.find("ul").parent()
		$headers.each(function(i){
			var $curobj=$(this)
			var $subul=$(this).find('ul:eq(0)')
			this._dimensions={w:this.offsetWidth, h:this.offsetHeight, subulw:$subul.outerWidth(), subulh:$subul.outerHeight()}
			this.istopheader=$curobj.parents("ul").length==1? true : false
			$subul.css({top:this.istopheader? this._dimensions.h+"px" : 0})
			$curobj.children("a:eq(0)").css(this.istopheader? {paddingRight: arrowsvar.down[2]} : {}).append(
				'<img src="' + (this.istopheader ? RwGet.pathto(arrowsvar.down[1]) : RwGet.pathto(arrowsvar.right[1]))
				+'" class="' + (this.istopheader? arrowsvar.down[0] : arrowsvar.right[0])
				+ '" style="border:0;" />'
			)
			$curobj.hover(
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					this._offsets={left:$(this).offset().left, top:$(this).offset().top}
					var menuleft=this.istopheader? 0 : this._dimensions.w
					menuleft=(this._offsets.left+menuleft+this._dimensions.subulw>$(window).width())? (this.istopheader? -this._dimensions.subulw+this._dimensions.w : -this._dimensions.w) : menuleft
					if ($targetul.queue().length<=1) //if 1 or less queued animations
						$targetul.css({left:menuleft+"px", width:this._dimensions.subulw+'px'}).slideDown(jqueryslidemenu.animateduration.over)
				},
				function(e){
					var $targetul=$(this).children("ul:eq(0)")
					$targetul.slideUp(jqueryslidemenu.animateduration.out)
				}
			) //end hover
			$curobj.click(function(){
				$(this).children("ul:eq(0)").hide()
			})
		}) //end $headers.each()
		$mainmenu.find("ul").css({display:'none', visibility:'visible'})
	}
}

//build menu with ID="navigation" on page:
jqueryslidemenu.buildmenu("navigation", arrowimages)

/*
 * Function to animate opacity in photo album thumbs
 */
//<![CDATA[

    $('#primary-content a img').each(function() {
        $(this).hover(

        function() {
            $(this).stop().animate({
                opacity: 0.7
            }, 250);
        }, function() {
            $(this).stop().animate({
                opacity: 1.0
            }, 250);
        })
    });

//]]>

/*
 * Function to generate "h3" for blog sidebar elements
 */
//<![CDATA[

    // Add Blog Categories title
    if ($("#blog-categories").children().size() > 0) $("#blog-categories").prepend("<h3>Categories<\/h3>");

    // Add Blog Archives title
    if ($("#blog-archives").children().size() > 0) $("#blog-archives").prepend("<h3>Archives<\/h3>");

    // Add Tags title
    if ($("#secondary-content ul.blog-tag-cloud").children().size() > 0) $("#secondary-content ul.blog-tag-cloud").before("<h3>Tags<\/h3>");

//]]>

/*
 * Widget list
 */
//<![CDATA[

	$('#blog-categories').find('a:last').css('border-bottom','none'); 
    $('#blog-categories a').each(function() {
        $(this).hover(
            function() {
                $(this).stop(true,false).animate({'padding-left': '15px'},200, function() {
				$(this).addClass('hover_current');
				});
			},
           function() {
           		$(this).removeClass('hover_current');
               	$(this).stop(true,false).animate({'padding-left': '0'},200);
           })
	});
	
//]]>

});
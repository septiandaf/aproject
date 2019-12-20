/*---------------------------------------
       SCROLL TOP MENU           
  -----------------------------------------*/

$(window).scroll(function(){
	if($(this).scrollTop() > 10){
		$("#main-menu").addClass("menu-scrolled");
	}else{
		$("#main-menu").removeClass("menu-scrolled");
	}
});

// ketika refresh, otomatis add class
if($(this).scrollTop() > 10) {
	$("#main-menu").addClass("menu-scrolled");
}



 	$('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
	$('.tabs a').click(function(e){
		      e.preventDefault();
		        var $this = $(this),
		        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
		        others = $this.closest('div').siblings().children('a'),
		        target = $this.attr('href');
		    others.removeClass('active');
		    $this.addClass('active');
	    $(tabgroup).children('div').hide();
  		$(target).show();
	});
    	








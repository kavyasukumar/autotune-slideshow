(function ($) {
  'use strict';

  var slides;

  var addSlides = function(){
  	$.each(slides, function(i, item){
  		var $itemDiv = $('<div>')
  			.addClass('item');

  		// set the first slide as active	
  		if( i === 0){
  			$itemDiv.addClass('active');
  		}	

  		$itemDiv.append($('<img>')
  			.prop('src',item.src));

  		if(item.caption){
  			$itemDiv.append($('<div>')
  				.addClass('carousel-caption')
  				.html(item.caption));
  		}
  		$('.carousel-inner').append($itemDiv);
  	});
  };

  $(document).ready(function () {
    slides = AUTOTUNE.images;
    addSlides();
  });

})(jQuery);
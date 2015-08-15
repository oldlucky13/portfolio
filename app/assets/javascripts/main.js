$(document).ready(function(){  
  
  /* ==============================================
  	Change default message for validator
  	=============================================== */ 
  
  jQuery.extend(jQuery.validator.messages, {
    required: "Something is amiss...",
    email: "A valid email address please."

});
  /* ==============================================
  	Bootstrap tooltip initialize
  	=============================================== */ 
  
  $('.toolListIcon').tooltip();
  
  /* ==============================================
  	Contact Form AJAX 
  	=============================================== */
   $('#contact_form').validate({ // initialize the plugin
        rules: {
            "contact[name]": {
                required: true,
                
            },
           "contact[email]": {
                required: true,
                email: true
            }
          
        },//rules
     tooltip_options: {
           "contact[name]": { placement: 'bottom' },
           "contact[email]": { placement: 'bottom' }
        },
     submitHandler: function(form){
            $.ajax({
            url: form.action,
            type: form.method,
            data: $(form).serialize(),
            success : function(){
               $('#contact_form').closest('.row').prepend('<div style="display:block;clear:both; " class="alert alert-success">Message sent, thanks!</div>');
               //clear fields
               $('input[type="text"],input[type="email"],textarea').val('');
               //fadeout success msg
               $('.alert-success').delay(5000).fadeOut(400);
            } //success
    
        }); //ajax
        
        } // contact form submit
     
    }); //validate plugin initialize
  
//   $(function(){
//     $("#contact_form").submit(function(){
//         var dataSet = $(this).serialize();
//         $.ajax({
//             type: "POST",
//             url: $(this).attr("action"),
//             data: dataSet,
//             complete: function(){
//                $('#contact_form').closest('.row').prepend('<div style="display:block;" class="alert alert-success">Message sent, thanks! ajax</div>');
//                //clear fields
//               $('input[type="text"],input[type="email"],textarea').val('');
//                //fadeout success msg
//               $('.alert-success').delay(5000).fadeOut(400);
//             }, //complete
//             error: function(){
//                 $('#contact_form').closest('.row').prepend('<div style="display:block;" class="alert alert-danger">Error occured! Message has not been sent. ajax</div>');
//               //fadeout failure msg
//               $('.alert-danger').delay(5000).fadeOut(400);
//             } //error
//         }); //ajax
//         return false;
//     }); // contact form submit
// }); //anon function
  
  /* ==============================================
  	Fullpage.js navigation
  	=============================================== */ 
  
       $('#fullpage').fullpage({
        scrollBar:true,
         anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage','lastPage'],
         menu: '#fp-nav, #tf-menu',
         verticalCentered: true,
         fixedElements:'#tf-menu',
         responsiveWidth: 480,
         slidesNavigation: true,
         scrollOverflow: false,   
        // scrollOverflow: true,
         //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
         afterRender: function(){
           $('.fp-slide.fp-table').css('display','flex');
         
  
        }
         
         
       });

 
    /* ==============================================
  	slimScroll.js 
  	=============================================== */ 
//  $(function(){
//    $('#slimScrolldiv').slimScroll({
//        height: '250px',
//       width: '10px', 
//      position: 'absolute', top: '0px', opacity: '0.4', display: 'block', border-radius: '7px', z-index: '99', right: '1px', height: '404.560666666667px', background: 'rgb(0, 0, 0)',
//     });
// });
  
  /* ==============================================
  	Video Background
  	=============================================== */ 
  
  function iedetect(v) {
	    var r = RegExp('msie' + (!isNaN(v) ? ('\\s' + v) : ''), 'i');
		return r.test(navigator.userAgent);
			
	}


		// Wait until the video meta data has loaded
		$('section0').on('loadedmetadata', function() {
			
			var $width, $height, // Width and height of screen
				$vidwidth = this.videoWidth, // Width of video (actual width)
				$vidheight = this.videoHeight, // Height of video (actual height)
				$aspectRatio = $vidwidth / $vidheight; // The ratio the video's height and width are in
						
			(adjSize = function() { // Create function called adjSize
							
				$width = $(window).width(); // Width of the screen
				$height = $(window).height(); // Height of the screen
							
				$boxRatio = $width / $height; // The ratio the screen is in
							
				$adjRatio = $aspectRatio / $boxRatio; // The ratio of the video divided by the screen size
							
				// Set the container to be the width and height of the screen
				$('section0').css({'width' : $width+'px', 'height' : $height+'px'}); 
							
				if($boxRatio < $aspectRatio) { // If the screen ratio is less than the aspect ratio..
					// Set the width of the video to the screen size multiplied by $adjRatio
					$vid = $('section0').css({'width' : $width*$adjRatio+'px'}); 
				} else {
					// Else just set the video to the width of the screen/container
					$vid = $('section0').css({'width' : $width+'px'});
				}
								 
			})(); // Run function immediately
						
			// Run function also on window resize.
			$(window).resize(adjSize);
      $('#bgvid').get(0).play();
		});
      
 /* ==============================================
  	Page Scroll
  	=============================================== */ 
      
      $('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });
        
 //set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect 
		revealDuration = 600,
		revealAnimationDelay = 1500;
	
	initHeadline();
	

	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);
			
			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);
		
		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');	
			setTimeout(function(){ 
				parentSpan.removeClass('selected'); 
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);
		
		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){ 
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay); 
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');
		
		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);  
		} else if($bool) { 
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		} 
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');
		
		if(!$letter.is(':last-child')) { 
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration); 
		} else { 
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
  
      
      
}); //end document.ready
    
  



function main() {

(function () {
   'use strict';

   

      
      

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    })

  	$(document).ready(function() {
  	  $("#team").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 4],
				        [1400, 4],
				        [1600, 4]
				      ],
  	  });

  	  $("#clients").owlCarousel({
  	 
  	      navigation : false, // Show next and prev buttons
  	      slideSpeed : 300,
  	      paginationSpeed : 400,
  	      autoHeight : true,
  	      itemsCustom : [
				        [0, 1],
				        [450, 2],
				        [600, 2],
				        [700, 2],
				        [1000, 4],
				        [1200, 5],
				        [1400, 5],
				        [1600, 5]
				      ],
  	  });

      $("#testimonial").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
        });

  	});

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();
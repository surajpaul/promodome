function allInit( $ ) {

	jQuery( document ).ready( function( $ ) {;
/*=============================
=            Basic            =
=============================*/
// $( '.list-accordions .content-block' ).css( {
// 	'display': 'none'
// } ); // if loaded via ajax. Set this in css or toggleClass with css to hide it

// /* Works with Ajax loaded content */
$('.list-accordions .content-block').css({
	display: 'none'
});
$('body').on('click', '.list-accordions .heading', function(e) {
	$('.list-accordions li').removeClass('js-active');
	$('.list-accordions .content-block').slideUp('fast');
	if (
		$(this)
			.next()
			.is(':hidden') == true
	) {
		$(this)
			.parent()
			.addClass('js-active');
		$(this)
			.next()
			.slideDown('fast');
	}
});;
var btnMorePost = $( '#ajax-more-post' );
var formSearchPost = $( '#ajax-search-post' );

/*======================================
=            Ajax More Post            =
======================================*/
btnMorePost.on( 'click', function( e ) {
	e.preventDefault();

	$( this ).addClass( 'btn-disabled' );
	$( '.loading-dots' ).addClass( 'js-active' );

	filter_post( $( this ), 'filter_more' );
} );


/*========================================
=            Ajax Search Post            =
========================================*/
formSearchPost.submit( function( e ) {
	e.preventDefault();

	$( '#ajax-submit-block' ).addClass( 'hidden' );
	$( '#alert-no-data').addClass('hide');
	$( '#ajax-search-clear' ).removeClass( 'js-active' );
	$( this ).find( '.loading-spinner' ).addClass( 'js-active' );

	$( '#ajax-list-post > li' ).remove();
	$( '.loading-dots' ).addClass( 'js-active' );
	btnMorePost.hide();

	var searchValue = formSearchPost.find( '.input-search' ).val();
	$( '#filter-search' ).val( searchValue );

	filter_post( $( this ), 'filter_search' );
} );


/*=========================================
=            Ajax Search Clear            =
=========================================*/
$( '#ajax-search-clear' ).click( function( e ) {
	e.preventDefault();

	$( '#alert-no-data').addClass('hide');

	formSearchPost.find( '.input-search' ).val( '' );
	$( '#filter-search' ).val( '' );

	formSearchPost.trigger( 'submit' );
} );


/*=======================================
=            Ajax Filter Cat            =
=======================================*/
$( '#ajax-filter-cat' ).on( 'change', function( e ) {
	e.preventDefault();

	$( '#alert-no-data').addClass('hide');
	$( '#ajax-list-post > li' ).remove();
	$( '.loading-dots' ).addClass( 'js-active' );
	btnMorePost.hide();

	var selectedCat = $( 'option:selected' ).data('term-id');
	$( '#filter-cat-id' ).val( selectedCat );

	filter_post( $( 'option:selected', this ), 'filter_cat' );
} );


/*========================================
=            Ajax Filter Post            =
========================================*/
function filter_post( $this, trigger ) {

	var cpt = $this.attr( 'data-cpt' );
	var cptTax = $this.attr( 'data-cpt-tax' );
	var catID = $( '#filter-cat-id' ).val();
	var authorID = $( '#filter-author-id' ).val();
	var tagID = $( '#filter-tag-id' ).val();
	var search = $( '#filter-search' ).val();

	if ( trigger == 'filter_search' || trigger == 'filter_cat' ) {

		// when user clicks load more, pagenum get sets to +1, so we need to reset it back to 1 to load first set of posts.
		$( '#filter-pagenum' ).val( 1 );
		// set page number variable empty
		var pageNumber = '';

	} else if ( trigger == 'filter_more' ) {

		var pageNumber = $( '#filter-pagenum' ).val();

	}

	$.ajax( {
		type: 'POST',
		dataType: 'html',
		url: localize_var.adminUrl,
		data: {
			action: 'filter_post_ajax',
			cpt: cpt,
			cptTax: cptTax,
			catID: catID,
			authorID: authorID,
			tagID: tagID,
			search: search,
			pageNumber: pageNumber,
		},
		success: function( data ) {

			var $data = $( data );

			if ( $.trim( data ) != '' && $.trim( data ) != 0 ) {

				$( '.loading-dots' ).removeClass( 'js-active' );

				/*----------- Filter More -----------*/
				if ( trigger == 'filter_more' ) {

					$( '#filter-pagenum' ).val( parseInt( pageNumber ) + 1 );

					$( '#ajax-list-post' ).append( $data );

					$( '.loading-dots' ).removeClass( 'js-active' );

				}

				/*----------  Filter Search  ----------*/
				if ( trigger == 'filter_search' ) {

					setTimeout( function() {
						if ( search != '' ) {
							$( '#ajax-search-clear' ).addClass( 'js-active' );
						} else {
							$( '#ajax-submit-block' ).removeClass( 'hidden' );
						}
						$( '.loading-spinner' ).removeClass( 'js-active' );
						$( '#ajax-list-post' ).append( $data );
						$( '#ajax-list-post' ).fadeIn( 400 );
						btnMorePost.fadeIn( 400 );
					}, 300 );

				}

				/*----------  Filter Cat  ----------*/
				if ( trigger == 'filter_cat' ) {

					$( '#ajax-list-post > li' ).remove();

					setTimeout( function() {
						$( '#ajax-list-post' ).append( $data );
						$( '#ajax-list-post' ).fadeIn( 400 );
						btnMorePost.fadeIn( 400 );
					}, 300 );

				}

				$(".social-icons-block--card").jsSocials({
					shares: ["facebook", "twitter"],
					showLabel: false,
					showCount: false,
					shareIn: "popup"
				});

				// console.log( $data.length );

				if ( $data.length < 5 ) {
					btnMorePost.addClass( 'btn-disabled' );
				} else {
					btnMorePost.removeClass( 'btn-disabled' );
				}

			}  else {

				if ( $( '.loading-spinner' ).hasClass('js-active') ) {
					$( '#ajax-search-clear' ).addClass( 'js-active' );
				}
				$( '.loading-spinner' ).removeClass( 'js-active' );
				$( '#alert-no-data').removeClass('hide');
				$( '.loading-dots' ).removeClass( 'js-active' );
				btnMorePost.hide();

			} // trim

		} //success

	} ); //ajax
	return false;
};
	/*=======================================
	 =         subscription Bar     =
	 =======================================*/
if ( $( 'body' ).hasClass( 'single-post' ) ) {
	var st = 100;
	$( window ).scroll( function() {
		if($("#footer-sticky-bar").length){
        var scroll_top = $( this ).scrollTop();
		if ( scroll_top == 200 ) {
            $( '#footer-sticky-bar' ).addClass( 'active' )
		}
		
		var hide_section = $( '#js-subscribe-wrap' ).offset().top - 350;

		if ( scroll_top > hide_section ) {
			$( '#footer-sticky-bar' ).removeClass( 'active' );
		} else {
			$( '#footer-sticky-bar' ).addClass( 'active' );
		}
	
			// var hide_section = $( '.author-block' ).offset().top - 700;

			if ( scroll_top > hide_section ) {
				$( '#footer-sticky-bar' ).removeClass( 'active' );
			} else {
				$( '#footer-sticky-bar' ).addClass( 'active' );
			}
		
		st = scroll_top;
		if ( st < 200 ) {
			$( '#footer-sticky-bar' ).removeClass( 'active' );
		}
	}
 } );

	$( '#js-subscribe-btn' ).on( 'click', function(e) {
		e.preventDefault();
		$(".heading, #js-subscribe-btn").hide();
		$( '#js-subscription-form-block' ).fadeIn();
        
	} );

    /*=======================================
	 =         Single TDLR popup     =
	 =======================================*/

	$( '.tldr' ).click( function() {
		$( '.tldr-popup' ).addClass( 'active' );
	} );

	$( '.tldr-popup .close' ).click( function() {
		$( '.tldr-popup' ).removeClass( 'active' );
	} );

	$( '#tldr-popup .outer-block' ).on( 'click', function( e ) {
		$( '#tldr-popup' ).removeClass( 'active' );
	} );

	$( '#tldr-popup .content-block' ).on( 'click', function( e ) {
		e.stopPropagation();
	} );
}


	/*=======================================
	 =          Footer Mailchimp Form    =
	 =======================================*/
	// Fields Validation
$( '#footer-mc-form' ).validate( {
	rules: {
		EMAIL: { // Name Attribute
			required: true,
			email: true
		}
	},
	messages: {
		//replace with your error message
		EMAIL: "This field is required",
	},
	errorPlacement: function( error, element ) {},
	showErrors: function( errorMap, errorList ) {
		this.defaultShowErrors();
	},
	submitHandler: function( form ) {
		//$('.mc-loading').show(); // show loading
		//console.log($(form).serialize());
		/* Ajax Call */
		$.ajax( {
			type: $( form ).attr( 'method' ),
			url: $( form ).attr( 'action' ),
			data: $( form ).serialize(),
			cache: false,
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			error: function( err ) {
				var message = 'Could not connect to server. Please try again later.';
				$( '#footer-mc-form' ).fadeOut( 'fast' );
				$( '#footer-mc-notification' ).html( '<p class="error">' + message + '</p>' );
				$( '#footer-mc-notification' ).fadeIn( 'fast' );
			},
			success: function( data ) {
				if ( data.result != "success" ) {
					var message = data.msg;
					$( '#footer-mc-form' ).fadeOut( 'fast' );
					$( '#footer-mc-notification' ).html( '<p class="error">' + message + '</p>' );
					$( '#footer-mc-notification' ).fadeIn( 'fast' );
				} else {
					//var message = data.msg;
					var message = 'Thanks! Check for a confirmation email.';
					$( '#footer-mc-form' ).fadeOut( 'fast' );
					$( '#footer-mc-notification' ).html( '<p class="success confetti confetti-contain ">' + message + '</p>' );
					$( '#footer-mc-notification' ).fadeIn( 'fast', function() {
						confetti( 'confetti-contain' );
					} );
					// close reveal after definited millisecs
					/*setTimeout(function () {
					 $('#mc-form-modal').trigger('reveal:close');
					 }, 8000);*/
				}
			} // success
		} ); // Ajax
	} // Handler
} );

/*=======================================
 =         Custom wip popup    =
 =======================================*/
jQuery.rnd = function( m, n ) {
	m = parseInt( m );
	n = parseInt( n );
	return Math.floor( Math.random() * ( n - m + 1 ) ) + m;
}

function confetti( confetti_class ) {
	jQuery.each( jQuery( ".confetti." + confetti_class ), function() {
		var confetticount = ( jQuery( this ).width() / 50 ) * 20;
		for ( var i = 0; i <= confetticount; i++ ) {
			jQuery( this ).append( '<span class="particle c' + jQuery.rnd( 1, 4 ) + '" style="top:' + jQuery.rnd( 10, 50 ) + '%; left:' + jQuery.rnd( 0, 100 ) + '%;width:' + jQuery.rnd( 6, 8 ) + 'px; height:' + jQuery.rnd( 3, 4 ) + 'px;animation-delay: ' + ( jQuery.rnd( 0, 30 ) / 10 ) + 's;"></span>' );
		}
	} );
	setTimeout( function() {
		jQuery( 'span.particle' ).remove();
	}, 30000 );
};
/* Show/Hide the navigation section */
$( '.header__nav-toggle' ).click( function( e ) {

	$( this ).toggleClass( 'js-active' );
	$( '#header').toggleClass('js-hide-bg');
	$( '.header-nav-section' ).toggleClass( 'js-active' );
	$( '#site-content' ).toggleClass( 'js-active' );

	if ( menuButtonOpenCloseTl.time() > 0 ) {
		menuButtonOpenCloseTl.reverse();
		menuOpen = false;
	} else {
		menuButtonOpenCloseTl.play( 0 );
		menuOpen = true;
	}

	e.preventDefault();
} );

/* Menu Icon Animation */
// Define timeline
var menuButtonHoverTl = new TimelineMax( {
	paused: true
} );
var menuButtonOpenCloseTl = new TimelineMax( {
	paused: true
} );
var menuOpen = false;

// Set Menu Button Hove Timeline
menuButtonHoverTl.to( '#menuDefault', .12, {
	morphSVG: {
		shape: '#menuHover',
		shapeIndex: 4
	}
} )

// Set Menu Button Click Timeline
menuButtonOpenCloseTl.to( '#menuInnerDefault', .37, {
	morphSVG: {
		shape: '#menuInnerClose',
		shapeIndex: 7
	}
} )

// Menu button hover
$( '.header__nav-toggle' ).hover( function() {
	if ( !menuOpen ) {
		menuButtonHoverTl.play( 0 );
	}
}, function() {
	if ( !menuOpen ) {
		if ( menuButtonHoverTl.time() > 0 && !menuOpen ) {
			menuButtonHoverTl.reverse();
		}
	}
} );


/* Calculate scroll position and show/hide the header */
var previousScrollPosition = 0;
var isOpen = true;
var header = $('#header');
function scrollPosition() {
	if ( ! header.hasClass('js-hide-bg') ) {
		var scrollPosition = $(window).scrollTop();
		if ( scrollPosition < previousScrollPosition ) { // scrolling up
			if ( ! isOpen ) {
				header.removeClass('js-hide');
				isOpen = true;
			}
		} else { // scrolling down
			if ( scrollPosition > 200 && isOpen ) {
				header.addClass('js-hide');
				isOpen = false;
			}
		}
		previousScrollPosition = scrollPosition;
	}
}
// run on scroll
window.addEventListener( 'scroll', scrollPosition );

/* show/hide the header on hover */
header.hover(function() {
	if ( ! header.hasClass('js-hide-bg') ) {
		event.preventDefault();
		if ( ! isOpen ) {
			header.removeClass('js-hide');
			isOpen = true;
		}
	}
});


/* toggle between menu bg on hover */
$( '.no-touchevents .header-nav__parent-menu > li > a' ).hover( function() {
	$( '.header-nav-section .bg-block').addClass('js-active');
	var $menuBg = 'url(' + $( this ).find('span').data( 'bg' ) + ')';
	$( '.header-nav-section .bg-block').css('background-image', $menuBg);
}, function() {
	$( '.header-nav-section .bg-block').removeClass('js-active');
} );

/* only after window is loaded, move all the menu data bg to actual img */
$(window).load(function() {
	$('.no-touchevents .header-nav__parent-menu > li > a > span').each(function() {
		$bg = $(this).data( 'bg' );
		$('#header-menu-bgs').append('<img src="' + $bg + '" />');
	});
});;
$('.image-comparison-slider .range-slider').on('input', function(e) {

	var afterImage = $(this).parents('.image-comparison-slider').find('.image-after-block');
	var handle = $(this).parents('.image-comparison-slider').find('.handle');
	var rangeSlider = $(this).parents('.image-comparison-slider').find('.range-slider');
	var rangeSliderValue = rangeSlider.val();
	handle.css( 'left', rangeSliderValue + '%' );
	afterImage.css( 'width', rangeSliderValue + '%' );

});;
$(".social-icons-block--single").jsSocials({
	shares: ["facebook", "twitter", "linkedin", "email"],
	showLabel: false,
	showCount: false,
	shareIn: "popup"
});

$(".social-icons-block--card").jsSocials({
	shares: ["facebook", "twitter"],
	showLabel: false,
	showCount: false,
	shareIn: "popup"
});;
/*=====================================
=     Close all popup on page load            =
=====================================*/
$.magnificPopup.close();

/*=====================================
=            Snippet Popup            =
=====================================*/
$(document).on('click', '.snippet-popup-trigger', function (w) {
  event.preventDefault();
  // console.log($(this).attr('href'));
  $.magnificPopup.open({
    items: {
      src: $(this).attr('href'),
    },
    // showCloseBtn: false,
    closeOnContentClick: true,
    mainClass: 'snippet-popup', // add class for animation
    removalDelay: 800, // delay removal by X to allow out-animation, same as css transition
  });
});

/*==================================
=            Team Popup            =
==================================*/
$(document).on('click', '.list-team .card', function (w) {
  event.preventDefault();
  // console.log($(this).attr('href'));
  $.magnificPopup.open({
    items: {
      src: $(this).attr('href'),
    },
    // showCloseBtn: false,
    closeOnContentClick: true,
    mainClass: 'team-popup', // add class for animation
    removalDelay: 800, // delay removal by X to allow out-animation, same as css transition
  });
});;
/*----------  Wrap post images inside div  ----------*/
$( '.single-post [class*="wp-image-"]' ).each( function ( index, el ) {
	$( this ).parent().addClass( 'wp-image-block' );
} );


/*----------  Talk to Kenny  ----------*/
var talkImg = $( '.no-touchevents .talk-kenny' );
var talkImgSrc = talkImg.data( 'src' );
talkImg.attr({
	src: talkImgSrc,
});

$( '.no-touchevents .talk-kenny-trigger' ).hover( function () {
	$( '.talk-kenny' ).addClass( 'js-active' );
}, function () {
	$( '.talk-kenny' ).removeClass( 'js-active' );
} );


/*----------  Split text  ----------*/
if ( $( 'html.js.mutationobserver.cssanimations:not(.is-mobile) .stagger-word-animation' ).length ) {
	var $staggerWords = $('html.js.mutationobserver.cssanimations:not(.is-mobile) .stagger-word-animation');
	$staggerWords.css('visibility', 'visible');
	var splitText = new SplitText( $staggerWords, {
		type: 'words'
	} );
	TweenMax.staggerFrom( splitText.words, .5, {opacity: 0}, .1, allDone );
	function allDone() {
		splitText.revert();
	}
}

/*----------  List / Grid View  ----------*/
var listPosts = $( '.list-post-cards' );
$( '.blog-filters__item--view button' ).click( function ( e ) {
	e.preventDefault();
	$( '.blog-filters__item--view button' ).removeClass( 'js-active' );
	$( this ).addClass( 'js-active' );
	var selectedView = $( this ).data( 'view' );
	if ( $( listPosts ).hasClass( 'list-view' ) && selectedView == 'list-view' ) {
		return;
	} else if ( $( listPosts ).hasClass( 'grid-view' ) && selectedView == 'grid-view' ) {
		return;
	} else {
		$( listPosts ).removeClass( 'list-view grid-view' );
		$( listPosts ).addClass( selectedView );
		$( '.blog-cards-section' ).removeClass( 'list-view grid-view' );
		$( '.blog-cards-section' ).addClass( selectedView );
	}
} );

/*----------  Tweet  ----------*/
$( window ).scroll( function() {
	var $window = $( window );
	var docViewTop = $window.scrollTop();
	var docViewBottom = docViewTop + $window.height();

	$( ".tweet-section" ).each( function( i ) {

		var $elem = $( this );
		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();
		if ( elemBottom < docViewBottom ) {
			//$(this).find('h2').css('background-position', '0 0');
			$( this ).find( 'h2' ).css( 'background-size', '100% 100%' );
		}

	})

} );
;
if ( $( "#open-weather-temp" ).length ) {

	$.ajax( {
		type: 'POST',
		url: '//api.openweathermap.org/data/2.5/weather?id=4323288&appid=e63a06c30ca64eb35b6da7b38cf9ffc4',
		dataType: 'jsonp',
		success: function( data ) {

			if ( data ) {

				// console.log( data );

				// if units are in'f'
				// define temperature as fahrenheit
				temperature = Math.round( ( ( data.main.temp - 273.15 ) * 1.8 ) + 32 ) + '°F';

				$( '#open-weather-temp' ).html( temperature );
				$( '#open-weather-desc' ).html( data.weather[ 0 ].description );

			}
		},
		error: function( jqXHR, textStatus, errorThrown ) {
			// run error callback
			// s.error.call(this, {
			// 	error: textStatus
			// });
		}
	} );
};
;
/*=======================================
 =         Reading Progress      =
 =======================================*/
if ($('body').hasClass('single-post')) {
  var progressContainerTop = $('.reading-progress-wrap').offset().top;
  var contentHeight = $('article').height();
  var contentTop = $('article').offset().top;
  var relatedTop = $('.author-box').offset().top;

  $(window).scroll(function () {
    var $window = $(window);
    var docViewTop = $window.scrollTop();

    if (docViewTop >= progressContainerTop && docViewTop <= relatedTop - 300) {
      $('.reading-progress-wrap').addClass('fixed');
      var scrollPercent = (docViewTop - contentTop) / contentHeight;
      if (scrollPercent > 1) {
        scrollPercent = 1;
      }
      $('#progress-svg').attr('stroke-dashoffset', 120 - (scrollPercent * 120));

      //mobile reading proress
      // $('#mobile-reading-progress').addClass('show');
      //var MobscrollPercent = scrollPercent * 100;
      //$('#mobile-progress-bar').css('width', MobscrollPercent + '%');
      //mobile reading proress End

    } else {
      $('.reading-progress-wrap').removeClass('fixed');
      //$('#progress-svg').attr('stroke-dashoffset', 120);

      //mobile reading proress
      $('#mobile-reading-progress').removeClass('show');
      //mobile reading proress end
    }
  });
}
;
var rellax = debounce( function() {
	if ( $('.rellax').length > 0 ) {
		if ( $( window ).innerWidth() > 767 ) {
			var rellax = new Rellax('.rellax');
		} else {
			// rellax.destroy();
		}
	}
}, 200 );

// run on page load
rellax();

// run on scroll
$( window ).on( 'resize orientationchange', function() {
	rellax();
} );;
// ScrollReveal.debug = true; // can be used only with unminified code
// by default sreveal class has the fadeIn effect.

var fadeInUp = {
	origin: 'top',
	distance: '30px'
}

var fadeInDown = {
	origin: 'bottom',
	distance: '30px'
}

var fadeInRight = {
	origin: 'right',
	distance: '30px'
}

var fadeInLeft = {
	origin: 'left',
	distance: '30px'
}

var slideInUp = {
	origin: 'top',
	distance: '30px',
	opacity: null
}

var slideInDown = {
	origin: 'bottom',
	distance: '30px',
	opacity: null
}

var slideInRight = {
	origin: 'right',
	distance: '30px',
	opacity: null
}

var slideInLeft = {
	origin: 'left',
	distance: '30px',
	opacity: null
}

var zoomOut = {
	scale: '2',
}

/*----------  Default Options & Init  ----------*/
window.sr = ScrollReveal( {
	duration: 1000,
	//mobile: false, // same logic is used to chech is-mobile in modernzer file.
} );

sr.reveal( 'html.js.mutationobserver.cssanimations:not(.is-mobile) .list-clients-logo > li, html.js.mutationobserver.cssanimations:not(.is-mobile) .list-team > li', {
	origin: 'left',
	distance: '30px',
	interval: 100,
} );

// sr.reveal( '.list-post-cards > li', {
// 	origin: 'bottom',
// 	distance: '30px',
// 	interval: 100,
// } );


// sr.reveal( '.stagger-word-animation > span', {
// 	interval: 100,
// } );

sr.reveal( '[data-sreveal="fadeIn"]' );
sr.reveal( '[data-sreveal="fadeInUp"]', fadeInUp );
sr.reveal( '[data-sreveal="fadeInDown"]', fadeInDown );
sr.reveal( '[data-sreveal="fadeInRight"]', fadeInRight );
sr.reveal( '[data-sreveal="fadeInLeft"]', fadeInLeft );
sr.reveal( '[data-sreveal="slideInUp"]', slideInUp );
sr.reveal( '[data-sreveal="slideInDown"]', slideInDown );
sr.reveal( '[data-sreveal="slideInRight"]', slideInRight );
sr.reveal( '[data-sreveal="slideInLeft"]', slideInLeft );
sr.reveal( '[data-sreveal="zoomOut"]', zoomOut );

$( '[data-sreveal]' ).each( function () {

	var el = $( this );

	var options = [ 'delay', 'distance', 'duration', 'easing', 'interval', 'opacity', 'origin', 'rotate', 'scale', 'desktop', 'mobile', 'reset', 'useDelay', 'viewFactor', 'viewOffset' ];

	var settings = {};
	var interval = 0;

	$( options ).each( function ( index, element ) {

		if ( el.data( 'animation-' + options[ index ] ) ) {
			var option = options[ index ];
			settings[ option ] = el.data( 'animation-' + option );
		}

	} );

	sr.reveal( el, settings );
} );

$( 'html.js.mutationobserver.cssanimations:not(.is-mobile) .sreveal' ).css( 'animation-name', 'none' );

sr.reveal( 'html.js.mutationobserver.cssanimations:not(.is-mobile) .sreveal', {
	opacity: null,
	duration: 0,
	beforeReveal: function ( el ) {
		el.style.animationName = '';
		el.classList.add( 'animated' );
	},
	afterReveal: function ( el ) {
		// el.classList.remove( 'animated' );
	}
} );
;
var controller,
	sceneWorkCards,
	sceneHeroVideo,
	sceneAboutStart,
	sceneBlogStart,
	sceneBlogEnd;

controller = new ScrollMagic.Controller();

enquire.register( 'screen and (min-width: 992px)', {
	match: function () {

		// console.log(document.referrer.indexOf(window.location.host) );

		if ( $( 'body' ).hasClass( 'home' ) ) {

			// console.log('Body is called');

			// if ( document.referrer.indexOf( window.location.host ) !== -1 ) {
				// if from same domain
				// console.log('running with smoothstate');
				// homeListWorks();
			// } else {
				// console.log('Outside window loaded homepage')
				// don't use this outside as it will not fire when coming to homepage from same domain due to smoothstate
				// $( window ).load(function() {
					// console.log('window loaded homepage')
					homeListWorks();
				// });
			// }

			function homeListWorks() {
					sceneWorkCards = new ScrollMagic.Scene( {
					triggerElement: '.home__list-work',
					duration: '500%',
					triggerHook: 0,
					tweenChanges: true
				} );

				var workWidth = 0;
				$( '.home__list-work > li' ).each( function ( index, el ) {
					// console.log('single workWidth: ' + $( this ).outerWidth());
					workWidth += $( this ).outerWidth();
					// console.log('total workWidth: ' + workWidth);
				} );

				containerMargin = $( '.work-cards-carousel-section .container' )
					.css( 'margin-left' );
					if(containerMargin){ containerMargin.replace( 'px', '' ); }
					
				containerMargin = parseFloat( containerMargin );
				//workWidth += containerMargin * 2; without view all card
				workWidth += containerMargin;

				// console.log( 'workWidth: ' + workWidth );

				translateWidth = workWidth - $( window ).outerWidth();

				// console.log( 'window.outerWidth: ' + $(window).outerWidth() );
				// console.log( 'translateWidth: ' + translateWidth );

				sceneWorkCards.setPin( '.home__list-work' );
				sceneWorkCards.setTween(
					TweenMax.to( '.home__list-work', 1, {
						x: '-' + translateWidth
					} )
				);
				sceneWorkCards.addTo( controller );
				// sceneWorkCards.addIndicators( {
				// 	name: 'HomeListWork',
				// 	indent: 1000,
				// 	colorStart: '#000',
				// 	colorEnd: 'red',
				// 	colorTrigger: '#000',
				// } )
			} // function

			sceneAboutStart = new ScrollMagic.Scene( {
				triggerElement: '.home__about-section',
				duration: 0,
				triggerHook: 0.1
			} );
			sceneAboutStart.setClassToggle( '#header', 'js-add-bg' );
			sceneAboutStart.addTo( controller );

			// console.log('activated');
			sceneBlogStart = new ScrollMagic.Scene( {
				triggerElement: '.home .js-blog-section',
				triggerHook: 'onEnter'
			} );
			sceneBlogStart.setClassToggle( '.site-wrapper_inner', 'bg-grey' );
			sceneBlogStart.addTo( controller );

		} // if body has class
	}, // match

	unmatch: function () {
		controller.destroy( true );
		controller.destroy( null );
		sceneWorkCards = null;
	}
} );

enquire.register( 'screen and (min-width: 992px)', {
	match: function () {
		if ( $( 'body' ).hasClass( 'home' ) ) {
			const controller = new ScrollMagic.Controller();
			const heroTimeline = new TimelineMax();

			sceneHeroVideo = new ScrollMagic.Scene( {
				triggerElement: '.home__hero-section',
				triggerHook: 0,
				duration: '400%'
				// tweenChanges: true
			} );

			// sceneHeroVideo.tweenChanges( true)
			sceneHeroVideo.setPin( '.home__hero-section' );
			sceneHeroVideo.setClassToggle( '#header', 'js-hide-logo' );
			heroTimeline.add(
				TweenMax.to( '.home__hero-section #video-wrapper', 1, {
					opacity: 0.3,
					height: '40vh',
					width: '40vh',
					ease: Power1.easeInOut
				} )
			);
			heroTimeline.add( [
				TweenMax.to( '.scroll-cue', 0.2, {
					opacity: 0,
					delay: 0.2
				} ),
				TweenMax.to( '.home__hero-section #video-wrapper', 0.4, {
					opacity: 0,
					scale: 0.2,
					delay: 0.3
				} ),
				TweenMax.to( '.home__hero-section .hero--home__heading', 0.45, {
					opacity: 0,
					scale: '2.5',
					delay: 0.3
				} ),
				TweenMax.to( '.home__hero-section', 0.45, {
					backgroundColor: '#fff',
					delay: 0.4
				} )
			] );
			sceneHeroVideo.setTween( heroTimeline );
			sceneHeroVideo.addTo( controller );

			var end =
				sceneHeroVideo.scrollOffset() + sceneHeroVideo.duration() * 1.09;

			//Create scene once about section comes in to finish hero section animation
			const homeAboutTimeline = new TimelineMax();

			sceneAboutSection = new ScrollMagic.Scene( {
				triggerElement: '.home__hero-section',
				triggerHook: 1,
				duration: '1300%',
				offset: end
			} );

			homeAboutTimeline.add( [
				TweenMax.to( '#line_left', 4, {
					x: '100%',
					y: '-300%',
					opacity: 0
					//ease: Power1.easeIn
				} ),
				TweenMax.to( '#line_right', 4, {
					x: '-100%',
					y: '-300%',
					opacity: 0
					//ease: Power1.easeIn
				} )
			] );
			sceneAboutSection.setTween( homeAboutTimeline );
			sceneAboutSection.addTo( controller );

		} // if body has class
	}, // match

	unmatch: function () {
		controller.destroy( true );
		controller.destroy( null );
		sceneHeroVideo = null;
	}
} );;
/*=============================================
=            General scroll to any            =
=============================================*/
$('.scroll-to').click(function(e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top
  }, 500 );
});

/*=====================================
=            Scroll to top            =
=====================================*/
var scrollToTop = debounce( function() {
	// if width is greater
	if ( $( this ).width() > 767 ) {
		// if scrollTop offset is greater
		if ( $( this ).scrollTop() > 200 ) {
			$( '.scroll-to-top' ).fadeIn( 200 );
		} else {
			$( '.scroll-to-top' ).fadeOut( 200 );
		}
	}
}, 200 );

// run on page load
scrollToTop();

// run on scroll
window.addEventListener( 'scroll', scrollToTop );;
/*===================================
=            CS Counters            =
===================================*/
$( '.work-list-numbers' ).each( function () {

	$( this ).one( 'inview', function ( event, isInView ) {

		if ( isInView ) {
			$.each( $( this ).find( '.number' ), function ( i, val ) {
				$endVal = $( this ).data( 'value' );
				// console.log($endVal);
				$decimal = $endVal.toString().indexOf( '.' );
				if ( $decimal != -1 ) {
					$decimal = 1;
				}
				animation = new CountUp( $( this ).attr( 'id' ), 0, $endVal, $decimal ).start();
			} );
		}

	} );
} );

/*==========================================
=            Case Study Sliders            =
==========================================*/
function screensSlider() {
	$( '.screens-slider' ).each( function () {
		$( this ).slick( {
			draggable: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			adaptiveHeight: true,
			dots: true,
			slidesToScroll: 1,
			touchThreshold: 14,
			appendDots: $( this ).parent().parent().find( '.slick-dots-section' ),
			prevArrow: $( this ).parent().find( '.slick-navigation-block .btn-prev' ),
			nextArrow: $( this ).parent().find( '.slick-navigation-block .btn-next' ),
		} );

		/* This doesn't work with infinite true */
		$( this ).on( 'beforeChange', function ( event, slick, currentSlide, nextSlide ) {
			if ( $( this ).find( '.slick-slide:not(.slick-cloned)' ).eq( nextSlide ).find( 'video' ).length ) {
				$( this ).find( '.slick-slide:not(.slick-cloned)' ).eq( nextSlide ).find( 'video' )[ 0 ].currentTime = 0;
			}
		} );

		/* This doesn't work with infinite true */
		$( this ).on( 'afterChange', function ( event, slick, currentSlide ) {
			if ( $( this ).find( '.slick-slide:not(.slick-cloned)' ).eq( currentSlide ).find( 'video' ).length ) {
				$( this ).find( '.slick-slide:not(.slick-cloned)' ).eq( currentSlide ).find( 'video' )[ 0 ].play();
			}
		} );

		$( this ).one( 'inview', function ( event, isInView ) {
			if ( isInView ) {
				if ( $( this ).find( '.slick-slide' ).eq( 0 ).find( 'video' ).length ) {
					$( this ).find( '.slick-slide' ).eq( 0 ).find( 'video' )[ 0 ].play();
				}
			}
		} );

	} );
}
screensSlider();


/*======================================
=            CS Video Popup            =
======================================*/
$( '.popup-video' ).magnificPopup( {
	type: 'iframe',
	removalDelay: 300,
	mainClass: 'mfp-fullscreen-video',
	fixedContentPos: true //disable scrollbar
} );


/*=========================================
=            CS Expand Content            =
=========================================*/
$( '#expand-block' ).css( 'display', 'none' );
$( '.work-link-expand' ).click( function ( e ) {
	e.preventDefault();
	$( this ).parents().find( '#expand-block' ).slideToggle( 400 );
	$( this ).children().fadeToggle( 0 );
} );


/*================================
=            CS Video            =
================================*/
$( '.half-content-half-image-section, .half-image-half-content-section' ).one( 'inview', function ( event, isInView ) {
	if ( isInView ) {
		if ( $( this ).find( 'video' ).length ) {
			$( this ).find( 'video' )[ 0 ].play();
		}
	}
} );;
/*----------  Fullscreen Slider  ----------*/
function fullscreenImagesSlider() {
	$( '.fullscreen-images-slider' ).each( function () {
		$( this ).slick( {
			mobileFirst: true,
			touchThreshold: 30,
			speed: 500,
			dots: true,
			appendDots: $( this ).parent().find( '.slick-dots-section' ),
			prevArrow: $( this ).parent().find( '.slick-navigation-block .btn-prev' ),
			nextArrow: $( this ).parent().find( '.slick-navigation-block .btn-next' ),
			responsive: [
				{
					breakpoint: 768,
					settings: {
						fade: true,
					}
				},
			]
		} );
	} );
}
fullscreenImagesSlider();


/*----------  Latest Post Cards Slider  ----------*/
function latestPostCards() {
	$( '.latest-post-cards' ).each( function () {
		$( this ).slick( {
			mobileFirst: true,
			touchThreshold: 30,
			speed: 500,
			arrows: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 768,
					settings: 'unslick'
				}
			]
		} );
	} );
}
if ( $( window ).innerWidth() < 768 ) {
	latestPostCards();
}

$( window ).on( 'resize orientationchange', function () {
	if ( $( this ).innerWidth() < 768 ) {
		if ( !$( '.latest-post-cards' ).hasClass( 'slick-initialized' ) ) {
			latestPostCards();
		}
	} else {
		if ( $( '.latest-post-cards' ).hasClass( 'slick-initialized' ) ) {
			$( '.latest-post-cards' ).slick( 'unslick' );
		}
	}
} );


/*----------  Images Marquee Slider  ----------*/
function imagesMarqueeSlider() {
	$( '.images-marquee-list--first' ).each( function () {
		$( this ).slick( {
			mobileFirst: true,
			touchThreshold: 30,
			speed: 500,
			dots: true,
			appendDots: $( this ).parent().find( '.slick-dots-section' ),
			prevArrow: $( this ).parent().find( '.slick-navigation-block .btn-prev' ),
			nextArrow: $( this ).parent().find( '.slick-navigation-block .btn-next' ),
			responsive: [
				{
					breakpoint: 576,
					settings: 'unslick'
				}
			]
		} );
	} );
}
if ( $( window ).innerWidth() < 576 ) {
	imagesMarqueeSlider();
}

$( window ).on( 'resize orientationchange', function () {
	if ( $( this ).innerWidth() > 575 ) {
		if ( $( '.images-marquee-list--first' ).hasClass( 'slick-initialized' ) ) {
			$( '.images-marquee-list--first' ).slick( 'unslick' );
		}
	} else {
		if ( !$( '.images-marquee-list--first' ).hasClass( 'slick-initialized' ) ) {
			imagesMarqueeSlider();
		}
	}
} );


/*----------  Culture Slider - Heading and Content Adjacent Slider  ----------*/
function hacasNavSlider() {
	$( '.hacas-nav-slider' ).each( function () {
		$( this ).slick( {
			touchThreshold: 30,
			infinite: false,
			speed: 500,
			arrows: false,
			vertical: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			focusOnSelect: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			pauseOnDotsHover: false,
			asNavFor: $( this ).parents( '.hacas-wrapper' ).find( '.hacas-slider' ),
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick',
				}
			]
		} );
	} );
}
if ( $( window ).innerWidth() > 767 ) {
	hacasNavSlider();
}


function hacasSlider() {
	$( '.hacas-slider' ).each( function () {

		var $hacasSliderInstance = $( this ).slick( {
			autoplay: true,
			autoplaySpeed: 10000,
			touchThreshold: 30,
			infinite: true,
			speed: 500,
			arrows: false,
			fade: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			pauseOnDotsHover: false,
			asNavFor: $( this ).parents( '.hacas-wrapper' ).find( '.hacas-nav-slider' ),
			responsive: [
				{
					breakpoint: 767,
					settings: 'unslick',
				}
			]
		} );

		$hacasSliderInstance.slick( 'slickPause' );
		$( this ).one( 'inview', function ( event, isInView ) {
			if ( isInView ) {
				var $currentSlide = $( this ).find( '.slick-current' ).removeClass( 'slick-current' );
				setTimeout( function () {
					$currentSlide.addClass( 'slick-current' );
				}, 100 );
				$hacasSliderInstance.slick( 'slickPlay' );
			}
		} );

		$hacasSliderInstance.on('init reInit beforeChange', function(event, slick, currentSlide, nextSlide) {
			$('.slide-bg').removeClass('js-active');
			$('.slide-bg').eq(nextSlide).addClass('js-active');
		});

	} );
}
if ( $( window ).innerWidth() > 767 ) {
	hacasSlider();
}

$( window ).on( 'resize orientationchange', function () {
	if ( $( this ).innerWidth() > 767 ) {
		if ( !$( '.hacas-slider, .hacas-nav-slider' ).hasClass( 'slick-initialized' ) ) {
			hacasNavSlider();
			hacasSlider();
		}
	} else {
		$( '.hacas-slider, .hacas-nav-slider' ).slick( 'unslick' );
	}
} );;
// stickybits($('#header'), { useStickyClasses: true });;
	/*=======================================
	 =         Work With Us Button     =
     =======================================*/
     //Home Page
     if ( $( 'body' ).hasClass( 'page-home' ) ) {
        var st = 100;
        $( window ).scroll( function() {
            if($('body').hasClass('page-home')){
            var scroll_top = $( this ).scrollTop();
            if ( scroll_top == 6570 ) {
                $( '#work-with-us-wrap' ).addClass( 'active' )
            }
            
            var hide_section = $( '#work-with-us-wrap' ).offset().top - 350;
    
            if ( scroll_top > hide_section ) {
                $( '#work-with-us-wrap' ).removeClass( 'active' );
            } else {
                $( '#work-with-us-wrap' ).addClass( 'active' );
            }
    
    
                if ( scroll_top > hide_section ) {
                    $( '#work-with-us-wrap' ).removeClass( 'active' );
                } else {
                    $( '#work-with-us-wrap' ).addClass( 'active' );
                }
            
            st = scroll_top;
            if ( st < 6570 ) {
                $( '#work-with-us-wrap' ).removeClass( 'active' );
            }
        }
     } );
    }
     //Capabilities Page
     if ( $( 'body' ).hasClass( 'page-capabilities' ) ) {
        var st = 100;
        $( window ).scroll( function() {
            if ( $( 'body' ).hasClass( 'page-capabilities' ) ) {
            var scroll_top = $( this ).scrollTop();
            if ( scroll_top == 1320 ) {
                $( '#work-with-us-wrap' ).addClass( 'active' );
            }
            
            var hide_section = $( '#work-with-us-wrap' ).offset().top - 350;
    
            if ( scroll_top > hide_section ) {
                $( '#work-with-us-wrap' ).removeClass( 'active' );
            } else {
                $( '#work-with-us-wrap' ).addClass( 'active' );
            }
    
                if ( scroll_top > hide_section ) {
                    $( '#work-with-us-wrap' ).removeClass( 'active' );
                } else {
                    $( '#work-with-us-wrap' ).addClass( 'active' );
                }
        
            st = scroll_top;
            if ( st < 1320 ) {
                $( '#work-with-us-wrap' ).removeClass( 'active' );
            }
        }
     } );
    }
;
if ( Modernizr.cssanimations && Modernizr.mutationobserver ) {
  Visibility.onVisible(function () {
    AOS.init( {
			duration: 1000,
			useClassNames: true,
			initClassName: false,
			animatedClassName: 'animated',
			once: true,
		} );
  });
};
	} ); // Document Ready

} // all init

allInit( $ );


/*=================================
=            Buggyfill            =
=================================*/
/* Polyfill for vh,vw units on iphone4,5 */
window.viewportUnitsBuggyfill.init( {
	refreshDebounceWait: 50,
	hacks: window.viewportUnitsBuggyfillHacks
} );;
/* Smooth State */
(function ($) {

	var $transitionBlock = $('.smooth-state-transition-block');

	/* exclude wp-admin links */
	function addBlacklistClass() {
		$('a').each(function () {
			if (this.href.indexOf('/wp-admin/') !== -1 ||
				this.href.indexOf('/wp-login.php') !== -1) {
				$(this).addClass('wp-link');
			}
		});
	}

	var options = {
		anchors: 'a:not([href^="#"])',
		// prefetch: true,
		cacheLength: 5,
		blacklist: '.no-smoothstate, .post-edit-link,  a[href*=".jpg"], a[href*=".png"], a[href*=".jpeg"], a[href*=".pdf"], .wp-link',

		// onBefore: function($currentTarget, $container) {
		// 	$container.removeClass( 'page-landed smooth-state-loaded' );
		// },

		onStart: {
			duration: 1000, // animation duration
			render: function ($container) {
				// Add your CSS animation reversing class
				$transitionBlock.addClass('js-active');

				// Restart your animation
				smoothState.restartCSSAnimations();
			}
		},

		// good place to add something like a loading indicator.
		// onProgress: {
		// 	duration: 3000,
		// 	render: function ( $container ) {
		// 		$container.addClass( 'page-still-loading' );
		// 	}
		// },

		onReady: {
			duration: 1000,
			render: function ($container, $newContent) {
				// Remove your CSS animation reversing class
				$transitionBlock.removeClass('js-active');
				// console.log( $newContent[0] );
				// get and add new body classes
				$smoothStateBodyClasses = $newContent[0].className; // [0] first element of returned data, .smooth-state-body-classes
				// console.log($smoothStateBodyClasses);
				$('body').attr({
					class: $smoothStateBodyClasses,
				});
				// Inject the new content
				$container.html($newContent);
			}
		},

		// remove the loader animation
		onAfter: function ($container, $newContent) {
			addBlacklistClass();
			allInit($);
		}

	};

	smoothState = $('#site-wrapper').smoothState(options).data('smoothState'); // cannot be applied to body

})(jQuery);
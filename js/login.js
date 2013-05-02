jQuery.fn.center = function () {
	this.css("position", "absolute");
	this.css("top",  Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() ) + "px");
	this.css("left", Math.max(0, (($(window).width()  - $(this).outerWidth() ) / 2) + $(window).scrollLeft()) + "px");

	return this;
};


$(window).resize(function() {
	$('.login-box').center();
});


/*
function fadeToHelper(el, index, max, timing) {
}
function fadeInHelper(el, index, max, timing) {

	// TODO: respect type of message!
	// {success|info|danger|error}

	el.css('visibility', '');

	el.fadeIn(timing['in'], function() {
		el.fadeTo(timing['to1'][0], timing['to1'][1], function() {

			if (index+1 < max) {
				fadeInHelper(el.next(), index+1, max, timing);
			}

			el.fadeTo(timing['to2'][0], timing['to2'][1], function() {

				el.fadeTo(timing['to3'][0], timing['to3'][1], function() {
					// TODO: move to top-bar!
					// TODO: hide
					el.hide();
				});

			});

		});
	});

	el.mouseover(function() {
		// TODO: kdyz jsem to prerusil, tak musim zase navazat!
		// - pamatovat -> pokud dam fadeout tak znovu fadeInHelper()
		$(this).stop();
		$(this).fadeTo('normal', 1.0);
	});
	el.mouseout(function() {
		$(this).stop();
		$(this).fadeTo(timing['to2'][0], timing['to2'][1], function() {
			$(this).fadeTo(timing['to3'][0], timing['to3'][1], function() {
				// TODO: move to top-bar!
				// TODO: hide
				$(this).hide();
			});

			// flash messages (~fade{In|Out})
			var fmsg = $('#flash-messages');

			if (fmsg.html() != '' && fmsg.html() != null) {
				var fmsg_cnt = $('#flash-messages div');
				var fmsg_len = fmsg_cnt.size();
				var fmsg_idx = el.attr('data-fm-index');

				fmsg_cnt.each(function(indexx, valuee) {
	console.log(index, index, fmsg_idx);
					if (indexx == fmsg_idx+1) {
						$(this).show();
console.log($(this).val());
						fadeInHelper($(this), index, max, timing);
					}

				});

			}

		});


	});
}
*/

$(document).ready(function() {
	var backup = {
<<<<<<< HEAD
		'login': $('fieldset #login').html()
=======
		'login'   : $('fieldset #login').html(),
		'forgotem': false,//		fmsgs.each(function(index) {
//			$(this).fadeIn(500);
//console.log(index + ": " + $(this).text());
		//});
>>>>>>> develop-s2
	};
	$('.login-box').center();
	$('.login-box').css('visibility', '');
	$('fieldset #forgotel').css('visibility', 'hidden');
	$('fieldset input[name=forgotemail]').attr('disabled', true);


	// forgot password: pre-fill: username -> forgot email
	$('fieldset input[name=username]').change(function() {
		backup['forgotem'] = false;
	});

	// forgot password: checkbox
	$('fieldset #forgotch').change(function() {
		var el = {
			'username' : $('fieldset input[name=username]'),
			'password' : $('fieldset input[name=password]'),
			'remember' : $('fieldset input[name=remember]'),
			'dremember': $('fieldset .remember'),
			'forgotin' : $('fieldset input[name=forgotemail]'),
			'forgotch' : $('fieldset #forgotch'),
			'forgotel' :  $('fieldset #forgotel'),
			'login'    : $('fieldset #login')
		};


		if (el['forgotch'].prop('checked')) {
			el['remember'].attr('disabled', true);
			el['remember'].attr('readonly', true);
			el['dremember'].toggleClass('disabled');

			el['username'].attr('disabled', true);
			el['password'].attr('disabled', true);

			el['forgotel'].css('visibility', '');
			el['forgotin'].removeAttr("disabled");

			el['login'].html('Send');
			el['login'].toggleClass('btn-forgot');

			// pre-fill 'forgotemail' if username is valid email@address!
			if (!backup['forgotem']) {
				backup['forgotem'] = true;

				var emailRE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if (emailRE.test(el['username'].val())) {
					el['forgotin'].val(el['username'].val());
				}
			}

		} else {
			el['remember'].removeAttr("disabled");
			el['remember'].removeAttr("readonly");
			el['dremember'].toggleClass('disabled');

			el['username'].removeAttr('disabled');
			el['password'].removeAttr('disabled');


			el['forgotel'].css('visibility', 'hidden');
			el['forgotin'].attr('disabled', true);

			el['login'].html(backup['login']);
			el['login'].toggleClass('btn-forgot');
		}
	});


	// flash messages (~fade{In|Out})
/*
	var fmsg = $('#flash-messages');
	if (fmsg.html() != '' && fmsg.html() != null) {
		var fmsg_cnt = $('#flash-messages div');
		var fmsg_len = fmsg_cnt.size();
		var timing   = {
			'in' :     777,
			'to1': [  6666, 0.5 ],
			'to2': [   999, 0.2 ],
			'to3': [   555, 0.0 ]
		};
		fmsg_cnt.each(function(index, value) {
			$(this).attr('data-fm-index', index);
			$(this).hide();
			if (index == 0) {
				fadeInHelper($(this), index, fmsg_len, timing);
			}
		});
		fmsg.css('visibility', '');
	}
*/
	// TODO: fadeIn (prvni)
	// TODO: fadeOut (prvni) -> complete -> presun ji nahoru a zobraz indikator
	// TODO: po kliku na indikator -> presun zpet a zobraz ji -> fadeIn() a opakuj akce

//var fmsgs = $('#xxx');
//fmsgs.fadeOut(2000, function() {
//});

//console.log(fmsg.html());

});

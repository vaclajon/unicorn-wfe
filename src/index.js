import './index.html';
import './style.scss';

(function () {
	var checkRequired = function (element) {
		if (!element.value) {
			element.style.border = '1px solid red';
			return false;
		}
		else {
			element.style.borderColor = 'initial';
		}

		return true;
	};

	document.getElementById('myForm').onsubmit = function (event) {
		event.preventDefault();

		var firstNumber = this['firstNumber'];
		var secondNumber = this['secondNumber'];

		if (checkRequired(firstNumber) & checkRequired(secondNumber)) {
			document.getElementById('result').innerHTML = 'Result is ' + (parseFloat(firstNumber.value) + parseFloat(secondNumber.value));
		}
	};

	var links = document.querySelectorAll('#left a');

	for (var i = 0; i < links.length; i++) {

		links[0].onclick = function (event) {
			window.open(this.href);

			event.preventDefault();
		};
	}

	window.generateUl = function () {
		var ul = document.createElement('ul');
		for (var i = 0; i < 5; i++) {
			var li = document.createElement('li');
			li.innerHTML = 'Text item ' + i;
			ul.appendChild(li);
		}

		document.getElementById('left').appendChild(ul);
	};

	document.getElementById('removeLists').addEventListener('click', function () {
		var uls = document.querySelectorAll('#left ul');
		for (var i = uls.length; i > 0; i--) {
			document.getElementById('left').removeChild(uls[i - 1]);
		}
	});
})();


$(document).ready(function () {
	var checkRequired = function ($element) {
		if (!$element.val()) {
			$element.css('border', '1px solid red');
			return false;
		}
		else {
			$element.css('borderColor', 'initial');
		}

		return true;
	};
	$('#myForm2').submit(function (event) {
		event.preventDefault();

		var $firstNumber = $('#firstNumber2');
		var $secondNumber = $('#secondNumber2');

		if (checkRequired($firstNumber) & checkRequired($secondNumber)) {
			$('#result2').html('Result is ' + (parseFloat($firstNumber.val()) + parseFloat($secondNumber.val())));
		}
	});

	$('#right').find('a').each(function () {
		$(this).on('click', function (event) {
			window.open($(this).attr('href'));
			event.preventDefault();
		})
	});


	window.generateUl2 = function () {
		var ul = $('<ul>');
		for (var i = 0; i < 5; i++) {
			var li = $('<li>');
			li.html('Text item ' + i);
			ul.append(li);
		}

		ul.appendTo('#right');
	};


	$('#removeLists2').on('click', function () {
		$('#right').find('ul').each(function () {
			$(this).remove();
		});
	});
});


$(function () {
	$('body').css({ 'background-color': 'yellow' });
	$('label').addClass('custom-label');
	$('#datepicker').datepicker();
	$('#tabs').tabs();
	$('#makeSortable').click(function () {
		$('ul').each(function () {
			$(this).sortable();
		})
	});
	$('#dialog').dialog({
		autoOpen: false,
		buttons: {
			'Delete all items': function () {
				$(this).dialog('close');
			},
			Cancel: function () {
				$(this).dialog('close');
			}
		},
		height: 'auto',
		hide: {
			effect: 'explode',
			duration: 1000
		},
		modal: true,
		resizable: true,
		show: {
			effect: 'blind',
			duration: 1000
		},
		width: 400
	});

	$('#opener').on('click', function () {
		$('#dialog').dialog('open');
	});
});


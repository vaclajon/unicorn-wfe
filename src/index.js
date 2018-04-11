import './index.html';
import '../assets/templates/header.html';
import './style.scss';

var api = 'http://localhost:8080/api';
var contactsUrl = api + '/contact';

function getAddressUrl(addressId) {
	return api + "/address" + '/' + addressId;
}

function getContactUrl(contactId) {
	return contactsUrl + '/' + contactId;
}

$(function () {
	var $contactsTbl = $('#contacts');
	var $editForm = $('#editForm');
	var editId;

	function ajax(url, successFn, failFn, method, data) {
		var params = {
			method: method || 'GET',
			url: url
		}

		if (method === 'POST' || 'PUT') {
			params.data = data;
		}

		return $.ajax(params)
			.done(function (response) {
				return successFn ? successFn(response) : response;
			})
			.fail(function (xhr, error) {
				return failFn ? failFn(xhr, error) : xhr;
			})
	}

	function createRow(address, contact) {
		var $editBtn = $('<button data-contact-id="' + contact.id + '">')
			.addClass('btn edit-btn')
			.text('Edit');

		var $deleteBtn = $('<button data-contact-id="' + contact.id + '">')
			.addClass('btn btn-danger remove-btn')
			.text('Remove');

		var $tr = $('<tr>')
			.append(
				$('<td>').text(contact.id),
				$('<td>').text(contact.firstName),
				$('<td>').text(contact.lastName),
				$('<td>').text(contact.email),
				$('<td>').text(contact.age),
				$('<td>').text(contact.mobile),
				$('<td>').text(JSON.stringify(address)),
				$('<td>')
					.append($editBtn)
					.append($deleteBtn)
			);
		return $tr;
	}

	function handleContacts(response) {
		var $rows = [];
		var deferrs = $.map(response, function (contact, index) {
			return ajax(getAddressUrl(contact.addressId))
				.done(function (address) {
					$rows.push(createRow(address, contact));
				});
		});

		$.when.apply($, deferrs)
			.done(function () {
				$contactsTbl.find('tbody').html($rows);
			})
	}

	function handleAddress(response) {
		$.each(response, function (index, address) {
			$('<option>')
				.text(JSON.stringify(address))
				.val(address.id)
				.appendTo($editForm.find('select[name="addressId"]'));

		})
	}

	function handleEditProduct(response) {
		$.each(response, function (key, value) {
			$('[name=' + key + ']', $editForm).val(value);
		});
		$editForm.fadeIn();
	}

	function loadContacts() {
		return ajax(contactsUrl).done(handleContacts);
	}

	function resetForm() {
		$editForm.find("input, select").val("");
	}

	function validateForm($form) {
		if (!$form.find('[name="firstName"]').val()) {
			return false;
		}
		else if (!$form.find('[name="lastName"]').val()) {
			return false;
		}
		else if (!$form.find('[name="addressId"]').val()) {
			return false;
		}
		else {
			return true;
		}
	}

	$('#header-wrapper').load('../assets/templates/header.html');

	$.get('../assets/templates/header.html')
		.done(function (response) {
			$('#header-wrapper').append(response);
		})
		.fail(function (xhr, error) {
			console.log("There has been some problem. The error is: ", error)
		});

	$('#newBtn').click(function () {
		$editForm.fadeIn();
		resetForm();
		editId = null;
	});

	$contactsTbl.on('click', '.edit-btn', function () {
		var contactId = $(this).data('contactId');
		editId = contactId;
		ajax(getContactUrl(contactId)).done(handleEditProduct);
	});

	$contactsTbl.on('click', '.remove-btn', function () {
		var contactId = $(this).data('contactId');
		if (editId === contactId) {
			resetForm();
		}
		ajax(getContactUrl(contactId), null, null, 'DELETE').done(loadContacts);
	});

	$editForm.submit(function () {
		var method = 'POST';
		var url = contactsUrl;

		if (editId) {
			method = 'PUT';
			url += "/" + editId;
		}

		if (validateForm($(this))) {
			ajax(url, null, null, method, $editForm.serialize()).done(function () {
				$editForm.fadeOut(500);
				loadContacts();
				resetForm();
			});
		}
		else {
			alert('Invalid form inputs')
		}
		return false;
	});

	loadContacts();
	fetch('http://localhost:8080/api/address')
		.then(function (response) {
			return response.json();
		})
		.then(handleAddress);
});
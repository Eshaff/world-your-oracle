var $ = require('jquery')
var jQuery = require('jquery')

var eventCalendar = require('jquery.eventCalendar')
require('kendo.dropdownlist')

$("#ddl").kendoDropDownList({
	dataTextField: "text",
	dataValueField: "value",
	dataSource: [
		{ text: "Item1", value: "1" },
		{ text: "Item2", value: "2" }
	]
});

$(document).ready(function () {
	var layout = require('js/layout');
	// Rotator for the Oracle.htm page
	require('js/rotator');

	// Header and footer layout
	layout();

	eventCalendar(jQuery);

	// EventCalendar for the Calendar page
	$("#eventCalendarDefault").eventCalendar({
		eventsjson: 'app/js/events.json', // link to events json
		eventsLimit: 10,
		startWeekOnMonday: false,
		showDescription: true,
		openLinkInNewWindow: false,
		dateFormat: 'MMM D, YYYY',
		jsonDateFormat: 'human'
	});
});



var $ = require('jquery')

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
	require('js/rotator');

	layout();
});
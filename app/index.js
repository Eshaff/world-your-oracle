import _ from 'lodash';
import 'kendo-ui-core';

console.log(kendo);

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello','webpack'], ' ');

	return element;
}

document.body.appendChild(component());
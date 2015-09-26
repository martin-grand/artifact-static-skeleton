var app = {};

(function (_document) {

	function constructor() {
		_document.addEventListener('DOMContentLoaded', init, false);
	}

	function init() {
		var module;

		for (module in app) {
			if (app.hasOwnProperty(module) && app[module].hasOwnProperty('init')) {
				app[module].init();
			}

		}

	}

	// call constructor immediately:
	constructor();

})(document);

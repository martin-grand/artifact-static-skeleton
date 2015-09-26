app.layout = (function () {
	var exports = {};

	function init() {
		initializeAutoGrowTextArea();
	}

	function initializeAutoGrowTextArea() {
		$body.on('input', 'textarea[autosize="true"]', function () {
			this.style.height = 'auto';
			this.style.height = this.scrollHeight + 'px';
		});

	}

	exports.init = init;
	return exports;

})();
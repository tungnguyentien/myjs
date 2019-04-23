'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _browserUtils = require('./utils/browser-utils');

var _browserUtils2 = _interopRequireDefault(_browserUtils);

var _apiUtils = require('./utils/api-utils');

var _apiUtils2 = _interopRequireDefault(_apiUtils);

var _objectUtils = require('./utils/object-utils');

var _objectUtils2 = _interopRequireDefault(_objectUtils);

var _stringUtils = require('./utils/string-utils');

var _stringUtils2 = _interopRequireDefault(_stringUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyJS = function () {
	function MyJS() {
		(0, _classCallCheck3.default)(this, MyJS);
	}

	(0, _createClass3.default)(MyJS, null, [{
		key: 'getCookie',


		//Browser Utils
		value: function getCookie(cName) {
			return _browserUtils2.default.getCookie(cName);
		}
	}, {
		key: 'setCookie',
		value: function setCookie(cName, cValue, expires) {
			return _browserUtils2.default.setCookie(cName, cValue, expires);
		}
	}, {
		key: 'getLocalStorage',
		value: function getLocalStorage(key) {
			return _browserUtils2.default.getLocalStorage(key);
		}
	}, {
		key: 'setLocalStorage',
		value: function setLocalStorage(key, value) {
			return _browserUtils2.default.setLocalStorage(key, value);
		}
	}, {
		key: 'getUrlParams',
		value: function getUrlParams(key) {
			var query = window.location.search.replace('?', '');
			var params = _stringUtils2.default.getParameters(query) || {};
			if (key) return params[key];
			return params;
		}
	}, {
		key: 'isMobile',
		value: function isMobile() {
			return _browserUtils2.default.isMobile();
		}
	}, {
		key: 'toQuery',
		value: function toQuery(data) {
			return _stringUtils2.default.toQueryString(data);
		}
	}, {
		key: 'clone',
		value: function clone(data) {
			return _objectUtils2.default.clone(data);
		}
	}, {
		key: 'get',
		value: function get(url, callback) {
			return _apiUtils2.default.get(url, callback);
		}
	}, {
		key: 'post',
		value: function post(url, data, callback) {
			return _apiUtils2.default.post(url, data, callback);
		}
	}, {
		key: 'ajax',
		value: function ajax(options, callback) {}
	}]);
	return MyJS;
}();

module.exports = MyJS;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetch = window.fetch;

var APIUtils = function () {
    function APIUtils() {
        (0, _classCallCheck3.default)(this, APIUtils);
    }

    (0, _createClass3.default)(APIUtils, null, [{
        key: 'ajax',
        value: function ajax(url, options, callback) {
            options = options || {};
            var method = options.method || 'GET';
        }
    }, {
        key: 'get',
        value: function get(url, callback) {
            fetch(url).then(function (res) {
                return res.text();
            }).then(function (data) {
                return callback(null, data);
            }).catch(function (ex) {
                return callback(ex);
            });
        }
    }, {
        key: 'post',
        value: function post(url, data, callback) {
            data = data || {};
            if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) == 'object') data = (0, _stringify2.default)(data);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: data
            }).then(function (res) {
                return res.text();
            }).then(function (data) {
                return callback(null, data);
            }).catch(function (ex) {
                return callback(ex);
            });
        }
    }]);
    return APIUtils;
}();

exports.default = APIUtils;
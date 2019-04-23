'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StringUtils = function () {
    function StringUtils() {
        (0, _classCallCheck3.default)(this, StringUtils);
    }

    (0, _createClass3.default)(StringUtils, null, [{
        key: 'toQueryString',
        value: function toQueryString(data) {
            if (!data) return '';
            if ((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) != 'object') return data;
            var key = (0, _keys2.default)(data);
            var params = [];
            key.map(function (k) {
                var v = data[k];
                if ((typeof v === 'undefined' ? 'undefined' : (0, _typeof3.default)(v)) == 'object') v = (0, _stringify2.default)(v);else v = encodeURIComponent(v);
                var item = [k, v].join('=');
                params.push(item);
            });
            return params.join('&');
        }
    }, {
        key: 'getParameters',
        value: function getParameters(query) {
            var params = {};
            if (!query) return params;
            var values = query.split('&');
            values.map(function (item) {
                var data = item.split('=');
                if (!data || data.length != 2) return;
                params[data[0]] = decodeURIComponent(data[1]);
            });
            return params;
        }
    }]);
    return StringUtils;
}();

exports.default = StringUtils;
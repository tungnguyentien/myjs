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

var ObjectUtils = function () {
    function ObjectUtils() {
        (0, _classCallCheck3.default)(this, ObjectUtils);
    }

    (0, _createClass3.default)(ObjectUtils, null, [{
        key: 'toFormData',
        value: function toFormData(data) {
            if (!data || (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) != 'object') return null;
            var keys = (0, _keys2.default)(data);
            var form = new FormData();
            keys.map(function (k) {
                form.append(k, data[k]);
            });
            return form;
        }
    }, {
        key: 'clone',
        value: function clone(target) {
            if (!target || (typeof target === 'undefined' ? 'undefined' : (0, _typeof3.default)(target)) != 'object') return null;
            var data = (0, _stringify2.default)(target);
            var clone = JSON.parse(data);
            return clone;
        }
    }]);
    return ObjectUtils;
}();

exports.default = ObjectUtils;
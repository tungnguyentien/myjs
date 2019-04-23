"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrayUtils = function () {
    function ArrayUtils() {
        (0, _classCallCheck3.default)(this, ArrayUtils);
    }

    (0, _createClass3.default)(ArrayUtils, null, [{
        key: "unique",
        value: function unique(data) {
            var rs = [];
            if (!data || !Array.isArray(data) || data.length == 0) return rs;
        }
    }]);
    return ArrayUtils;
}();

exports.default = ArrayUtils;
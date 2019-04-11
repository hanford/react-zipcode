'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _zippo = require('zippo');

var _zippo2 = _interopRequireDefault(_zippo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ZipCode = function (_Component) {
  _inherits(ZipCode, _Component);

  function ZipCode() {
    _classCallCheck(this, ZipCode);

    var _this = _possibleConstructorReturn(this, (ZipCode.__proto__ || Object.getPrototypeOf(ZipCode)).call(this));

    _this.state = {
      code: ''
    };

    _this.format = _this.format.bind(_this);
    return _this;
  }

  _createClass(ZipCode, [{
    key: 'format',
    value: function format(event) {
      var value = event.target.value;


      this.setState({
        code: _zippo2.default.parse(value)
      });

      if (_zippo2.default.validate(value) && this.props && this.props.onValue) {
        this.props.onValue(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var code = this.state.code;


      return _react2.default.createElement('input', { type: 'text', pattern: '[0-9]*', placeholder: this.props.placeholder ? this.props.placeholder : '', value: code, onChange: this.format });
    }
  }]);

  return ZipCode;
}(_react.Component);

exports.default = ZipCode;

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.renderRootPage = renderRootPage;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _map = require('lodash/map');

var _map2 = _interopRequireDefault(_map);

var _concat = require('lodash/concat');

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRootPage(d, pages) {
  var injectPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var additionalProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var path = arguments[4];
  var key = d.key,
      page = d.page,
      props = d.props;

  var Page = pages[page];
  var children = props.children;
  var pureProps = (0, _omit2.default)(props, 'children');
  if (!path) {
    path = [d.key];
  }
  if (injectPath) {
    if (pureProps.path) {
      throw 'path should be reserved for pages.';
    }
    pureProps.path = path;
  }
  return _react2.default.createElement(
    Page,
    _extends({ key: key }, pureProps, additionalProps),
    (0, _map2.default)(children, function (c) {
      return renderRootPage(c, pages, injectPath, additionalProps, (0, _concat2.default)(path, c.key));
    })
  );
}

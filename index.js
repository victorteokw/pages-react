'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pagenize = pagenize;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pagesCore = require('pages-core');

var _includes = require('lodash/includes');

var _includes2 = _interopRequireDefault(_includes);

var _cloneDeep = require('lodash/cloneDeep');

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _drop = require('lodash/drop');

var _drop2 = _interopRequireDefault(_drop);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _intersection = require('lodash/intersection');

var _intersection2 = _interopRequireDefault(_intersection);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasAnyFrom(a, b) {
  return !!(0, _intersection2.default)(a, b).length;
}

function pagenize(target) {

  // Modifying propTypes
  target.propTypes || (target.propTypes = {});

  if (hasAnyFrom((0, _keys2.default)(target.propTypes), ['pages', 'path', 'childPages', '_root'])) {
    console.warn("pages-react: Do not include 'pages', 'path', 'childPages', '_root' in your react component. \n" + target.toString());
  }

  target.propTypes['pages'] = _react2.default.PropTypes.objectOf(_react2.default.PropTypes.any);

  target.propTypes['path'] = _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string.isRequired);

  target.propTypes['childPages'] = _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    key: _react2.default.PropTypes.string.isRequired,
    page: _react2.default.PropTypes.string.isRequired,
    props: _react2.default.PropTypes.object
  }));

  target.propTypes['_root'] = _react2.default.PropTypes.bool.isRequired;

  // Dispatch is for pages-react-redux

  // Modifying defaultProps
  target.defaultProps || (target.defaultProps = {});

  target.defaultProps = (0, _assign2.default)(target.defaultProps, {
    pages: {},
    path: [],
    childPages: [],
    _root: false
  });

  // Adding pure render method
  // if (!target.prototype.pureRender) {
  //   target.prototype.pureRender = function() {return true};
  // }

  // Modifying shouldComponentUpdate
  // target.prototype.shouldComponentUpdate = function(nextProps, nextState) {
  //   return !(this.pureRender() && isEqual(this.props, nextProps) && isEqual(this.state, nextState));
  // };

  // target.prototype.__originalRender = target.prototype.render;
}

import React from 'react';
import {setPageProps, replacePageProps} from 'pages-core';

import includes from 'lodash/includes';
import cloneDeep from 'lodash/cloneDeep';
import drop from 'lodash/drop';
import isEqual from 'lodash/isEqual';
import keys from 'lodash/keys';
import intersection from 'lodash/intersection';
import assign from 'lodash/assign';

function hasAnyFrom(a, b) {
  return !!intersection(a, b).length;
}

export function pagenize(target) {

  // Modifying propTypes
  target.propTypes || (target.propTypes = {});

  if (hasAnyFrom(keys(target.propTypes), ['pages', 'path', 'childPages', '_root'])) {
    console.warn("pages-react: Do not include 'pages', 'path', 'childPages', '_root' in your react component. \n" + target.toString());
  }

  target.propTypes['pages'] = React.PropTypes.objectOf(
    React.PropTypes.any
  );

  target.propTypes['path'] = React.PropTypes.arrayOf(
    React.PropTypes.string.isRequired
  );

  target.propTypes['childPages'] = React.PropTypes.arrayOf(
    React.PropTypes.shape({
      key: React.PropTypes.string.isRequired,
      page: React.PropTypes.string.isRequired,
      props: React.PropTypes.object
    })
  );

  target.propTypes['_root'] = React.PropTypes.bool.isRequired;

  // Dispatch is for pages-react-redux

  // Modifying defaultProps
  target.defaultProps || (target.defaultProps = {});

  target.defaultProps = assign(target.defaultProps, {
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
import React from 'react';
import omit from 'lodash/omit';
import map from 'lodash/map';
import concat from 'lodash/concat';

export function renderRootPage(d, pages, injectPath = true, additionalProps = {}, path) {
  let {key, page, props} = d;
  let Page = pages[page];
  let children = props.children;
  let pureProps = omit(props, 'children');
  if (!path) {
    path = [d.key];
  }
  if (injectPath) {
    if (pureProps.path) {
      throw 'path should be reserved for pages.';
    }
    pureProps.path = path;
  }
  return <Page key={key} {...pureProps} {...additionalProps}>
    {
      map(children, function(c) {
        return renderRootPage(c, pages, injectPath, additionalProps, concat(path, c.key));
      })
    }
  </Page>
}

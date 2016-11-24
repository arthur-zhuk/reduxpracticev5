import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
  // always show app component
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} /> // if "/" show just index route.
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);
// this.props.params.id path="post/:id"

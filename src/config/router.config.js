import React from "react";
import Index from '../pages/index';
import Login from '../pages/login';
import Center from '../pages/center';
import Article from '../pages/article';
import Editor from '../pages/editor';

/**
 * TODO 如果使用TS，render函数return的正确写法是？
 */

const routers = [{
  path: '/login',
  exact: true,
  component: Login
}, {
  path: '/dashboard',
  component: Index,
  render: props => {
    console.log('index', props);
    return <Index {...props} />
  }
}, {
  path: '/me',
  render: props => {
    return <Center />;
  }
}, {
  path: '/article',
  render: props => {
    return <Article />
  }
}, {
  path: '/editor',
  render: props => {
    return <Editor {...props} />
  }
}]

export default routers;

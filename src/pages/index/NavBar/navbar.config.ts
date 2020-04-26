export type nav = {
  label: string,
  key: string,
  path: string
};

const navbar: nav[] = [{
  label: '探索',
  key: 'expolor',
  path: '/discover'
}, {
  label: '分类',
  key: 'category',
  path: '/category'
}, {
  label: '个人中心',
  key: 'personalcenter',
  path: '/me'
}];

export default navbar;

import { isUrl } from '../utils/utils';

const menuData = [{
  name: '首页',
  icon: 'dashboard',
  path: 'dashboard/analysis',
}, {
  name: '商品管理',
  icon: 'gift',
  path: 'form',
  children: [{
    name: '商品列表',
    path: 'basic-form',
  }],
}];

function formatter(data, parentPath = '', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);

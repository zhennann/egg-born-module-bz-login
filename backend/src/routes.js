module.exports = app => {
  const routes = [
    // backImage
    {
      method: 'post',
      path: 'backImage/setCurrent',
      controller: 'backImage',
      meta: { right: { type: 'atom', atomClass: 'bz-login:loginBackImage', action: 'setCurrent' } },
    },
    {
      method: 'get',
      path: 'backImage/current',
      action: 'getCurrent',
      controller: 'backImage',
    },
  ];
  return routes;
};

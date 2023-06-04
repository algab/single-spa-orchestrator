System.register(['single-spa'], () => {
  let singleSpa;
  return {
    setters: [(dependencySingleSpa) => singleSpa = dependencySingleSpa],
    execute() {
      singleSpa.registerApplication({
        name: '@test/mfe-page-one',
        app: () => System.import('@test/mfe-page-one'),
        activeWhen: (location) => location.pathname === '/' && (location.hash === '' || location.hash === '#/'),
      });
      singleSpa.registerApplication({
        name: '@test/mfe-page-two',
        app: () => System.import('@test/mfe-page-two'),
        activeWhen: (location) => location.pathname === '/two' || location.hash === '#/two' || location.hash === '#/two/',
      });
      singleSpa.registerApplication({
        name: '@test/mfe-header',
        app: () => System.import('@test/mfe-header'),
        activeWhen: () => true,
      })
      singleSpa.start();
    }
  }
});

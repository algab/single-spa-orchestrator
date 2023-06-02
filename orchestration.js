System.register(['single-spa'], () => {
  let singleSpa;
  return {
    setters: [(dependencySingleSpa) => singleSpa = dependencySingleSpa],
    execute() {
      singleSpa.registerApplication({
        name: '@test/mfe-page-one',
        app: () => System.import('@test/mfe-page-one'),
        activeWhen: (location) => location.pathname === '/',
      });
      singleSpa.registerApplication({
        name: '@test/mfe-page-two',
        app: () => System.import('@test/mfe-page-two'),
        activeWhen: (location) => location.pathname === '/two',
      });
      singleSpa.start();
    }
  }
});

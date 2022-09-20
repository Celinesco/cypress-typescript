/// <reference path="../cypress/support/index.ts" />;

import MiComponente from './MiComponente';


it('works', () => {
  // from your src/components/MyComponent.cy.ts
  cy.mount(<MiComponente />)
  // IntelliSense and TS compiler should
  // not complain about unknown method
})



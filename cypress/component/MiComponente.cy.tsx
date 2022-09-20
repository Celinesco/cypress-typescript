/// <reference path="../support/component.ts" />;
import MiComponente from '../../src/MiComponente';
import React from 'react';


const name = "Celi";
describe('MiComponente.cy.ts', () => {
  it('playground', () => {
    cy.mount(<MiComponente name={name} />)
  })
})

const divBienvenida = '[data-cy=bienvenida]'

it('Saludo de bienvenida', () => {
  cy.mount(<MiComponente name={name} />)
  cy.get(divBienvenida).should('have.text', `Hola ${name}`)
})
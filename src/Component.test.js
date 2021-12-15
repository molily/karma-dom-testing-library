import { getByText } from '@testing-library/dom';

import { Component } from './Component';

describe('Component', () => {
  it('renders', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const component = new Component(container);
    component.render();

    expect(getByText(container, 'Component works!')).toBeTruthy();
  });
});

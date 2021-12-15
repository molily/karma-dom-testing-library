import { PreactComponent } from './PreactComponent';
import { render } from '@testing-library/preact';
import { h } from 'preact';

describe('PreactComponent', () => {
  it('renders', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const { getByText } = render(<PreactComponent />, { container });

    expect(getByText('PreactComponent works!')).toBeTruthy();
  });
});

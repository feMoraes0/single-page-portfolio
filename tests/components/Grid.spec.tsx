import Grid from '../../src/components/Grid';
import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';

describe('Given the Grid component', () => {
  it('Then should find 6 article cards rendered as children components', () => {
    const { getAllByRole } = render(<Grid />);
    const articles = getAllByRole('article');
    expect(articles.length).toBe(6);
  });
});

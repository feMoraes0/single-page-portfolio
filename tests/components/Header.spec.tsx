import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '../../src/components/Header';

describe('Given the header component', () => {
  it('Then should find link button and validate its attributes', () => {
    const { getByText } = render(<Header />);
    const link = getByText(/free consultation/i);
    expect(link).toHaveProperty('target', '_blank');
    expect(link).toHaveProperty('rel', 'noopener noreferrer');
    expect(link).toHaveProperty('href', 'https://linkedin.com/');
  });
});

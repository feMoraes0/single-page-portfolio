import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../../src/components/Footer';

describe('Given the footer component', () => {
  it('Then should find link button and validate its attributes', () => {
    const { getByText } = render(<Footer />);
    const link = getByText(/free consultation/i);
    expect(link).toHaveProperty('target', '_blank');
    expect(link).toHaveProperty('rel', 'noopener noreferrer');
    expect(link).toHaveProperty('href', 'https://linkedin.com/');
  });
});

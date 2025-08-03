import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../../src/components/Contact';

describe('Given the contact component', () => {
  it('Then should find texts and button rendered', () => {
    const { getByRole } = render(<Contact />);
    const title = getByRole('heading', {
      level: 3,
      name: /book a call with me/i,
    });
    const paragraph = getByRole('paragraph');
    const button = getByRole('link', { name: /free consultation/i });
    expect(title).toBeDefined();
    expect(paragraph).toBeDefined();
    expect(button).toHaveProperty('href', 'http://linkedin.com/');
    expect(button).toHaveProperty('rel', 'noopener noreferrer');
  });
});

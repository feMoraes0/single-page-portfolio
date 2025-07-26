import GridCard from '../../src/components/GridCard';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

describe('Given the GridCard component', () => {
  it('When only required props are passed, then should validate content or properties', () => {
    const { getByRole } = render(
      <GridCard content="any_content" image="any_image" />,
    );
    const image = getByRole('img', { name: 'card detail' });
    const text = getByRole('paragraph');
    expect(image).toHaveProperty('src', 'http://localhost:3000/any_image');
    expect(text.textContent).toBe('any_content');
  });

  it('When all props are passed, then should validate content and properties', () => {
    const { getByRole } = render(
      <GridCard
        content="any_content"
        image="any_image"
        className="any_class_name"
      />,
    );
    const container = getByRole('article');
    const image = getByRole('img', { name: 'card detail' });
    const text = getByRole('paragraph');
    expect(container).toHaveClass(/any_class_name/g);
    expect(image).toHaveProperty('src', 'http://localhost:3000/any_image');
    expect(text.textContent).toBe('any_content');
  });
});

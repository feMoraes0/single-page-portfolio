import { render, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../../src/pages/App';

describe('Given the App page, when is rendered', () => {
  window.HTMLElement.prototype.scrollBy = function () {};

  it('And introduction section is validated, then should find texts with expected contents', () => {
    const { getByTestId } = render(<App />);
    const introductionSection = getByTestId('introduction-section');
    const heading1 = within(introductionSection).getByRole('heading', {
      level: 1,
    });
    const firstParagraph = within(introductionSection)
      .getAllByRole('paragraph')
      .at(0)!;
    expect(heading1.textContent).toBe('Design solutions made easy');
    expect(firstParagraph.textContent).toBe(
      "With over ten years of experience in various design disciplines, I'm your one-stop shop for your design needs.",
    );
  });

  it('And profile section is validated, then should find texts with expected contents', () => {
    const { getByTestId } = render(<App />);
    const profileSection = getByTestId('profile-section');
    const heading2 = within(profileSection).getByRole('heading', { level: 2 });
    const secondParagraph = within(profileSection).getByRole('paragraph');
    const image = within(profileSection).getByRole('img', { name: 'profile' });
    const btnLink = within(profileSection).getByRole('link', {
      name: /free consultation/i,
    });
    expect(heading2.textContent).toBe(
      "I'm Amy, and I'd love to work on your next project",
    );
    expect(secondParagraph.textContent).toBe(
      "I love working with others to create beautiful design solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera!",
    );
    expect(image).toBeDefined();
    expect(btnLink).toHaveProperty('target', '_blank');
    expect(btnLink).toHaveProperty('href', 'http://linkedin.com/');
    expect(btnLink).toHaveProperty('rel', 'noopener noreferrer');
  });
});

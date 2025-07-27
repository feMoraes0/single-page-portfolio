import Slider from '../../src/components/Slider';
import { render, screen } from '@testing-library/react';
import { type UserEvent, userEvent } from '@testing-library/user-event';
import { describe, it, expect, vi, beforeAll } from 'vitest';

describe('Given the slider component', () => {
  window.HTMLElement.prototype.scrollIntoView = function () {};

  describe('And the initial state is current', () => {
    beforeAll(() => {
      render(<Slider />);
    });

    it('Then no bottom should be disabled', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons.at(0)).toHaveProperty('disabled', false);
      expect(buttons.at(1)).toHaveProperty('disabled', false);
    });
  });

  describe('When the left button is clicked', () => {
    let user: UserEvent;

    beforeAll(() => {
      user = userEvent.setup();
      render(<Slider />);
    });

    it('Then should validate with one and when reach the end of the list behaviour', async () => {
      const scrollIIntoViewSpy = vi.spyOn(
        window.HTMLElement.prototype,
        'scrollIntoView',
      );
      const buttonLeft = screen.getAllByRole('button').at(0) as Element;
      // click when can go left
      await user.click(buttonLeft);
      expect(scrollIIntoViewSpy).toHaveBeenCalledTimes(1);
      expect(scrollIIntoViewSpy).toHaveBeenCalledWith({
        behavior: 'smooth',
        inline: 'center',
      });
      // click when the slider is all left
      vi.clearAllMocks();
      await user.click(buttonLeft);
      expect(scrollIIntoViewSpy).toHaveBeenCalledTimes(0);
    });
  });

  describe('When the slide is all right', () => {
    let user: UserEvent;

    beforeAll(() => {
      user = userEvent.setup();
      render(<Slider />);
    });

    it('Then should validate when right button is clicked', async () => {
      const scrollIIntoViewSpy = vi.spyOn(
        window.HTMLElement.prototype,
        'scrollIntoView',
      );
      const rightButton = screen.getAllByRole('button').at(1) as Element;
      // click when can go right
      await user.click(rightButton);
      expect(scrollIIntoViewSpy).toHaveBeenCalledTimes(1);
      expect(scrollIIntoViewSpy).toHaveBeenCalledWith({
        behavior: 'smooth',
        inline: 'center',
      });
      // click when the slider is all right
      vi.clearAllMocks();
      await user.click(rightButton);
      expect(scrollIIntoViewSpy).toHaveBeenCalledTimes(0);
    });
  });
});

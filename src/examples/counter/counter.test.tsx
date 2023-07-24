// @vitest-environment happy-dom
import { screen, fireEvent } from '@testing-library/react';
import { render } from './test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  screen.debug(document.body);
});

test('it should increment when the "Increment" button is pressed', async () => {
  const counter = render(<Counter />);

  const currentCount = screen.getByTestId('current-count');

  // expect(currentCount.textContent).toBe('0');
  expect(currentCount).toHaveTextContent('0');

  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  // fireEvent.click(incrementButton);
  await counter.user.click(incrementButton);

  // expect(currentCount.textContent).toBe('1');
  expect(currentCount).toHaveTextContent('1');
});

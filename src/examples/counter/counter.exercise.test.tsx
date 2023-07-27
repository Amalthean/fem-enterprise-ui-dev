// @vitest-environment happy-dom
import { screen, render } from 'test/utilities';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const counter = render(<Counter />);

  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });

  await counter.user.click(incrementButton);

  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  render(<Counter initialCount={5} />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('5');
});

test(
  'it should reset the count when the "Reset" button is pressed',
  async () => {
    const counter = render(<Counter initialCount={5} />);
    const currentCount = screen.getByTestId('current-count');
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    await counter.user.click(incrementButton);
    await counter.user.click(incrementButton);

    expect(currentCount).toHaveTextContent('7');

    await counter.user.click(resetButton);

    expect(currentCount).toHaveTextContent('0');

  },
);

import { render, screen } from '@testing-library/react';
import MobileApp from './MobileApp';

test('renders header component', () => {
  render(<MobileApp />);
  const linkElement = screen.getByText(/CompassMobileDollarTree/i);
  expect(linkElement).toBeInTheDocument();
});

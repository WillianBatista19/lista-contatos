import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ContactDetailPage from '../../app/contacts/[id]/page';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: {
          street: '123 Main St',
          suite: 'Apt 4B',
          city: 'Anytown',
          zipcode: '12345',
        },
        website: 'www.example.com',
      }),
  })
) as jest.Mock;

describe('ContactDetailPage', () => {
  it('should render contact details correctly', async () => {
    render(<ContactDetailPage params={{ id: '1' }} />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText(/Email:/)).toBeInTheDocument();
      expect(screen.getByText(/john.doe@example.com/)).toBeInTheDocument();
      expect(screen.getByText(/Phone:/)).toBeInTheDocument();
      expect(screen.getByText(/123-456-7890/)).toBeInTheDocument();
      expect(screen.getByText(/Address:/)).toBeInTheDocument();
      expect(screen.getByText(/123 Main St, Apt 4B, Anytown, 12345/)).toBeInTheDocument();
      expect(screen.getByText(/Website:/)).toBeInTheDocument();
      expect(screen.getByText(/www.example.com/)).toBeInTheDocument();
    });
  });
});
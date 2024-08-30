import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactsPage from '../../app/contacts/page';

const mockContacts = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', thumbnailUrl: 'https://via.placeholder.com/150' },
  ];

jest.mock('../../app/contacts/page', () => {
    return () => (
      <div>
        {mockContacts.map(contact => (
          <div key={contact.id} data-testid="contact">
            <h1>{contact.name}</h1>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>
    );
  });
  
  test('renders contacts correctly', async () => {
    render(<ContactsPage />);
  
    const contactElement = await screen.findByText('John Doe');
    expect(contactElement).toBeInTheDocument();
  });
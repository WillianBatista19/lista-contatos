import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactCard from '../../components/contactCard';
import '@testing-library/jest-dom';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} alt={props.alt || ''} />,
}));
describe('ContactCard', () => {
  const contact = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    thumbnailUrl: 'https://robohash.org/1?size=50x50',
  };
  it('should render contact card correctly', () => {
    render(
      <ContactCard
        id={contact.id}
        name={contact.name}
        email={contact.email}
        thumbnailUrl={contact.thumbnailUrl}
      />
    );
 
    expect(screen.getByText(contact.name)).toBeInTheDocument();
    expect(screen.getByText(contact.email)).toBeInTheDocument();
    const image = screen.getByAltText(contact.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', contact.thumbnailUrl);
  });
});

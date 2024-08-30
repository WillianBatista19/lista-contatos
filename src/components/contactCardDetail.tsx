import React from 'react';
import Image from 'next/image';

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: Address;
  website: string;
}

interface ContactCardProps {
  contact: Contact;
}

const ContactCardDetail: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center">
        <Image
          src={`https://robohash.org/${contact.id}?size=100x100`}
          alt={contact.name}
          width={100}
          height={100}
          className="rounded-full border-4 border-blue-500"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold text-gray-800">{contact.name}</h1>
          <p className="text-gray-600">Email: <span className="text-gray-800">{contact.email}</span></p>
          <p className="text-gray-600">Phone: <span className="text-gray-800">{contact.phone}</span></p>
          <p className="text-gray-600">Address: <span className="text-gray-800">{`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</span></p>
          <p className="text-gray-600">Website: <span className="text-blue-600 underline cursor-pointer">{contact.website}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactCardDetail;
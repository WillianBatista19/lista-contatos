"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  website: string;
}

const ContactDetailPage = ({ params }: { params: { id: string } }) => {
  const [contact, setContact] = useState<Contact | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch contact details:', error);
      }
    };

    fetchContact();
  }, [params.id]);

  if (!contact) {
    return <p>Loading...</p>;
  }

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
  <button
    onClick={() => router.back()}
    className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
  >
    Voltar
  </button>
</div>

  );
};

export default ContactDetailPage;

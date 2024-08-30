"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ContactCardDetail from '../../../components/contactCardDetail';

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
interface ContactDetailPageProps {
  params: { id: string };
}
const ContactDetailPage: React.FC<ContactDetailPageProps> = ({ params }) => {
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <ContactCardDetail contact={contact} />
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
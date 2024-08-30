"use client";
import React, { useEffect, useState } from 'react';
import PrivateRoute from '../../components/privateRoute';
import ContactCard from '../../components/contactCard';
import { useRouter } from 'next/navigation';

interface Contact {
  id: number;
  name: string;
  email: string;
  thumbnailUrl: string;
}
const fetchContacts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch contacts.');
  }
};
const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data.map((user: any) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          thumbnailUrl: `https://robohash.org/${user.id}?size=50x50`,
        })));
      } catch (error) {
        console.error('Failed to fetch contacts:', error);
        setError('Failed to fetch contacts.');
      } finally {
        setLoading(false);
      }
    };

    loadContacts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <PrivateRoute>
      <div className="p-4 flex-grow flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              thumbnailUrl={contact.thumbnailUrl}
            />
          ))}
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-3 rounded-lg mt-6 hover:bg-red-600 transition duration-200 self-center sm:self-start"
        >
          Logout
        </button>
      </div>
    </PrivateRoute>
  );
};

export default ContactsPage;

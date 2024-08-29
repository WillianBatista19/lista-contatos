"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PrivateRoute from '../../components/privateRoute';
import { useRouter } from 'next/navigation';

interface Contact {
  id: number;
  name: string;
  email: string;
  thumbnailUrl: string;
}

const ContactsPage = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
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

    fetchContacts();
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
            <Link key={contact.id} href={`/contacts/${contact.id}`}>
              <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl min-h-[120px] flex flex-col justify-center">
                <div className="flex items-center space-x-4">
                  <Image
                    src={contact.thumbnailUrl}
                    alt={contact.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-blue-500"
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                  </div>
                </div>
              </div>
            </Link>
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

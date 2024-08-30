import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ContactCardProps {
  id: number;
  name: string;
  email: string;
  thumbnailUrl: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ id, name, email, thumbnailUrl }) => {
  return (
    <Link href={`/contacts/${id}`}>
      <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:shadow-xl min-h-[120px] flex flex-col justify-center">
        <div className="flex items-center space-x-4">
          <Image
            src={thumbnailUrl}
            alt={name}
            width={60}
            height={60}
            className="rounded-full border-2 border-blue-500"
          />
          <div className="flex-1">
            <p className="text-lg font-semibold text-gray-800">{name}</p>
            <p className="text-sm text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ContactCard;

import React from 'react';
import '../app/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lista de Contatos</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-blue-700 p-4 text-center shadow-lg mt-auto">
          <p className="text-sm">© 2024 Lista Contatos</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

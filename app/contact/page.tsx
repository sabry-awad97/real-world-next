import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Contact Information
      </h1>
      <ul className="list-disc ml-6">
        <li className="mb-2">Email: myemail@example.com</li>
        <li className="mb-2">Twitter: @myusername</li>
        <li className="mb-2">Instagram: myusername</li>
      </ul>
    </div>
  );
};

export default ContactPage;

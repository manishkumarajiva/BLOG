import React, { useState } from 'react';

const Contactus = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-gray-700 p-8">
      <h2 className="title-font mb-1 text-lg font-medium text-white"> Contant Us</h2>
      <p className="mb-5 leading-relaxed text-white">
        If you had any issues or you liked our product, please share with us!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm leading-7 text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-sm leading-7 text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
        >
          Send
        </button>
      </form>
      <p className="mt-3 text-xs text-white">
        Feel free to connect with us on social media platforms.
      </p>
    </div>
  );
};

export default Contactus;

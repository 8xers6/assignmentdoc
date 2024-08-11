import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactForm = ({ toggleForm }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex-1 lg:w-1/2 flex flex-col items-center justify-center">
      <button
        onClick={toggleForm}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        <FaTimes size={24} />
      </button>
      <h2 className="text-2xl font-bold text-center mb-6">Submit A Message</h2>
      <form className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="agree"
            className="mr-2"
            required
          />
          <label htmlFor="agree" className="text-gray-700 text-xs">
            By providing Julie Hansen Partnership your contact information, you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
          </label>
        </div>
        <button
          type="submit"
          className="bg-black text-white p-2 rounded hover:bg-white hover:text-black transition-colors duration-300 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

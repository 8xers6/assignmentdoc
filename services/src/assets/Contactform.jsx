import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ContactForm = ({ toggleForm }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center max-w-lg mx-auto max-h-[80vh] overflow-y-auto relative">
      <button
        onClick={toggleForm}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        <FaTimes size={24} />
      </button>
      <h2 className="text-2xl font-bold text-center mb-4">Submit A Message</h2>
      <form className="w-full">
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-3 flex items-center text-xs">
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
          className="bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors duration-300 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

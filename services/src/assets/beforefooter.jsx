import React from 'react';

function Beforefooter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      <div className="p-8 bg-white rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xs font-bold text-gray-800 mb-4">Julie Hansen Partnership</h2>
        <p className="text-gray-600 text-center text-xs">
          An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
        </p>
      </div>
      <div className="p-8 bg-white rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xs font-bold text-gray-800 mb-4">ADDRESS</h2>
        <p className="text-gray-600 text-center text-xs">
          4733 Chabot Drive #100
        </p>
        <p className="text-gray-600 text-center text-xs">
          Pleasanton, CA 94588
        </p>
        <br />
        <p className="text-gray-600 text-center text-xs">
          Julie Hansen-Orvis | CA DRE# 00934447
        </p>
      </div>
      <div className="p-8 bg-white rounded-lg flex flex-col items-center justify-center">
        <h2 className="text-xs font-bold text-gray-800 mb-4">CONTACT INFORMATION</h2>
        <p className="text-gray-600 text-center text-xs">
          (925) 553-6707
        </p>
        <p className="text-gray-600 text-center text-xs">
          luxuryhomesinwc@icloud.com
        </p>
      </div>
      <div className="col-span-1 sm:col-span-2 lg:col-span-3 p-8 bg-white rounded-lg flex flex-col items-center">
      <hr className="w-52 h-px bg-black border-0 my-4" />
        <h2 className="text-xs font-bold text-gray-800 mb-4">Newsletter</h2>
        <p className="text-gray-600 text-center text-xs mb-4">
          Subscribe to our Newsletter for the latest news and updates. Stay tuned!
        </p>
        <div className="w-full max-w-md">
          <input
            required
            placeholder="Email Address"
            name="email"
            type="email"
            className="bg-transparent border-b border-gray-300 text-gray-800 text-sm w-full mb-4 transition duration-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-center w-full max-w-md mx-auto p-5 bg-white shadow-lg rounded-lg">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              className="mr-2"
            />
            <label htmlFor="agree" className="text-gray-700 text-xs">
              By clicking "Submit", you are confirming that you have read and agree to our terms and conditions. Please review them before proceeding.
            </label>
          </div>
          <button
            type="button"
            className="hover:text-black border-2 bg-transparent text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Beforefooter;

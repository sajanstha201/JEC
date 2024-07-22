import React from "react";

function ContactForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 bg-white p-8 rounded-lg shadow-md mx-auto">
        <h3 className="text-lg text-center mb-4 w-1/4 mx-auto">
          <div className="bg-blue-600 text-white py-2 px-4 rounded-md text-center">
            Contact Us
          </div>
        </h3>
        <h1 className="text-4xl font-bold text-center mb-6">
          SEND US <span className="text-red-500">AN EMAIL</span>
        </h1>
        <form className="text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="info@gmail.com"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Interested Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Message"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

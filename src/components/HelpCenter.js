import React, { useState } from 'react';

const HelpCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add API call or backend connection to handle the form data.
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">Help Center</h1>
      
      {/* FAQ Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Frequently Asked Questions</h2>
        <ul className="space-y-4 mt-4">
          <li className="p-4 bg-white rounded shadow">
            <strong>Q:</strong> How do I reset my password?<br />
            <strong>A:</strong> Go to your account settings and click "Reset Password."
          </li>
          <li className="p-4 bg-white rounded shadow">
            <strong>Q:</strong> What should I do if I encounter a bug?<br />
            <strong>A:</strong> Use the contact form below to report it to us.
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="mt-8 bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
        <div>
         
        </div>
      </div>
    </div>
    
  );
};

export default HelpCenter;


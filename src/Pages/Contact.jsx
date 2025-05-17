import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", subject: "", message: "" });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-4 py-10 flex items-center justify-center ">
        <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg w-full max-w-3xl border border-zinc-600 relative">
          {/* Optional glow effect */}
          <div className="absolute inset-0 rounded-lg blur-2xl opacity-20 bg-zinc-600 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Contact Us
            </h2>

            {submitted && (
              <div className="mb-4 text-green-400 font-medium text-center">
                Thank you! Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="flex-1">
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-1 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  className="w-full px-4 py-2 bg-zinc-900 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-zinc-600 hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

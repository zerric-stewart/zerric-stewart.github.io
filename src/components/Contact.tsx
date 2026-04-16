"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your preferred form handling (e.g. Formspree, EmailJS)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </p>

        {submitted ? (
          <div className="p-6 bg-violet-950 border border-violet-800 rounded-xl text-violet-300">
            Thanks for reaching out! I&apos;ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <div>
              <label className="text-sm text-gray-400 mb-1 block" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Your message..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-10 flex justify-center gap-6 text-sm text-gray-500">
          <a
            href="https://github.com/zerric-stewart"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:zerricstewart@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

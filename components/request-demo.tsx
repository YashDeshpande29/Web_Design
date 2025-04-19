"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendDemoRequest } from "@/lib/actions";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await sendDemoRequest(formData);
      setIsSubmitted(true);
    } catch (err) {
      setError(
        "There was an error submitting your request. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your demo request has been received. A member of our team will contact you shortly.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                message: "",
              });
              router.push("/");
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-[#003A63] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Request a Custom Demo</h1>
          <p className="text-2xl mb-4">
            Ready to get the most value from your tech investments?
          </p>
          <p className="mb-4 text-xl">
            Whether you want to unlock the value of your tech investments or make cloud your
            competitive advantage, <strong>Company Name</strong> helps you drive better
            business outcomes with the power of trusted, actionable insights.
          </p>
          <p className="text-xl">Connect with our experts to see a demo customized for your business needs.</p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl mx-auto">
          {error && (
            <div className="bg-red-100 text-red-800 px-4 py-3 rounded mb-6">
              <strong>Error:</strong> {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="sr-only">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded text-black"
              />
            </label>

            <label className="block">
              <span className="sr-only">Work Email</span>
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded text-black"
              />
            </label>

            <label className="block">
              <span className="sr-only">Company</span>
              <input
                type="text"
                name="company"
                placeholder="Company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded text-black"
              />
            </label>

            <label className="block">
              <span className="sr-only">Phone</span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                pattern="^\+?[0-9\s]{10,20}$"
                title="Enter a valid phone number (e.g., +91 1234567890 or 1234567890)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded text-black"
              />
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                rows={3}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded text-black"
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-xl text-white font-semibold py-3 px-6 rounded transition duration-300"
            >
              {isSubmitting ? "Submitting..." : "Request a Demo"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

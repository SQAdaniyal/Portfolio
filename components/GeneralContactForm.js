"use client";
import { useState } from "react";
import { Send, CheckCircle, XCircle } from "lucide-react";
import Card from "./Card";

const FORMSPREE_GENERAL_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT";

export default function GeneralContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch(FORMSPREE_GENERAL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else setSubmitStatus("error");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <Card className="shadow-2xl shadow-indigo-500/30 border-t-4 border-indigo-500">
      <h4 className="text-2xl font-bold text-center text-indigo-700 mb-6">General Inquiry</h4>
      <p className="text-center text-gray-600 mb-6">For general questions or connecting, use this simple message form.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={formData.name} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>

        {submitStatus === "success" && (
          <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" /> Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="text-center text-red-600 font-semibold flex items-center justify-center gap-2">
            <XCircle className="w-5 h-5" /> Error sending message. Please try again or email me directly.
          </p>
        )}

        <button type="submit" disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition">
          <Send className="w-5 h-5" /> {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </Card>
  );
}

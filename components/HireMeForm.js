"use client";
import { useState } from "react";
import { FileText, Send, CheckCircle, XCircle } from "lucide-react";
import Card from "./Card";

const FORMSPREE_HIRE_ENDPOINT = "https://formspree.io/f/YOUR_HIRE_FORMSPREE_ENDPOINT";

export default function HireMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    file: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files ? e.target.files[0] : null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('Project Details', formData.projectDetails);
    if (formData.file) data.append('Attachment', formData.file);

    try {
      const response = await fetch(FORMSPREE_HIRE_ENDPOINT, {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', projectDetails: '', file: null });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 7000);
    }
  };

  return (
    <Card className="shadow-2xl shadow-purple-500/30 border-t-4 border-purple-500">
      <h4 className="text-2xl font-bold text-center text-purple-700 mb-6 flex items-center justify-center gap-2">
        <FileText className="w-6 h-6" /> Project Inquiry
      </h4>
      <p className="text-center text-gray-600 mb-6 text-md">
        If you have a project requiring a detailed scope or NDA, please use this form to attach specifications.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="hire_name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" name="name" id="hire_name" value={formData.name} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="hire_email" className="block text-sm font-medium text-gray-700">Email for Reply</label>
          <input type="email" name="email" id="hire_email" value={formData.email} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm" />
        </div>

        <div>
          <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">Detailed Project Scope / Requirements</label>
          <textarea name="projectDetails" id="projectDetails" rows="4" value={formData.projectDetails} onChange={handleInputChange} required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"></textarea>
        </div>

        <div>
          <label htmlFor="file-attachment" className="block text-sm font-medium text-gray-700">Attach Specification File (PDF, Excel, Word, PPT)</label>
          <input type="file" name="file-attachment" id="file-attachment" onChange={handleFileChange}
            accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx"
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 transition" />
        </div>

        {submitStatus === 'success' && (
          <p className="text-center text-green-600 font-semibold flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5" /> Project details sent! I'll review and contact you.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-center text-red-600 font-semibold flex items-center justify-center gap-2">
            <XCircle className="w-5 h-5" /> Error sending project inquiry. Please check your Formspree settings.
          </p>
        )}

        <button type="submit" disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 disabled:opacity-50">
          <Send className="w-5 h-5" />
          {isSubmitting ? 'SENDING DETAILS...' : 'SEND PROJECT DETAILS'}
        </button>
      </form>
    </Card>
  );
}

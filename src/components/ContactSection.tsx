import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(RESUME_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSent(true);
    const mailtoUrl = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Joel,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-emerald-950/60">
      <div className="mb-8">
        <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
          Get in Touch
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Contact Joel Jose
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Open to graduate roles, software engineering internships, and collaborative opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-4">
          <div className="minimal-card p-5 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Direct Contact Details
            </h3>

            {/* Email */}
            <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Email</span>
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="text-xs font-mono text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Phone</span>
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="text-xs font-mono text-slate-200 hover:text-emerald-400 truncate block transition-colors"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3 rounded-lg bg-black/60 border border-slate-800 flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Location</span>
                <span className="text-xs font-mono text-slate-200">{RESUME_DATA.personal.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-black hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-black hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-300 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="lg:col-span-7">
          <div className="minimal-card p-6 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono">
              Send a Message
            </h3>

            {sent ? (
              <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-xs text-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                  <Check className="w-4 h-4" />
                  <span>Email client opened!</span>
                </div>
                <p>
                  Your message draft has been generated. You can also reach Joel directly at{' '}
                  <strong className="text-emerald-300">{RESUME_DATA.personal.email}</strong>.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-xs text-emerald-400 underline font-mono"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Satya Nadella"
                      className="w-full px-3 py-2 rounded-lg bg-black border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-3 py-2 rounded-lg bg-black border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Joel, I saw your portfolio and your work with Flutter, Python, and the Gemini API..."
                    className="w-full px-3 py-2 rounded-lg bg-black border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs font-mono flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Joel</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

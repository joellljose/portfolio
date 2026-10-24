import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESUME_DATA } from '../data/resumeData';
import { soundFx } from '../utils/sound';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(RESUME_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(RESUME_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playSuccess();
    setIsSubmitting(true);

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#10b981', '#a855f7'],
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Pre-fill mailto link
      const mailtoUrl = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(`Hi Joel,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>ESTABLISH SECURE CONNECTION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Together
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          Available for software engineering roles, internships, AI projects, and technical discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Developer Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="cyber-card rounded-2xl p-6 border border-cyan-500/20 space-y-5">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Contact Coordinates</span>
            </h3>

            {/* Email Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Direct Email</span>
                  <a
                    href={`mailto:${RESUME_DATA.personal.email}`}
                    className="text-xs font-mono text-slate-200 hover:text-cyan-300 truncate block transition-colors"
                  >
                    {RESUME_DATA.personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">Phone / WhatsApp</span>
                  <a
                    href={`tel:${RESUME_DATA.personal.phone}`}
                    className="text-xs font-mono text-slate-200 hover:text-emerald-300 truncate block transition-colors"
                  >
                    {RESUME_DATA.personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 shrink-0"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-800/80 text-purple-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Location</span>
                <span className="text-xs font-mono text-slate-200">{RESUME_DATA.personal.location}</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 text-xs font-mono transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Hiring Status Highlight Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Target Engineering Roles</span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {RESUME_DATA.personal.openToRoles.map((role) => (
                <span
                  key={role}
                  className="px-2 py-0.5 rounded-md bg-slate-900/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-200"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Terminal Form */}
        <div className="lg:col-span-7">
          <div className="cyber-card rounded-2xl overflow-hidden border border-cyan-500/25 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <h3 className="text-base font-bold text-white font-mono">Send Direct Message</h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">STATUS: READY_FOR_INPUT</span>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Your mail client has been opened with your message. If it didn't open automatically, feel free to email Joel directly at{' '}
                  <strong className="text-cyan-300">{RESUME_DATA.personal.email}</strong>.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-700"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Satya Nadella / Hiring Manager"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1.5">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. hiring@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Engineer Opportunity / Project Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1.5">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Joel, I saw your portfolio and your work with Flutter and Gemini API. We'd love to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-xs font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-slate-950" />
                      <span>Transmit Message to Joel</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

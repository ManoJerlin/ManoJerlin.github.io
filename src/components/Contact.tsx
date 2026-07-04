import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';
import { fadeIn } from '../animations/variants';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    setStatus('loading');

    // Retrieve environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mock flow if EmailJS is not configured
      console.warn("EmailJS credentials not found in env. Running mock simulation.");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1200);
      return;
    }

    try {
      if (formRef.current) {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        if (result.text === 'OK') {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Response was not OK');
        }
      }
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or reach out directly.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            variants={fadeIn('up', 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3"
          >
            Get In Touch
          </motion.div>
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="text-3xl md:text-4xl font-bold font-display text-white"
          >
            Let's Build Something Great
          </motion.h2>
          <motion.div 
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="w-16 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan mt-4"
          />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          {/* Left: Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-display text-white mb-4">
              Contact Information
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              Have an exciting project idea, placement opportunity, or just want to chat about AI-powered software development? Feel free to reach out using the form, or via the handles below!
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-accent-blue/35 transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:text-accent-blue transition-colors">
                  <Mail size={18} className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500">Email Me</h4>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-accent-purple/35 transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:text-accent-purple transition-colors">
                  <Phone size={18} className="text-accent-purple" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500">Call Me</h4>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{personalInfo.phone}</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-accent-cyan/35 transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:text-accent-cyan transition-colors">
                  <FaGithub size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500">Explore GitHub</h4>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">github.com/ManoJerlin</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-slate-900/40 p-4 rounded-xl border border-slate-800 hover:border-accent-purple/35 transition-all duration-300 group"
              >
                <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg group-hover:text-accent-purple transition-colors">
                  <FaLinkedin size={18} className="text-accent-purple animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-500">Connect LinkedIn</h4>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">linkedin.com/in/mano-jerlin</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            className="lg:col-span-7 glass-panel border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top border beam accent */}
            <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan" />

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-slate-400">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-950 border border-slate-850 focus:border-accent-blue rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-slate-400">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-slate-950 border border-slate-850 focus:border-accent-purple rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-slate-400">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Collaborating on AI Project"
                  required
                  className="w-full bg-slate-950 border border-slate-850 focus:border-accent-cyan rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-slate-400">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hey Mano, I saw your portfolio and..."
                  rows={5}
                  required
                  className="w-full bg-slate-950 border border-slate-850 focus:border-accent-blue rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none resize-none transition-all"
                />
              </div>

              {/* Status Alert Banners */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    className="flex items-center space-x-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle size={18} className="flex-shrink-0" />
                    <span>Thank you! Your message was sent successfully. I'll get back to you shortly.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    className="flex items-center space-x-3 bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <AlertTriangle size={18} className="flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full px-6 py-4 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] text-white font-medium text-sm rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none"
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

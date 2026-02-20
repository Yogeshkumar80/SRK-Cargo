'use client'

import { X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QuoteModal({ isOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-surface-dark border border-border-dark p-8 md:p-12 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-primary w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">
                  Request Sent
                </h3>
                <p className="text-slate-400">
                  Our logistics team will review your requirements and contact you within 2 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">
                  Request Quote
                </h2>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold mb-8">
                  Industrial Logistics & Fleet Deployment
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-background-dark border border-border-dark px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                    />
                    <input
                      required
                      type="text"
                      placeholder="Company"
                      className="w-full bg-background-dark border border-border-dark px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-background-dark border border-border-dark px-4 py-3 text-white focus:border-primary outline-none transition-colors"
                  />

                  <select className="w-full bg-background-dark border border-border-dark px-4 py-3 text-white focus:border-primary outline-none transition-colors appearance-none">
                    <option>Fleet Rental</option>
                    <option>Excavation & Earthmoving</option>
                    <option>Heavy Logistics</option>
                    <option>Road Construction</option>
                    <option>Demolition</option>
                  </select>

                  <textarea
                    rows={4}
                    placeholder="Describe your project needs..."
                    className="w-full bg-background-dark border border-border-dark px-4 py-3 text-white focus:border-primary outline-none transition-colors resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-background-dark py-4 font-black uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-3"
                  >
                    Submit Request <Send className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
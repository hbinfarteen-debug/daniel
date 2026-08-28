'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const services = [
  'Air Conditioning',
  'Cold & Freezer Rooms',
  'Diagnostics & Repairs',
  'Commercial Refrigeration',
  'Vehicle Air Conditioning',
  'Domestic Refrigeration',
  'Maintenance',
  'Other',
];

export default function QuoteForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try WhatsApp or phone instead.');
    }
  };

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-arctic-soft-blue/50 p-5 flex items-center justify-between rounded-t-xl z-10">
              <div>
                <h2 className="text-lg font-semibold text-arctic-deep-navy">Request a Quote</h2>
                <p className="text-xs text-muted-foreground mt-0.5">We&apos;ll get back to you shortly.</p>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-arctic-deep-navy transition-colors cursor-pointer" aria-label="Close">
                <X className="w-5 h-5" />
              </button>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-lg font-semibold text-arctic-deep-navy mt-4">Thank you.</h3>
                <p className="text-sm text-muted-foreground mt-2">Your enquiry has been received. Daniel&apos;s Arctic Touch will get back to you shortly.</p>
                <Button onClick={onClose} variant="outline" className="mt-6">Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="q-name">Full Name *</Label>
                  <Input id="q-name" placeholder="Your full name" value={form.name} onChange={(e) => update('name', e.target.value)} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-phone">Phone Number *</Label>
                  <Input id="q-phone" type="tel" placeholder="+263 ..." value={form.phone} onChange={(e) => update('phone', e.target.value)} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-email">Email</Label>
                  <Input id="q-email" type="email" placeholder="you@email.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-service">Service Required *</Label>
                  <Select value={form.service} onValueChange={(v) => update('service', v)}>
                    <SelectTrigger id="q-service" className="w-full"><SelectValue placeholder="Select a service" /></SelectTrigger>
                    <SelectContent className="z-[80]">
                      {services.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="q-message">Describe Your Problem</Label>
                  <Textarea id="q-message" placeholder="Tell us what you need help with..." rows={3} value={form.message} onChange={(e) => update('message', e.target.value)} />
                </div>

                {status === 'error' && <p className="text-sm text-red-500">{errorMsg}</p>}

                <Button type="submit" disabled={status === 'loading'} className="w-full bg-arctic-ice-blue hover:bg-arctic-electric-blue text-white gap-2 h-11">
                  {status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  Request a Quote
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

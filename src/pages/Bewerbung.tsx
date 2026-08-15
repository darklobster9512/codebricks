import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Loader2 } from 'lucide-react';
import PageHero from '@/components/limex/PageHero';
import SEO from '@/components/limex/SEO';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { stellen } from '@/data/karriereStellen';
import { toast } from '@/hooks/use-toast';

const BRANDING_ID = '371a2e6c-8a38-4c27-b4a4-34cf38694b1b';
const API_URL = 'https://laozvnaupdecerpvwzmh.supabase.co/functions/v1/submit-application';
const ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhb3Z2bmF1cGRlY2VycHZ3em1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzEwNjUsImV4cCI6MjA5NDM0NzA2NX0.uXLnpeKILEDBoC8yCcX1ZL-hdlhFPUl-bVYcoxHKu2Y';

const Bewerbung = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('stelle') || '';

  const [form, setForm] = useState({
    vorname: '', nachname: '', email: '', telefon: '',
    stelle: preselected, anstellungsart: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const anstellungsarten = [
    { value: 'teilzeit', label: 'Teilzeit' },
    { value: 'minijob', label: 'Minijob' },
  ];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.vorname.trim() || !form.nachname.trim() || !form.email.trim() || !form.telefon.trim() || !form.anstellungsart) {
      toast({ title: 'Bitte alle Pflichtfelder ausfüllen.', variant: 'destructive' });
      return;
    }
    window.fbq?.('track', 'Lead');
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append('first_name', form.vorname.trim());
      fd.append('last_name', form.nachname.trim());
      fd.append('email', form.email.trim());
      fd.append('phone', form.telefon.trim());
      fd.append('employment_type', form.anstellungsart);
      fd.append('branding_id', BRANDING_ID);
      fd.append('street', '');
      fd.append('zip', '');
      fd.append('city', '');
      fd.append('resume', '');
      const res = await fetch(API_URL, { method: 'POST', headers: { Authorization: `Bearer ${ANON_KEY}` }, body: fd });
      const data = await res.json();
      if (data.success) {
        toast({ title: 'Bewerbung gesendet.', description: 'Wir melden uns innerhalb von 48 Stunden.' });
        setForm({ vorname: '', nachname: '', email: '', telefon: '', stelle: '', anstellungsart: '' });
      } else {
        throw new Error(data.error || 'Unbekannter Fehler');
      }
    } catch (err) {
      toast({ title: 'Übermittlung fehlgeschlagen', description: err instanceof Error ? err.message : 'Bitte später erneut versuchen oder direkt per E-Mail.', variant: 'destructive' });

    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Bewerbung | Codebricks"
        description="Bewirb dich in wenigen Schritten bei Codebricks in Berlin."
        path="/karriere/bewerbung"
      />
      <PageHero
        eyebrow="Karriere · Bewerbung"
        title="Bewerben Sie sich in unter drei Minuten."
        intro="Kurze Angaben genügen. Der Lebenslauf kann später nachgereicht werden — wir melden uns zuerst mit einem Telefonat."
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Karriere', href: '/karriere' }, { label: 'Bewerbung' }]}
      />

      <section className="bg-[#FAFBFC]">
        <div className="mx-auto max-w-3xl px-6 pb-16 lg:pb-24">
          <form onSubmit={handleSubmit} className="tile mx-auto max-w-3xl space-y-8 p-8 lg:p-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="vorname">Vorname *</Label>
                <Input id="vorname" name="vorname" value={form.vorname} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachname">Nachname *</Label>
                <Input id="nachname" name="nachname" value={form.nachname} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefon">Telefon *</Label>
                <Input id="telefon" name="telefon" value={form.telefon} onChange={handleChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Stelle</Label>
              <Select value={form.stelle} onValueChange={(v) => setForm({ ...form, stelle: v })}>
                <SelectTrigger><SelectValue placeholder="Stelle auswählen (optional)" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Initiativbewerbung">Initiativbewerbung</SelectItem>
                  {stellen.map((s) => <SelectItem key={s.slug} value={s.titel}>{s.titel}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Anstellungsart *</Label>
              <Select value={form.anstellungsart} onValueChange={(v) => setForm({ ...form, anstellungsart: v })}>
                <SelectTrigger><SelectValue placeholder="Bitte wählen" /></SelectTrigger>
                <SelectContent>
                  {anstellungsarten.map((a) => <SelectItem key={a.value} value={a.value}>{a.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <p className="text-xs text-[#64748B]">
              Mit dem Absenden erklären Sie sich mit der Verarbeitung Ihrer Daten gemäß unserer{' '}
              <a href="/datenschutz" className="text-[#3B82F6] hover:underline">Datenschutzerklärung</a> einverstanden.
            </p>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#3B82F6] px-6 text-sm font-medium text-white hover:bg-[#1D4ED8] disabled:opacity-50"
            >
              {submitting ? <><Loader2 size={16} className="animate-spin" /> Wird gesendet…</> : <>Bewerbung senden <Send size={16} /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Bewerbung;

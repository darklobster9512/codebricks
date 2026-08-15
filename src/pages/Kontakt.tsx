import { useState } from 'react';
import { Send, Loader2, MapPin, Mail, Phone, Clock } from 'lucide-react';
import PageHero from '@/components/limex/PageHero';
import SEO from '@/components/limex/SEO';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Kontakt = () => {
  const [form, setForm] = useState({ name: '', firma: '', email: '', telefon: '', anliegen: '', nachricht: '', dsgvo: false });
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.nachricht || !form.dsgvo) {
      toast({ title: 'Bitte alle Pflichtfelder ausfüllen.', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    // Simulierter Versand — echter Endpoint kann später angebunden werden.
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    toast({ title: 'Nachricht gesendet.', description: 'Wir melden uns innerhalb eines Werktags.' });
    setForm({ name: '', firma: '', email: '', telefon: '', anliegen: '', nachricht: '', dsgvo: false });
  };

  return (
    <>
      <SEO
        title="Kontakt – Codebricks GmbH Berlin"
        description="Direkter Draht nach Berlin Mitte: Demo vereinbaren, Angebot anfragen oder Fragen zum Framework klären. Telefon, Mail und Formular."
        brand={false}
        path="/kontakt"
      />
      <PageHero
        eyebrow="Kontakt · Berlin Mitte"
        title="Reden wir konkret."
        intro="Erzählen Sie uns kurz von Ihrer Situation. Wir antworten mit einem konkreten nächsten Schritt — nicht mit einer Broschüre."
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Kontakt' }]}
      />

      <section className="bg-[#FAFBFC]">
        <div className="mx-auto max-w-6xl px-5 pb-12 sm:px-6 sm:pb-16 lg:pb-24">
          <div className="grid gap-3 sm:gap-4 lg:grid-cols-12">
            <form onSubmit={submit} className="tile lg:col-span-7 space-y-5 p-6 sm:space-y-6 sm:p-8 lg:p-10">
              <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firma">Firma</Label>
                  <Input id="firma" value={form.firma} onChange={(e) => setForm({ ...form, firma: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefon">Telefon</Label>
                  <Input id="telefon" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="anliegen">Anliegen</Label>
                <Input id="anliegen" placeholder="z. B. SAP-Integration, Cloud-Assessment, MVP" value={form.anliegen} onChange={(e) => setForm({ ...form, anliegen: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nachricht">Nachricht *</Label>
                <Textarea id="nachricht" rows={6} className="text-base md:text-sm" value={form.nachricht} onChange={(e) => setForm({ ...form, nachricht: e.target.value })} required />
              </div>
              <label className="flex gap-3 text-xs leading-relaxed text-[#64748B]">
                <input type="checkbox" checked={form.dsgvo} onChange={(e) => setForm({ ...form, dsgvo: e.target.checked })} className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Ich habe die <a href="/datenschutz" className="text-[#3B82F6] hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.</span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0F1B3D] px-6 text-sm font-medium text-white hover:bg-[#3B82F6] disabled:opacity-50 sm:h-11 sm:w-auto"
              >
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Wird gesendet…</> : <>Nachricht senden <Send size={16} /></>}
              </button>
            </form>

            <aside className="lg:col-span-5">
              <div className="tile lg:sticky lg:top-28 p-6 space-y-6 sm:p-8">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Direktkontakt</p>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-[#64748B] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0F1B3D]">Codebricks GmbH</p>
                      <p className="text-[#64748B]">Leipziger Platz 15<br />10117 Berlin</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={18} className="text-[#64748B] mt-0.5 shrink-0" />
                    <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#0F1B3D] hover:text-[#3B82F6]">kontakt@codebricks-gmbh.de</a>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={18} className="text-[#64748B] mt-0.5 shrink-0" />
                    <a href="tel:+4930692096720" className="text-[#0F1B3D] hover:text-[#3B82F6]">030 692096720</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-[#64748B] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#0F1B3D]">Sprechzeiten</p>
                      <p className="text-[#64748B]">Mo–Fr · 09:00–18:00 Uhr</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#E8ECF1]">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">Antwortzeit</p>
                  <p className="mt-2 text-sm text-[#0F1B3D]">Innerhalb eines Werktags, meist deutlich schneller.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;

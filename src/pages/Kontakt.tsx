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
        title="Kontakt | Codebricks"
        description="Direkter Draht zum Codebricks-Team in Berlin: Erstgespräch anfragen, Angebot einholen, Zusammenarbeit starten."
        path="/kontakt"
      />
      <PageHero
        eyebrow="Kontakt · Berlin Lichtenrade"
        title="Reden wir konkret."
        intro="Erzählen Sie uns kurz von Ihrer Situation. Wir antworten mit einem konkreten nächsten Schritt — nicht mit einer Broschüre."
        breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Kontakt' }]}
      />

      <section className="border-t border-[#E6ECF5] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-12">
            <form onSubmit={submit} className="lg:col-span-7 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
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
                <Textarea id="nachricht" rows={6} value={form.nachricht} onChange={(e) => setForm({ ...form, nachricht: e.target.value })} required />
              </div>
              <label className="flex gap-3 text-xs text-[#5B6B85]">
                <input type="checkbox" checked={form.dsgvo} onChange={(e) => setForm({ ...form, dsgvo: e.target.checked })} className="mt-0.5" />
                <span>Ich habe die <a href="/datenschutz" className="text-[#2563EB] hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zur Beantwortung meiner Anfrage zu.</span>
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-[#2563EB] px-6 text-sm font-medium text-white hover:bg-[#1E3A8A] disabled:opacity-50"
              >
                {submitting ? <><Loader2 size={16} className="animate-spin" /> Wird gesendet…</> : <>Nachricht senden <Send size={16} /></>}
              </button>
            </form>

            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 border border-[#E6ECF5] bg-[#F7F9FC] p-8 space-y-6">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Direktkontakt</p>
                <div className="space-y-5 text-sm">
                  <div className="flex gap-3">
                    <MapPin size={18} className="text-[#5B6B85] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-[#0B1220]">Codebricks GmbH</p>
                      <p className="text-[#5B6B85]">Leipziger Platz 15<br />10117 Berlin</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Mail size={18} className="text-[#5B6B85] mt-0.5 shrink-0" />
                    <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#0B1220] hover:text-[#2563EB]">kontakt@codebricks-gmbh.de</a>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={18} className="text-[#5B6B85] mt-0.5 shrink-0" />
                    <a href="tel:+4930123456789" className="text-[#0B1220] hover:text-[#2563EB]">030 123456789</a>
                  </div>
                  <div className="flex gap-3">
                    <Clock size={18} className="text-[#5B6B85] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#0B1220]">Sprechzeiten</p>
                      <p className="text-[#5B6B85]">Mo–Fr · 09:00–18:00 Uhr</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#E6ECF5]">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">Antwortzeit</p>
                  <p className="mt-2 text-sm text-[#0B1220]">Innerhalb eines Werktags, meist deutlich schneller.</p>
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

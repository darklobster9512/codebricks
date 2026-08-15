export interface Stelle {
  slug: string;
  titel: string;
  standort: string;
  modell: string;
  bereich: string;
  kurzbeschreibung: string;
  beschreibung: string;
  aufgaben: string[];
  voraussetzungen: string[];
  benefits: string[];
  arbeitszeit?: string;
  gehalt?: string;
  status?: 'Sofort verfügbar' | 'Bald verfügbar';
}

export const stellen: Stelle[] = [
  {
    slug: 'online-tester',
    titel: 'Online-Tester:in für digitale Anwendungen (m/w/d)',
    standort: 'Remote (Deutschland)',
    modell: 'Minijob · Teilzeit · flexibel',
    bereich: 'Quality',
    arbeitszeit: '5–25 Std./Woche, freie Einteilung',
    gehalt: '29 € / Stunde',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Sie prüfen Webseiten und Apps aus Nutzersicht und liefern strukturiertes Feedback — ortsunabhängig, in Ihrem Tempo, ohne Vorkenntnisse.',
    beschreibung:
      'Für ausgewählte Kundenprojekte suchen wir Menschen, die digitale Anwendungen mit wachem Blick durchgehen und ihre Beobachtungen sauber dokumentieren. Sie bekommen von uns klare Testanleitungen und arbeiten die Aufgaben selbstständig ab — wann und wo Sie mögen. Ideal als Nebentätigkeit neben Studium, Familie oder Hauptjob.',
    aufgaben: [
      'Durchlaufen definierter Testszenarien in Webseiten und mobilen Apps',
      'Bewertung von Nutzerführung, Verständlichkeit und Bedienbarkeit',
      'Nachvollziehbare Dokumentation von Fehlern, Auffälligkeiten und Eindrücken',
      'Formulieren konkreter Verbesserungsvorschläge für die Produktteams',
    ],
    voraussetzungen: [
      'Sorgfältige, verlässliche Arbeitsweise und ein Auge fürs Detail',
      'Sicherer Umgang mit Smartphone, Tablet oder PC',
      'Stabile Internetverbindung und ein eigenes Testgerät',
      'Deutschkenntnisse mind. B2 — keine formale Ausbildung nötig',
    ],
    benefits: [
      'Vollständig remote, Zeiten frei wählbar (auch abends und am Wochenende)',
      'Kurze, verständliche Einarbeitung mit Beispiel-Tests',
      'Feste Stundenvergütung — transparent und zuverlässig',
      'Unkomplizierte Zusammenarbeit, direkter Draht zum Projektteam',
    ],
  },
  {
    slug: 'senior-fullstack-engineer',
    titel: 'Senior Fullstack Engineer (m/w/d)',
    standort: 'Berlin / Remote',
    modell: 'Festanstellung · Vollzeit',
    bereich: 'Engineering',
    arbeitszeit: '40 Std./Woche · flexibel',
    gehalt: '75.000 – 95.000 € / Jahr',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Sie übernehmen technische Verantwortung für Kundenprojekte — von Architektur bis zum Deployment — und coachen jüngere Kolleginnen und Kollegen.',
    beschreibung:
      'Als Senior Fullstack Engineer arbeiten Sie in kleinen, verantwortlichen Teams direkt an unseren Kundenprojekten. Sie treffen technische Entscheidungen, schreiben Code, den Sie in fünf Jahren noch mit Freude lesen, und stehen Kunden auch dann Rede und Antwort, wenn es unbequem wird.',
    aufgaben: [
      'Entwurf und Umsetzung von Web-Anwendungen mit React/TypeScript und Node.js oder .NET',
      'Technische Verantwortung für Kundenprojekte über den gesamten Lebenszyklus',
      'Code-Reviews, Mentoring und aktive Mitgestaltung unserer Engineering-Standards',
      'Kommunikation mit Fachabteilungen und Product Ownern beim Kunden',
    ],
    voraussetzungen: [
      '5+ Jahre Erfahrung in kommerzieller Softwareentwicklung',
      'Tiefe Kenntnisse in TypeScript, mindestens einem Server-Stack (Node oder .NET) und relationalen Datenbanken',
      'Erfahrung mit Cloud (AWS oder Azure) und CI/CD',
      'Sehr gute Deutschkenntnisse (mind. C1)',
    ],
    benefits: [
      '4-Tage-Woche möglich (bei entsprechendem Gehaltsmodell)',
      'Modernes Büro in Berlin Lichtenrade + freies Remote-Modell',
      'Individuelles Weiterbildungsbudget (3.000 €/Jahr)',
      'Betriebliche Altersvorsorge und Deutschlandticket',
      'Kein Bereitschaftsdienst außerhalb der geplanten Rufzeiten',
    ],
  },
  {
    slug: 'it-consultant',
    titel: 'IT-Consultant (m/w/d)',
    standort: 'Berlin / hybrid',
    modell: 'Festanstellung · Vollzeit',
    bereich: 'Beratung',
    arbeitszeit: '40 Std./Woche',
    gehalt: '70.000 – 90.000 € / Jahr',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Sie begleiten Kunden aus dem Mittelstand von der Strategiefrage bis zum Zielbild — nüchtern, gründlich und ohne PowerPoint-Zauber.',
    beschreibung:
      'Als IT-Consultant sind Sie das Gesicht von LIMEX beim Kunden. Sie führen Discovery-Phasen, moderieren Workshops mit Geschäftsführung und IT, und übersetzen zwischen Fachlichkeit und Technik.',
    aufgaben: [
      'Discovery-Interviews und Analyse bestehender IT-Landschaften',
      'Erarbeitung von Zielbildern, Roadmaps und Business Cases',
      'Moderation von Workshops mit C-Level und Fachbereichen',
      'Enge Zusammenarbeit mit unseren Engineering- und Integrationsteams',
    ],
    voraussetzungen: [
      'Mind. 4 Jahre Beratungserfahrung im IT-Umfeld',
      'Fundiertes technisches Verständnis (auch wenn Sie keinen Code committen)',
      'Souveränes Auftreten in Vorstands- und CIO-Runden',
      'Verhandlungssichere Deutschkenntnisse',
    ],
    benefits: [
      'Kein Wochenreisen-Zwang — 80 % unserer Kunden sitzen in Berlin und Brandenburg',
      'Direkter Weg in Themen- oder Teamverantwortung',
      'Weiterbildungsbudget für Zertifizierungen (TOGAF, ITIL, BSI)',
      'Betriebliche Altersvorsorge',
      'Firmenwagen oder Mobilitätsbudget',
    ],
  },
  {
    slug: 'integration-engineer-sap',
    titel: 'Integration Engineer SAP (m/w/d)',
    standort: 'Berlin / Remote',
    modell: 'Festanstellung · Voll- oder Teilzeit',
    bereich: 'Integration',
    arbeitszeit: '32–40 Std./Woche',
    gehalt: '72.000 – 92.000 € / Jahr',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Sie bauen belastbare Integrationen zwischen SAP S/4HANA und modernen Systemlandschaften — mit Event-Mesh, APIs und einer Handvoll IDocs, wenn es sein muss.',
    beschreibung:
      'Sie sind zu Hause zwischen ABAP-Debugger und OpenAPI-Spec. Bei uns bauen Sie Integrationen, die auch in fünf Jahren noch verstanden werden — von jenen, die Sie nicht mehr kennen.',
    aufgaben: [
      'Design und Umsetzung von SAP-Integrationen (S/4HANA, ECC, C4C)',
      'Nutzung moderner Muster: Event Mesh, OData, REST, Kafka',
      'Fehleranalyse und Performance-Tuning im Produktivbetrieb',
      'Wissenstransfer an Kundenteams und interne Kolleg:innen',
    ],
    voraussetzungen: [
      'Mind. 3 Jahre Erfahrung mit SAP-Integrationstechnologien',
      'Kenntnisse in SAP CPI, PI/PO oder vergleichbaren iPaaS-Lösungen',
      'Grundlegendes ABAP-Verständnis',
      'Deutschkenntnisse mind. B2',
    ],
    benefits: [
      'Vollständig remote möglich',
      '30 Urlaubstage plus Sonderurlaub für Zertifizierungen',
      'Zugang zu SAP-Learning-Hub',
      'Betriebliche Altersvorsorge',
    ],
  },
  {
    slug: 'werkstudent-software-engineering',
    titel: 'Werkstudent Software Engineering (m/w/d)',
    standort: 'Berlin / hybrid',
    modell: 'Werkstudent · 15–20 Std./Woche',
    bereich: 'Engineering',
    arbeitszeit: '15–20 Std./Woche',
    gehalt: '18 – 22 € / Stunde',
    status: 'Sofort verfügbar',
    kurzbeschreibung:
      'Sie studieren Informatik oder Ähnliches und wollen echte Kundenprojekte sehen — kein Kaffee holen, kein Ticket-Abarbeiten in Isolation.',
    beschreibung:
      'Bei LIMEX werden Sie einem festen Team zugeordnet und arbeiten mit an realen Kundenprojekten. Sie schreiben produktiven Code, gehen in Reviews und bekommen so viel Verantwortung, wie Sie tragen wollen.',
    aufgaben: [
      'Mitentwicklung an Kundenprojekten in TypeScript/React oder Python',
      'Schreiben von Tests und Dokumentation',
      'Teilnahme an Code-Reviews und Sprint-Planungen',
      'Kleinere eigenständige Features nach Einarbeitung',
    ],
    voraussetzungen: [
      'Immatrikuliert in Informatik, Wirtschaftsinformatik oder ähnlich',
      'Erste Erfahrung mit einer typisierten Sprache (TypeScript, Java, C#)',
      'Neugier, Fragen zu stellen, wenn Sie etwas nicht verstehen',
      'Deutschkenntnisse mind. B2',
    ],
    benefits: [
      'Klarer Übernahmepfad nach dem Studium',
      'Fester Mentor vom ersten Tag an',
      'Flexibel um Klausurphasen planbar',
      'Modernes Büro im Süden Berlins',
    ],
  },
];

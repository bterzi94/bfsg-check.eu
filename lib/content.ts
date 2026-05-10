export const site = {
  url: 'https://bfsg-check.eu',
  name: 'BFSG-Check',
  title: 'BFSG Check: Website kostenlos prüfen lassen | Bericht in 24h',
  description:
    'Trag deine Website ein und erhalte innerhalb von 24 Stunden einen Experten-Bericht zur BFSG-Konformität — inklusive Checkliste, was noch zu tun ist. Kostenlos.',
  // PLACEHOLDER: Calendly or contact link
  calendlyUrl: 'https://calendly.com/PLACEHOLDER',
};

export const hero = {
  h1: 'BFSG Check: Ist deine Website rechtskonform?',
  subheadline:
    'Trag deine URL ein und erhalte in 24 Stunden einen Experten-Bericht — inklusive Checkliste, was noch zu tun ist.',
  cta: 'Kostenlosen Bericht anfordern',
  secondaryCta: 'Brauchst du keinen Check, sondern direkte Umsetzung?',
  secondaryCtaLabel: 'BFSG-Service buchen',
  trust: ['Kostenlos', 'Keine Anmeldung', 'Bericht von Experten', 'DSGVO-konform'],
};

export const steps = [
  {
    number: '01',
    title: 'Domain eintragen',
    text: 'Du gibst deine Website-Adresse und E-Mail an. Mehr nicht.',
  },
  {
    number: '02',
    title: 'Experten prüfen',
    text: 'Unser Team prüft deine Seite manuell auf BFSG-Konformität nach WCAG 2.1 AA.',
  },
  {
    number: '03',
    title: 'Bericht in 24h',
    text: 'Du erhältst einen detaillierten Bericht plus Checkliste der offenen Punkte.',
  },
];

export const urgency = {
  h2: 'Seit dem 28. Juni 2025 gilt das BFSG — und die Risiken sind real',
  cards: [
    {
      icon: '⚠',
      title: 'Bußgelder bis 100.000 €',
      text: '§ 36 BFSG sieht empfindliche Bußgelder für Verstöße vor.',
    },
    {
      icon: '⚖',
      title: 'Abmahn-Risiko durch Wettbewerber',
      text: 'Nicht-konformer Webauftritt kann als Wettbewerbsverstoß nach UWG gewertet werden.',
    },
    {
      icon: '🔍',
      title: 'Behörden prüfen aktiv',
      text: 'Marktüberwachungsbehörden haben den Auftrag, die Einhaltung zu kontrollieren.',
    },
  ],
  body: 'Viele Websites in Deutschland sind noch nicht BFSG-konform. Seit dem 28. Juni 2025 ist die Übergangszeit abgelaufen. Behörden werden aktiver. Wer jetzt handelt, vermeidet Risiken und schützt sein Unternehmen.',
};

export const affected = {
  h2: 'Wer ist vom BFSG betroffen?',
  betroffen: [
    'Online-Shops (B2C)',
    'Banking & Finanzdienstleistungen',
    'E-Books & digitale Medien',
    'Personenbeförderung',
    'Telekommunikationsdienste',
  ],
  nichtBetroffen: [
    'Reine B2B-Angebote',
    'Kleinstunternehmen (<10 MA, <2 Mio. €)',
    'Reine Info-Websites ohne Transaktion',
    'Öffentliche Stellen (BITV 2.0 statt BFSG)',
  ],
  hinweis: 'Unsicher? Genau dafür gibt es den Check.',
};

export const whatWeCheck = {
  h2: 'Das prüfen wir in deinem BFSG-Bericht',
  pillars: [
    {
      title: 'Wahrnehmbar',
      items: ['Kontrastverhältnisse', 'Alt-Texte für Bilder', 'Untertitel für Videos'],
    },
    {
      title: 'Bedienbar',
      items: ['Tastaturnavigation', 'Sichtbare Fokus-Indikatoren', 'Keine Zeitlimits ohne Ausnahme'],
    },
    {
      title: 'Verständlich',
      items: ['Klare Sprache', 'Verständliche Lesbarkeit', 'Hilfreiche Fehlermeldungen'],
    },
    {
      title: 'Robust',
      items: ['Screenreader-Kompatibilität', 'Korrekte ARIA-Labels', 'Valides HTML'],
    },
  ],
  hinweis: 'Geprüft nach WCAG 2.1 Level AA — dem Standard, den das BFSG vorschreibt.',
};

export const deliverable = {
  h2: 'Dein Bericht — konkret und umsetzbar',
  items: [
    'Konformitäts-Status nach WCAG 2.1 AA',
    'Konkrete Liste der gefundenen Probleme',
    'Priorisierung: kritisch / mittel / nice-to-have',
    'Checkliste mit Handlungsempfehlungen',
    'Hinweis zur rechtlichen Einordnung deines Falls',
  ],
};

export const about = {
  h2: 'Wer prüft deine Website?',
  // PLACEHOLDER: Replace with real name and photo
  name: '[Name]',
  text: 'Ich bin [Name], seit 12 Jahren Webdesigner. Mein Team und ich prüfen jede Seite manuell — keine reinen Tool-Reports.',
  trust: [
    'Manuelle Experten-Prüfung statt automatisierter Scan',
    '12 Jahre Erfahrung im Webdesign',
    'DSGVO-konform, keine Datenweitergabe',
  ],
};

export const serviceCta = {
  h2: 'Du weißt schon, dass deine Seite nicht konform ist?',
  text: 'Wenn dir klar ist, dass du Handlungsbedarf hast und du direkt eine Lösung suchst — ich übernehme die komplette BFSG-konforme Überarbeitung deiner Website. Festpreis, klare Timeline.',
  cta: 'BFSG-Umsetzung anfragen',
};

export const knowledgeIntro = {
  eyebrow: 'Mehr Hintergrund zum BFSG',
  heading: 'Du willst tiefer einsteigen, bevor du den Check machst?',
  text: 'Hier findest du die wichtigsten Hintergründe verständlich erklärt.',
};

export const bfsgExplained = {
  h2: 'Das Barrierefreiheitsstärkungsgesetz auf einen Blick',
  paragraphs: [
    'Das BFSG ist die nationale Umsetzung des European Accessibility Act (EAA). Es schreibt vor, dass digitale Produkte und Dienstleistungen für alle Menschen nutzbar sein müssen — auch für Menschen mit Behinderungen.',
    'Der Stichtag war der 28. Juni 2025. Seitdem gilt das BFSG ohne pauschale Übergangsfristen. Unternehmen, die digitale Produkte oder Dienstleistungen an Verbraucher anbieten, müssen die Anforderungen erfüllen.',
    'Betroffen sind vor allem Unternehmen im B2C-Bereich: Online-Shops, Banken, Versicherungen, digitale Medien, Telekommunikation und Personenbeförderung. Kleinstunternehmen mit weniger als zehn Mitarbeitern und unter zwei Millionen Euro Jahresumsatz sind ausgenommen.',
    'Das Ziel des BFSG ist digitale Teilhabe. Rund 13 Millionen Menschen in Deutschland leben mit einer Behinderung. Dazu kommen ältere Menschen, die von barrierefrei gestalteten Websites profitieren. Barrierefreiheit ist kein Nice-to-have — sie ist Pflicht.',
  ],
};

export const bfsgVsBitv = {
  h2: 'BFSG vs. BITV 2.0 — Was ist der Unterschied?',
  rows: [
    ['Wer ist betroffen?', 'Private Wirtschaft (B2C)', 'Öffentliche Stellen'],
    ['Seit wann?', '28.06.2025', 'Bereits in Kraft'],
    ['Gebärdensprache?', 'Nicht verpflichtend', 'Verpflichtend'],
    ['Leichte Sprache?', 'Nicht verpflichtend', 'Verpflichtend'],
    ['Standard', 'WCAG 2.1 AA', 'WCAG 2.1 AA'],
  ],
  explanation:
    'Beide Regelwerke haben WCAG 2.1 AA als technische Grundlage. Der entscheidende Unterschied liegt im Anwendungsbereich: Das BFSG gilt für private Unternehmen im B2C-Bereich, die BITV 2.0 für öffentliche Stellen wie Behörden und staatliche Einrichtungen. Beide Regelwerke verlangen eine Barrierefreiheitserklärung auf der Website.',
};

export const notCovered = {
  h2: 'Was das BFSG nicht regelt — und was trotzdem wichtig sein kann',
  topics: [
    {
      h3: 'Gebärdensprache (DGS)',
      text: 'Im BFSG ist Gebärdensprache freiwillig. In der BITV 2.0 für öffentliche Stellen ist sie Pflicht. Für Unternehmen, die eine breite Zielgruppe ansprechen, kann DGS-Content trotzdem sinnvoll sein — besonders im Bereich Beratung und Kundenservice.',
    },
    {
      h3: 'Leichte Sprache',
      text: 'Leichte Sprache ist im BFSG nicht verpflichtend. Trotzdem verbessert sie die Nutzbarkeit erheblich — für Menschen mit Lernschwierigkeiten, ältere Nutzer und Menschen, die Deutsch als Zweitsprache sprechen. Als SEO-Signal funktioniert verständliche Sprache außerdem besser.',
    },
    {
      h3: 'KI-Tools für Barrierefreiheit',
      text: 'Tools wie automatische Alt-Text-Generatoren oder KI-basierte Kontrast-Checker helfen. Sie ersetzen aber keine manuelle Prüfung. KI erkennt semantische Fehler, falsche Heading-Hierarchien oder irreführende ARIA-Labels oft nicht zuverlässig.',
    },
    {
      h3: 'Fördermittel und staatliche Unterstützung',
      text: 'Für die Umsetzung von Barrierefreiheit gibt es in einigen Bundesländern Förderprogramme. Das Bundesministerium für Arbeit und Soziales informiert über aktuelle Möglichkeiten. Auch die KfW hat Förderprogramme für digitale Infrastruktur.',
    },
  ],
};

export const faqs = [
  {
    q: 'Ist der Check wirklich kostenlos?',
    a: 'Ja. Du trägst deine Domain und E-Mail ein. Innerhalb von 24 Stunden erhältst du einen vollständigen Experten-Bericht — ohne Kosten, ohne versteckte Gebühren.',
  },
  {
    q: 'Wie schnell bekomme ich den Bericht?',
    a: 'Du erhältst den Bericht innerhalb von 24 Stunden nach deiner Anfrage. Bei hohem Volumen kann es in Ausnahmefällen bis zu 48 Stunden dauern. Du bekommst in jedem Fall eine Bestätigungs-E-Mail.',
  },
  {
    q: 'Was kostet die anschließende Umsetzung?',
    a: 'Die Umsetzungskosten hängen vom Umfang der gefundenen Probleme und dem CMS deiner Website ab. Wir erstellen ein transparentes Angebot auf Basis des Berichts. Kein Fixpreis im Voraus — aber immer ein klares Angebot vor Projektstart.',
  },
  {
    q: 'Was, wenn meine Website mehrere Domains hat?',
    a: 'Jede Domain wird separat geprüft. Du kannst für jede deiner Domains einen eigenen Check anfordern. Der erste Check ist kostenlos — für Mehrfach-Prüfungen sprechen wir gern über ein passendes Paket.',
  },
  {
    q: 'Ist die Prüfung rechtsverbindlich?',
    a: 'Nein. Der Bericht ist eine fachkundige Einschätzung, keine Rechtsberatung. Er gibt dir eine klare Orientierung, was du verbessern musst. Für rechtlich bindende Aussagen wende dich an einen auf IT-Recht spezialisierten Anwalt.',
  },
  {
    q: 'Was, wenn ich Kleinstunternehmer bin?',
    a: 'Kleinstunternehmen mit weniger als zehn Mitarbeitern und unter zwei Millionen Euro Jahresumsatz sind vom BFSG ausgenommen. Trotzdem empfehlen wir eine Prüfung — Barrierefreiheit verbessert die Nutzbarkeit für alle.',
  },
  {
    q: 'Welche Daten speichert ihr von mir?',
    a: 'Wir speichern ausschließlich die Domain und die E-Mail-Adresse, die du angibst. Diese Daten werden nur genutzt, um dir den Bericht zu schicken. Es erfolgt keine Weitergabe an Dritte. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.',
  },
  {
    q: 'Wie unterscheidet sich euer Check von Tools wie WAVE oder Lighthouse?',
    a: 'Automatisierte Tools wie WAVE oder Lighthouse erkennen nur einen Teil der Barrierefreiheitsprobleme — Studien zeigen: maximal 30–40 % aller WCAG-Fehler werden von Tools erkannt. Unser Team prüft manuell: Tastaturnavigation, Screenreader-Verhalten, semantische Logik und logische Fokus-Reihenfolge.',
  },
  {
    q: 'Gilt das BFSG auch für bestehende Websites?',
    a: 'Ja. Das BFSG unterscheidet nicht zwischen neuen und bestehenden Websites. Wenn deine Seite in den Anwendungsbereich fällt, müssen die Anforderungen erfüllt sein — unabhängig davon, wann die Seite erstellt wurde.',
  },
  {
    q: 'Wo platziere ich die Barrierefreiheitserklärung auf der Website?',
    a: 'Die Barrierefreiheitserklärung muss gut auffindbar sein. Der Footer ist die gängige Stelle. Sie muss in barrierefreier Form vorliegen und regelmäßig aktualisiert werden. Wir liefern in unserem Bericht eine Empfehlung, was in deine Erklärung gehört.',
  },
  {
    q: 'Wer überprüft die Einhaltung des BFSG?',
    a: 'Die Marktüberwachungsbehörden der Bundesländer sind zuständig. Sie können auf Beschwerden reagieren oder von sich aus prüfen. Zusätzlich können Mitbewerber und Verbraucherverbände Verstöße nach UWG abmahnen.',
  },
  {
    q: 'Brauche ich einen externen Bevollmächtigten für Barrierefreiheit?',
    a: 'Das BFSG selbst schreibt keinen "Barrierefreiheits-Beauftragten" für private Unternehmen vor. Für öffentliche Stellen gilt das über die BITV 2.0. Unternehmen, die aktiv Barrierefreiheit managen wollen, profitieren aber von klaren internen Zuständigkeiten.',
  },
];

export const finalCta = {
  h2: 'Bereit, Klarheit zu bekommen?',
  text: '24 Stunden später weißt du genau, wo du stehst.',
  trust: ['Kostenlos', 'Keine Anmeldung', 'DSGVO-konform'],
};

export const seoFooter = {
  h2: 'Weitere Informationen zum Barrierefreiheitsstärkungsgesetz',
  blocks: [
    {
      h3: 'Rechtlicher Rahmen und Zuständigkeiten',
      text: 'Das BFSG basiert auf § 36 BFSG und der BFSGV (Barrierefreiheitsstärkungsgesetz-Verordnung). Es setzt den European Accessibility Act (EAA) in deutsches Recht um. Verstöße können über das UWG abgemahnt werden, da Barrierefreiheitspflichten als Marktverhaltensregeln gelten. Verbraucher im Sinne des § 13 BGB sind die geschützte Gruppe. Unternehmen müssen eine Konformitätserklärung bereitstellen. Marktüberwachungsbehörden der Länder sind für die Durchsetzung zuständig. Übergangsbestimmungen gelten für laufende Verträge bis 2030.',
    },
    {
      h3: 'Technische Standards: EN 301 549 und WCAG',
      text: 'Die technische Grundlage des BFSG ist die EN 301 549, der europäische Standard für barrierefreie IKT. Sie referenziert WCAG 2.1 Level AA als verbindlichen Maßstab. WCAG 2.2 bringt neue Erfolgskriterien, ist aber noch nicht im BFSG verankert. Die Konformitätsstufen A, AA und AAA definieren den Erfüllungsgrad. Level AA ist das gesetzlich geforderte Minimum. ARIA-Spezifikationen (Accessible Rich Internet Applications) ergänzen HTML-Semantik und sind Teil einer konformen Umsetzung.',
    },
    {
      h3: 'Welche Branchen besonders betroffen sind',
      text: 'Das BFSG gilt für elektronischen Geschäftsverkehr — also alle Online-Shops, die an Verbraucher verkaufen. Bankdienstleistungen und Versicherungen müssen ihre digitalen Kanäle anpassen. Für Personenbeförderung (z. B. Online-Ticketsysteme) und Telekommunikationsdienste gelten eigene Abschnitte im Gesetz. E-Books und digitale Medien sind ebenfalls betroffen. Die Bundesfachstelle für Barrierefreiheit berät Unternehmen zu branchenspezifischen Anforderungen.',
    },
    {
      h3: 'Wer steht hinter den Standards: WAI, Bundesfachstelle und mehr',
      text: 'Die Web Accessibility Initiative (WAI) des W3C entwickelt die WCAG-Standards. In Deutschland koordiniert die Bundesfachstelle für Barrierefreiheit, angesiedelt beim Bundesministerium des Innern (BMI), die Umsetzung. Aktion Mensch engagiert sich seit Jahren für digitale Inklusion und bietet eigene Prüftools an. Assistive Technologien wie Screenreader, Braillezeilen und Sprachsteuerung sind die Endgeräte, für die barrierefreie Websites zugänglich sein müssen. Digitale Teilhabe und Chancengleichheit sind die gesellschaftlichen Ziele hinter dem technischen Regelwerk.',
    },
  ],
};

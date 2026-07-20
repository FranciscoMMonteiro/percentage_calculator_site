export default {
  home: {
    title: 'Prozentrechner',
    lead:
      'Berechnen Sie jeden Prozentwert in einem Schritt. Füllen Sie zwei beliebige Felder aus, das dritte wird sofort berechnet — ohne Anmeldung, ohne Werbung im Rechner und offline nutzbar, sobald die Seite geladen ist.',
    sections: [
      {
        id: 'prozent-berechnen',
        heading: 'Prozent berechnen',
        blocks: [
          'Ein Prozentsatz ist nichts anderes als ein Bruch mit 100 im Nenner. „20 %" bedeutet 20 von 100, also 0,20 als Dezimalzahl. Alle Berechnungen auf dieser Seite gehen auf diesen einen Gedanken zurück.',
          { h: '1. Wie viel sind X % von Y?' },
          { formula: 'Ergebnis = Grundwert × (Prozentsatz ÷ 100)' },
          'Der Alltagsfall: Rabatt, Trinkgeld, Provision. Für 20 % von 150 rechnen Sie 150 × 0,20 = 30.',
          { h: '2. Wie viel Prozent sind X von Y?' },
          { formula: 'Prozentsatz = (Teilwert ÷ Grundwert) × 100' },
          'Bei 45 von 180 richtigen Antworten: 45 ÷ 180 = 0,25, also 25 %. Die Reihenfolge zählt — der gemessene Wert steht oben, der Gesamtwert unten.',
          { h: '3. Einen Wert um einen Prozentsatz erhöhen oder verringern' },
          { formula: 'Ergebnis = Grundwert × (1 + Prozentsatz ÷ 100)' },
          '15 % auf 120 ergibt 120 × 1,15 = 138. 15 % abziehen ergibt 120 × 0,85 = 102. Beides hebt sich nicht auf: erst +15 %, dann −15 % führt zu 117 und nicht zurück zu 120.',
          { h: '4. Prozentuale Veränderung zwischen zwei Werten' },
          { formula: 'Veränderung = ((neu − alt) ÷ alt) × 100' },
          'Von 80 auf 100 ist ein Zuwachs von 25 %. Von 100 zurück auf 80 ist ein Rückgang von 20 %, nicht von 25 %, weil sich der Ausgangswert geändert hat.'
        ]
      },
      {
        id: 'haeufige-fehler',
        heading: 'Häufige Fehler',
        blocks: [
          'Prozentpunkte sind keine Prozent: von 4 % auf 5 % ist ein Prozentpunkt, aber eine Steigerung um 25 %.',
          'Aufeinanderfolgende Rabatte werden multipliziert, nicht addiert: 20 % und danach 10 % ergeben 0,8 × 0,9 = 0,72, also 28 % Gesamtrabatt.',
          'Ein Verlust von 50 % erfordert einen Gewinn von 100 %, um den Ausgangswert wieder zu erreichen, da der Gewinn auf dem bereits verringerten Wert berechnet wird.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wie berechnet man den Prozentsatz einer Zahl?',
        a: 'Prozentsatz durch 100 teilen und mit der Zahl multiplizieren. 20 % von 150 sind 150 × 0,2 = 30.'
      },
      {
        q: 'Wie schlägt man einen Prozentsatz auf einen Preis auf?',
        a: 'Mit 1 plus dem Prozentsatz als Dezimalzahl multiplizieren. 19 % aufschlagen heißt mit 1,19 multiplizieren; zum Herausrechnen durch 1,19 teilen.'
      },
      {
        q: 'Kann ich das Komma als Dezimaltrennzeichen verwenden?',
        a: 'Ja. Die Auswahl oben auf der Seite wechselt zwischen Punkt und Komma und wird auf Ihrem Gerät gespeichert.'
      },
      {
        q: 'Ist der Rechner kostenlos?',
        a: 'Ja, kostenlos, ohne Konto und vollständig im Browser ausgeführt.'
      }
    ]
  }
};

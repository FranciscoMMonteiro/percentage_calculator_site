import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Prozentrechner',
    lead:
      'Berechnen Sie jeden Prozentwert in einem Schritt und sehen Sie den Rechenweg dahinter. Füllen Sie zwei beliebige Felder aus, und das dritte wird sofort berechnet — ohne Anmeldung, ohne Werbung im Rechner selbst, und nach dem Laden der Seite auch offline.',
    sections: [
      {
        id: 'prozent-berechnen',
        heading: 'Wie man Prozent berechnet',
        blocks: [
          'Ein Prozentsatz ist nichts anderes als ein Bruch mit 100 im Nenner. „20 %" bedeutet 20 von je 100, also 0,20 als Dezimalzahl. Alle Rechnungen auf dieser Seite folgen aus dieser einen Idee, und deshalb lassen sich vier scheinbar verschiedene Fragen auf denselben kleinen Satz von Formeln zurückführen.',
          { h: '1. Wie viel sind X % von Y?' },
          { formula: 'Ergebnis = Grundwert × (Prozentsatz ÷ 100)' },
          'Das ist der Alltagsfall: ein Rabatt, ein Trinkgeld, eine Provision. Für 20 % von 150 wandeln Sie 20 % in 0,20 um und multiplizieren: 150 × 0,20 = 30. Ein nützlicher Trick: Prozentsätze sind umkehrbar — 20 % von 150 und 150 % von 20 ergeben beide 30, Sie können die Zahlen also tauschen, wenn eine davon im Kopf bequemer ist.',
          { h: '2. Wie viel Prozent sind X von Y?' },
          { formula: 'Prozentsatz = (Anteil ÷ Ganzes) × 100' },
          'Das brauchen Sie, wenn Sie beide Zahlen haben und ihr Verhältnis wissen wollen. Bei 45 richtigen von 180 Fragen: 45 ÷ 180 = 0,25, also 25 %. Die Reihenfolge zählt — die gemessene Zahl steht oben, das Ganze unten.',
          { h: '3. Eine Zahl um einen Prozentsatz erhöhen oder verringern' },
          { formula: 'Ergebnis = Grundwert × (1 + Prozentsatz ÷ 100)' },
          '15 % auf 120 ergeben 120 × 1,15 = 138. Abziehen ergibt 120 × 0,85 = 102. Beides hebt sich nicht auf: 15 % dazu und dann 15 % weg lässt Sie bei 117, nicht bei 120, weil der zweite Prozentsatz auf eine größere Zahl wirkt.',
          { h: '4. Prozentuale Veränderung zwischen zwei Zahlen' },
          { formula: 'Veränderung = ((neu − alt) ÷ alt) × 100' },
          'Von 80 auf 100 sind ((100 − 80) ÷ 80) × 100 = 25 % Wachstum. Von 100 zurück auf 80 ist ein Rückgang von 20 % und nicht von 25 % — der Ausgangswert hat sich geändert, dieselbe absolute Differenz ist also ein anderer Anteil davon. Diese Asymmetrie führt ständig in die Irre und lohnt es, verinnerlicht zu werden.'
        ]
      },
      {
        id: 'referenztabelle',
        heading: 'Prozent, Bruch und Dezimalzahl',
        blocks: [
          'Die folgenden Werte kommen oft genug vor, dass es den Griff zum Rechner erspart, sie zu erkennen.',
          {
            table: {
              head: ['Prozent', 'Bruch', 'Dezimal', 'Schneller Weg'],
              rows: [
                ['1 %', '1/100', '0,01', 'Komma zwei Stellen nach links'],
                ['5 %', '1/20', '0,05', '10 % nehmen und halbieren'],
                ['10 %', '1/10', '0,10', 'Komma eine Stelle nach links'],
                ['12,5 %', '1/8', '0,125', 'Die Hälfte von 25 %'],
                ['20 %', '1/5', '0,20', 'Das Doppelte von 10 %'],
                ['25 %', '1/4', '0,25', 'Halbieren, dann noch einmal'],
                ['33,3 %', '1/3', '0,333…', 'Durch 3 teilen'],
                ['50 %', '1/2', '0,50', 'Halbieren'],
                ['75 %', '3/4', '0,75', 'Ein Viertel abziehen'],
                ['100 %', '1/1', '1,00', 'Die Zahl selbst'],
                ['150 %', '3/2', '1,50', 'Die Zahl plus ihre Hälfte']
              ]
            }
          },
          'Die Tabelle in der anderen Richtung zu lesen ist ebenso nützlich: Heißt es, ein Preis sei „um ein Drittel" gestiegen, ist das eine Erhöhung um 33,3 %, und der Faktor, den Sie brauchen, ist 1,333.'
        ]
      },
      {
        id: 'wo-prozente-vorkommen',
        heading: 'Wo Prozentwerte vorkommen',
        blocks: [
          { h: 'Einkauf und Rabatt' },
          'Ein Schild mit „30 % Rabatt" bedeutet, dass Sie 70 % des ursprünglichen Preises zahlen. Gestaffelte Rabatte multiplizieren sich, statt sich zu addieren: 20 % und danach noch 10 % ergeben 0,8 × 0,9 = 0,72, also insgesamt 28 % Rabatt und nicht 30 %.',
          { h: 'Trinkgeld und Bedienungszuschlag' },
          'Trinkgeld ist ein reines „X % von Y" auf den Betrag vor Steuern. Der schnellste Weg im Kopf: 10 % durch Komma-Verschieben finden und dann skalieren — 15 % sind 10 % plus die Hälfte davon.',
          { h: 'Mehrwertsteuer' },
          'Steuer wird üblicherweise auf einen Nettopreis aufgeschlagen, ein Satz von 21 % bedeutet also eine Multiplikation mit 1,21. In die andere Richtung — die Steuer aus einem Bruttopreis herauszurechnen — muss man durch 1,21 teilen und nicht 21 % abziehen.',
          { h: 'Noten und Prüfungen' },
          'Eine Punktzahl aus einer beliebigen Gesamtzahl ist der Fall „X sind wie viel Prozent von Y". 34 von 40 sind 85 %.',
          { h: 'Gehalt und Erhöhung' },
          'Eine Gehaltserhöhung ist eine prozentuale Veränderung des aktuellen Gehalts, entscheidend ist aber die Erhöhung nach Abzug der Inflation. 3 % in einem Jahr mit 4 % Inflation lassen Sie etwas schlechter dastehen als zuvor.',
          { h: 'Zinsen und Wachstum' },
          'Zinsen wirken zusammengesetzt: Jede Periode wendet ihren Prozentsatz auf das vorige Ergebnis an. 5 % jährlich über drei Jahre ergeben einen Faktor von 1,05³ = 1,157, also 15,7 % Gesamtwachstum — deutlich mehr als die 15 %, die eine Addition nahelegt.'
        ]
      },
      {
        id: 'haeufige-fehler',
        heading: 'Drei Fehler, die sich vermeiden lassen',
        blocks: [
          { h: 'Prozentpunkt und Prozent sind nicht dasselbe' },
          'Steigt ein Zinssatz von 4 % auf 5 %, ist das ein Anstieg um einen Prozentpunkt, aber um 25 % relativ. Berichterstattung vermischt beides ständig, und der Unterschied ist groß genug, um Entscheidungen zu verändern.',
          { h: 'Prozentuale Veränderungen heben sich nicht symmetrisch auf' },
          'Ein Wert, der um 50 % fällt, muss um 100 % steigen, um wieder am Ausgangspunkt zu sein. Allgemein erfordert das Aufholen eines Rückgangs von p % einen Gewinn von p ÷ (100 − p) × 100 Prozent.',
          { h: 'Prozentwerte zu mitteln ignoriert die Bezugsgröße' },
          'Eine Bestehensquote von 90 % in einer Klasse mit 10 Personen und von 50 % in einer mit 100 ergeben im Mittel nicht 70 %. Gewichten Sie jeden Prozentwert mit seiner Gruppengröße, oder rechnen Sie mit den absoluten Zahlen.'
        ]
      },
      {
        id: 'der-rest-der-website',
        heading: 'Der Rest der Website',
        blocks: [
          'Der Rechner oben deckt die vier allgemeinen Fälle ab. Die folgenden Seiten nehmen jeweils eine konkrete Situation und gehen tiefer hinein, jede mit eigenen gerechneten Beispielen und Referenztabellen. Sie liegen derzeit auf Englisch vor; die Links in der Fußzeile führen direkt dorthin.',
          {
            table: {
              head: ['Seite', 'Zu verwenden, wenn'],
              rows: [
                ['Rabattrechner', 'Ein Preis reduziert wird oder Sie vom Aktionspreis zum Originalpreis zurückrechnen'],
                ['Trinkgeldrechner', 'Sie eine Rechnung teilen und den örtlichen Brauch prüfen wollen'],
                ['Mehrwertsteuer', 'Steuer auf einen Preis aufgeschlagen oder herausgerechnet werden muss'],
                ['Gewinnmarge', 'Sie einen Preis kalkulieren und die Marge brauchen, nicht den Aufschlag'],
                ['Gehaltserhöhung', 'Ein Angebot in Prozent umgerechnet oder mit der Inflation verglichen werden soll'],
                ['Prozentpunkte', 'Zwei Prozentwerte verglichen werden und jedes Maß seinen Namen braucht'],
                ['Prozentformeln', 'Sie alle Formeln und ihre Umkehrungen auf einer Seite wollen'],
                ['Kopfrechnen', 'Sie den Rechner für die häufigen Fälle nicht mehr brauchen wollen'],
                ['Häufige Fehler', 'Ein Prozentergebnis falsch aussieht und Sie wissen wollen, warum']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Wie berechne ich einen Prozentsatz von einer Zahl?',
        a: 'Teilen Sie den Prozentsatz durch 100 und multiplizieren Sie mit der Zahl. Für 20 % von 150: 150 × 0,2 = 30.'
      },
      {
        q: 'Wie finde ich heraus, wie viel Prozent eine Zahl von einer anderen ist?',
        a: 'Teilen Sie den Anteil durch das Ganze und multiplizieren Sie mit 100. 45 von 180 sind 45 ÷ 180 = 0,25, also 25 %.'
      },
      {
        q: 'Wie schlage ich einen Prozentsatz auf einen Preis auf?',
        a: 'Multiplizieren Sie mit 1 plus dem Prozentsatz als Dezimalzahl. 21 % aufschlagen heißt mit 1,21 multiplizieren; zum Herausrechnen teilen Sie durch 1,21, statt 21 % abzuziehen.'
      },
      {
        q: 'Was ist der Unterschied zwischen prozentualer Veränderung und Prozentpunkten?',
        a: 'Prozentpunkte messen den reinen Abstand zwischen zwei Prozentwerten. Die prozentuale Veränderung misst diesen Abstand bezogen auf den Ausgangswert. Von 4 % auf 5 % ist ein Prozentpunkt und eine Veränderung von 25 %.'
      },
      {
        q: 'Warum braucht ein Verlust von 50 % einen Gewinn von 100 %?',
        a: 'Weil der Gewinn auf den bereits verringerten Wert gerechnet wird. 100 minus 50 % ergibt 50, und von 50 zurück auf 100 ist eine Verdopplung.'
      },
      {
        q: 'Kann der Rechner mit Komma als Dezimaltrennzeichen umgehen?',
        a: 'Ja. Die Auswahl im Kopfbereich wechselt zwischen Punkt und Komma, und die Einstellung wird auf Ihrem Gerät gespeichert.'
      },
      {
        q: 'Addieren sich zwei gestaffelte Rabatte?',
        a: 'Nein, sie multiplizieren sich. 20 % und dann 10 % lassen 0,8 × 0,9 = 0,72 des ursprünglichen Preises übrig, also 28 % Gesamtrabatt.'
      },
      {
        q: 'Zeigt der Rechner, wie das Ergebnis zustande kommt?',
        a: 'Ja. Sobald zwei Felder gefüllt sind, listet das Ergebnisfeld die Rechnung Schritt für Schritt mit Ihren eigenen Zahlen auf, damit Sie jede Zeile prüfen können, statt der Summe zu vertrauen.'
      },
      {
        q: 'Ist der Prozentrechner kostenlos?',
        a: 'Ja, vollständig kostenlos und ohne Konto. Alles läuft in Ihrem Browser — die eingegebenen Zahlen werden nie an einen Server gesendet.'
      }
    ]
  },

  methodology: {
    title: 'Methodik',
    lead:
      'Welche Formeln der Rechner verwendet, wie gerundet wird, wo die Arithmetik bekannte Grenzen hat und wie die Seiten dieser Website geschrieben und geprüft werden.',
    sections: [
      {
        id: 'verwendete-formeln',
        heading: 'Die verwendeten Formeln',
        blocks: [
          'Nichts auf dieser Website verwendet ein proprietäres Verfahren. Jedes Ergebnis stammt aus Standardarithmetik, die Sie auf Papier nachvollziehen können, und der Rechenweg unter jeder Antwort zeigt genau, welche Operationen auf Ihre Zahlen angewendet wurden.',
          {
            table: {
              head: ['Berechnung', 'Verwendete Formel'],
              rows: [
                ['Prozent von einer Zahl', 'Grundwert × (Prozentsatz ÷ 100)'],
                ['Wie viel Prozent X von Y ist', '(Anteil ÷ Ganzes) × 100'],
                ['Zu- oder Abschlag', 'Grundwert × (1 + Prozentsatz ÷ 100)'],
                ['Prozentuale Veränderung', '((neu − alt) ÷ alt) × 100'],
                ['Rabatt', 'Preis × (1 − Rabatt ÷ 100)'],
                ['Trinkgeld', 'Rechnung × (Prozentsatz ÷ 100)'],
                ['Mehrwertsteuer aufschlagen', 'netto × (1 + Satz ÷ 100)'],
                ['Mehrwertsteuer herausrechnen', 'brutto ÷ (1 + Satz ÷ 100)'],
                ['Gewinnmarge', '((Umsatz − Kosten) ÷ Umsatz) × 100'],
                ['Prozentpunkte', 'zweiter − erster'],
                ['Relative Veränderung', '((zweiter − erster) ÷ erster) × 100']
              ]
            }
          },
          'Der Rechner löst jede Formel auch in umgekehrter Richtung, wenn Sie ein anderes Feld leer lassen. Die Umkehrung einer Multiplikation ist eine Division und keine Subtraktion — das ist der folgenreichste Punkt, den diese Website sichtbar machen will.'
        ]
      },
      {
        id: 'rundung',
        heading: 'Rundung und Genauigkeit',
        blocks: [
          {
            ul: [
              'Antworten werden auf zwei Nachkommastellen gerundet, ein abschließendes „,00" entfällt, sodass 30,00 als 30 erscheint.',
              'Zwischenwerte im Rechenweg werden mit bis zu sechs Nachkommastellen angezeigt, damit jede Zeile zur nächsten passt.',
              'Gerundet wird nur bei der Anzeige. Die Arithmetik selbst rechnet mit ungerundeten Werten, verkettete Operationen sammeln also keinen Anzeigefehler an.',
              'Prozentwerte werden nicht auf einen Bereich begrenzt. Ein Ergebnis über 100 % oder unter null wird so angezeigt, wie es berechnet wurde, da beides in mehreren dieser Zusammenhänge sinnvoll ist.'
            ]
          },
          { h: 'Gleitkommazahlen' },
          'Die Berechnungen nutzen die IEEE-754-Arithmetik mit doppelter Genauigkeit, die in jedem Browser und jeder Tabellenkalkulation steckt. Manche Dezimalbrüche lassen sich binär nicht exakt darstellen, weshalb 0,1 + 0,2 in nahezu jeder Programmiersprache bekanntlich nicht genau 0,3 ergibt. Bei zwei angezeigten Nachkommastellen bleibt das unsichtbar, es ist aber eine echte Eigenschaft der Arithmetik und kein Fehler dieser Website.',
          { h: 'Was das für die Buchhaltung bedeutet' },
          'Steuervorschriften legen meist fest, an welcher Stelle gerundet werden muss — je Position, je Rechnung oder je Steuersatz — und der geforderte Betrag kann sich um Cent von einer einmalig gerundeten Rechnung unterscheiden. Nutzen Sie den angezeigten Wert zur Kontrolle, nicht als Buchung, und wenden Sie die Rundungsregel Ihrer Rechtsordnung an der dort genannten Stelle an.'
        ]
      },
      {
        id: 'referenzdaten',
        heading: 'Die Referenzdaten',
        blocks: [
          'Einige Seiten enthalten Tabellen, die keine abgeleitete Arithmetik sind, sondern beobachtete Werte: Mehrwertsteuersätze nach Ländern, Trinkgeldgepflogenheiten, übliche Margenspannen. Sie sind aus öffentlichen amtlichen und branchenüblichen Quellen zusammengestellt und dienen der Orientierung, nicht als verbindliche Auskunft.',
          {
            ul: [
              'Steuersätze ändern sich, oft kurzfristig, und die meisten Länder führen neben dem Regelsatz ermäßigte Sätze. Prüfen Sie den geltenden Satz vor dem Rechnungsstellen bei der zuständigen Behörde.',
              'Trinkgeldgepflogenheiten sind gesellschaftlich und nicht gesetzlich geregelt, unterscheiden sich innerhalb eines Landes und verändern sich mit der Zeit. Die Spannen beschreiben übliche Praxis, keine Regel.',
              'Nichts auf dieser Website ist eine Finanz-, Steuer-, Buchhaltungs- oder Rechtsberatung. Die Arithmetik ist nur ein Baustein in Entscheidungen, die meist von Regeln Ihrer konkreten Situation abhängen.'
            ]
          }
        ]
      },
      {
        id: 'wie-seiten-entstehen',
        heading: 'Wie die Seiten geschrieben und geprüft werden',
        blocks: [
          'Die Seiten werden von Hand geschrieben, nicht generiert. Jedes gerechnete Beispiel wurde mit dem Werkzeug nachgerechnet, neben dem es steht, und die Zahlen in den Tabellen wurden neu berechnet statt übernommen.',
          'Jede Seite trägt am Ende das Datum der letzten Durchsicht. Dieses Datum ändert sich, wenn sich der Inhalt der Seite ändert — eine korrigierte Zahl, ein neu geschriebener Abschnitt, eine neue Tabelle — und nicht bei Tippfehlerkorrekturen. Dasselbe Datum steht in den strukturierten Daten der Seite und in der Sitemap, sodass alle drei übereinstimmen.',
          { h: 'Korrekturen' },
          `Ist ein Ergebnis oder eine Angabe falsch, wird sie berichtigt. Hinweise gehen an ${CONTACT_EMAIL}; die eingegebenen Zahlen und die erwartete Antwort anzugeben reicht meist aus, um das Problem am selben Tag nachzuvollziehen.`,
          { h: 'Sprachen' },
          'Die Oberfläche des Rechners gibt es auf Deutsch, Englisch, Portugiesisch, Spanisch, Französisch und Italienisch. Der vollständige Satz an Artikeln liegt derzeit auf Englisch und Portugiesisch vor; wo eine Sprache eine Seite noch nicht hat, verweisen die Links auf die englische Fassung statt auf einen Platzhalter.'
        ]
      }
    ],
    faq: [
      {
        q: 'Wie werden die Ergebnisse gerundet?',
        a: 'Bei der Anzeige auf zwei Nachkommastellen, abschließende Nullen entfallen. Die zugrunde liegende Arithmetik wird nicht gerundet, verkettete Rechnungen sammeln also keinen Fehler an.'
      },
      {
        q: 'Warum zeigt der Rechenweg mehr Nachkommastellen als die Antwort?',
        a: 'Damit jede Zeile aus der vorigen folgt. Ein auf zwei Stellen gerundeter Zwischenwert ließe die letzte Multiplikation mitunter falsch erscheinen.'
      },
      {
        q: 'Kann ich diese Zahlen für eine Rechnung verwenden?',
        a: 'Als Kontrolle ja. Die Vorschriften legen fest, wo gerundet werden muss, und der geforderte Betrag kann sich um Cent unterscheiden.'
      },
      {
        q: 'Was bedeutet das Datum der letzten Durchsicht?',
        a: 'Dass die Seite an diesem Tag vollständig gelesen und ihre Zahlen geprüft wurden. Es ändert sich bei inhaltlichen Änderungen, nicht bei Tippfehlern.'
      }
    ]
  }
};

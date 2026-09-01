import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Calcolatrice di Percentuale',
    lead:
      'Calcola qualsiasi percentuale in un solo passaggio e vedi il procedimento dietro il risultato. Compila due campi qualsiasi e il terzo si calcola all’istante: senza registrazione, senza pubblicità dentro lo strumento e funzionante offline una volta caricata la pagina.',
    sections: [
      {
        id: 'come-calcolare-la-percentuale',
        heading: 'Come calcolare una percentuale',
        blocks: [
          'Una percentuale non è che una frazione con 100 al denominatore. «20%» significa 20 ogni 100, ovvero 0,20 in decimale. Tutti i calcoli di questa pagina discendono da quest’unica idea, ed è per questo che quattro domande dall’aspetto diverso si riducono allo stesso piccolo gruppo di formule.',
          { h: '1. Quanto fa X% di Y?' },
          { formula: 'risultato = base × (percentuale ÷ 100)' },
          'È il caso di tutti i giorni: uno sconto, una mancia, una provvigione. Per trovare il 20% di 150, converti 20% in 0,20 e moltiplica: 150 × 0,20 = 30. Una scorciatoia utile è che le percentuali sono reversibili: il 20% di 150 e il 150% di 20 fanno entrambi 30, quindi puoi scambiare i numeri se uno dei due è più comodo a mente.',
          { h: '2. X è quale percentuale di Y?' },
          { formula: 'percentuale = (parte ÷ totale) × 100' },
          'Serve quando hai già entrambi i numeri e vuoi sapere come si rapportano. Con 45 risposte esatte su 180: 45 ÷ 180 = 0,25, cioè il 25%. L’ordine conta: il numero che stai misurando va sopra, il totale sotto.',
          { h: '3. Aumentare o diminuire un numero di una percentuale' },
          { formula: 'risultato = base × (1 + percentuale ÷ 100)' },
          'Aggiungere il 15% a 120 dà 120 × 1,15 = 138. Toglierlo dà 120 × 0,85 = 102. Le due operazioni non si annullano: aggiungere il 15% e poi toglierlo ti lascia a 117, non a 120, perché la seconda percentuale si applica a un numero più grande.',
          { h: '4. Variazione percentuale fra due numeri' },
          { formula: 'variazione = ((nuovo − vecchio) ÷ vecchio) × 100' },
          'Passare da 80 a 100 è ((100 − 80) ÷ 80) × 100 = 25% di crescita. Tornare da 100 a 80 è un calo del 20% e non del 25%: il valore di partenza è cambiato, quindi la stessa differenza assoluta è una quota diversa di esso. Questa asimmetria inganna continuamente e vale la pena interiorizzarla.'
        ]
      },
      {
        id: 'tabella-di-riferimento',
        heading: 'Percentuali, frazioni e decimali',
        blocks: [
          'I valori qui sotto ricorrono abbastanza spesso perché riconoscerli ti eviti del tutto la calcolatrice.',
          {
            table: {
              head: ['Percentuale', 'Frazione', 'Decimale', 'Metodo rapido'],
              rows: [
                ['1%', '1/100', '0,01', 'Sposta la virgola di due posti a sinistra'],
                ['5%', '1/20', '0,05', 'Prendi il 10% e dimezzalo'],
                ['10%', '1/10', '0,10', 'Sposta la virgola di un posto a sinistra'],
                ['12,5%', '1/8', '0,125', 'La metà del 25%'],
                ['20%', '1/5', '0,20', 'Il doppio del 10%'],
                ['25%', '1/4', '0,25', 'Metà, e poi ancora metà'],
                ['33,3%', '1/3', '0,333…', 'Dividi per 3'],
                ['50%', '1/2', '0,50', 'La metà'],
                ['75%', '3/4', '0,75', 'Togli un quarto'],
                ['100%', '1/1', '1,00', 'Il numero stesso'],
                ['150%', '3/2', '1,50', 'Il numero più la sua metà']
              ]
            }
          },
          'Leggere la tabella nell’altro senso è altrettanto utile: se ti dicono che un prezzo è salito «di un terzo», è un aumento del 33,3%, e il moltiplicatore che ti serve è 1,333.'
        ]
      },
      {
        id: 'dove-servono',
        heading: 'Dove compaiono le percentuali',
        blocks: [
          { h: 'Acquisti e sconti' },
          'Un cartello «30% di sconto» significa che paghi il 70% del prezzo originale. Gli sconti cumulati si moltiplicano invece di sommarsi: 20% e poi un altro 10% danno 0,8 × 0,9 = 0,72, cioè il 28% di sconto totale e non il 30%.',
          { h: 'Mance e coperto' },
          'La mancia è un «X% di Y» puro, calcolato sull’importo al netto delle imposte. Il metodo mentale più rapido è trovare il 10% spostando la virgola e poi scalare: il 15% è il 10% più la metà di quella cifra.',
          { h: 'IVA e imposte' },
          'L’imposta si aggiunge di norma a un prezzo netto, quindi un’aliquota del 21% significa moltiplicare per 1,21. Nel senso opposto — estrarre l’imposta da un prezzo lordo — bisogna dividere per 1,21 e non sottrarre il 21%.',
          { h: 'Voti ed esami' },
          'Un punteggio su un totale qualsiasi è il caso «X è quale percentuale di Y». 34 su 40 fa 85%.',
          { h: 'Stipendio e aumenti' },
          'Un aumento è una variazione percentuale sullo stipendio attuale, ma ciò che conta è l’aumento al netto dell’inflazione. Un 3% in un anno con inflazione al 4% ti lascia leggermente peggio di prima.',
          { h: 'Interessi e crescita' },
          'Gli interessi si compongono: ogni periodo applica la sua percentuale al risultato precedente. Il 5% l’anno per tre anni dà un fattore di 1,05³ = 1,157, cioè il 15,7% di crescita complessiva — sensibilmente più del 15% che suggerirebbe una somma.'
        ]
      },
      {
        id: 'errori-comuni',
        heading: 'Tre errori da evitare',
        blocks: [
          { h: 'Punto percentuale e per cento non sono la stessa cosa' },
          'Se un tasso di interesse passa dal 4% al 5%, è un aumento di un punto percentuale, ma del 25% in termini relativi. La stampa confonde continuamente le due cose, e la differenza basta a cambiare decisioni.',
          { h: 'Le variazioni percentuali non si annullano simmetricamente' },
          'Un valore che scende del 50% deve salire del 100% per tornare al punto di partenza. In generale, recuperare un calo del p% richiede un guadagno di p ÷ (100 − p) × 100 per cento.',
          { h: 'Fare la media delle percentuali ignora la base' },
          'Un tasso di promozione del 90% in una classe di 10 e del 50% in una di 100 non fanno il 70% di media. Pondera ogni percentuale per la dimensione del suo gruppo, oppure lavora sui conteggi grezzi.'
        ]
      },
      {
        id: 'il-resto-del-sito',
        heading: 'Il resto del sito',
        blocks: [
          'La calcolatrice qui sopra risolve i quattro casi generali. Le pagine seguenti prendono una singola situazione e la approfondiscono, ciascuna con i propri esempi svolti e tabelle di riferimento. Al momento sono scritte in inglese; i link nel piè di pagina portano direttamente lì.',
          {
            table: {
              head: ['Pagina', 'Da usare quando'],
              rows: [
                ['Calcolatrice di sconto', 'Un prezzo viene ridotto, o vuoi il prezzo originale a partire da quello scontato'],
                ['Calcolatrice di mancia', 'Stai dividendo un conto e vuoi verificare l’usanza locale'],
                ['IVA e imposte', 'Bisogna aggiungere l’imposta a un prezzo o estrarla da esso'],
                ['Margine di profitto', 'Stai formando un prezzo e ti serve il margine, non il ricarico'],
                ['Aumento di stipendio', 'Un’offerta va convertita in percentuale o confrontata con l’inflazione'],
                ['Punti percentuali', 'Due percentuali vanno confrontate e ogni misura ha bisogno del suo nome'],
                ['Formule di percentuale', 'Vuoi tutte le formule e le loro inverse in una sola pagina'],
                ['Calcolo mentale', 'Vuoi smettere di aver bisogno della calcolatrice nei casi comuni'],
                ['Errori comuni', 'Un risultato percentuale sembra sbagliato e vuoi sapere perché']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Come si calcola la percentuale di un numero?',
        a: 'Dividi la percentuale per 100 e moltiplica per il numero. Il 20% di 150 è 150 × 0,2 = 30.'
      },
      {
        q: 'Come faccio a sapere quale percentuale un numero è di un altro?',
        a: 'Dividi la parte per il totale e moltiplica per 100. 45 su 180 è 45 ÷ 180 = 0,25, cioè il 25%.'
      },
      {
        q: 'Come si aggiunge una percentuale a un prezzo?',
        a: 'Moltiplica per 1 più la percentuale in decimale. Aggiungere il 21% significa moltiplicare per 1,21; per toglierlo, dividi per 1,21 invece di sottrarre il 21%.'
      },
      {
        q: 'Qual è la differenza fra variazione percentuale e punti percentuali?',
        a: 'I punti percentuali misurano la distanza grezza fra due percentuali. La variazione percentuale misura quella distanza rispetto al valore iniziale. Passare dal 4% al 5% è un punto percentuale e una variazione del 25%.'
      },
      {
        q: 'Perché una perdita del 50% richiede un guadagno del 100%?',
        a: 'Perché il guadagno si calcola sul valore già ridotto. 100 che perde il 50% diventa 50, e passare da 50 a 100 significa raddoppiare.'
      },
      {
        q: 'La calcolatrice accetta la virgola come separatore decimale?',
        a: 'Sì. Il selettore in alto alterna fra punto e virgola, e la scelta resta salvata sul tuo dispositivo.'
      },
      {
        q: 'Due sconti cumulati si sommano?',
        a: 'No, si moltiplicano. 20% e poi 10% lasciano 0,8 × 0,9 = 0,72 del prezzo originale, cioè il 28% di sconto totale.'
      },
      {
        q: 'La calcolatrice mostra come arriva al risultato?',
        a: 'Sì. Appena due campi sono compilati, il pannello elenca il calcolo passo dopo passo con i tuoi numeri, così puoi verificare ogni riga invece di fidarti del totale.'
      },
      {
        q: 'È gratuita?',
        a: 'Sì, del tutto gratuita e senza registrazione. Tutto gira nel tuo browser: i numeri che digiti non vengono mai inviati a un server.'
      }
    ]
  },

  methodology: {
    title: 'Metodologia',
    lead:
      'Quali formule usa la calcolatrice, come vengono arrotondati i risultati, dove l’aritmetica ha limiti noti e come vengono scritte e riviste le pagine di questo sito.',
    sections: [
      {
        id: 'formule-usate',
        heading: 'Le formule impiegate',
        blocks: [
          'Nulla in questo sito usa un metodo proprietario. Ogni risultato viene da aritmetica standard che puoi riprodurre su carta, e il procedimento sotto ogni risposta mostra esattamente quali operazioni sono state applicate ai tuoi numeri.',
          {
            table: {
              head: ['Calcolo', 'Formula usata'],
              rows: [
                ['Percentuale di un numero', 'base × (percentuale ÷ 100)'],
                ['Quale percentuale è X di Y', '(parte ÷ totale) × 100'],
                ['Aumento o riduzione', 'base × (1 + percentuale ÷ 100)'],
                ['Variazione percentuale', '((nuovo − vecchio) ÷ vecchio) × 100'],
                ['Sconto', 'prezzo × (1 − sconto ÷ 100)'],
                ['Mancia', 'conto × (percentuale ÷ 100)'],
                ['Aggiungere l’IVA', 'imponibile × (1 + aliquota ÷ 100)'],
                ['Scorporare l’IVA', 'lordo ÷ (1 + aliquota ÷ 100)'],
                ['Margine di profitto', '((ricavi − costo) ÷ ricavi) × 100'],
                ['Punti percentuali', 'secondo − primo'],
                ['Variazione relativa', '((secondo − primo) ÷ primo) × 100']
              ]
            }
          },
          'La calcolatrice risolve ogni formula anche nel senso inverso quando lasci vuoto un altro campo. L’inversa di una moltiplicazione è una divisione e non una sottrazione, ed è l’idea più gravida di conseguenze che questo sito cerca di rendere visibile.'
        ]
      },
      {
        id: 'arrotondamento',
        heading: 'Arrotondamento e precisione',
        blocks: [
          {
            ul: [
              'Le risposte sono arrotondate a due decimali e un «,00» finale viene rimosso, quindi 30,00 appare come 30.',
              'I valori intermedi del procedimento sono mostrati con un massimo di sei decimali, perché ogni riga risulti coerente con la successiva.',
              'L’arrotondamento avviene solo nella visualizzazione. L’aritmetica lavora su valori non arrotondati, quindi le operazioni concatenate non accumulano errore di visualizzazione.',
              'Le percentuali non sono limitate ad alcun intervallo. Un risultato superiore al 100% o inferiore a zero viene mostrato così com’è calcolato, perché entrambi hanno senso in vari di questi contesti.'
            ]
          },
          { h: 'Virgola mobile' },
          'I calcoli usano l’aritmetica IEEE 754 in doppia precisione presente in ogni browser e foglio di calcolo. Alcune frazioni decimali non hanno rappresentazione esatta in binario, motivo per cui 0,1 + 0,2 notoriamente non fa esattamente 0,3 in quasi ogni linguaggio di programmazione. Con due decimali a schermo resta invisibile, ma è una proprietà reale dell’aritmetica e non un difetto di questo sito.',
          { h: 'Cosa significa per la contabilità' },
          'Le norme fiscali di solito specificano dove debba avvenire l’arrotondamento — per riga, per fattura o per aliquota — e l’importo richiesto può differire di qualche centesimo da un unico calcolo arrotondato. Usa il numero mostrato come verifica e non come registrazione, e applica la regola di arrotondamento della tua giurisdizione nel punto che essa indica.'
        ]
      },
      {
        id: 'dati-di-riferimento',
        heading: 'I dati di riferimento',
        blocks: [
          'Alcune pagine contengono tabelle che non sono aritmetica derivata ma dati osservati: aliquote IVA per paese, usanze sulle mance, intervalli tipici di margine. Sono compilate da fonti pubbliche istituzionali e di settore e servono da orientamento, non da autorità.',
          {
            ul: [
              'Le aliquote cambiano, spesso con poco preavviso, e la maggior parte dei paesi affianca aliquote ridotte a quella ordinaria. Verifica l’aliquota vigente presso l’autorità competente prima di fatturare.',
              'Le usanze sulle mance sono sociali e non giuridiche, variano all’interno di uno stesso paese e cambiano nel tempo. Gli intervalli descrivono la pratica comune, non una regola.',
              'Nulla in questo sito è consulenza finanziaria, fiscale, contabile o legale. L’aritmetica è solo uno degli elementi di decisioni che di norma dipendono da regole specifiche della tua situazione.'
            ]
          }
        ]
      },
      {
        id: 'come-nascono-le-pagine',
        heading: 'Come vengono scritte e riviste le pagine',
        blocks: [
          'Le pagine sono scritte a mano, non generate. Ogni esempio svolto del sito è stato calcolato e verificato con lo strumento accanto al quale compare, e i numeri delle tabelle sono stati ricalcolati anziché copiati.',
          'Ogni pagina riporta in fondo la data dell’ultima revisione. Quella data cambia quando cambia la sostanza della pagina — un numero corretto, una sezione riscritta, una tabella nuova — e non per correzioni tipografiche. La stessa data è pubblicata nei dati strutturati della pagina e nella sitemap del sito, così che le tre coincidano.',
          { h: 'Correzioni' },
          `Se un risultato o un dato è sbagliato, viene corretto. Le segnalazioni vanno a ${CONTACT_EMAIL}; indicare i numeri inseriti e la risposta attesa di solito basta a riprodurre il problema in giornata.`,
          { h: 'Lingue' },
          'L’interfaccia della calcolatrice esiste in italiano, inglese, portoghese, spagnolo, francese e tedesco. L’insieme completo degli articoli è per ora in inglese e portoghese; dove una lingua non ha ancora una pagina, i link puntano alla versione inglese anziché a una bozza.'
        ]
      }
    ],
    faq: [
      {
        q: 'Come vengono arrotondati i risultati?',
        a: 'A due decimali nella visualizzazione, con gli zeri finali rimossi. L’aritmetica sottostante non è arrotondata, quindi i calcoli concatenati non accumulano errore.'
      },
      {
        q: 'Perché il procedimento mostra più decimali della risposta?',
        a: 'Perché ogni riga discenda dalla precedente. Arrotondare un valore intermedio a due decimali farebbe a volte sembrare sbagliata la moltiplicazione finale.'
      },
      {
        q: 'Posso usare questi numeri in una fattura?',
        a: 'Usali come verifica. Le norme stabiliscono dove debba avvenire l’arrotondamento, e l’importo richiesto può differire di qualche centesimo.'
      },
      {
        q: 'Che cosa significa la data di ultima revisione?',
        a: 'Che la pagina è stata riletta per intero e i suoi numeri verificati in quella data. Cambia quando cambia la sostanza, non per una correzione tipografica.'
      }
    ]
  }
};

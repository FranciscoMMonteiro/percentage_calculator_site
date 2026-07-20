export default {
  home: {
    title: 'Calcolatrice di Percentuale',
    lead:
      'Calcola qualsiasi percentuale in un solo passaggio. Compila due campi qualsiasi e il terzo viene calcolato subito: senza registrazione, senza pubblicità dentro lo strumento e utilizzabile offline una volta caricata la pagina.',
    sections: [
      {
        id: 'come-calcolare-una-percentuale',
        heading: 'Come calcolare una percentuale',
        blocks: [
          'Una percentuale è semplicemente una frazione con 100 al denominatore. «20 %» significa 20 ogni 100, cioè 0,20 in decimale. Tutti i calcoli di questa pagina nascono da questa sola idea.',
          { h: '1. Quanto fa X % di Y?' },
          { formula: 'risultato = base × (percentuale ÷ 100)' },
          'È il caso di tutti i giorni: uno sconto, una mancia, una provvigione. Per trovare il 20 % di 150 basta 150 × 0,20 = 30.',
          { h: '2. Che percentuale è X di Y?' },
          { formula: 'percentuale = (parte ÷ totale) × 100' },
          'Con 45 risposte esatte su 180: 45 ÷ 180 = 0,25, cioè il 25 %. L\'ordine conta: il valore misurato sta sopra, il totale sotto.',
          { h: '3. Aumentare o diminuire un numero di una percentuale' },
          { formula: 'risultato = base × (1 + percentuale ÷ 100)' },
          'Aggiungere il 15 % a 120 dà 120 × 1,15 = 138. Toglierlo dà 120 × 0,85 = 102. Le due operazioni non si annullano: +15 % e poi −15 % ti lascia a 117, non a 120.',
          { h: '4. Variazione percentuale tra due numeri' },
          { formula: 'variazione = ((nuovo − vecchio) ÷ vecchio) × 100' },
          'Passare da 80 a 100 è una crescita del 25 %. Tornare da 100 a 80 è un calo del 20 %, non del 25 %, perché il valore di partenza è cambiato.'
        ]
      },
      {
        id: 'errori-comuni',
        heading: 'Errori comuni',
        blocks: [
          'Un punto percentuale non è una percentuale: passare dal 4 % al 5 % è un punto percentuale, ma un aumento del 25 %.',
          'Gli sconti applicati in sequenza si moltiplicano, non si sommano: 20 % e poi 10 % lasciano 0,8 × 0,9 = 0,72, cioè il 28 % di sconto totale.',
          'Una perdita del 50 % richiede un guadagno del 100 % per tornare al punto di partenza, perché il guadagno si calcola sul valore già ridotto.'
        ]
      }
    ],
    faq: [
      {
        q: 'Come si calcola la percentuale di un numero?',
        a: 'Dividi la percentuale per 100 e moltiplica per il numero. Il 20 % di 150 è 150 × 0,2 = 30.'
      },
      {
        q: 'Come si aggiunge una percentuale a un prezzo?',
        a: 'Moltiplica per 1 più la percentuale in decimale. Aggiungere il 22 % significa moltiplicare per 1,22; per toglierlo, dividi per 1,22.'
      },
      {
        q: 'Posso usare la virgola come separatore decimale?',
        a: 'Sì. Il selettore in alto alterna punto e virgola, e la scelta resta salvata sul tuo dispositivo.'
      },
      {
        q: 'È gratuita?',
        a: 'Sì, è gratuita, non richiede registrazione e funziona interamente nel browser.'
      }
    ]
  }
};

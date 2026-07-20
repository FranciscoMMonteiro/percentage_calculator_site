export default {
  home: {
    title: 'Calculatrice de Pourcentage',
    lead:
      'Calculez n\'importe quel pourcentage en une étape. Remplissez deux champs et le troisième se calcule instantanément : sans inscription, sans publicité dans l\'outil et utilisable hors ligne une fois la page chargée.',
    sections: [
      {
        id: 'comment-calculer-un-pourcentage',
        heading: 'Comment calculer un pourcentage',
        blocks: [
          'Un pourcentage n\'est qu\'une fraction dont le dénominateur vaut 100. « 20 % » signifie 20 pour 100, soit 0,20 en décimal. Tous les calculs de cette page découlent de cette seule idée.',
          { h: '1. Combien font X % de Y ?' },
          { formula: 'résultat = base × (pourcentage ÷ 100)' },
          'C\'est le cas courant : une remise, un pourboire, une commission. Pour trouver 20 % de 150, convertissez 20 % en 0,20 et multipliez : 150 × 0,20 = 30.',
          { h: '2. X représente quel pourcentage de Y ?' },
          { formula: 'pourcentage = (partie ÷ total) × 100' },
          'Avec 45 bonnes réponses sur 180 : 45 ÷ 180 = 0,25, soit 25 %. L\'ordre compte : la valeur mesurée au numérateur, le total au dénominateur.',
          { h: '3. Augmenter ou diminuer un nombre d\'un pourcentage' },
          { formula: 'résultat = base × (1 + pourcentage ÷ 100)' },
          'Ajouter 15 % à 120 donne 120 × 1,15 = 138. Retirer 15 % donne 120 × 0,85 = 102. Les deux ne s\'annulent pas : +15 % puis −15 % vous laisse à 117, pas à 120.',
          { h: '4. Variation en pourcentage entre deux nombres' },
          { formula: 'variation = ((nouveau − ancien) ÷ ancien) × 100' },
          'Passer de 80 à 100 est une hausse de 25 %. Redescendre de 100 à 80 est une baisse de 20 %, et non de 25 %, car la valeur de départ a changé.'
        ]
      },
      {
        id: 'erreurs-frequentes',
        heading: 'Erreurs fréquentes',
        blocks: [
          'Un point de pourcentage n\'est pas un pourcentage : passer de 4 % à 5 %, c\'est un point de pourcentage mais une hausse de 25 %.',
          'Les remises cumulées se multiplient, elles ne s\'additionnent pas : 20 % puis 10 % laissent 0,8 × 0,9 = 0,72, soit 28 % de remise au total.',
          'Une baisse de 50 % exige une hausse de 100 % pour revenir au point de départ, car la hausse porte sur la valeur déjà réduite.'
        ]
      }
    ],
    faq: [
      {
        q: 'Comment calculer un pourcentage d\'un nombre ?',
        a: 'Divisez le pourcentage par 100 et multipliez par le nombre. 20 % de 150 font 150 × 0,2 = 30.'
      },
      {
        q: 'Comment ajouter un pourcentage à un prix ?',
        a: 'Multipliez par 1 plus le pourcentage en décimal. Ajouter 20 % revient à multiplier par 1,20 ; pour le retirer, divisez par 1,20.'
      },
      {
        q: 'La virgule décimale est-elle acceptée ?',
        a: 'Oui. Le sélecteur en haut de page bascule entre le point et la virgule, et le choix est conservé sur votre appareil.'
      },
      {
        q: 'Est-ce gratuit ?',
        a: 'Oui, c\'est gratuit, sans compte à créer, et tout fonctionne dans votre navigateur.'
      }
    ]
  }
};

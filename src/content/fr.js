import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Calculatrice de Pourcentage',
    lead:
      'Calculez n’importe quel pourcentage en une étape et voyez le détail du calcul. Remplissez deux champs et le troisième se calcule instantanément : sans inscription, sans publicité dans l’outil, et le tout fonctionne hors ligne une fois la page chargée.',
    sections: [
      {
        id: 'comment-calculer-un-pourcentage',
        heading: 'Comment calculer un pourcentage',
        blocks: [
          'Un pourcentage n’est qu’une fraction dont le dénominateur est 100. « 20 % » signifie 20 sur 100, soit 0,20 en décimal. Tous les calculs de cette page découlent de cette seule idée, et c’est pourquoi quatre questions d’apparence différente se ramènent au même petit ensemble de formules.',
          { h: '1. Combien font X % de Y ?' },
          { formula: 'résultat = base × (pourcentage ÷ 100)' },
          'C’est le cas quotidien : une remise, un pourboire, une commission. Pour trouver 20 % de 150, convertissez 20 % en 0,20 et multipliez : 150 × 0,20 = 30. Un raccourci utile : les pourcentages sont réversibles — 20 % de 150 et 150 % de 20 font tous deux 30, donc vous pouvez inverser les nombres si l’un des deux est plus commode de tête.',
          { h: '2. X représente quel pourcentage de Y ?' },
          { formula: 'pourcentage = (partie ÷ total) × 100' },
          'À utiliser quand vous avez déjà les deux nombres et voulez savoir comment ils se rapportent. Si vous avez 45 bonnes réponses sur 180 : 45 ÷ 180 = 0,25, soit 25 %. L’ordre compte — le nombre que vous mesurez va au numérateur, le total au dénominateur.',
          { h: '3. Augmenter ou diminuer un nombre d’un pourcentage' },
          { formula: 'résultat = base × (1 + pourcentage ÷ 100)' },
          'Ajouter 15 % à 120 donne 120 × 1,15 = 138. Les retirer donne 120 × 0,85 = 102. Les deux ne s’annulent pas : ajouter 15 % puis retirer 15 % vous laisse à 117 et non à 120, parce que le second pourcentage s’applique à un nombre plus grand.',
          { h: '4. Variation en pourcentage entre deux nombres' },
          { formula: 'variation = ((nouveau − ancien) ÷ ancien) × 100' },
          'Passer de 80 à 100, c’est ((100 − 80) ÷ 80) × 100 = 25 % de hausse. Redescendre de 100 à 80, c’est une baisse de 20 % et non de 25 % — la valeur de départ a changé, donc le même écart absolu représente une autre part d’elle. Cette asymétrie piège tout le monde et mérite d’être assimilée.'
        ]
      },
      {
        id: 'tableau-de-reference',
        heading: 'Pourcentages, fractions et décimaux',
        blocks: [
          'Les valeurs ci-dessous reviennent assez souvent pour que les reconnaître vous évite la calculatrice.',
          {
            table: {
              head: ['Pourcentage', 'Fraction', 'Décimal', 'Méthode rapide'],
              rows: [
                ['1 %', '1/100', '0,01', 'Décalez la virgule de deux rangs à gauche'],
                ['5 %', '1/20', '0,05', 'Prenez 10 % et divisez par deux'],
                ['10 %', '1/10', '0,10', 'Décalez la virgule d’un rang à gauche'],
                ['12,5 %', '1/8', '0,125', 'La moitié de 25 %'],
                ['20 %', '1/5', '0,20', 'Le double de 10 %'],
                ['25 %', '1/4', '0,25', 'La moitié, puis encore la moitié'],
                ['33,3 %', '1/3', '0,333…', 'Divisez par 3'],
                ['50 %', '1/2', '0,50', 'La moitié'],
                ['75 %', '3/4', '0,75', 'Retirez un quart'],
                ['100 %', '1/1', '1,00', 'Le nombre lui-même'],
                ['150 %', '3/2', '1,50', 'Le nombre plus sa moitié']
              ]
            }
          },
          'Lire le tableau dans l’autre sens est tout aussi utile : si l’on vous dit qu’un prix a augmenté « d’un tiers », c’est une hausse de 33,3 %, et le coefficient qu’il vous faut est 1,333.'
        ]
      },
      {
        id: 'ou-servent-les-pourcentages',
        heading: 'Où les pourcentages interviennent',
        blocks: [
          { h: 'Achats et remises' },
          'Une affiche « 30 % de remise » signifie que vous payez 70 % du prix initial. Les remises cumulées se multiplient au lieu de s’additionner : 20 % puis encore 10 % donnent 0,8 × 0,9 = 0,72, soit 28 % de remise au total et non 30 %.',
          { h: 'Pourboires et service' },
          'Le pourboire est un « X % de Y » pur, calculé sur le montant hors taxes. La méthode mentale la plus rapide consiste à trouver 10 % en décalant la virgule, puis à mettre à l’échelle : 15 %, c’est 10 % plus la moitié de ce montant.',
          { h: 'TVA et taxes' },
          'La taxe s’ajoute généralement à un prix hors taxes, donc un taux de 21 % revient à multiplier par 1,21. Dans l’autre sens — extraire la taxe d’un prix TTC — il faut diviser par 1,21 et non retrancher 21 %.',
          { h: 'Notes et examens' },
          'Une note sur un total quelconque relève du cas « X représente quel pourcentage de Y ». 34 sur 40 font 85 %.',
          { h: 'Salaire et augmentation' },
          'Une augmentation est une variation en pourcentage du salaire actuel, mais ce qui compte est l’augmentation nette d’inflation. Une hausse de 3 % dans une année à 4 % d’inflation vous laisse légèrement perdant.',
          { h: 'Intérêts et croissance' },
          'Les intérêts se composent : chaque période applique son pourcentage au résultat précédent. 5 % par an pendant trois ans donne un coefficient de 1,05³ = 1,157, soit 15,7 % de croissance totale — nettement plus que les 15 % qu’une addition suggérerait.'
        ]
      },
      {
        id: 'erreurs-courantes',
        heading: 'Trois erreurs à éviter',
        blocks: [
          { h: 'Point de pourcentage et pour cent ne sont pas la même chose' },
          'Si un taux d’intérêt passe de 4 % à 5 %, c’est une hausse d’un point de pourcentage, mais de 25 % en relatif. La presse confond constamment les deux, et l’écart suffit à changer des décisions.',
          { h: 'Les variations ne s’annulent pas symétriquement' },
          'Une valeur qui chute de 50 % doit remonter de 100 % pour revenir à son point de départ. Plus généralement, effacer une baisse de p % exige un gain de p ÷ (100 − p) × 100 pour cent.',
          { h: 'Faire la moyenne de pourcentages ignore la base' },
          'Un taux de réussite de 90 % dans une classe de 10 et de 50 % dans une classe de 100 ne font pas 70 % en moyenne. Pondérez chaque pourcentage par la taille de son groupe, ou travaillez sur les effectifs bruts.'
        ]
      },
      {
        id: 'le-reste-du-site',
        heading: 'Le reste du site',
        blocks: [
          'La calculatrice ci-dessus traite les quatre cas généraux. Les pages ci-dessous prennent une situation précise et l’approfondissent, chacune avec ses exemples résolus et ses tableaux de référence. Elles sont pour l’instant rédigées en anglais ; les liens du pied de page y mènent directement.',
          {
            table: {
              head: ['Page', 'À utiliser quand'],
              rows: [
                ['Calculatrice de remise', 'Un prix est réduit, ou vous cherchez le prix initial à partir du prix soldé'],
                ['Calculatrice de pourboire', 'Vous partagez une addition et voulez vérifier l’usage local'],
                ['TVA et taxes', 'Il faut ajouter la taxe à un prix ou l’en extraire'],
                ['Marge commerciale', 'Vous fixez un prix et avez besoin de la marge, pas du coefficient'],
                ['Augmentation de salaire', 'Une offre doit être convertie en pourcentage ou comparée à l’inflation'],
                ['Points de pourcentage', 'Deux pourcentages doivent être comparés et chaque mesure nommée'],
                ['Formules de pourcentage', 'Vous voulez toutes les formules et leurs inverses sur une seule page'],
                ['Calcul mental', 'Vous voulez cesser d’avoir besoin d’une calculatrice pour les cas courants'],
                ['Erreurs courantes', 'Un résultat en pourcentage semble faux et vous voulez savoir pourquoi']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Comment calculer un pourcentage d’un nombre ?',
        a: 'Divisez le pourcentage par 100 et multipliez par le nombre. Pour 20 % de 150 : 150 × 0,2 = 30.'
      },
      {
        q: 'Comment savoir quel pourcentage un nombre représente d’un autre ?',
        a: 'Divisez la partie par le total et multipliez par 100. 45 sur 180 donne 45 ÷ 180 = 0,25, soit 25 %.'
      },
      {
        q: 'Comment ajouter un pourcentage à un prix ?',
        a: 'Multipliez par 1 plus le pourcentage en décimal. Ajouter 21 % revient à multiplier par 1,21 ; pour le retirer, divisez par 1,21 au lieu de retrancher 21 %.'
      },
      {
        q: 'Quelle différence entre variation en pourcentage et points de pourcentage ?',
        a: 'Les points mesurent l’écart brut entre deux pourcentages. La variation mesure cet écart par rapport à la valeur de départ. Passer de 4 % à 5 %, c’est un point et une variation de 25 %.'
      },
      {
        q: 'Pourquoi une perte de 50 % exige-t-elle un gain de 100 % ?',
        a: 'Parce que le gain se calcule sur la valeur déjà réduite. 100 qui perd 50 % donne 50, et passer de 50 à 100 revient à doubler.'
      },
      {
        q: 'La calculatrice accepte-t-elle la virgule décimale ?',
        a: 'Oui. Le sélecteur en haut de page bascule entre le point et la virgule, et le choix est conservé sur votre appareil.'
      },
      {
        q: 'Deux remises cumulées s’additionnent-elles ?',
        a: 'Non, elles se multiplient. 20 % puis 10 % laissent 0,8 × 0,9 = 0,72 du prix initial, soit 28 % de remise totale.'
      },
      {
        q: 'La calculatrice montre-t-elle comment le résultat est obtenu ?',
        a: 'Oui. Dès que deux champs sont remplis, le panneau détaille le calcul étape par étape avec vos propres nombres, pour que vous puissiez vérifier chaque ligne au lieu de vous fier au total.'
      },
      {
        q: 'Est-ce gratuit ?',
        a: 'Oui, c’est gratuit, sans inscription, et tout fonctionne dans votre navigateur : les nombres que vous saisissez ne sont jamais envoyés à un serveur.'
      }
    ]
  },

  methodology: {
    title: 'Méthodologie',
    lead:
      'Les formules utilisées par la calculatrice, les règles d’arrondi, les limites connues du calcul en virgule flottante et la façon dont les pages de ce site sont rédigées et relues.',
    sections: [
      {
        id: 'formules-utilisees',
        heading: 'Les formules employées',
        blocks: [
          'Rien sur ce site n’utilise de méthode propriétaire. Chaque résultat provient d’une arithmétique standard que vous pouvez refaire sur papier, et le détail affiché sous chaque réponse montre exactement quelles opérations ont été appliquées à vos nombres.',
          {
            table: {
              head: ['Calcul', 'Formule utilisée'],
              rows: [
                ['Pourcentage d’un nombre', 'base × (pourcentage ÷ 100)'],
                ['X représente quel % de Y', '(partie ÷ total) × 100'],
                ['Hausse ou baisse', 'base × (1 + pourcentage ÷ 100)'],
                ['Variation en pourcentage', '((nouveau − ancien) ÷ ancien) × 100'],
                ['Remise', 'prix × (1 − remise ÷ 100)'],
                ['Pourboire', 'addition × (pourcentage ÷ 100)'],
                ['Ajouter la TVA', 'prix HT × (1 + taux ÷ 100)'],
                ['Retirer la TVA', 'prix TTC ÷ (1 + taux ÷ 100)'],
                ['Marge commerciale', '((chiffre d’affaires − coût) ÷ chiffre d’affaires) × 100'],
                ['Points de pourcentage', 'second − premier'],
                ['Variation relative', '((second − premier) ÷ premier) × 100']
              ]
            }
          },
          'La calculatrice résout aussi chaque formule dans l’autre sens lorsque vous laissez un champ différent vide. L’inverse d’une multiplication est une division et non une soustraction, et c’est l’idée la plus lourde de conséquences que ce site cherche à rendre visible.'
        ]
      },
      {
        id: 'arrondi',
        heading: 'Arrondi et précision',
        blocks: [
          {
            ul: [
              'Les réponses sont arrondies à deux décimales et un « ,00 » final est supprimé, si bien que 30,00 s’affiche 30.',
              'Les valeurs intermédiaires du détail s’affichent avec jusqu’à six décimales, pour que chaque ligne reste cohérente avec la suivante.',
              'L’arrondi n’intervient qu’à l’affichage. Le calcul lui-même travaille sur des valeurs non arrondies, donc les opérations enchaînées n’accumulent pas d’erreur d’affichage.',
              'Les pourcentages ne sont bornés à aucun intervalle. Un résultat supérieur à 100 % ou inférieur à zéro s’affiche tel quel, car les deux ont un sens dans plusieurs de ces contextes.'
            ]
          },
          { h: 'Virgule flottante' },
          'Les calculs utilisent l’arithmétique IEEE 754 en double précision intégrée à tout navigateur et à tout tableur. Certaines fractions décimales n’ont pas de représentation exacte en binaire, ce qui explique que 0,1 + 0,2 ne vaille pas exactement 0,3 dans presque tous les langages de programmation. À deux décimales d’affichage, cela reste invisible, mais c’est une propriété réelle de l’arithmétique et non un défaut de ce site.',
          { h: 'Ce que cela implique en comptabilité' },
          'La réglementation fiscale précise généralement où l’arrondi doit intervenir — par ligne, par facture ou par taux — et le montant exigé peut différer de quelques centimes d’un calcul arrondi une seule fois. Utilisez le chiffre affiché comme vérification et non comme écriture, et appliquez la règle d’arrondi de votre juridiction à l’étape qu’elle désigne.'
        ]
      },
      {
        id: 'donnees-de-reference',
        heading: 'Les données de référence',
        blocks: [
          'Certaines pages comportent des tableaux qui ne sont pas de l’arithmétique dérivée mais des données observées : taux de TVA par pays, usages en matière de pourboire, fourchettes de marge habituelles. Ils sont compilés à partir de sources publiques officielles et sectorielles et servent de repère, non d’autorité.',
          {
            ul: [
              'Les taux changent, souvent sans grand préavis, et la plupart des pays appliquent des taux réduits à côté du taux normal. Vérifiez le taux en vigueur auprès de l’administration compétente avant de facturer.',
              'Les usages en matière de pourboire sont sociaux et non légaux, varient à l’intérieur d’un même pays et évoluent. Les fourchettes décrivent une pratique courante, pas une règle.',
              'Rien sur ce site ne constitue un conseil financier, fiscal, comptable ou juridique. L’arithmétique n’est qu’un élément parmi d’autres dans des décisions qui dépendent le plus souvent de règles propres à votre situation.'
            ]
          }
        ]
      },
      {
        id: 'comment-les-pages-sont-ecrites',
        heading: 'Comment les pages sont rédigées et relues',
        blocks: [
          'Les pages sont écrites à la main, pas générées. Chaque exemple résolu du site a été calculé et vérifié avec l’outil à côté duquel il figure, et les chiffres des tableaux ont été recalculés plutôt que recopiés.',
          'Chaque page porte en bas la date de sa dernière relecture. Cette date change lorsque le fond de la page change — un chiffre corrigé, une section réécrite, un nouveau tableau — et non pour des corrections typographiques. La même date figure dans les données structurées de la page et dans le sitemap du site, de sorte que les trois concordent.',
          { h: 'Corrections' },
          `Si un résultat ou une donnée est erroné, il est corrigé. Les signalements vont à ${CONTACT_EMAIL} ; indiquer les nombres saisis et la réponse attendue suffit généralement à reproduire le problème le jour même.`,
          { h: 'Langues' },
          'L’interface de la calculatrice existe en français, anglais, portugais, espagnol, allemand et italien. L’ensemble complet des articles existe pour l’instant en anglais et en portugais ; là où une langue n’a pas encore de page, les liens pointent vers la version anglaise plutôt que vers une ébauche.'
        ]
      }
    ],
    faq: [
      {
        q: 'Comment les résultats sont-ils arrondis ?',
        a: 'À deux décimales à l’affichage, les zéros finaux étant supprimés. Le calcul sous-jacent n’est pas arrondi, donc les opérations enchaînées n’accumulent pas d’erreur.'
      },
      {
        q: 'Pourquoi le détail affiche-t-il plus de décimales que la réponse ?',
        a: 'Pour que chaque ligne découle de la précédente. Arrondir une valeur intermédiaire à deux décimales ferait parfois paraître la multiplication finale fausse.'
      },
      {
        q: 'Puis-je utiliser ces chiffres sur une facture ?',
        a: 'Utilisez-les comme vérification. La réglementation définit où l’arrondi doit intervenir, et le montant exigé peut différer de quelques centimes.'
      },
      {
        q: 'Que signifie la date de dernière relecture ?',
        a: 'Que la page a été relue intégralement et ses chiffres vérifiés à cette date. Elle change quand le fond change, pas pour une correction typographique.'
      }
    ]
  }
};

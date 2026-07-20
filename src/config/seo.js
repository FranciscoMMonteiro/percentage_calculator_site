/**
 * Title and meta description per locale + page. Titles stay under ~60
 * characters and descriptions under ~155 so Google shows them intact.
 */
export const SEO = {
  en: {
    home: {
      title: 'Percentage Calculator — Fast, Free, No Sign-up',
      description:
        'Calculate any percentage instantly. Percent of a number, what percent X is of Y, increases, decreases and percentage change — with formulas and worked examples.'
    },
    discount: {
      title: 'Discount Calculator — Percent Off and Sale Price',
      description:
        'Work out the sale price after a percentage discount, or find the discount from the original and sale prices. Includes stacked-discount tables.'
    },
    tip: {
      title: 'Tip Calculator — Gratuity by Percentage',
      description:
        'Calculate a tip at any percentage and split it between diners. Includes a mental shortcut and tipping customs by country.'
    },
    vat: {
      title: 'VAT and Sales Tax Calculator — Add or Remove Tax',
      description:
        'Add VAT to a net price or remove tax from a gross price. Rate table showing the multiplier, the divisor and the tax share of the total.'
    },
    margin: {
      title: 'Profit Margin Calculator — Margin vs Markup',
      description:
        'Turn cost and revenue into a profit margin percentage, and convert between margin and markup with a conversion table.'
    },
    faq: {
      title: 'Percentage Calculator FAQ',
      description:
        'Answers to common questions about calculating percentages and about how this calculator works.'
    },
    about: {
      title: 'About CalcPercentages',
      description:
        'An independent, ad-light percentage calculator that loads fast and runs entirely in your browser.'
    },
    contact: {
      title: 'Contact CalcPercentages',
      description: 'Report an incorrect result, suggest a feature or ask a privacy question.'
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'What CalcPercentages collects, what it does not, and how analytics and advertising cookies are handled.'
    },
    terms: {
      title: 'Terms of Use',
      description: 'The conditions under which the CalcPercentages calculator is made available.'
    }
  },

  pt: {
    home: {
      title: 'Calculadora de Porcentagem — Rápida e Grátis',
      description:
        'Calcule qualquer porcentagem na hora. Porcentagem de um número, quanto por cento X é de Y, aumento, redução e variação percentual — com fórmulas e exemplos.'
    },
    discount: {
      title: 'Calculadora de Desconto — Preço com Desconto',
      description:
        'Descubra o preço final após um desconto percentual ou o desconto a partir dos preços de/por. Inclui tabela de descontos acumulados.'
    },
    tip: {
      title: 'Calculadora de Gorjeta — 10% e Taxa de Serviço',
      description:
        'Calcule a gorjeta em qualquer percentual e divida entre as pessoas. Inclui atalho mental e costumes de gorjeta por país.'
    },
    vat: {
      title: 'Calculadora de Imposto — Somar ou Retirar',
      description:
        'Some imposto a um preço líquido ou retire o imposto embutido de um preço cheio. Tabela com multiplicador, divisor e fatia do imposto.'
    },
    margin: {
      title: 'Calculadora de Margem de Lucro e Markup',
      description:
        'Converta custo e receita em margem de lucro percentual e faça a conversão entre margem e markup com tabela de equivalência.'
    },
    faq: {
      title: 'Perguntas Frequentes sobre Porcentagem',
      description:
        'Respostas às dúvidas mais comuns sobre cálculo de porcentagem e sobre como esta calculadora funciona.'
    },
    about: {
      title: 'Sobre o CalcPercentages',
      description:
        'Uma calculadora de porcentagem independente e leve, que carrega rápido e roda inteiramente no seu navegador.'
    },
    contact: {
      title: 'Contato — CalcPercentages',
      description: 'Relate um resultado errado, sugira uma funcionalidade ou tire dúvidas de privacidade.'
    },
    privacy: {
      title: 'Política de Privacidade',
      description:
        'O que o CalcPercentages coleta, o que não coleta e como são tratados os cookies de estatística e publicidade.'
    },
    terms: {
      title: 'Termos de Uso',
      description: 'As condições sob as quais a calculadora CalcPercentages é disponibilizada.'
    }
  },

  es: {
    home: {
      title: 'Calculadora de Porcentajes — Rápida y Gratis',
      description:
        'Calcula cualquier porcentaje al instante: porcentaje de un número, qué porcentaje es X de Y, aumentos, descuentos y variación porcentual.'
    }
  },

  fr: {
    home: {
      title: 'Calculatrice de Pourcentage — Rapide et Gratuite',
      description:
        'Calculez n\'importe quel pourcentage instantanément : pourcentage d\'un nombre, proportion, hausse, baisse et variation en pourcentage.'
    }
  },

  de: {
    home: {
      title: 'Prozentrechner — Schnell und Kostenlos',
      description:
        'Berechnen Sie jeden Prozentwert sofort: Prozent von einer Zahl, Anteil in Prozent, Zu- und Abschläge sowie prozentuale Veränderung.'
    }
  },

  it: {
    home: {
      title: 'Calcolatrice di Percentuale — Veloce e Gratis',
      description:
        'Calcola qualsiasi percentuale all\'istante: percentuale di un numero, quale percentuale è X di Y, aumenti, sconti e variazione percentuale.'
    }
  }
};

export const getSeo = (locale, page) => SEO[locale]?.[page] ?? SEO.en[page] ?? SEO.en.home;

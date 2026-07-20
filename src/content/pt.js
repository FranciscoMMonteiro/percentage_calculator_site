import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Calculadora de Porcentagem',
    lead:
      'Calcule qualquer porcentagem em um passo. Preencha dois campos e o terceiro aparece na hora — sem cadastro, sem anúncios dentro da ferramenta e funcionando offline depois que a página carrega.',
    sections: [
      {
        id: 'como-calcular-porcentagem',
        heading: 'Como calcular porcentagem',
        blocks: [
          'Porcentagem é apenas uma fração com 100 embaixo. "20%" significa 20 a cada 100, ou 0,20 em decimal. Todas as contas desta página saem dessa única ideia, e é por isso que quatro perguntas aparentemente diferentes se resumem ao mesmo punhado de fórmulas.',
          { h: '1. Quanto é X% de Y?' },
          { formula: 'resultado = base × (porcentagem ÷ 100)' },
          'É o caso do dia a dia: desconto, gorjeta, comissão. Para achar 20% de 150, converta 20% em 0,20 e multiplique: 150 × 0,20 = 30. Um atalho útil é que porcentagens são reversíveis — 20% de 150 e 150% de 20 dão os mesmos 30, então você pode inverter os números se um deles for mais fácil de calcular de cabeça.',
          { h: '2. X é quantos por cento de Y?' },
          { formula: 'porcentagem = (parte ÷ total) × 100' },
          'Use quando já tem os dois números e quer saber a relação entre eles. Se você acertou 45 de 180 questões: 45 ÷ 180 = 0,25, e 0,25 × 100 = 25%. A ordem importa — o número que você está medindo fica em cima, o total fica embaixo.',
          { h: '3. Aumentar ou diminuir um número em uma porcentagem' },
          { formula: 'resultado = base × (1 + porcentagem ÷ 100)' },
          'Somar 15% a 120 dá 120 × 1,15 = 138. Tirar 15% dá 120 × 0,85 = 102. Repare que uma coisa não desfaz a outra: somar 15% e depois tirar 15% deixa você em 117, não em 120, porque a segunda porcentagem incide sobre um número maior.',
          { h: '4. Variação percentual entre dois números' },
          { formula: 'variação = ((novo − antigo) ÷ antigo) × 100' },
          'Ir de 80 para 100 é ((100 − 80) ÷ 80) × 100 = 25% de aumento. Voltar de 100 para 80 é uma queda de 20%, e não de 25% — o valor de partida mudou, então a mesma diferença absoluta representa outra fatia dele. Essa assimetria confunde muita gente e vale memorizar.'
        ]
      },
      {
        id: 'tabela-de-porcentagens',
        heading: 'Tabela de porcentagens, frações e decimais',
        blocks: [
          'Os valores abaixo aparecem com frequência suficiente para que reconhecê-los dispense a calculadora.',
          {
            table: {
              head: ['Porcentagem', 'Fração', 'Decimal', 'Jeito rápido'],
              rows: [
                ['1%', '1/100', '0,01', 'Ande com a vírgula duas casas à esquerda'],
                ['5%', '1/20', '0,05', 'Pegue 10% e divida por dois'],
                ['10%', '1/10', '0,10', 'Ande com a vírgula uma casa à esquerda'],
                ['12,5%', '1/8', '0,125', 'Metade de 25%'],
                ['20%', '1/5', '0,20', 'O dobro de 10%'],
                ['25%', '1/4', '0,25', 'Metade, e metade de novo'],
                ['33,3%', '1/3', '0,333…', 'Divida por 3'],
                ['50%', '1/2', '0,50', 'Metade'],
                ['75%', '3/4', '0,75', 'Tire um quarto'],
                ['100%', '1/1', '1,00', 'O próprio número'],
                ['150%', '3/2', '1,50', 'O número mais a metade dele']
              ]
            }
          },
          'Ler a tabela no sentido inverso é igualmente útil: se disserem que um preço subiu "um terço", isso é um aumento de 33,3%, e o multiplicador que você precisa é 1,333.'
        ]
      },
      {
        id: 'onde-usar-porcentagem',
        heading: 'Onde a porcentagem aparece',
        blocks: [
          { h: 'Compras e descontos' },
          'Uma placa de "30% de desconto" significa que você paga 70% do preço original. Descontos acumulados se multiplicam em vez de somar — 20% off seguido de mais 10% off dá 0,8 × 0,9 = 0,72, ou seja, 28% de desconto no total, e não 30%.',
          { h: 'Gorjetas e taxa de serviço' },
          'No Brasil a taxa de serviço de 10% costuma vir impressa na conta e é opcional por lei. O cálculo é o clássico "X% de Y": ache 10% andando com a vírgula e ajuste a partir daí.',
          { h: 'Impostos' },
          'Imposto normalmente incide sobre um preço líquido, então uma alíquota de 21% significa multiplicar por 1,21. No caminho inverso — extrair o imposto de um preço com tributo embutido — você divide por 1,21, e não subtrai 21%.',
          { h: 'Notas e provas' },
          'Uma nota sobre um total qualquer é o caso "X é quantos por cento de Y". 34 acertos em 40 questões é 85%.',
          { h: 'Juros e rendimento' },
          'Juros são compostos, ou seja, cada período aplica a porcentagem sobre o resultado anterior. 5% ao ano por três anos dá um fator de 1,05³ = 1,157, ou 15,7% de crescimento total — bem mais do que os 15% que você obteria somando.'
        ]
      },
      {
        id: 'erros-comuns',
        heading: 'Três erros que vale evitar',
        blocks: [
          { h: 'Por cento e ponto percentual não são a mesma coisa' },
          'Se uma taxa de juros vai de 4% para 5%, isso é uma alta de um ponto percentual, mas um aumento de 25%. O noticiário mistura os dois o tempo todo, e a diferença é grande o bastante para mudar decisões.',
          { h: 'Variações percentuais não se desfazem de forma simétrica' },
          'Um valor que cai 50% precisa subir 100% para voltar ao ponto de partida. De modo geral, recuperar uma queda de p% exige um ganho de p ÷ (100 − p) × 100 por cento.',
          { h: 'Tirar média de porcentagens ignora a base' },
          'Uma aprovação de 90% numa turma de 10 alunos e de 50% numa turma de 100 não dão média de 70%. Pondere cada porcentagem pelo tamanho do grupo, ou trabalhe com os números absolutos.'
        ]
      }
    ],
    faq: [
      {
        q: 'Como calcular a porcentagem de um número?',
        a: 'Divida a porcentagem por 100 e multiplique pelo número. Para 20% de 150: 20 ÷ 100 = 0,2, então 150 × 0,2 = 30.'
      },
      {
        q: 'Como saber quantos por cento um número representa de outro?',
        a: 'Divida a parte pelo total e multiplique por 100. 45 de 180 é 45 ÷ 180 = 0,25, ou seja, 25%.'
      },
      {
        q: 'Como acrescentar uma porcentagem a um preço?',
        a: 'Multiplique por 1 mais a porcentagem em decimal. Acrescentar 21% é multiplicar por 1,21. Para tirar de novo, divida por 1,21 em vez de subtrair 21%.'
      },
      {
        q: 'Qual a diferença entre variação percentual e ponto percentual?',
        a: 'Ponto percentual mede a diferença bruta entre duas porcentagens. A variação percentual mede essa diferença em relação ao valor inicial. Ir de 4% para 5% é um ponto percentual e uma variação de 25%.'
      },
      {
        q: 'Por que uma perda de 50% exige um ganho de 100% para recuperar?',
        a: 'Porque o ganho é calculado sobre o valor já reduzido. 100 caindo 50% vira 50, e ir de 50 de volta para 100 é dobrar — um aumento de 100%.'
      },
      {
        q: 'A calculadora aceita vírgula como separador decimal?',
        a: 'Sim. O seletor no topo alterna entre ponto e vírgula, e a escolha fica salva no seu dispositivo.'
      },
      {
        q: 'Dois descontos seguidos se somam?',
        a: 'Não, eles se multiplicam. 20% e depois 10% dão 0,8 × 0,9 = 0,72 do preço original, um desconto total de 28%.'
      },
      {
        q: 'A calculadora é gratuita?',
        a: 'Sim. É gratuita, não exige cadastro e roda inteiramente no seu navegador — os números que você digita nunca são enviados a um servidor.'
      }
    ]
  },

  discount: {
    title: 'Calculadora de Desconto',
    lead:
      'Descubra o preço final depois de um desconto percentual, ou faça o caminho inverso e veja qual desconto você realmente recebeu.',
    sections: [
      {
        id: 'como-funciona-o-desconto',
        heading: 'Como o desconto é calculado',
        blocks: [
          'Um desconto retira uma fatia do preço original. "25% off" significa que você fica pagando 75% do preço, então a conta é uma única multiplicação, não uma subtração:',
          { formula: 'preço final = preço original × (1 − desconto ÷ 100)' },
          'Uma jaqueta de R$ 80 com 25% de desconto sai por 80 × 0,75 = R$ 60, e a economia é a diferença de R$ 20. Digite 80 na base e −25 na porcentagem acima para ver a conta.',
          { h: 'Descobrindo o desconto a partir do preço final' },
          'Se você tem os dois preços e quer o percentual, use o modo de variação percentual:',
          { formula: 'desconto = ((original − final) ÷ original) × 100' },
          'Uma jaqueta que caiu de R$ 80 para R$ 60 teve 25% de desconto. Esse é o caminho útil quando a loja anuncia "de/por" sem informar a porcentagem.'
        ]
      },
      {
        id: 'descontos-acumulados',
        heading: 'Descontos acumulados e cupons',
        blocks: [
          'Descontos aplicados em sequência se multiplicam — nunca se somam. Uma liquidação de 30% seguida de um cupom de 20% deixa você pagando 0,70 × 0,80 = 0,56 do original, um desconto total de 44% e não de 50%.',
          {
            table: {
              head: ['Primeiro desconto', 'Segundo desconto', 'Você paga', 'Desconto real total'],
              rows: [
                ['10%', '10%', '81%', '19%'],
                ['20%', '10%', '72%', '28%'],
                ['30%', '20%', '56%', '44%'],
                ['50%', '20%', '40%', '60%'],
                ['50%', '50%', '25%', '75%']
              ]
            }
          },
          { note: 'A ordem dos descontos acumulados nunca muda o preço final — multiplicação é comutativa. O que muda é se o imposto entra antes ou depois do desconto.' }
        ]
      }
    ],
    howTo: {
      name: 'Como calcular um preço com desconto',
      steps: [
        { name: 'Digite o preço original', text: 'Coloque o preço cheio no campo da base.' },
        { name: 'Digite o desconto', text: 'Coloque o desconto como porcentagem negativa, por exemplo −25 para 25% off.' },
        { name: 'Leia o preço final', text: 'O painel de resultado mostra quanto você vai pagar, e a diferença para o original é a sua economia.' }
      ]
    },
    faq: [
      {
        q: 'Como calcular 20% de desconto em um preço?',
        a: 'Multiplique o preço por 0,80. Um item de R$ 45 com 20% off sai por 45 × 0,8 = R$ 36, economizando R$ 9.'
      },
      {
        q: 'Como descobrir o preço original a partir do preço com desconto?',
        a: 'Divida o preço final por 1 menos o desconto. Um item de R$ 60 após 25% off custava 60 ÷ 0,75 = R$ 80.'
      },
      {
        q: '30% e 20% de desconto dão 50% off?',
        a: 'Não. Eles se multiplicam: 0,7 × 0,8 = 0,56, ou seja, 44% de desconto no total.'
      }
    ]
  },

  tip: {
    title: 'Calculadora de Gorjeta',
    lead:
      'Calcule a gorjeta em qualquer percentual, divida entre as pessoas da mesa e confira o costume local antes de pagar.',
    sections: [
      {
        id: 'como-calcular-gorjeta',
        heading: 'Como calcular a gorjeta',
        blocks: [
          'A gorjeta é uma porcentagem simples da conta:',
          { formula: 'gorjeta = conta × (porcentagem ÷ 100)' },
          'Numa conta de R$ 45, 10% são R$ 4,50 e 18% são R$ 8,10. No Brasil, os 10% de taxa de serviço costumam já vir na conta e são opcionais — você pode pedir para retirar.',
          { h: 'O atalho mental' },
          'Ache 10% andando com a vírgula uma casa à esquerda e construa a partir daí. Numa conta de R$ 86, 10% são R$ 8,60, então 15% são R$ 8,60 + R$ 4,30 = R$ 12,90 e 20% são R$ 17,20. Quase toda gorjeta que você vai precisar é uma combinação de 10%, metade de 10% e o dobro de 10%.',
          { h: 'Dividindo a conta' },
          'Divida o total com gorjeta pelo número de pessoas. Arredondar cada parte para cima é a forma usual de não acabar faltando dinheiro.'
        ]
      },
      {
        id: 'costumes-de-gorjeta',
        heading: 'Costumes de gorjeta pelo mundo',
        blocks: [
          'As regras variam bastante, e dar gorjeta demais num país que não espera isso pode ser tão constrangedor quanto dar de menos onde se espera.',
          {
            table: {
              head: ['País', 'Padrão em restaurantes', 'Observações'],
              rows: [
                ['Brasil', '10%', 'Costuma vir impresso na conta'],
                ['Estados Unidos', '15–20%', 'Esperado; o salário do garçom depende disso'],
                ['Canadá', '15–20%', 'Parecido com os EUA'],
                ['Portugal', '5–10%', 'Opcional, arredondar é comum'],
                ['Reino Unido', '10–12,5%', 'Muitas vezes já incluído como taxa de serviço'],
                ['França', 'Arredondar', 'Serviço incluído por lei'],
                ['Alemanha', '5–10%', 'Arredonde para um valor cheio'],
                ['Itália', '0–10%', 'O couvert costuma substituir a gorjeta'],
                ['Espanha', '0–10%', 'Deixar o troco é normal'],
                ['Japão', 'Nenhuma', 'Gorjeta pode ofender']
              ]
            }
          },
          { note: 'Sempre confira a conta antes de acrescentar gorjeta — a taxa de serviço pode já estar incluída, e nesse caso qualquer valor extra é totalmente opcional.' }
        ]
      }
    ],
    howTo: {
      name: 'Como calcular a gorjeta',
      steps: [
        { name: 'Digite o total da conta', text: 'Coloque o valor da conta no campo da base.' },
        { name: 'Digite a porcentagem', text: 'Coloque o percentual que quer deixar, como 10 ou 15.' },
        { name: 'Leia o valor da gorjeta', text: 'O resultado é a gorjeta. Some à conta para o total e divida pelo número de pessoas.' }
      ]
    },
    faq: [
      {
        q: 'Quanto é 10% de gorjeta em uma conta de R$ 120?',
        a: 'R$ 12. Basta andar com a vírgula uma casa à esquerda.'
      },
      {
        q: 'A taxa de serviço de 10% é obrigatória no Brasil?',
        a: 'Não. É uma sugestão e o cliente pode pedir a retirada, embora seja costume pagar quando o atendimento foi bom.'
      },
      {
        q: 'A gorjeta é calculada antes ou depois do couvert?',
        a: 'O costume é calcular sobre o consumo, incluindo o couvert quando ele aparece como item da conta.'
      }
    ]
  },

  vat: {
    title: 'Calculadora de Imposto',
    lead:
      'Some imposto a um preço líquido ou retire o imposto embutido de um preço cheio para achar o valor antes de tributo.',
    sections: [
      {
        id: 'somar-e-retirar-imposto',
        heading: 'Somar e retirar imposto',
        blocks: [
          { h: 'Somando imposto a um preço líquido' },
          { formula: 'preço cheio = líquido × (1 + alíquota ÷ 100)' },
          'Com alíquota de 20%, um preço líquido de 250 vira 250 × 1,20 = 300, dos quais 50 são imposto.',
          { h: 'Retirando o imposto de um preço cheio' },
          { formula: 'líquido = cheio ÷ (1 + alíquota ÷ 100)' },
          'É aqui que a maioria erra. Um preço cheio de 300 com 20% de imposto não é 300 − 20% = 240. É 300 ÷ 1,20 = 250, porque os 20% foram cobrados sobre o valor menor. O imposto é a diferença de 50.',
          { note: 'Regra prática: para somar imposto você multiplica; para retirar, divide. Subtrair a porcentagem do preço cheio sempre subestima o valor líquido.' }
        ]
      },
      {
        id: 'imposto-por-fora-e-por-dentro',
        heading: 'Imposto por fora e por dentro',
        blocks: [
          'No Brasil boa parte dos tributos é calculada "por dentro", ou seja, a alíquota incide sobre um preço que já contém o próprio imposto — é o caso do ICMS. Já o sales tax norte-americano é cobrado "por fora", somado no caixa sobre o preço anunciado. A aritmética é a mesma; o que muda é se o número que você está olhando já contém o tributo.',
          {
            table: {
              head: ['Alíquota', 'Multiplique por (somar)', 'Divida por (retirar)', 'Imposto sobre o preço cheio'],
              rows: [
                ['5%', '1,05', '1,05', '4,76%'],
                ['7,5%', '1,075', '1,075', '6,98%'],
                ['10%', '1,10', '1,10', '9,09%'],
                ['12%', '1,12', '1,12', '10,71%'],
                ['18%', '1,18', '1,18', '15,25%'],
                ['20%', '1,20', '1,20', '16,67%'],
                ['21%', '1,21', '1,21', '17,36%'],
                ['25%', '1,25', '1,25', '20,00%']
              ]
            }
          },
          'A última coluna explica uma surpresa comum: com alíquota de 25%, o imposto representa 20% do que você efetivamente paga, e não 25%.'
        ]
      }
    ],
    howTo: {
      name: 'Como somar imposto a um preço',
      steps: [
        { name: 'Digite o preço líquido', text: 'Coloque o preço antes do imposto no campo da base.' },
        { name: 'Digite a alíquota', text: 'Coloque a alíquota como porcentagem positiva.' },
        { name: 'Leia o preço cheio', text: 'O resultado é o preço com imposto; a diferença para o líquido é o tributo.' }
      ]
    },
    faq: [
      {
        q: 'Como retirar 20% de imposto de um preço?',
        a: 'Divida por 1,20. Um preço cheio de R$ 120 tem líquido de 120 ÷ 1,2 = R$ 100 e R$ 20 de imposto.'
      },
      {
        q: 'Por que não posso simplesmente subtrair a alíquota?',
        a: 'Porque a alíquota foi aplicada sobre o preço líquido, que é menor que o cheio. Subtrair do cheio retira demais.'
      },
      {
        q: 'Que fatia de um preço cheio é imposto a 21%?',
        a: '21 ÷ 121 = 17,36% do total que você paga.'
      }
    ]
  },

  margin: {
    title: 'Calculadora de Margem de Lucro',
    lead:
      'Transforme custo e receita em margem percentual e entenda por que margem e markup não são a mesma coisa.',
    sections: [
      {
        id: 'formula-da-margem',
        heading: 'Como calcular a margem de lucro',
        blocks: [
          'A margem expressa o lucro como fatia da receita:',
          { formula: 'margem = ((receita − custo) ÷ receita) × 100' },
          'Vender por 250 algo que custou 175 dá lucro de 75, e 75 ÷ 250 = 30% de margem. Como o denominador é a receita, a margem nunca chega a 100% — isso significaria custo zero.',
          { h: 'Margem bruta, operacional e líquida' },
          'A fórmula é a mesma em todos os níveis; o que muda é o que entra como "custo". A margem bruta desconta o custo direto da mercadoria. A operacional desconta também salários, aluguel e demais despesas. A líquida desconta tudo, inclusive impostos e juros. Comparar sua margem bruta com a margem líquida de um concorrente não diz nada.'
        ]
      },
      {
        id: 'margem-vs-markup',
        heading: 'Margem não é markup',
        blocks: [
          'O markup mede o mesmo lucro em relação ao custo, e não à receita:',
          { formula: 'markup = ((receita − custo) ÷ custo) × 100' },
          'Os mesmos 175 de custo e 250 de preço são 30% de margem, mas 42,9% de markup. Citar um quando se quer dizer o outro é uma forma confiável de precificar abaixo do necessário, e a distância aumenta conforme os números crescem.',
          {
            table: {
              head: ['Markup', 'Margem equivalente', 'Multiplicador sobre o custo'],
              rows: [
                ['10%', '9,1%', '1,10'],
                ['25%', '20,0%', '1,25'],
                ['33,3%', '25,0%', '1,33'],
                ['50%', '33,3%', '1,50'],
                ['100%', '50,0%', '2,00'],
                ['200%', '66,7%', '3,00']
              ]
            }
          },
          'Para converter: margem = markup ÷ (100 + markup) × 100.'
        ]
      }
    ],
    howTo: {
      name: 'Como calcular a margem de lucro',
      steps: [
        { name: 'Digite o lucro', text: 'Coloque receita menos custo no primeiro campo.' },
        { name: 'Digite a receita', text: 'Coloque a receita total no segundo campo.' },
        { name: 'Leia a margem', text: 'O resultado é a margem de lucro como porcentagem da receita.' }
      ]
    },
    faq: [
      {
        q: 'Qual a diferença entre margem e markup?',
        a: 'A margem divide o lucro pela receita; o markup divide o mesmo lucro pelo custo. Um markup de 50% é apenas 33,3% de margem.'
      },
      {
        q: 'A margem de lucro pode passar de 100%?',
        a: 'Não. Como o lucro é sempre menor que a receita numa venda lucrativa, a margem se aproxima de 100% mas nunca chega. O markup não tem limite.'
      },
      {
        q: 'Qual é uma boa margem de lucro?',
        a: 'Depende inteiramente do setor. Supermercados trabalham com poucos por cento, enquanto software pode passar de 70%. Compare com concorrentes, não com um número absoluto.'
      }
    ]
  },

  faq: {
    title: 'Perguntas Frequentes',
    lead: 'Dúvidas comuns sobre cálculo de porcentagem e sobre o funcionamento do site.',
    sections: [
      {
        id: 'sobre-a-ferramenta',
        heading: 'Sobre a calculadora',
        blocks: [
          'A calculadora resolve o campo que você deixar vazio. Preencha dois entre base, porcentagem e resultado, e o terceiro aparece enquanto você digita — não há botão para apertar.',
          'Tudo roda no seu navegador. Os números digitados nunca são enviados a lugar nenhum, o que também significa que a ferramenta continua funcionando se a conexão cair depois que a página carregou.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quais dois campos devo preencher?',
        a: 'Quaisquer dois. A calculadora identifica qual valor está faltando e resolve para ele, então o mesmo formulário serve para achar uma porcentagem, uma parte ou um total.'
      },
      {
        q: 'Como alternar entre os tipos de cálculo?',
        a: 'Use as abas acima do formulário: porcentagem de um número, quanto por cento um número é de outro, aumento ou redução, e variação percentual entre dois valores.'
      },
      {
        q: 'Posso usar vírgula como separador decimal?',
        a: 'Sim. Escolha o separador no topo da página. A opção fica salva no seu dispositivo e vale tanto para o que você digita quanto para os resultados.'
      },
      {
        q: 'O site está disponível em outros idiomas?',
        a: 'A calculadora está em português, inglês, espanhol, francês, alemão e italiano. Use o seletor de idioma no topo.'
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim. O layout se adapta a telas pequenas e os campos numéricos abrem o teclado numérico no celular.'
      },
      {
        q: 'Qual a precisão dos resultados?',
        a: 'Os cálculos usam ponto flutuante de dupla precisão e os resultados são arredondados para exibição. Para uso contábil, arredonde explicitamente na etapa exigida pela sua norma em vez de confiar no valor exibido.'
      },
      {
        q: 'Como relatar um erro?',
        a: `Escreva para ${CONTACT_EMAIL} com os números que você digitou e o que esperava. Relatos reproduzíveis são corrigidos rápido.`
      },
      {
        q: 'A calculadora é gratuita?',
        a: 'Sim, totalmente gratuita e sem necessidade de cadastro.'
      }
    ]
  },

  about: {
    title: 'Sobre o CalcPercentages',
    lead:
      'Um site pequeno e independente que faz uma coisa só: contas de porcentagem, rápido e sem atrapalhar.',
    sections: [
      {
        id: 'o-que-e-o-site',
        heading: 'O que é este site',
        blocks: [
          'O CalcPercentages é um projeto independente, não uma empresa. Ele existe porque a maioria das calculadoras de porcentagem na internet enterra uma ferramenta simples embaixo de pop-ups, cadastros forçados e três telas de rolagem antes de os campos aparecerem.',
          'O objetivo de design é que a calculadora esteja utilizável um segundo depois de a página abrir, no celular, numa conexão ruim. Todo o resto — explicações, tabelas de referência, exemplos resolvidos — fica abaixo da ferramenta, onde ajuda quem quer e não estorva quem não quer.'
        ]
      },
      {
        id: 'como-funciona',
        heading: 'Como funciona',
        blocks: [
          'O site é uma aplicação estática pré-renderizada. Cada página é HTML puro entregue por CDN, e a calculadora interativa assume assim que o JavaScript carrega. Não há backend nem banco de dados.',
          'Os cálculos acontecem inteiramente no seu dispositivo. Nada do que você digita é enviado, registrado ou armazenado.',
          { h: 'Precisão' },
          'As fórmulas usadas estão documentadas abertamente em cada página para que você possa conferir a conta. Se encontrar um resultado que pareça errado, por favor avise — veja a página de contato.'
        ]
      },
      {
        id: 'outras-ferramentas',
        heading: 'Ferramentas relacionadas',
        blocks: [
          'A mesma abordagem foi aplicada a duas calculadoras irmãs: uma calculadora de matrizes em matrixcalc.net e uma calculadora de dias úteis em calcworkdays.com.'
        ]
      }
    ]
  },

  contact: {
    title: 'Contato',
    lead: 'Correções, relatos de erro e sugestões são todos bem-vindos.',
    sections: [
      {
        id: 'fale-conosco',
        heading: 'Fale com o site',
        blocks: [
          `A forma mais rápida de chegar até aqui é por e-mail: ${CONTACT_EMAIL}`,
          { h: 'Relatando um resultado errado' },
          'Inclua o modo de cálculo que estava usando, os números exatos que digitou, o resultado que apareceu e o que você esperava. Isso costuma bastar para reproduzir e corrigir no mesmo dia.',
          { h: 'Outros assuntos' },
          'Pedidos de funcionalidade, correções de tradução, problemas de acessibilidade e questões de publicidade vão para o mesmo endereço. As respostas costumam levar alguns dias úteis.'
        ]
      },
      {
        id: 'pedidos-de-privacidade',
        heading: 'Pedidos sobre privacidade',
        blocks: [
          'Para dúvidas sobre tratamento de dados, ou para exercer um direito previsto na LGPD, no GDPR ou no CCPA, use o mesmo e-mail e mencione sob qual norma está escrevendo. Veja na política de privacidade o que é e o que não é coletado.'
        ]
      }
    ]
  },

  privacy: {
    title: 'Política de Privacidade',
    lead: 'O que este site coleta, o que não coleta e quais terceiros estão envolvidos.',
    sections: [
      {
        id: 'resumo',
        heading: 'Versão curta',
        blocks: [
          'Este site não pede, não coleta e não armazena nenhuma informação pessoal. Os números que você digita na calculadora nunca saem do seu dispositivo. Não há sistema de contas, newsletter nem formulário de contato guardando o que você escreve.',
          'Duas coisas envolvem terceiros: estatísticas anônimas de tráfego e — quando ativada — a publicidade. Ambas estão descritas abaixo.'
        ]
      },
      {
        id: 'dados-no-dispositivo',
        heading: 'Dados guardados no seu dispositivo',
        blocks: [
          'O site guarda duas preferências pequenas no armazenamento local do seu navegador para lembrá-las entre visitas:',
          {
            ul: [
              'O idioma escolhido para a interface.',
              'O separador decimal escolhido (ponto ou vírgula).'
            ]
          },
          'Esses dados nunca saem do seu navegador e não são legíveis por quem opera o site. Limpar os dados do navegador remove ambos.'
        ]
      },
      {
        id: 'estatisticas',
        heading: 'Estatísticas de acesso',
        blocks: [
          'O site usa o Vercel Web Analytics para contar visualizações de página. Ele não usa cookies e não monta um perfil seu nem te acompanha por outros sites. Registra informações agregadas como a página visitada, o site de origem, o país e o tipo de navegador e dispositivo.',
          'Nenhum endereço IP é armazenado de forma que identifique um visitante individual.'
        ]
      },
      {
        id: 'publicidade',
        heading: 'Publicidade e cookies',
        blocks: [
          'Este site pode exibir anúncios veiculados pelo Google AdSense. Quando a publicidade estiver ativa, valem os pontos a seguir:',
          {
            ul: [
              'Fornecedores terceiros, incluindo o Google, usam cookies para exibir anúncios com base nas suas visitas anteriores a este e a outros sites.',
              'O uso de cookies de publicidade pelo Google permite que ele e seus parceiros exibam anúncios com base na sua visita a este site e a outros sites da internet.',
              'Você pode desativar a publicidade personalizada nas Configurações de anúncios do Google, em adssettings.google.com.',
              'É possível desativar cookies de fornecedores terceiros de forma mais ampla em aboutads.info/choices ou youronlinechoices.eu.',
              'Alguns fornecedores podem usar o cookie DoubleClick DART ou identificadores semelhantes, regidos pelas suas próprias políticas de privacidade.'
            ]
          },
          'Visitantes no Espaço Econômico Europeu, no Reino Unido e na Suíça veem um aviso de consentimento antes que qualquer cookie de publicidade personalizada seja gravado, e anúncios personalizados só são exibidos mediante consentimento.'
        ]
      },
      {
        id: 'seus-direitos',
        heading: 'Seus direitos',
        blocks: [
          'Como nenhum dado pessoal é coletado ou mantido por este site, em geral não há nada a acessar, corrigir ou excluir. Se você entender de outra forma, ou quiser exercer um direito previsto na LGPD, no GDPR ou no CCPA, escreva para o endereço da página de contato e o pedido será tratado dentro do prazo legal.',
          { h: 'Crianças' },
          'Este site não é direcionado a crianças menores de 13 anos e não coleta conscientemente informações delas.',
          { h: 'Links externos' },
          'Algumas páginas apontam para outras calculadoras e referências de terceiros. Esses sites têm políticas próprias, que não são cobertas por esta.'
        ]
      },
      {
        id: 'alteracoes',
        heading: 'Alterações nesta política',
        blocks: [
          'Se esta política mudar — por exemplo quando a publicidade for ativada — a versão revisada será publicada nesta página com nova data no topo. Continuar usando o site após uma alteração significa aceitar a versão revisada.'
        ]
      }
    ]
  },

  terms: {
    title: 'Termos de Uso',
    lead: 'As condições sob as quais este site é disponibilizado.',
    sections: [
      {
        id: 'aceitacao',
        heading: 'Aceitação',
        blocks: [
          'Ao usar o CalcPercentages você concorda com estes termos. Se não concordar com eles, por favor não use o site.'
        ]
      },
      {
        id: 'uso-do-site',
        heading: 'Uso do site',
        blocks: [
          'A calculadora e os textos que a acompanham são oferecidos gratuitamente para uso pessoal e comercial. Você pode usar os resultados no seu próprio trabalho sem precisar citar a fonte.',
          'Não é permitido tentar prejudicar o funcionamento do site, usar sistemas automatizados para sobrecarregá-lo ou apresentá-lo como serviço próprio.'
        ]
      },
      {
        id: 'sem-garantia',
        heading: 'Precisão e isenção de responsabilidade',
        blocks: [
          'Há cuidado considerável na elaboração das fórmulas e dos exemplos deste site, mas a ferramenta é fornecida "como está", sem garantia de qualquer natureza, expressa ou implícita.',
          'Nada aqui constitui aconselhamento financeiro, tributário, contábil ou jurídico. Cálculo de porcentagem é apenas um insumo de decisões que normalmente dependem de regras específicas da sua jurisdição e da sua situação. Confira qualquer resultado relevante antes de confiar nele e consulte um profissional habilitado quando for o caso.',
          'Na máxima extensão permitida em lei, quem opera este site não se responsabiliza por perdas decorrentes do uso do site ou da confiança em seu conteúdo.'
        ]
      },
      {
        id: 'disponibilidade',
        heading: 'Disponibilidade e mudanças',
        blocks: [
          'O site é oferecido sem qualquer garantia de disponibilidade. Funcionalidades, conteúdo e estes termos podem mudar a qualquer momento, sem aviso prévio.'
        ]
      },
      {
        id: 'propriedade-intelectual',
        heading: 'Propriedade intelectual',
        blocks: [
          'Os textos explicativos, as tabelas de referência e o design deste site pertencem a quem o opera. As fórmulas matemáticas em si não pertencem a ninguém; você pode usá-las livremente.'
        ]
      },
      {
        id: 'duvidas-termos',
        heading: 'Dúvidas',
        blocks: [
          `Dúvidas sobre estes termos podem ser enviadas para ${CONTACT_EMAIL}.`
        ]
      }
    ]
  }
};

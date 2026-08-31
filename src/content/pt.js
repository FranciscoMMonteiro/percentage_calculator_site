import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Calculadora de Porcentagem',
    lead:
      'Calcule qualquer porcentagem em um passo e veja a conta por trás do resultado. Preencha dois campos e o terceiro aparece na hora — sem cadastro, sem anúncios dentro da ferramenta e funcionando offline depois que a página carrega.',
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
          'Gorjeta é um "X% de Y" puro, calculado sobre o valor do consumo. O método mental mais rápido é achar 10% andando com a vírgula e depois escalar: 15% é 10% mais a metade disso.',
          { h: 'Impostos' },
          'O imposto costuma ser somado a um preço líquido, então uma alíquota de 21% significa multiplicar por 1,21. No sentido inverso — tirar o imposto embutido de um preço cheio — é preciso dividir por 1,21, e não subtrair 21%.',
          { h: 'Notas e provas' },
          'Uma nota sobre um total qualquer é o caso "X é quantos por cento de Y". 34 de 40 é 85%.',
          { h: 'Salário e reajuste' },
          'Um aumento é uma variação percentual sobre o salário atual, mas o que importa é o aumento descontada a inflação. Um reajuste de 3% em um ano de 4% de inflação deixa você um pouco pior do que estava.',
          { h: 'Juros e crescimento' },
          'Juros são compostos, ou seja, cada período aplica a porcentagem sobre o resultado anterior. 5% ao ano por três anos é um fator de 1,05³ = 1,157, ou 15,7% de crescimento total — bem mais do que os 15% que a soma sugeriria.'
        ]
      },
      {
        id: 'erros-comuns',
        heading: 'Três erros que vale evitar',
        blocks: [
          { h: 'Por cento e ponto percentual não são a mesma coisa' },
          'Se uma taxa de juros vai de 4% para 5%, isso é uma alta de um ponto percentual, mas de 25% em termos relativos. O noticiário mistura as duas coisas o tempo todo, e a diferença é grande o bastante para mudar decisões.',
          { h: 'Variações percentuais não se desfazem simetricamente' },
          'Um valor que cai 50% precisa subir 100% para voltar ao ponto de partida. De modo geral, recuperar uma queda de p% exige um ganho de p ÷ (100 − p) × 100 por cento.',
          { h: 'Tirar a média de porcentagens ignora a base' },
          'Uma taxa de aprovação de 90% em uma turma de 10 e de 50% em uma turma de 100 não dão média de 70%. Pondere cada porcentagem pelo tamanho do grupo, ou trabalhe com os números brutos.',
          'Outros três desses erros — escolher a base errada, tirar porcentagem de porcentagem e confundir percentil com porcentagem — estão detalhados na página de erros comuns.'
        ]
      },
      {
        id: 'o-resto-do-site',
        heading: 'O resto do site',
        blocks: [
          'A calculadora acima resolve os quatro casos gerais. As páginas abaixo pegam uma situação específica e vão mais fundo, cada uma com seus próprios exemplos resolvidos e tabelas de referência.',
          {
            table: {
              head: ['Página', 'Use quando'],
              rows: [
                ['Calculadora de desconto', 'Um preço foi reduzido, ou você quer o preço original a partir do preço com desconto'],
                ['Calculadora de gorjeta', 'Você vai dividir a conta e quer conferir o costume local'],
                ['Calculadora de imposto', 'É preciso somar imposto a um preço ou tirar o imposto embutido dele'],
                ['Margem de lucro', 'Você está formando preço e precisa de margem, não de markup'],
                ['Aumento salarial', 'Uma proposta precisa virar porcentagem, ou ser comparada com a inflação'],
                ['Pontos percentuais', 'Duas porcentagens precisam ser comparadas e cada medida precisa de nome'],
                ['Fórmulas de porcentagem', 'Você quer todas as fórmulas e suas inversas em uma página só'],
                ['Cálculo mental', 'Você quer parar de precisar da calculadora nos casos comuns'],
                ['Erros comuns', 'Um resultado percentual parece errado e você quer saber por quê']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: 'Como calcular a porcentagem de um número?',
        a: 'Divida a porcentagem por 100 e multiplique pelo número. Para 20% de 150: 20 ÷ 100 = 0,2, e 150 × 0,2 = 30.'
      },
      {
        q: 'Como descobrir quantos por cento um número é de outro?',
        a: 'Divida a parte pelo total e multiplique por 100. 45 de 180 é 45 ÷ 180 = 0,25, ou seja, 25%.'
      },
      {
        q: 'Como somar uma porcentagem a um preço?',
        a: 'Multiplique por 1 mais a porcentagem em decimal. Somar 21% é multiplicar por 1,21. Para tirar depois, divida por 1,21 em vez de subtrair 21%.'
      },
      {
        q: 'Qual a diferença entre variação percentual e ponto percentual?',
        a: 'Ponto percentual é a diferença bruta entre duas porcentagens. Variação percentual mede essa diferença em relação ao valor inicial. Ir de 4% para 5% é um ponto percentual e uma variação de 25%.'
      },
      {
        q: 'Por que uma perda de 50% exige um ganho de 100% para recuperar?',
        a: 'Porque o ganho é calculado sobre o valor já reduzido. 100 caindo 50% vira 50, e ir de 50 de volta a 100 é dobrar — um aumento de 100%.'
      },
      {
        q: 'A calculadora aceita vírgula como separador decimal?',
        a: 'Sim. O controle no topo alterna entre ponto e vírgula, e a escolha fica salva no seu aparelho.'
      },
      {
        q: 'Dois descontos acumulados se somam?',
        a: 'Não, eles se multiplicam. 20% off e depois 10% off dá 0,8 × 0,9 = 0,72 do preço original, um desconto total de 28%.'
      },
      {
        q: 'A calculadora mostra como chegou ao resultado?',
        a: 'Sim. Assim que dois campos são preenchidos, o painel lista a conta passo a passo com os seus próprios números, para você conferir cada linha em vez de confiar no total.'
      },
      {
        q: 'Esta calculadora de porcentagem é gratuita?',
        a: 'Sim. É gratuita, não exige cadastro e roda inteiramente no seu navegador — os números que você digita nunca vão para um servidor.'
      }
    ]
  },

  discount: {
    title: 'Calculadora de Desconto',
    lead:
      'Descubra o preço final depois de um desconto, volte do preço promocional para o desconto que você realmente recebeu e veja no que dão as promoções acumuladas.',
    sections: [
      {
        id: 'como-funciona-o-desconto',
        heading: 'Como o desconto é calculado',
        blocks: [
          'Um desconto retira uma fatia do preço original. "25% off" significa que você fica com 75% do preço, então a conta é uma única multiplicação, e não uma subtração:',
          { formula: 'preço final = preço original × (1 − desconto ÷ 100)' },
          'Uma jaqueta de R$ 80 com 25% off sai por 80 × 0,75 = R$ 60, e a economia é a diferença de R$ 20. Digite 80 como base e −25 como porcentagem acima para ver a conta linha a linha.',
          'Vale preferir a forma multiplicativa a "calcular 25% de 80 e depois subtrair", mesmo que as duas deem R$ 60. É uma operação em vez de duas, se estende direto para promoções acumuladas e torna óbvia a conta inversa: se multiplicar por 0,75 leva até lá, dividir por 0,75 traz de volta.',
          { h: 'Voltando a partir do preço com desconto' },
          'Se você conhece os dois preços e quer o desconto, use o modo de variação percentual:',
          { formula: 'desconto = ((original − final) ÷ original) × 100' },
          'Uma jaqueta que caiu de R$ 80 para R$ 60 teve 25% de desconto. É o sentido útil quando a loja anuncia "de/por" sem dizer a porcentagem — e o sentido que desmascara o "de" inflado, porque uma porcentagem alta sobre um preço que ninguém pagou não é uma economia alta.'
        ]
      },
      {
        id: 'preco-original',
        heading: 'Recuperando o preço original',
        blocks: [
          'O terceiro sentido é o mais pedido e o mais errado: você sabe o preço com desconto e a porcentagem, e quer o preço de antes.',
          { formula: 'preço original = preço final ÷ (1 − desconto ÷ 100)' },
          'Um casaco a R$ 91 depois de 30% off custava 91 ÷ 0,70 = R$ 130. O instinto de somar 30% de volta está errado: R$ 91 + 30% dá R$ 118,30, quase R$ 12 a menos, porque os 30% saíram do preço original, que era maior, e não do preço promocional.',
          { note: 'A regra vale sempre. Para desfazer qualquer variação percentual você divide pelo multiplicador que teria usado. Somar a mesma porcentagem de volta nunca devolve o ponto de partida.' },
          {
            table: {
              head: ['Desconto', 'Você paga (multiplicador)', 'Para voltar, divida por', 'Somar a % de volta dá'],
              rows: [
                ['10%', '0,90', '0,90', '99,0% do original'],
                ['20%', '0,80', '0,80', '96,0% do original'],
                ['25%', '0,75', '0,75', '93,8% do original'],
                ['30%', '0,70', '0,70', '91,0% do original'],
                ['40%', '0,60', '0,60', '84,0% do original'],
                ['50%', '0,50', '0,50', '75,0% do original'],
                ['70%', '0,30', '0,30', '51,0% do original']
              ]
            }
          },
          'A última coluna mostra o tamanho do erro de somar a porcentagem de volta em vez de dividir, e ele cresce rápido: em um item com 50% off, o atalho deixa você um quarto abaixo do preço original real.'
        ]
      },
      {
        id: 'descontos-acumulados',
        heading: 'Descontos acumulados e cupons',
        blocks: [
          'Descontos aplicados em sequência se multiplicam — eles nunca simplesmente somam. Uma liquidação de 30% seguida de um cupom de 20% deixa você pagando 0,70 × 0,80 = 0,56 do original, um desconto total de 44% e não de 50%.',
          {
            table: {
              head: ['Primeiro desconto', 'Segundo desconto', 'Você paga', 'Desconto total real'],
              rows: [
                ['10%', '10%', '81%', '19%'],
                ['20%', '10%', '72%', '28%'],
                ['30%', '20%', '56%', '44%'],
                ['50%', '20%', '40%', '60%'],
                ['50%', '50%', '25%', '75%']
              ]
            }
          },
          { note: 'A ordem dos descontos acumulados nunca muda o preço final — a multiplicação é comutativa. O que muda é se o imposto entra antes ou depois do desconto.' },
          'Dois descontos de 50% são o caso mais claro: você paga um quarto do preço, e não zero. Qualquer promessa de que promoções acumuladas chegam a 100% de desconto é aritmeticamente impossível, porque cada multiplicador é maior que zero.'
        ]
      },
      {
        id: 'desconto-e-imposto',
        heading: 'Desconto, imposto e a ordem das contas',
        blocks: [
          'Onde o imposto entra em relação ao desconto muda o que você paga, e é por isso que o cupom fiscal às vezes discorda da conta mental.',
          'No Brasil e na Europa o preço de etiqueta já inclui o imposto, então uma porcentagem sobre a etiqueta reduz o imposto na mesma proporção e a ordem é invisível para você. No modelo norte-americano o preço é anunciado sem imposto, o desconto incide sobre esse valor e o imposto é somado depois, sobre o valor já reduzido.',
          { formula: 'você paga = preço × (1 − desconto ÷ 100) × (1 + imposto ÷ 100)' },
          'Um item de US$ 200 com 25% off e 8% de imposto sai por 200 × 0,75 × 1,08 = US$ 162. Aplicar o imposto primeiro e o desconto depois dá exatamente os mesmos US$ 162 — a multiplicação não se importa com a ordem. O que importa é um desconto que legalmente só incide sobre parte da conta, como um cupom que exclui taxas e frete, porque aí as duas operações deixam de usar a mesma base.',
          { h: 'Desconto percentual e desconto em reais' },
          'Um vale de R$ 20 e um desconto de 20% valem o mesmo apenas em um preço de R$ 100. Abaixo disso o valor fixo vale mais; acima, a porcentagem. Numa compra de R$ 160, R$ 20 de desconto ganham de 10% off, mas perdem para 20% off.'
        ]
      }
    ],
    howTo: {
      name: 'Como calcular o preço com desconto',
      steps: [
        { name: 'Digite o preço original', text: 'Coloque o preço cheio no campo de base.' },
        { name: 'Digite o desconto', text: 'Coloque o desconto como porcentagem negativa, por exemplo −25 para 25% off.' },
        { name: 'Leia o preço final', text: 'O painel mostra quanto você vai pagar, e a diferença para o original é a sua economia.' },
        { name: 'Confira a conta', text: 'Os passos abaixo do resultado mostram o multiplicador usado e a multiplicação em si, para você confirmar o número em vez de aceitá-lo.' }
      ]
    },
    faq: [
      {
        q: 'Como calcular 20% de desconto em um preço?',
        a: 'Multiplique o preço por 0,80. Um item de R$ 45 com 20% off sai por 45 × 0,8 = R$ 36, economizando R$ 9.'
      },
      {
        q: 'Como descobrir o preço original a partir do preço com desconto?',
        a: 'Divida o preço final por 1 menos o desconto. Um item de R$ 60 após 25% off custava 60 ÷ 0,75 = R$ 80. Somar 25% aos R$ 60 dá R$ 75, o que está errado.'
      },
      {
        q: '30% e 20% de desconto dão 50% off?',
        a: 'Não. Eles se multiplicam: 0,7 × 0,8 = 0,56, ou seja, 44% de desconto no total.'
      },
      {
        q: 'A ordem dos descontos muda o preço?',
        a: 'Não. A multiplicação é comutativa, então 30% e depois 20% ou 20% e depois 30% deixam você pagando 56% do original. A ordem só importa quando um desconto incide sobre parte da conta.'
      },
      {
        q: 'Um vale de R$ 20 é melhor que 20% off?',
        a: 'Só abaixo de R$ 100. Em exatamente R$ 100 eles empatam, e acima disso a porcentagem economiza mais. Numa compra de R$ 160, 20% off economiza R$ 32 contra os R$ 20 do vale.'
      },
      {
        q: 'Quanto economizo com 33% de desconto?',
        a: 'Um terço do preço. Divida por 3 para saber a economia e multiplique por 0,67 para saber quanto vai pagar — um item de R$ 90 sai por cerca de R$ 60,30 e economiza R$ 29,70.'
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
          'Em uma conta de R$ 45, 10% dá R$ 4,50 e 18% dá R$ 8,10. No Brasil os 10% costumam vir impressos como taxa de serviço, que é opcional por lei; em outros países a base de cálculo e o percentual mudam bastante.',
          { h: 'O atalho mental' },
          'Ache 10% andando com a vírgula uma casa à esquerda e construa a partir daí. Em uma conta de R$ 86, 10% é R$ 8,60, então 15% é R$ 8,60 + R$ 4,30 = R$ 12,90 e 20% é R$ 17,20. Praticamente toda gorjeta que você vai precisar é uma combinação de 10%, metade de 10% e o dobro de 10%.',
          {
            table: {
              head: ['Você quer', 'Partindo de 10%', 'Em R$ 86'],
              rows: [
                ['5%', 'Metade de 10%', 'R$ 4,30'],
                ['10%', 'Ande com a vírgula', 'R$ 8,60'],
                ['12,5%', '10% mais um quarto disso', 'R$ 10,75'],
                ['15%', '10% mais a metade disso', 'R$ 12,90'],
                ['18%', 'O dobro de 10%, menos um quinto de 10%', 'R$ 15,48'],
                ['20%', 'O dobro de 10%', 'R$ 17,20'],
                ['25%', 'O dobro de 10%, mais a metade de 10%', 'R$ 21,50']
              ]
            }
          }
        ]
      },
      {
        id: 'dividindo-a-conta',
        heading: 'Dividindo a conta',
        blocks: [
          'O caso simples é uma divisão: some a gorjeta à conta e divida pelo número de pessoas.',
          { formula: 'cada pessoa paga = conta × (1 + gorjeta ÷ 100) ÷ pessoas' },
          'Uma conta de R$ 140 com 18% de gorjeta dá R$ 165,20, que entre cinco pessoas são R$ 33,04 cada. Arredondar cada parte para cima é o jeito habitual de evitar que o total falte — cinco pessoas pagando R$ 34 cobrem a conta com R$ 4,80 de sobra, que costuma ser a intenção.',
          { h: 'Dividindo de forma desigual' },
          'Quando as pessoas pediram coisas muito diferentes, dividir a gorjeta na proporção do consumo de cada um é mais justo do que dividir por igual, e é uma multiplicação só: cada um paga o próprio consumo vezes o mesmo fator.',
          { formula: 'sua parte = seu consumo × (1 + gorjeta ÷ 100)' },
          'Numa mesa em que uma pessoa consumiu R$ 18 e outra R$ 62, com 18% elas pagam R$ 21,24 e R$ 73,16. Dividir a gorjeta por igual faria a primeira subsidiar a segunda em cerca de R$ 4.',
          { note: 'Maquininhas que sugerem percentuais de gorjeta costumam calculá-los sobre o total já com impostos e taxa de serviço. Em uma conta grande isso são vários reais a mais do que você pretendia — confira sobre qual valor a máquina está calculando antes de aceitar um percentual sugerido.' }
        ]
      },
      {
        id: 'costumes-de-gorjeta',
        heading: 'Costumes de gorjeta pelo mundo',
        blocks: [
          'As normas variam muito, e dar gorjeta demais em um país que não espera isso pode ser tão constrangedor quanto dar de menos em um que espera.',
          {
            table: {
              head: ['País', 'Padrão em restaurantes', 'Observações'],
              rows: [
                ['Estados Unidos', '15–20%', 'Esperado; o salário da equipe depende disso'],
                ['Canadá', '15–20%', 'Parecido com os EUA'],
                ['Reino Unido', '10–12,5%', 'Muitas vezes já vem como taxa de serviço'],
                ['Irlanda', '10–15%', 'Comum em restaurantes, raro em pubs'],
                ['França', 'Arredondar', 'O serviço é incluído por lei'],
                ['Alemanha', '5–10%', 'Arredondar para um valor redondo'],
                ['Países Baixos', '5–10%', 'Arredondar é o normal'],
                ['Itália', '0–10%', 'O couvert costuma substituir a gorjeta'],
                ['Espanha', '0–10%', 'Deixar o troco é o normal'],
                ['Portugal', '5–10%', 'Opcional, geralmente arredondando'],
                ['Brasil', '10%', 'Costuma vir impresso na conta'],
                ['México', '10–15%', 'Esperado em restaurantes'],
                ['Japão', 'Nenhuma', 'Dar gorjeta pode ofender'],
                ['China', 'Nenhuma', 'Não é costume fora de hotéis turísticos'],
                ['Austrália', '0–10%', 'Opcional, por bom atendimento'],
                ['Nova Zelândia', '0–10%', 'Opcional, por bom atendimento']
              ]
            }
          },
          { note: 'Confira sempre a conta antes de acrescentar gorjeta — a taxa de serviço pode já estar incluída, e nesse caso qualquer valor a mais é totalmente opcional.' },
          { h: 'Taxa de serviço não é gorjeta' },
          'A taxa de serviço é uma linha da conta definida pelo estabelecimento; a gorjeta é um valor que você escolhe acrescentar. No Brasil os 10% são opcionais e você pode pedir para retirar. Onde a taxa já foi somada, o percentual da maquininha costuma ser calculado por cima dela, e é assim que uma gorjeta "de 15%" vira discretamente 27% do valor da comida.',
          { h: 'Fora do restaurante' },
          'Nos Estados Unidos as faixas usuais são US$ 1–2 por bebida no bar, 15–20% para táxi, US$ 2–5 por mala para carregadores de hotel e 15–20% em salões de beleza. São convenções, não aritmética, mas o método dos 10% resolve a conta em qualquer uma delas.'
        ]
      }
    ],
    howTo: {
      name: 'Como calcular a gorjeta',
      steps: [
        { name: 'Digite o valor da conta', text: 'Coloque o total da conta no campo de base.' },
        { name: 'Digite o percentual', text: 'Coloque a porcentagem que quer deixar, como 10 ou 15.' },
        { name: 'Leia o valor da gorjeta', text: 'O resultado é a gorjeta. Some à conta para o total e divida pelo número de pessoas para rachar.' },
        { name: 'Confira a conta impressa', text: 'Veja se a taxa de serviço já não foi incluída, porque um percentual por cima dela custa bem mais do que parece.' }
      ]
    },
    faq: [
      {
        q: 'Quanto é 20% de gorjeta em R$ 50?',
        a: 'R$ 10. Pegue 10% da conta (R$ 5) e dobre.'
      },
      {
        q: 'A gorjeta é calculada antes ou depois dos impostos?',
        a: 'O costume mais rigoroso é calcular sobre o consumo, antes de taxas e impostos. É também a base menor, então custa um pouco menos.'
      },
      {
        q: 'E se a taxa de serviço já estiver na conta?',
        a: 'Então a gorjeta já foi cobrada. Qualquer valor a mais é discricionário e normalmente reservado para um atendimento excepcional.'
      },
      {
        q: 'Como dividir uma conta com gorjeta entre quatro pessoas?',
        a: 'Multiplique a conta por 1 mais a gorjeta em decimal e divida por quatro. Uma conta de R$ 120 com 18% dá R$ 141,60, ou R$ 35,40 por pessoa.'
      },
      {
        q: 'É justo dividir a gorjeta por igual quando os pedidos foram diferentes?',
        a: 'Sai mais caro para quem consumiu menos. Multiplicar o consumo de cada um pelo mesmo fator mantém a gorjeta proporcional ao que cada pessoa pediu.'
      },
      {
        q: 'Qual o jeito mais rápido de calcular 15% de cabeça?',
        a: 'Ande com a vírgula uma casa para achar 10%, divida por dois para achar 5% e some. Em uma conta de R$ 64: R$ 6,40 + R$ 3,20 = R$ 9,60.'
      }
    ]
  },

  vat: {
    title: 'Calculadora de Imposto',
    lead:
      'Some imposto a um preço líquido, ou retire o imposto embutido de um preço cheio para achar o valor antes da tributação.',
    sections: [
      {
        id: 'somar-e-retirar-imposto',
        heading: 'Somando e retirando imposto',
        blocks: [
          { h: 'Somando imposto a um preço líquido' },
          { formula: 'preço cheio = líquido × (1 + alíquota ÷ 100)' },
          'Com alíquota de 20%, um preço líquido de 250 vira 250 × 1,20 = 300, dos quais 50 são imposto.',
          { h: 'Retirando o imposto de um preço cheio' },
          { formula: 'líquido = preço cheio ÷ (1 + alíquota ÷ 100)' },
          'É o passo que mais gente erra. Um preço cheio de 300 com 20% de imposto não é 300 − 20% = 240. É 300 ÷ 1,20 = 250, porque os 20% incidiram sobre o valor líquido, que é menor. A parcela de imposto é a diferença de 50.',
          { note: 'Regra prática: para somar imposto você multiplica, para retirar você divide. Subtrair a alíquota do preço cheio sempre subestima o valor líquido.' }
        ]
      },
      {
        id: 'por-que-subtrair-e-errado',
        heading: 'Por que subtrair a alíquota está errado',
        blocks: [
          'Vale ver o erro por inteiro, porque é o mais comum em emissão de notas e sempre vai para o mesmo lado — subestima o líquido e superestima o imposto.',
          'Pegue um preço cheio de R$ 600 com 20% de imposto. O líquido correto é 600 ÷ 1,20 = R$ 500, logo o imposto é R$ 100. Subtrair 20% de R$ 600 dá R$ 480 e sugere R$ 120 de imposto — R$ 20 a mais em uma única nota.',
          'O motivo é que as duas porcentagens saem de bases diferentes. Os 20% foram cobrados sobre R$ 500; subtrair 20% os tira de R$ 600. A distância entre as duas respostas é sempre o imposto sobre o imposto.',
          { formula: 'fatia do imposto no preço cheio = alíquota ÷ (100 + alíquota) × 100' },
          'A 20%, o imposto é 20 ÷ 120 = 16,67% do que você entrega, e não 20%. Esse número é o que a terceira coluna da tabela abaixo fornece, e é o atalho para tirar o imposto de um total em um passo só.',
          {
            table: {
              head: ['Alíquota', 'Multiplique por (somar)', 'Divida por (retirar)', 'Fatia do preço cheio'],
              rows: [
                ['5%', '1,05', '1,05', '4,76%'],
                ['7,5%', '1,075', '1,075', '6,98%'],
                ['10%', '1,10', '1,10', '9,09%'],
                ['17%', '1,17', '1,17', '14,53%'],
                ['18%', '1,18', '1,18', '15,25%'],
                ['19%', '1,19', '1,19', '15,97%'],
                ['20%', '1,20', '1,20', '16,67%'],
                ['21%', '1,21', '1,21', '17,36%'],
                ['22%', '1,22', '1,22', '18,03%'],
                ['23%', '1,23', '1,23', '18,70%'],
                ['25%', '1,25', '1,25', '20,00%'],
                ['27%', '1,27', '1,27', '21,26%']
              ]
            }
          },
          'A última coluna explica uma surpresa comum: com alíquota de 25%, o imposto é 20% do que você realmente paga, e não 25%.'
        ]
      },
      {
        id: 'imposto-por-dentro-e-por-fora',
        heading: 'Imposto por dentro e imposto por fora',
        blocks: [
          'Há duas formas de o imposto aparecer no preço, e a diferença muda qual conta você precisa fazer.',
          'No imposto por dentro — o caso do ICMS brasileiro e do IVA europeu — a alíquota incide sobre o próprio preço final, e a etiqueta já é o que você paga. No imposto por fora — o modelo do sales tax norte-americano — o preço é anunciado sem imposto e ele é somado no caixa.',
          {
            table: {
              head: ['', 'IVA / ICMS (por dentro)', 'Sales tax (por fora)'],
              rows: [
                ['Cobrado', 'Em cada etapa da cadeia', 'Só na venda final'],
                ['Preço na etiqueta', 'Já inclui o imposto', 'Normalmente sem imposto'],
                ['Para a empresa', 'Compensado como crédito', 'Isento com inscrição de revenda'],
                ['Definido por', 'União ou estado', 'Estado, condado e cidade somados'],
                ['Faixa típica', '5–27%', '0–10,5% somados']
              ]
            }
          },
          'A consequência prática para quem viaja é que uma etiqueta europeia é o que se paga e uma etiqueta americana não é. Para quem emite nota, a consequência é que um valor cheio precisa ser dividido, enquanto um subtotal americano precisa ser multiplicado.',
          { h: 'Alíquotas padrão em algumas jurisdições' },
          'As alíquotas mudam, e a maioria dos países mantém alíquotas reduzidas para alimentos, livros, transporte ou medicamentos. Trate isto como ponto de partida e não como orientação tributária — confira a alíquota vigente com o órgão competente antes de emitir qualquer documento.',
          {
            table: {
              head: ['Jurisdição', 'Alíquota padrão', 'Observação'],
              rows: [
                ['Reino Unido', '20%', 'Reduzida de 5%, alimentos e livros com alíquota zero'],
                ['Alemanha', '19%', 'Reduzida de 7%'],
                ['França', '20%', 'Reduzidas de 10%, 5,5% e 2,1%'],
                ['Espanha', '21%', 'Reduzidas de 10% e 4%'],
                ['Itália', '22%', 'Reduzidas de 10%, 5% e 4%'],
                ['Países Baixos', '21%', 'Reduzida de 9%'],
                ['Portugal', '23%', 'Reduzidas de 13% e 6%'],
                ['Irlanda', '23%', 'Reduzidas de 13,5% e 9%'],
                ['Suécia', '25%', 'Reduzidas de 12% e 6%'],
                ['Hungria', '27%', 'Maior alíquota padrão da União Europeia'],
                ['Brasil (ICMS)', 'Varia', 'Estadual, tipicamente entre 17% e 20%'],
                ['Canadá', '5% (GST)', 'Imposto provincial incide por cima'],
                ['Austrália', '10% (GST)', 'Base ampla, poucas isenções']
              ]
            }
          }
        ]
      },
      {
        id: 'emissao-e-arredondamento',
        heading: 'Emissão, arredondamento e substituição tributária',
        blocks: [
          { h: 'Onde arredondar' },
          'A legislação costuma dizer se o imposto é calculado por item ou sobre o total do documento, e as duas formas podem diferir em alguns centavos em uma nota longa. Calcule do jeito que a sua jurisdição exige, e arredonde só na etapa que a norma indica — arredondar valores intermediários acumula desvio.',
          { h: 'Quando quem recolhe é o outro' },
          'Em vários regimes — substituição tributária no Brasil, autoliquidação entre empresas na União Europeia — quem emite a nota não destaca o imposto e quem recebe é que o recolhe. A aritmética não muda; muda quem paga a quem. Uma nota nesse regime mostra o valor líquido e a menção ao regime, e não uma alíquota zero.',
          { h: 'Preço com imposto embutido' },
          'Quando você cota um preço ao consumidor, o número normalmente já precisa incluir o imposto. Se existe um valor líquido que você quer preservar, multiplique por ele em vez de somar a alíquota ao final: para ficar com R$ 1.000 líquidos a 23%, cote R$ 1.000 × 1,23 = R$ 1.230, e não R$ 1.000 mais 23% de R$ 1.230.'
        ]
      }
    ],
    howTo: {
      name: 'Como somar imposto a um preço',
      steps: [
        { name: 'Digite o preço líquido', text: 'Coloque o preço antes do imposto no campo de base.' },
        { name: 'Digite a alíquota', text: 'Coloque a alíquota como porcentagem positiva.' },
        { name: 'Leia o preço cheio', text: 'O resultado é o preço com imposto; a diferença para o líquido é o próprio imposto.' },
        { name: 'Para o caminho inverso', text: 'Coloque o preço cheio no campo de resultado e a alíquota no de porcentagem, e a calculadora acha o líquido dividindo.' }
      ]
    },
    faq: [
      {
        q: 'Como retirar 20% de imposto de um preço?',
        a: 'Divida por 1,20. Um preço cheio de R$ 120 tem líquido de 120 ÷ 1,2 = R$ 100 e R$ 20 de imposto.'
      },
      {
        q: 'Por que não posso simplesmente subtrair a alíquota?',
        a: 'Porque a alíquota incidiu sobre o valor líquido, que é menor que o cheio. Subtrair 20% do cheio retira demais — em R$ 600 superestima o imposto em R$ 20.'
      },
      {
        q: 'Que fatia de um preço cheio é imposto a 21%?',
        a: '21 ÷ 121 = 17,36% do total que você paga.'
      },
      {
        q: 'O que é o divisor do imposto?',
        a: 'A fatia do preço cheio que é imposto, dada por alíquota ÷ (100 + alíquota). A 20% isso é 1/6, então dividir o preço cheio por 6 dá o imposto direto.'
      },
      {
        q: 'Como cotar um preço que me deixe um valor líquido específico?',
        a: 'Multiplique o líquido desejado pelo multiplicador da alíquota. Para ficar com R$ 1.000 a 23%, cote R$ 1.230 — e não R$ 1.000 mais 23% do valor final.'
      },
      {
        q: 'O cálculo do sales tax americano é igual ao do IVA?',
        a: 'A aritmética é idêntica. A diferença é que o preço americano costuma ser anunciado sem imposto, então você multiplica, enquanto o europeu já o inclui, então você divide.'
      }
    ]
  },

  margin: {
    title: 'Calculadora de Margem de Lucro',
    lead:
      'Transforme custo e receita em margem percentual, forme preço a partir da margem que você precisa atingir e entenda por que margem e markup não são a mesma coisa.',
    sections: [
      {
        id: 'formula-da-margem',
        heading: 'Como calcular a margem de lucro',
        blocks: [
          'Margem expressa o lucro como fatia da receita:',
          { formula: 'margem = ((receita − custo) ÷ receita) × 100' },
          'Vender por 250 algo que custou 175 dá um lucro de 75, e 75 ÷ 250 = 30% de margem. Como o denominador é a receita, a margem nunca chega a 100% — isso significaria que o item não custou nada.',
          { h: 'Margem bruta, operacional e líquida' },
          'A fórmula é a mesma em todos os níveis; o que muda é o que entra como "custo". A margem bruta desconta o custo direto da mercadoria. A operacional também desconta salários, aluguel e demais despesas de funcionamento. A líquida desconta tudo, inclusive impostos e juros. Comparar a margem bruta de uma empresa com a margem líquida de outra não significa nada.',
          'Detalhado em um negócio com R$ 400.000 de receita:',
          {
            table: {
              head: ['Linha', 'Valor', 'Margem', 'O que revela'],
              rows: [
                ['Receita', 'R$ 400.000', '—', 'A linha de cima'],
                ['Custo da mercadoria vendida', 'R$ 240.000', '—', 'Custo direto do que foi vendido'],
                ['Lucro bruto', 'R$ 160.000', '40,0%', 'Se o produto em si se paga'],
                ['Despesas operacionais', 'R$ 108.000', '—', 'Salários, aluguel, software, marketing'],
                ['Lucro operacional', 'R$ 52.000', '13,0%', 'Se o negócio como é operado se paga'],
                ['Juros e impostos', 'R$ 18.000', '—', 'Financiamento e tributos'],
                ['Lucro líquido', 'R$ 34.000', '8,5%', 'O que de fato sobra']
              ]
            }
          },
          'As três margens respondem perguntas diferentes, e um negócio pode parecer saudável em uma e quebrar em outra. Uma margem bruta de 40% com margem líquida de 8,5% significa que o produto funciona mas a estrutura é pesada; a correção está nas despesas, não no preço.'
        ]
      },
      {
        id: 'margem-e-markup',
        heading: 'Margem não é markup',
        blocks: [
          'Markup mede o mesmo lucro contra o custo, e não contra a receita:',
          { formula: 'markup = ((receita − custo) ÷ custo) × 100' },
          'O mesmo custo de 175 com preço de 250 é 30% de margem, mas 42,9% de markup. Dizer um quando se quer dizer o outro é a forma mais confiável de errar o preço para baixo, e a distância aumenta conforme os números crescem.',
          {
            table: {
              head: ['Markup', 'Margem equivalente', 'Multiplicador sobre o custo'],
              rows: [
                ['10%', '9,1%', '1,10'],
                ['15%', '13,0%', '1,15'],
                ['20%', '16,7%', '1,20'],
                ['25%', '20,0%', '1,25'],
                ['30%', '23,1%', '1,30'],
                ['33,3%', '25,0%', '1,33'],
                ['40%', '28,6%', '1,40'],
                ['50%', '33,3%', '1,50'],
                ['60%', '37,5%', '1,60'],
                ['75%', '42,9%', '1,75'],
                ['100%', '50,0%', '2,00'],
                ['150%', '60,0%', '2,50'],
                ['200%', '66,7%', '3,00'],
                ['400%', '80,0%', '5,00']
              ]
            }
          },
          'Para converter entre os dois:',
          { formula: 'margem = markup ÷ (100 + markup) × 100' },
          { formula: 'markup = margem ÷ (100 − margem) × 100' },
          { note: 'Um negócio que acredita estar com 50% de margem enquanto na verdade aplica 50% de markup está com 33,3%. Com despesas apertadas, essa diferença é o lucro inteiro.' }
        ]
      },
      {
        id: 'preco-a-partir-da-margem',
        heading: 'Formando preço a partir da margem desejada',
        blocks: [
          'A pergunta que importa na hora de precificar é a inversa: você sabe o custo e a margem que precisa, e quer o preço.',
          { formula: 'preço = custo ÷ (1 − margem ÷ 100)' },
          'Para obter 35% de margem em um item que custa R$ 52: 52 ÷ 0,65 = R$ 80. O instinto de somar 35% ao custo dá R$ 70,20, que é apenas 25,9% de margem — quase R$ 10 a menos por unidade.',
          'A forma com divisão também mostra por que margens altas ficam caras rápido. Cada ponto adicional de margem multiplica o preço por um fator maior, porque o denominador está encolhendo:',
          {
            table: {
              head: ['Margem desejada', 'Divida o custo por', 'Preço sobre custo de R$ 52'],
              rows: [
                ['20%', '0,80', 'R$ 65,00'],
                ['30%', '0,70', 'R$ 74,29'],
                ['40%', '0,60', 'R$ 86,67'],
                ['50%', '0,50', 'R$ 104,00'],
                ['60%', '0,40', 'R$ 130,00'],
                ['70%', '0,30', 'R$ 173,33'],
                ['80%', '0,20', 'R$ 260,00'],
                ['90%', '0,10', 'R$ 520,00']
              ]
            }
          },
          'Ir de 20% para 40% de margem dobra o lucro por unidade mas aumenta o preço em apenas um terço. Ir de 80% para 90% dobra o preço. É por isso que software, cujo custo marginal é quase zero, sustenta margens impossíveis no varejo — e por que um varejista que persegue margem de software acaba com um preço que ninguém compra.',
          { h: 'O que um desconto faz com a margem' },
          'O desconto sai direto da margem, e não do preço proporcionalmente. Um item de custo R$ 60 vendido a R$ 100 tem 40% de margem. Um desconto de 10%, para R$ 90, derruba o lucro de R$ 40 para R$ 30 — um corte de 25% no lucro para um corte de 10% no preço. A regra prática é que o lucro cai na proporção do desconto dividido pela margem, então quanto mais fina a margem, mais estrago faz um desconto pequeno.'
        ]
      }
    ],
    howTo: {
      name: 'Como calcular a margem de lucro',
      steps: [
        { name: 'Digite o lucro', text: 'Coloque a receita menos o custo no primeiro campo.' },
        { name: 'Digite a receita', text: 'Coloque a receita total no segundo campo.' },
        { name: 'Leia a margem', text: 'O resultado é a margem de lucro como porcentagem da receita.' },
        { name: 'Converta para markup se precisar', text: 'Divida a margem por (100 menos a margem) e multiplique por 100 para obter o markup sobre o custo.' }
      ]
    },
    faq: [
      {
        q: 'Qual a diferença entre margem e markup?',
        a: 'A margem divide o lucro pela receita; o markup divide o mesmo lucro pelo custo. Um markup de 50% é apenas 33,3% de margem.'
      },
      {
        q: 'A margem de lucro pode passar de 100%?',
        a: 'Não. Como o lucro é sempre menor que a receita em uma venda lucrativa, a margem se aproxima de 100% mas nunca chega. O markup não tem limite superior.'
      },
      {
        q: 'Qual é uma boa margem de lucro?',
        a: 'Depende inteiramente do setor. O varejo de alimentos opera com um dígito baixo, enquanto software pode passar de 70%. Compare com os concorrentes, não com um número absoluto.'
      },
      {
        q: 'Como formar preço para atingir 40% de margem?',
        a: 'Divida o custo por 0,60. Um item que custa R$ 30 precisa ser vendido a R$ 50. Somar 40% ao custo dá R$ 42, que é apenas 28,6% de margem.'
      },
      {
        q: 'Quanto lucro custa um desconto de 10%?',
        a: 'Aproximadamente o desconto dividido pela margem. Com 40% de margem, 10% de desconto tira um quarto do lucro; com 20% de margem, tira metade.'
      },
      {
        q: 'Qual margem devo apresentar a um investidor?',
        a: 'Diga qual delas você está usando. Margem bruta, operacional e líquida podem diferir em dezenas de pontos no mesmo negócio, e um número sem rótulo não é comparável a nada.'
      }
    ]
  },

  salary: {
    title: 'Calculadora de Aumento Salarial',
    lead:
      'Transforme uma proposta em porcentagem, ou uma porcentagem em valor. Veja a diferença por mês e quanto o reajuste realmente vale depois de descontada a inflação.',
    sections: [
      {
        id: 'como-calcular-o-aumento',
        heading: 'Como o aumento é calculado',
        blocks: [
          'Um aumento é uma variação percentual sobre o salário atual, então é a mesma aritmética de qualquer outro acréscimo:',
          { formula: 'aumento % = ((salário novo − salário atual) ÷ salário atual) × 100' },
          'Um salário que sobe de 4.800 para 5.100 teve um aumento de 300 ÷ 4.800 = 6,25%. No sentido inverso, aplicando uma porcentagem conhecida a um salário conhecido:',
          { formula: 'salário novo = salário atual × (1 + aumento ÷ 100)' },
          'A calculadora acima resolve o campo que você deixar vazio, então o mesmo formulário responde "que porcentagem é esta proposta" e "quanto eu ficaria ganhando com 4%".',
          { note: 'O denominador é o salário atual, não o novo. Dividir o acréscimo pelo valor novo subestima todo reajuste — no exemplo acima daria 5,88% em vez de 6,25%.' }
        ]
      },
      {
        id: 'nominal-e-real',
        heading: 'Nominal e real: o aumento depois da inflação',
        blocks: [
          'Um reajuste abaixo da inflação é um corte salarial em tudo, menos no número do holerite. A correção não é uma subtração — inflação e reajuste são ambos multiplicativos, então eles se dividem:',
          { formula: 'variação real % = ((1 + aumento ÷ 100) ÷ (1 + inflação ÷ 100) − 1) × 100' },
          'Um reajuste de 3% em um ano de 4% de inflação dá (1,03 ÷ 1,04 − 1) × 100 = −0,96%. Subtrair daria −1%, o que é próximo o bastante nesses valores, mas se distancia rápido com números maiores: um reajuste de 20% contra 15% de inflação é um ganho real de 4,35%, e não de 5%.',
          {
            table: {
              head: ['Reajuste', 'Inflação', 'Variação real', 'O que significa'],
              rows: [
                ['0%', '3%', '−2,91%', 'Congelamento é perda real'],
                ['2%', '4%', '−1,92%', 'Abaixo da inflação, você perdeu'],
                ['3%', '3%', '0,00%', 'Empate'],
                ['5%', '3%', '+1,94%', 'Ganho real'],
                ['6,25%', '4%', '+2,16%', 'O exemplo acima'],
                ['10%', '8%', '+1,85%', 'Números grandes, ganho real pequeno'],
                ['20%', '15%', '+4,35%', 'Aqui a subtração exageraria']
              ]
            }
          },
          'Preencha o campo opcional de inflação e a calculadora mostra a variação real ao lado da nominal. Qualquer que seja o índice usado — IPCA, INPC ou o seu próprio aluguel e supermercado — a aritmética é a mesma; a escolha do índice é um julgamento sobre qual cesta se parece com os seus gastos.'
        ]
      },
      {
        id: 'reajustes-compostos',
        heading: 'Reajustes são compostos',
        blocks: [
          'Reajustes anuais se multiplicam em vez de somar, e é por isso que um aumento pequeno e constante supera um aumento grande ocasional. Três anos de 4% não são 12%:',
          { formula: 'crescimento total = (1 + r₁ ÷ 100) × (1 + r₂ ÷ 100) × (1 + r₃ ÷ 100)' },
          '1,04³ = 1,1249, então três anos de 4% dão 12,49% no total. Em um salário de 5.000 isso são 624,50 em vez de 600 — os 24,50 extras são o reajuste incidindo sobre os reajustes anteriores.',
          {
            table: {
              head: ['Reajuste anual', 'Em 3 anos', 'Em 5 anos', 'Em 10 anos'],
              rows: [
                ['2%', '+6,1%', '+10,4%', '+21,9%'],
                ['3%', '+9,3%', '+15,9%', '+34,4%'],
                ['4%', '+12,5%', '+21,7%', '+48,0%'],
                ['5%', '+15,8%', '+27,6%', '+62,9%'],
                ['7%', '+22,5%', '+40,3%', '+96,7%'],
                ['10%', '+33,1%', '+61,1%', '+159,4%']
              ]
            }
          },
          'A coluna de dez anos é o argumento para negociar a porcentagem em vez do valor único: a diferença entre 3% e 5% ao ano são 28 pontos percentuais de salário depois de uma década, e cada reajuste futuro é calculado sobre a base mais alta.',
          { h: 'Chegando a um alvo' },
          'Para achar o reajuste necessário até um salário-alvo, divida o alvo pelo salário atual e subtraia um. Chegar a 6.000 partindo de 5.200 exige 6.000 ÷ 5.200 = 1,1538, um aumento de 15,38%. Distribuído em três anos, é a raiz cúbica de 1,1538, cerca de 4,89% ao ano.'
        ]
      },
      {
        id: 'lendo-a-proposta',
        heading: 'Lendo uma proposta corretamente',
        blocks: [
          { h: 'É sobre o bruto, não sobre o líquido' },
          'O reajuste é anunciado sobre o salário bruto, e o aumento no que cai na conta é menor porque o desconto de imposto e previdência sai dele — e, em uma tabela progressiva, parte do aumento pode cair em uma faixa mais alta. Um reajuste bruto de 6% costuma chegar como algo entre 3,5% e 5% no líquido.',
          { h: 'Pacote total, não só salário' },
          'Previdência, bônus, plano de saúde e participação nos lucros são todos porcentagens de alguma coisa. Um reajuste de 2% no salário junto com a contribuição da empresa subindo de 5% para 8% é uma mudança maior no pacote do que o número da manchete sugere.',
          { h: 'Reajuste de inflação não é promoção' },
          'A correção pela inflação mantém você no mesmo lugar e não é um prêmio; o mérito é a parte acima dela. Ler um reajuste de 4% em um ano de 4% de inflação como reconhecimento é a leitura equivocada mais comum de um holerite.',
          { h: 'Por hora, por mês, por ano' },
          'A porcentagem é idêntica em qualquer periodicidade, então 6,25% são 6,25% seja no anual ou no horário. A calculadora mostra o equivalente mensal porque é o número mensal que normalmente decide se um reajuste muda alguma coisa no dia a dia.'
        ]
      }
    ],
    howTo: {
      name: 'Como calcular um aumento salarial',
      steps: [
        { name: 'Digite o salário atual', text: 'Coloque o salário de hoje no primeiro campo, mensal ou anual — a porcentagem é a mesma nos dois casos.' },
        { name: 'Digite o salário novo ou a porcentagem', text: 'Preencha o que você souber, e a calculadora resolve o outro.' },
        { name: 'Adicione a inflação para o número real', text: 'Coloque um índice de inflação no campo opcional para ver quanto o reajuste vale depois dos preços.' },
        { name: 'Leia a diferença mensal', text: 'O painel mostra o acréscimo em dinheiro e o equivalente mensal ao lado da porcentagem.' }
      ]
    },
    faq: [
      {
        q: 'Como calculo meu aumento em porcentagem?',
        a: 'Subtraia o salário antigo do novo, divida pelo antigo e multiplique por 100. De 4.800 para 5.100 é 300 ÷ 4.800 = 6,25%.'
      },
      {
        q: 'Um reajuste de 3% é bom com inflação de 4%?',
        a: 'Não. Em termos reais é uma perda de cerca de 0,96%, porque os preços subiram mais que o salário. Seriam necessários 4% só para empatar.'
      },
      {
        q: 'Por que o aumento real não é simplesmente o reajuste menos a inflação?',
        a: 'Porque os dois são multiplicativos. A forma correta divide 1 mais o reajuste por 1 mais a inflação. Em valores baixos a subtração se aproxima, mas em 20% contra 15% ela exagera o ganho em dois terços de ponto.'
      },
      {
        q: 'Três anos de 4% somam 12%?',
        a: 'Não, eles compõem 12,49%, porque o reajuste de cada ano incide sobre um salário que já contém os anteriores.'
      },
      {
        q: 'Qual reajuste preciso para chegar a um salário específico?',
        a: 'Divida o alvo pelo salário atual, subtraia 1 e multiplique por 100. De 5.200 para 6.000 exige 15,38%.'
      },
      {
        q: 'Vou ver a porcentagem inteira no salário líquido?',
        a: 'Não. O reajuste é sobre o bruto, então imposto e contribuições saem dele, e parte do acréscimo pode ser tributada em uma faixa mais alta que o restante.'
      }
    ]
  },

  points: {
    title: 'Calculadora de Pontos Percentuais',
    lead:
      'Compare duas porcentagens e veja todas as formas honestas de descrever a distância entre elas — a diferença em pontos percentuais, a variação relativa e a diferença percentual — cada uma com seu nome.',
    sections: [
      {
        id: 'as-tres-respostas',
        heading: 'Três respostas corretas para uma pergunta',
        blocks: [
          'Pergunte quanto 4% e 5% estão distantes e há três respostas defensáveis, todas aritmeticamente corretas e todas descrevendo coisas diferentes. A confusão não está na matemática; está no nome.',
          { h: '1. A diferença em pontos percentuais' },
          { formula: 'pontos = segundo − primeiro' },
          'Uma subtração pura: 5 − 4 = 1 ponto percentual. É a medida certa quando as duas porcentagens são fatias do mesmo total, como uma taxa de desemprego ou a intenção de voto de um partido, porque a diferença já é significativa na unidade original.',
          { h: '2. A variação relativa' },
          { formula: 'variação relativa = ((segundo − primeiro) ÷ primeiro) × 100' },
          '(5 − 4) ÷ 4 = 25%. É a medida certa quando um número saiu do outro — uma taxa que subiu, uma conversão que melhorou — porque diz o quanto o segundo é maior que o primeiro.',
          { h: '3. A diferença percentual' },
          { formula: 'diferença percentual = |segundo − primeiro| ÷ ((primeiro + segundo) ÷ 2) × 100' },
          '1 ÷ 4,5 = 22,2%. Esta é simétrica: dá a mesma resposta independentemente de qual número vem primeiro, porque divide pela média em vez de por um deles. Use quando nenhum dos dois é a referência — duas medições independentes, dois produtos concorrentes — e a ordem é arbitrária.',
          { note: 'As três respostas para "4% contra 5%" são 1 ponto, 25% e 22,2%. Quem informa uma delas como "a diferença" sem dizer qual omitiu justamente a parte que a torna interpretável.' }
        ]
      },
      {
        id: 'onde-isso-causa-estrago',
        heading: 'Onde a confusão causa estrago',
        blocks: [
          { h: 'Taxas de juros' },
          'Uma taxa de financiamento passando de 4% para 5% é um ponto percentual, mas a sua conta de juros sobe 25%. Uma manchete dizendo que os juros subiram 1% e outra dizendo que subiram 25% podem descrever exatamente a mesma mudança, e só a primeira está usando o sentido convencional.',
          { h: 'Pesquisas eleitorais' },
          'Um candidato que vai de 40% para 44% ganhou quatro pontos e cerca de 10% do apoio que tinha. Pesquisas falam em pontos porque a margem de erro também está em pontos — uma "vantagem de 3 pontos com margem de 3 pontos" é uma afirmação sobre pontos, e convertê-la em variação relativa a torna ininterpretável.',
          { h: 'Taxas de conversão' },
          'É aqui que os dois mais se misturam, e normalmente na direção lisonjeira. Uma conversão que melhora de 2% para 2,5% subiu meio ponto percentual — e 25%. As duas coisas são verdade; só a segunda vai para a apresentação.',
          { h: 'Alíquotas e margens' },
          'Uma alíquota que sobe de 20% para 22% subiu dois pontos. Uma margem que cai de 12% para 9% caiu três pontos, e um quarto da margem. Quando os dois números já são porcentagens, a palavra "por cento" sozinha é ambígua, e é exatamente por isso que a expressão "ponto percentual" existe.',
          {
            table: {
              head: ['Mudança', 'Em pontos', 'Variação relativa', 'Diferença percentual'],
              rows: [
                ['4% → 5%', '+1 p.p.', '+25,0%', '22,2%'],
                ['2% → 2,5%', '+0,5 p.p.', '+25,0%', '22,2%'],
                ['40% → 44%', '+4 p.p.', '+10,0%', '9,5%'],
                ['12% → 9%', '−3 p.p.', '−25,0%', '28,6%'],
                ['50% → 75%', '+25 p.p.', '+50,0%', '40,0%'],
                ['1% → 2%', '+1 p.p.', '+100,0%', '66,7%'],
                ['80% → 85%', '+5 p.p.', '+6,3%', '6,1%']
              ]
            }
          },
          'A segunda e a sexta linhas são as que valem guardar. Um movimento de meio ponto e um de um ponto podem ambos ser "um aumento de 25%" ou "o dobro", dependendo só de onde começaram, e é por isso que o número relativo sozinho nunca diz o tamanho real da mudança.'
        ]
      },
      {
        id: 'qual-usar',
        heading: 'Escolhendo qual informar',
        blocks: [
          'Um teste curto resolve quase todos os casos: pergunte se o primeiro número é uma referência da qual o segundo saiu, ou se os dois estão apenas sendo comparados.',
          {
            ul: [
              'O segundo número saiu do primeiro, ao longo do tempo — informe a variação relativa, e dê também os pontos se o leitor precisar da escala.',
              'Os dois números são fatias do mesmo todo no mesmo momento — informe pontos percentuais.',
              'Nenhum dos dois é privilegiado e a ordem é arbitrária — informe a diferença percentual, que é simétrica.',
              'Você escreve para o público geral — dê os pontos e a variação relativa. Custa pouco dizer as duas coisas e é impossível deduzir uma a partir da outra.'
            ]
          },
          { h: 'O teste da inversão' },
          'Se trocar os dois números de lugar deveria mudar a resposta, você quer a variação relativa, que é assimétrica — de 4 para 5 é +25%, de 5 para 4 é −20%. Se trocar não deveria mudar nada, você quer a diferença percentual, que dá 22,2% nos dois sentidos. Essa única propriedade costuma bastar para escolher a medida certa.',
          { h: 'Quando o primeiro valor é zero' },
          'A variação relativa é indefinida quando o valor inicial é zero, já que a conta dividiria por ele. Uma taxa que vai de 0% para 3% subiu três pontos e nada mais pode ser dito honestamente em termos relativos. A calculadora informa a variação relativa como indefinida em vez de mostrar um infinito, porque a resposta honesta é que a pergunta não tem resposta numérica.'
        ]
      }
    ],
    howTo: {
      name: 'Como comparar duas porcentagens',
      steps: [
        { name: 'Digite a porcentagem inicial', text: 'Coloque o valor anterior ou de referência no primeiro campo, sem o símbolo de porcentagem.' },
        { name: 'Digite a segunda porcentagem', text: 'Coloque o valor posterior ou de comparação no segundo campo.' },
        { name: 'Leia as três medidas', text: 'O painel mostra a diferença em pontos percentuais, a variação relativa e a diferença percentual simétrica, cada uma identificada.' },
        { name: 'Escolha a que serve', text: 'Use pontos para fatias do mesmo todo, variação relativa para um número que mudou ao longo do tempo e diferença percentual quando nenhum valor é a referência.' }
      ]
    },
    faq: [
      {
        q: 'Qual a diferença entre por cento e ponto percentual?',
        a: 'Ponto percentual é a diferença bruta entre duas porcentagens; por cento é essa diferença em relação ao valor inicial. Uma taxa indo de 4% para 5% subiu um ponto percentual e 25 por cento.'
      },
      {
        q: 'Como calcular pontos percentuais?',
        a: 'Subtraia uma porcentagem da outra. Não há divisão envolvida, e é isso que faz a medida ser um "ponto" e não uma porcentagem.'
      },
      {
        q: 'O que é diferença percentual, em oposição a variação percentual?',
        a: 'A diferença percentual divide a distância pela média dos dois valores, então é simétrica. A variação percentual divide pelo primeiro valor, então inverter a ordem muda a resposta.'
      },
      {
        q: 'Por que de 4% para 5% é um aumento de 25%?',
        a: 'Porque o acréscimo de um ponto é medido contra o valor inicial de quatro: 1 ÷ 4 = 0,25. A mesma alta de um ponto de 40% para 41% é apenas 2,5%.'
      },
      {
        q: 'O que acontece quando a primeira porcentagem é zero?',
        a: 'A variação relativa fica indefinida, porque dividiria por zero. Só a diferença em pontos percentuais pode ser informada.'
      },
      {
        q: 'Qual medida uma reportagem deveria usar?',
        a: 'Idealmente as duas. Os pontos dão a escala do movimento e a variação relativa dá o significado, e nenhuma pode ser deduzida da outra sem conhecer o valor inicial.'
      }
    ]
  },

  formulas: {
    title: 'Fórmulas de Porcentagem',
    lead:
      'Todas as fórmulas de porcentagem que vale memorizar, cada uma com a sua inversa e um exemplo resolvido que você pode conferir linha a linha. Uma página para salvar no lugar de oito.',
    sections: [
      {
        id: 'as-quatro-principais',
        heading: 'As quatro que você mais vai usar',
        blocks: [
          'Quase toda pergunta de porcentagem na vida prática é uma destas quatro, ou uma inversa de uma delas. Todas saem da mesma definição: porcentagem é uma fração sobre 100.',
          { h: '1. Porcentagem de um número' },
          { formula: 'parte = total × (porcentagem ÷ 100)' },
          '18% de 250: 250 × 0,18 = 45. Inversas: total = parte ÷ (porcentagem ÷ 100), e porcentagem = (parte ÷ total) × 100.',
          { h: '2. Um número como porcentagem de outro' },
          { formula: 'porcentagem = (parte ÷ total) × 100' },
          '34 de 40: (34 ÷ 40) × 100 = 85%. O número que você mede fica em cima; o total fica embaixo. Invertê-los dá 117,6%, que é a resposta de outra pergunta.',
          { h: '3. Aumentar ou diminuir por uma porcentagem' },
          { formula: 'resultado = inicial × (1 ± porcentagem ÷ 100)' },
          'R$ 640 mais 12,5%: 640 × 1,125 = R$ 720. Menos 12,5%: 640 × 0,875 = R$ 560. Inversa: inicial = resultado ÷ o mesmo multiplicador.',
          { h: '4. Variação percentual entre dois números' },
          { formula: 'variação = ((novo − antigo) ÷ antigo) × 100' },
          'R$ 640 para R$ 720: (80 ÷ 640) × 100 = +12,5%. Voltar de R$ 720 para R$ 640 é −11,1%, e não −12,5%, porque o denominador mudou.'
        ]
      },
      {
        id: 'as-outras-quatro',
        heading: 'Mais quatro que aparecem sempre',
        blocks: [
          { h: '5. Retirar uma porcentagem já embutida' },
          { formula: 'líquido = cheio ÷ (1 + alíquota ÷ 100)' },
          'Tirando 20% de imposto de R$ 300: 300 ÷ 1,20 = R$ 250. Subtrair 20% de R$ 300 dá R$ 240 e está errado, porque o imposto incidiu sobre o líquido, que é menor.',
          { h: '6. Pontos percentuais e variação relativa' },
          { formula: 'pontos = segundo − primeiro' },
          { formula: 'variação relativa = ((segundo − primeiro) ÷ primeiro) × 100' },
          'De 4% para 5% é um ponto percentual e uma variação relativa de 25%. Quando as duas grandezas já são porcentagens, dizer qual das duas você quer dizer não é opcional.',
          { h: '7. Crescimento composto em vários períodos' },
          { formula: 'fator total = (1 + taxa ÷ 100)ⁿ' },
          '5% ao ano por três anos é 1,05³ = 1,1576, ou 15,76% no total, e não 15%. Para achar a taxa anual a partir de um total, tire a raiz n-ésima: crescer 40% em cinco anos é 1,40^(1/5) = 1,0696, cerca de 6,96% ao ano.',
          { h: '8. Margem e markup' },
          { formula: 'margem = ((preço − custo) ÷ preço) × 100' },
          { formula: 'markup = ((preço − custo) ÷ custo) × 100' },
          'Mesmo lucro, denominador diferente. Um custo de R$ 52 vendido a R$ 80 é 35% de margem e 53,8% de markup.'
        ]
      },
      {
        id: 'inversas-de-relance',
        heading: 'Cada fórmula e a sua inversa',
        blocks: [
          'A origem mais comum de uma resposta errada não é a fórmula e sim o sentido dela — usar uma soma onde a situação pede uma divisão. Esta tabela emparelha cada operação com a que a desfaz.',
          {
            table: {
              head: ['Você sabe', 'Você quer', 'Fórmula', 'Exemplo'],
              rows: [
                ['Total e porcentagem', 'A parte', 'total × (pct ÷ 100)', '18% de 250 = 45'],
                ['Parte e porcentagem', 'O total', 'parte ÷ (pct ÷ 100)', '45 é 18% de 250'],
                ['Parte e total', 'A porcentagem', '(parte ÷ total) × 100', '45 de 250 = 18%'],
                ['Inicial e aumento', 'O resultado', 'inicial × (1 + pct ÷ 100)', '250 + 18% = 295'],
                ['Resultado e aumento', 'O inicial', 'resultado ÷ (1 + pct ÷ 100)', '295 ÷ 1,18 = 250'],
                ['Inicial e redução', 'O resultado', 'inicial × (1 − pct ÷ 100)', '250 − 18% = 205'],
                ['Resultado e redução', 'O inicial', 'resultado ÷ (1 − pct ÷ 100)', '205 ÷ 0,82 = 250'],
                ['Antigo e novo', 'A variação', '((novo − antigo) ÷ antigo) × 100', '250 → 295 = +18%'],
                ['Cheio e alíquota', 'O líquido', 'cheio ÷ (1 + alíquota ÷ 100)', '300 ÷ 1,20 = 250'],
                ['Cheio e alíquota', 'O imposto', 'cheio × alíquota ÷ (100 + alíquota)', '300 × 20 ÷ 120 = 50'],
                ['Custo e margem', 'O preço', 'custo ÷ (1 − margem ÷ 100)', '52 ÷ 0,65 = 80'],
                ['Custo e markup', 'O preço', 'custo × (1 + markup ÷ 100)', '52 × 1,538 = 80'],
                ['Markup', 'A margem', 'markup ÷ (100 + markup) × 100', '50% de markup = 33,3% de margem'],
                ['Margem', 'O markup', 'margem ÷ (100 − margem) × 100', '33,3% de margem = 50% de markup'],
                ['Taxa e períodos', 'Crescimento total', '(1 + taxa ÷ 100)ⁿ − 1', '1,05³ − 1 = 15,76%'],
                ['Crescimento total e períodos', 'Taxa anual', '(1 + total)^(1÷n) − 1', '1,40^0,2 − 1 = 6,96%'],
                ['Uma queda de p%', 'O ganho para recuperar', 'p ÷ (100 − p) × 100', 'Queda de 50% exige +100%']
              ]
            }
          }
        ]
      },
      {
        id: 'lendo-uma-formula',
        heading: 'Dois hábitos que evitam a maioria dos erros',
        blocks: [
          { h: 'Diga a base em voz alta' },
          'Toda porcentagem é porcentagem de alguma coisa. Antes de escrever qualquer conta, diga sobre qual número a porcentagem incide. A maioria das respostas erradas é a fórmula certa aplicada à base errada — um desconto tirado do total já com imposto, um reajuste dividido pelo salário novo, uma alíquota subtraída de um preço cheio.',
          { h: 'Prefira multiplicadores a contas em duas etapas' },
          'Trabalhar com 1,18 e 0,82 em vez de "somar 18%" e "tirar 18%" torna a inversa óbvia, transforma cadeias de variações em um único produto e elimina a tentação de desfazer uma mudança aplicando-a ao contrário. Quando você pensa em multiplicadores, o fato de que 1,18 × 0,82 = 0,9676 e não 1 deixa de ser surpreendente.',
          { formula: '250 × 1,18 × 0,82 = 241,90, e não 250' }
        ]
      }
    ],
    faq: [
      {
        q: 'Qual é a fórmula básica de porcentagem?',
        a: 'parte = total × (porcentagem ÷ 100). Todo o resto desta página é essa mesma identidade reorganizada para outra incógnita.'
      },
      {
        q: 'Como desfazer um aumento percentual?',
        a: 'Divida pelo multiplicador que você teria usado. Para desfazer um aumento de 25%, divida por 1,25 — subtrair 25% deixa você 6,25% abaixo.'
      },
      {
        q: 'Qual a fórmula da variação percentual?',
        a: '((novo − antigo) ÷ antigo) × 100. O valor antigo é sempre o denominador, e é por isso que o mesmo movimento absoluto dá porcentagens diferentes em cada sentido.'
      },
      {
        q: 'Como calcular crescimento composto?',
        a: 'Eleve o multiplicador ao número de períodos: (1 + taxa ÷ 100)ⁿ. Três anos a 5% dão 1,05³ = 1,1576, ou 15,76% no total.'
      },
      {
        q: 'Como tirar o imposto de um preço que já o inclui?',
        a: 'Multiplique o cheio por alíquota ÷ (100 + alíquota). A 20% isso é 1/6 do preço cheio, então R$ 300 contêm R$ 50 de imposto.'
      },
      {
        q: 'Que ganho desfaz uma perda de 40%?',
        a: 'Um ganho de 40 ÷ 60 × 100 = 66,7%. A forma geral é p ÷ (100 − p) × 100.'
      }
    ]
  },

  mentalmath: {
    title: 'Porcentagem de Cabeça',
    lead:
      'O punhado de truques que resolve quase toda porcentagem longe do teclado — gorjeta, desconto, imposto e conferências rápidas — com o raciocínio por trás de cada um.',
    sections: [
      {
        id: 'ancora-dos-dez-por-cento',
        heading: 'Comece pelos 10%',
        blocks: [
          'Quase todo cálculo mental de porcentagem se apoia em um único movimento: 10% de qualquer número é esse número com a vírgula andada uma casa à esquerda. 10% de 86 é 8,6; 10% de 1.240 é 124. Não há conta a fazer, só uma vírgula a mover.',
          'Todo o resto é escalar esse número para cima ou para baixo:',
          {
            table: {
              head: ['Você quer', 'A partir de 10%', 'Em 86'],
              rows: [
                ['1%', 'Ande com a vírgula de novo', '0,86'],
                ['5%', 'Metade', '4,30'],
                ['15%', 'Some a metade', '12,90'],
                ['20%', 'O dobro', '17,20'],
                ['25%', 'O dobro, mais a metade', '21,50'],
                ['30%', 'O triplo', '25,80'],
                ['40%', 'Quatro vezes', '34,40'],
                ['45%', 'Quatro vezes, mais a metade', '38,70'],
                ['70%', 'Sete vezes', '60,20'],
                ['90%', 'Subtraia do total', '77,40']
              ]
            }
          },
          'A última linha merece nota própria: para porcentagens altas, pegue o complemento pequeno e subtraia. 90% de 86 sai mais fácil como 86 − 8,6 do que como nove vezes 8,6, e 95% é 86 menos 4,30.'
        ]
      },
      {
        id: 'truque-da-inversao',
        heading: 'O truque da inversão',
        blocks: [
          'X% de Y sempre é igual a Y% de X. Isso sai direto da fórmula — os dois dão (X × Y) ÷ 100 — mas não é óbvio até alguém apontar, e transforma problemas incômodos em fáceis.',
          { formula: 'X% de Y = Y% de X' },
          '4% de 75 parece trabalho. Invertido, é 75% de 4, que é 3. Do mesmo jeito, 12% de 50 vira 50% de 12, que é 6; e 16% de 25 vira 25% de 16, que é 4.',
          { note: 'O truque compensa sempre que um dos dois números é uma porcentagem amigável — 25, 50, 75 — ou quando um é bem menor que o outro. Olhe os dois sentidos antes de começar.' },
          'Ele também serve de conferência. Se você calculou 20% de 150 como 30, a inversão diz que 150% de 20 também deveria dar 30. E dá: 20 mais a metade de 20 de novo.'
        ]
      },
      {
        id: 'fracoes-de-referencia',
        heading: 'Frações de referência',
        blocks: [
          'Algumas porcentagens são frações disfarçadas, e dividir é mais rápido que multiplicar por um decimal.',
          {
            table: {
              head: ['Porcentagem', 'É', 'Então faça', 'Em 240'],
              rows: [
                ['12,5%', '1/8', 'Divida por dois três vezes', '30'],
                ['16,7%', '1/6', 'Divida por 6', '40'],
                ['20%', '1/5', 'Divida por 5', '48'],
                ['25%', '1/4', 'Divida por dois duas vezes', '60'],
                ['33,3%', '1/3', 'Divida por 3', '80'],
                ['37,5%', '3/8', 'Divida por 8, vezes 3', '90'],
                ['62,5%', '5/8', 'Divida por 8, vezes 5', '150'],
                ['66,7%', '2/3', 'Divida por 3, dobre', '160'],
                ['75%', '3/4', 'Tire um quarto', '180'],
                ['87,5%', '7/8', 'Tire um oitavo', '210']
              ]
            }
          },
          'Dividir por dois é a operação mais barata que existe, então tudo que está na linha dos oitavos — 12,5%, 37,5%, 62,5%, 87,5% — sai mais rápido dividindo pela metade repetidamente do que multiplicando. Reconhecer 37,5% como três oitavos transforma uma conta desagradável em três metades e uma multiplicação pequena.'
        ]
      },
      {
        id: 'estimando-na-loja',
        heading: 'Desconto, gorjeta e imposto na prática',
        blocks: [
          { h: 'Desconto é o que sobra, não o que sai' },
          'Ler "35% off em R$ 68" como "ache 35% e depois subtraia" são duas operações. Ler como "pague 65%" é uma. 10% de 68 é 6,80, então 60% é 40,80 e 5% é 3,40, dando R$ 44,20.',
          { h: 'Arredonde a conta, não a porcentagem' },
          'Para a gorjeta, arredonde a conta para um número amigável primeiro e aceite o erro pequeno. Uma conta de R$ 57,40 é R$ 57 para efeito mental; 10% é R$ 5,70, então 20% é R$ 11,40. O arredondamento custou quatro centavos, que não é um número que alguém esteja acompanhando.',
          { h: 'Imposto na etiqueta' },
          'Para somar 20% de cabeça, some um quinto: R$ 45 vira R$ 45 + R$ 9 = R$ 54. Para tirar 20% de um preço cheio, divida por 6 para achar o imposto: R$ 54 ÷ 6 = R$ 9, sobrando R$ 45. O atalho de dividir por 6 só vale a 20%, mas existe um equivalente em qualquer alíquota — é alíquota ÷ (100 + alíquota).',
          { h: 'Confira com um intervalo' },
          'Antes de confiar em qualquer porcentagem, coloque-a entre duas fáceis. Se você precisa de 43% de 380, note que 40% é 152 e 50% é 190, então a resposta tem de ficar entre os dois e mais perto do primeiro. Obter 163,4 é plausível; obter 16,34 ou 234 não é, e o intervalo pega uma vírgula fora do lugar na hora.'
        ]
      },
      {
        id: 'atalhos-de-crescimento',
        heading: 'Duas regras para crescimento',
        blocks: [
          { h: 'A regra dos 72' },
          'Divida 72 pela taxa de crescimento anual para obter aproximadamente em quantos anos algo dobra. A 6% ao ano, 72 ÷ 6 = 12 anos. A 3%, 24 anos. É uma aproximação que funciona bem entre cerca de 4% e 12%, e transforma juros compostos de uma conta em um fato que você diz de cabeça.',
          { h: 'Porcentagens pequenas quase somam' },
          'Para variações abaixo de uns 10%, encadeá-las é próximo de somá-las: uma alta de 3% seguida de uma de 4% dá 7,12%, perto o bastante de 7% para uma estimativa mental. Acima de 10% a aproximação quebra e é preciso multiplicar — uma alta de 30% seguida de uma de 40% dá 82%, e não 70%, e a distância só cresce a partir daí.'
        ]
      }
    ],
    faq: [
      {
        q: 'Qual o jeito mais rápido de calcular porcentagem de cabeça?',
        a: 'Ache 10% andando com a vírgula uma casa à esquerda e escale a partir daí. Metade para 5%, o dobro para 20%, mais a metade para 15%.'
      },
      {
        q: 'Por que X% de Y é igual a Y% de X?',
        a: 'Os dois dão (X × Y) ÷ 100, então a ordem não importa. Significa que 4% de 75 pode ser lido como 75% de 4, que é 3.'
      },
      {
        q: 'Como calcular 15% de gorjeta rapidamente?',
        a: 'Pegue 10% da conta, divida por dois para achar 5% e some os dois. Em uma conta de R$ 64: R$ 6,40 + R$ 3,20 = R$ 9,60.'
      },
      {
        q: 'O que é a regra dos 72?',
        a: 'Dividir 72 por uma taxa de crescimento dá aproximadamente os anos necessários para dobrar. A 6% ao ano, algo dobra em cerca de 12 anos.'
      },
      {
        q: 'Como tirar 20% de imposto de um preço de cabeça?',
        a: 'Divida o preço cheio por 6 para achar o imposto. R$ 54 ÷ 6 = R$ 9, sobrando R$ 45 de líquido.'
      },
      {
        q: 'Posso simplesmente somar duas variações percentuais?',
        a: 'Só se forem pequenas. Abaixo de uns 10% o erro é desprezível; uma alta de 30% e outra de 40% compõem 82%, e não 70%.'
      }
    ]
  },

  mistakes: {
    title: 'Erros Comuns de Porcentagem',
    lead:
      'Seis erros de porcentagem que mudam decisões reais, cada um com a resposta errada, a certa e o motivo pelo qual a intuição falha.',
    sections: [
      {
        id: 'pontos-e-por-cento',
        heading: '1. Confundir ponto percentual com por cento',
        blocks: [
          'Quando as duas grandezas já são porcentagens, "subiu 5%" tem dois significados possíveis, e eles podem diferir em uma ordem de grandeza.',
          'Uma taxa de juros vai de 4% para 5%. Isso é uma alta de um ponto percentual, e uma alta de 25 por cento. Uma conversão que melhora de 2% para 2,5% subiu meio ponto percentual, e também 25%. As duas afirmações sobre cada par são verdadeiras; nenhuma é completa sozinha.',
          { note: 'A convenção: use "pontos percentuais" para a subtração e "por cento" para a variação relativa. Se a fonte não diz qual das duas quer dizer, não há como recuperar a resposta sem o valor inicial.' },
          'A consequência não é acadêmica. Um fundo que cobra "1% de taxa" contra um concorrente de 0,5% cobra cem por cento a mais, e a notícia de uma "alta de 2% no desemprego" pode significar que 5% virou 7% ou que 5% virou 5,1%.'
        ]
      },
      {
        id: 'variacoes-nao-reversiveis',
        heading: '2. Achar que uma variação percentual se desfaz sozinha',
        blocks: [
          'Somar uma porcentagem e depois tirar a mesma porcentagem não devolve o ponto de partida, porque a segunda operação incide sobre um número diferente, maior ou menor.',
          { formula: '100 × 1,20 × 0,80 = 96, e não 100' },
          'A versão da perda é a que importa financeiramente. Um investimento que cai 50% precisa dobrar — um ganho de 100% — para se recuperar, porque o ganho é calculado sobre o valor já reduzido.',
          { formula: 'ganho necessário = p ÷ (100 − p) × 100' },
          {
            table: {
              head: ['Queda de', 'Você fica com', 'Ganho para recuperar'],
              rows: [
                ['10%', '90%', '11,1%'],
                ['20%', '80%', '25,0%'],
                ['30%', '70%', '42,9%'],
                ['40%', '60%', '66,7%'],
                ['50%', '50%', '100,0%'],
                ['60%', '40%', '150,0%'],
                ['75%', '25%', '300,0%'],
                ['90%', '10%', '900,0%']
              ]
            }
          },
          'A assimetria é a razão pela qual uma sequência de ganhos e perdas alternados da mesma porcentagem sempre termina abaixo de onde começou, seja qual for a ordem.'
        ]
      },
      {
        id: 'media-de-porcentagens',
        heading: '3. Tirar a média de porcentagens sem ponderar',
        blocks: [
          'Duas porcentagens só podem ser mediadas diretamente se descreverem grupos do mesmo tamanho. Fora disso, a média simples está errada, às vezes muito.',
          'Uma turma de 10 tem 90% de aprovação; uma de 100 tem 50%. A média simples é 70%. A taxa real é (9 + 50) ÷ 110 = 53,6%, porque o grupo maior domina.',
          { formula: 'média ponderada = Σ(porcentagem × tamanho do grupo) ÷ Σ(tamanho do grupo)' },
          'A correção confiável é evitar porcentagens até o fim: some os números brutos, some os totais e divida uma vez só. É o mesmo motivo pelo qual o aproveitamento de uma temporada não é a média dos aproveitamentos mensais, e pelo qual a margem geral de uma empresa não é a média das margens dos produtos.',
          { h: 'A mesma armadilha em taxas de crescimento' },
          'Tirar a média aritmética de taxas de crescimento anuais superestima o resultado real. Crescer 50% em um ano e cair 50% no seguinte dá média zero, mas deixa você em 75% de onde começou. A média correta para taxas que se compõem é a média geométrica: √(1,50 × 0,50) = 0,866, ou −13,4% ao ano.'
        ]
      },
      {
        id: 'base-errada',
        heading: '4. Tirar a porcentagem do número errado',
        blocks: [
          'Este é o erro mais comum de todos, e o mais difícil de perceber depois, porque a aritmética em si está correta — ela apenas foi aplicada ao número errado.',
          {
            table: {
              head: ['Situação', 'A base tentadora', 'A base correta'],
              rows: [
                ['Desfazer um desconto de 20%', 'O preço promocional', 'O preço promocional, mas dividindo e não somando'],
                ['A porcentagem de um reajuste', 'O salário novo', 'O salário antigo'],
                ['Tirar o imposto de um total', 'O preço cheio', 'O líquido sobre o qual a alíquota incidiu'],
                ['A margem de uma venda', 'O custo', 'A receita'],
                ['Variação percentual no tempo', 'O valor posterior', 'O valor anterior'],
                ['Gorjeta sobre a conta', 'O total com taxa de serviço', 'O consumo, antes da taxa']
              ]
            }
          },
          'Todas as linhas são o mesmo erro: a porcentagem foi originalmente tirada de um número, e a conta inversa está sendo aplicada a outro. Dizer a base em voz alta antes de começar — "vinte por cento de quê, exatamente" — resolve as seis.'
        ]
      },
      {
        id: 'porcentagem-de-porcentagem',
        heading: '5. Tirar porcentagem de porcentagem',
        blocks: [
          'Quando uma porcentagem é aplicada a algo que já é porcentagem, o resultado é um número bem menor do que parece.',
          'Um partido com 30% das intenções de voto perde 10% do seu apoio. Ele está agora com 27%, e não com 20% — os 10% eram dos 30, e não do eleitorado. Foram três pontos percentuais, e não dez.',
          { formula: '30% × (1 − 10 ÷ 100) = 27%' },
          'O mesmo vale para comissões sobre comissões, descontos sobre produtos já com desconto e imposto cobrado sobre uma conta que inclui taxa de serviço. Cada camada multiplica, e a multiplicação sempre produz menos do que a soma sugeriria.',
          { h: 'O caso especial da porcentagem dobrada' },
          'Ir de 30% para 60% é um aumento de 100%, mas apenas 30 pontos percentuais. Os dois estão corretos, e qual informar depende de o leitor precisar da escala ou do significado. Informar só um é de onde vem a maioria dos gráficos enganosos.'
        ]
      },
      {
        id: 'percentil-e-taxa',
        heading: '6. Ler percentil como porcentagem',
        blocks: [
          'Percentil é posição, não fatia. Estar no percentil 90 significa que 90% das pessoas tiveram resultado menor — não diz nada sobre quantas questões foram acertadas. É possível estar no percentil 90 com 55% da prova.',
          'A mesma confusão aparece em estatísticas de renda. "Os 10% que mais ganham" é um grupo por percentil; "10% da renda" é uma fatia. Uma manchete que junta os dois — "os 10% do topo ficam com 40%" — está comparando posição com fatia, e só faz sentido porque diz explicitamente as duas coisas.',
          { h: 'E taxas que não são sobre 100' },
          'Alguns números que parecem porcentagens não são fatia de nada: uma taxa de homicídios por 100 mil habitantes, uma taxa de juros ao ano, uma taxa de defeitos por milhão. Tratá-los como porcentagem de um total, ou tirar média deles entre populações de tamanhos diferentes, produz números que não são exatamente errados — são sem sentido.',
          { note: 'Um teste rápido para qualquer porcentagem: diga qual é o todo. Se você não consegue dizer de que aquele número é porcentagem, ele ainda não é uma porcentagem — é um número com um símbolo atrás.' }
        ]
      }
    ],
    faq: [
      {
        q: 'Por que uma perda de 50% precisa de um ganho de 100% para recuperar?',
        a: 'Porque o ganho é calculado sobre o valor reduzido. 100 caindo pela metade vira 50, e ir de 50 de volta a 100 é dobrar.'
      },
      {
        q: 'Posso tirar a média de duas porcentagens?',
        a: 'Só quando descrevem grupos do mesmo tamanho. Fora disso, pondere cada uma pelo tamanho do grupo, ou trabalhe com os números brutos e divida uma vez só no fim.'
      },
      {
        q: 'Se um partido com 30% perde 10% do apoio, onde ele fica?',
        a: 'Em 27%. Os 10% incidem sobre os 30, e não sobre o eleitorado inteiro, então foram perdidos três pontos percentuais.'
      },
      {
        q: 'Qual é o erro de porcentagem mais comum?',
        a: 'Aplicar a fórmula certa à base errada — dividir um reajuste pelo salário novo, subtrair o imposto de um preço cheio ou calcular margem sobre o custo em vez da receita.'
      },
      {
        q: 'Somar 20% e depois tirar 20% me devolve ao início?',
        a: 'Não. 100 × 1,2 × 0,8 = 96. A segunda porcentagem incide sobre um número maior do que a primeira.'
      },
      {
        q: 'O percentil 90 é o mesmo que 90%?',
        a: 'Não. Percentil é posição em relação às outras pessoas; porcentagem é fatia de um total. Dá para estar no percentil 90 com nota 55%.'
      }
    ]
  },

  faq: {
    title: 'Perguntas Frequentes',
    lead: 'Como a calculadora se comporta, o que fazer quando um resultado parece errado e como o site funciona.',
    sections: [
      {
        id: 'sobre-a-ferramenta',
        heading: 'Usando a calculadora',
        blocks: [
          'A calculadora resolve o campo que você deixar em branco. Preencha dois dos três — base, porcentagem e resultado — e o terceiro aparece enquanto você digita, sem botão para apertar.',
          'O campo que a calculadora resolveu aparece com borda tracejada e fundo acinzentado, então dá para ver de relance quais números você forneceu e qual foi deduzido. Se você digitar nesse campo, a calculadora passa a resolver outro, usando os dois valores que você mexeu mais recentemente.',
          'Abaixo da resposta, o painel lista a conta em ordem com os seus próprios números. Essa seção existe para você conferir o resultado em vez de confiar nele, e para o site servir a quem está aprendendo o método, e não só a quem quer o total.',
          { h: 'Quando um campo para de atualizar' },
          'A calculadora sempre guarda os dois campos que você editou por último e resolve o terceiro. Se ela parecer estar resolvendo o campo errado, limpe tudo e digite os dois que você conhece na ordem em que os conhece.',
          { h: 'O que ela não faz' },
          'Algumas combinações não têm resposta, e a calculadora deixa o campo vazio em vez de inventar uma. Uma variação percentual a partir de zero é indefinida, porque dividiria por zero, e o mesmo vale para perguntar que porcentagem um número é de nada.'
        ]
      },
      {
        id: 'sobre-os-numeros',
        heading: 'Precisão e arredondamento',
        blocks: [
          'Os resultados aparecem com duas casas decimais, e um ",00" no fim é removido. Os valores intermediários da conta passo a passo aparecem com mais casas, porque arredondá-los para duas faria as linhas parecerem inconsistentes com a resposta.',
          'Por baixo, a aritmética usa ponto flutuante de precisão dupla, o mesmo de qualquer planilha ou navegador. Isso é exato para as ordens de grandeza com que este site lida, com a ressalva conhecida de que algumas frações decimais não têm representação exata em binário.',
          'Para contabilidade ou emissão de nota, arredonde explicitamente na etapa que as suas regras exigem em vez de confiar no valor exibido. A página de metodologia detalha o comportamento de arredondamento.'
        ]
      },
      {
        id: 'sobre-o-site',
        heading: 'Sobre o site',
        blocks: [
          'Cada página é um arquivo HTML estático entregue por uma CDN. A calculadora é JavaScript que assume depois que a página carrega, e é por isso que as explicações já são legíveis antes de qualquer script rodar, e por isso que a ferramenta continua funcionando se a conexão cair depois.',
          'Nada do que você digita é transmitido. Não há servidor para receber, não há sistema de contas e não há histórico das suas contas guardado em lugar nenhum.'
        ]
      }
    ],
    faq: [
      {
        q: 'Quais dois campos devo preencher?',
        a: 'Quaisquer dois. A calculadora descobre qual valor falta e o resolve, então o mesmo formulário acha uma porcentagem, uma parte ou um total.'
      },
      {
        q: 'Como troco o tipo de cálculo?',
        a: 'Use as abas acima do formulário: porcentagem de um número, quantos por cento um número é de outro, aumento ou redução, e variação percentual entre dois valores.'
      },
      {
        q: 'Por que um dos campos está acinzentado com borda tracejada?',
        a: 'É o campo que a calculadora resolveu. Digitar nele o transforma em campo de entrada de novo, e a calculadora passa a resolver o campo que você editou há mais tempo.'
      },
      {
        q: 'Posso digitar uma porcentagem negativa?',
        a: 'Sim, no modo de aumento/redução, onde um valor negativo significa uma queda. Os outros modos aceitam apenas porcentagens positivas, porque uma negativa não teria sentido ali.'
      },
      {
        q: 'Posso usar vírgula como separador decimal?',
        a: 'Sim. Escolha o separador no topo da página. A escolha fica salva no seu aparelho e vale para a entrada e para os resultados.'
      },
      {
        q: 'O site funciona sem JavaScript?',
        a: 'As explicações, tabelas e respostas sim, porque toda página é HTML pré-renderizado. A calculadora interativa precisa de JavaScript.'
      },
      {
        q: 'O site está disponível em outros idiomas?',
        a: 'A interface está em português, inglês, espanhol, francês, alemão e italiano. O conjunto completo de artigos existe em português e inglês; os demais idiomas têm hoje a página inicial e a de metodologia, e apontam para o inglês no restante.'
      },
      {
        q: 'Funciona no celular?',
        a: 'Sim. O layout se adapta a telas pequenas e os campos numéricos abrem o teclado numérico em dispositivos móveis.'
      },
      {
        q: 'Posso compartilhar um cálculo com alguém?',
        a: 'O botão de compartilhar envia a frase do resultado para o menu de compartilhamento do aparelho, ou copia para a área de transferência se o compartilhamento não estiver disponível. O texto sai no idioma em que você está lendo o site.'
      },
      {
        q: 'Qual a precisão dos resultados?',
        a: 'Os cálculos usam ponto flutuante de precisão dupla e os resultados são arredondados para duas casas na exibição. Para contabilidade, arredonde explicitamente na etapa que as suas regras exigirem.'
      },
      {
        q: 'Como relato um erro?',
        a: `Escreva para ${CONTACT_EMAIL} informando o modo que você usava, os números exatos que digitou, o que apareceu e o que você esperava. Relatos reproduzíveis são corrigidos rápido.`
      },
      {
        q: 'A calculadora é gratuita?',
        a: 'Sim, inteiramente gratuita e sem cadastro. O site se mantém com publicidade posicionada fora da ferramenta.'
      }
    ]
  },

  methodology: {
    title: 'Metodologia',
    lead:
      'Quais fórmulas as calculadoras usam, como os resultados são arredondados, onde a aritmética tem limites conhecidos e como as páginas deste site são escritas e revisadas.',
    sections: [
      {
        id: 'formulas-usadas',
        heading: 'As fórmulas por trás de cada ferramenta',
        blocks: [
          'Nada neste site usa método proprietário. Todo resultado vem de aritmética padrão que você pode reproduzir no papel, e a conta passo a passo abaixo de cada resposta mostra exatamente quais operações foram aplicadas aos seus números.',
          {
            table: {
              head: ['Ferramenta', 'Fórmula usada'],
              rows: [
                ['Porcentagem de um número', 'base × (porcentagem ÷ 100)'],
                ['Quantos por cento X é de Y', '(parte ÷ total) × 100'],
                ['Aumento ou redução', 'base × (1 + porcentagem ÷ 100)'],
                ['Variação percentual', '((novo − antigo) ÷ antigo) × 100'],
                ['Desconto', 'preço × (1 − desconto ÷ 100)'],
                ['Gorjeta', 'conta × (porcentagem ÷ 100)'],
                ['Imposto, somando', 'líquido × (1 + alíquota ÷ 100)'],
                ['Imposto, retirando', 'cheio ÷ (1 + alíquota ÷ 100)'],
                ['Margem de lucro', '((receita − custo) ÷ receita) × 100'],
                ['Aumento salarial', '((novo − antigo) ÷ antigo) × 100'],
                ['Aumento real após inflação', '((1 + aumento ÷ 100) ÷ (1 + inflação ÷ 100) − 1) × 100'],
                ['Pontos percentuais', 'segundo − primeiro'],
                ['Variação relativa', '((segundo − primeiro) ÷ primeiro) × 100'],
                ['Diferença percentual', '|segundo − primeiro| ÷ ((primeiro + segundo) ÷ 2) × 100']
              ]
            }
          },
          'Cada calculadora também resolve a fórmula no sentido inverso quando você deixa outro campo vazio. A inversa de uma multiplicação é uma divisão, não uma subtração, e essa é a coisa mais consequente que este site tenta deixar visível.'
        ]
      },
      {
        id: 'arredondamento',
        heading: 'Arredondamento e precisão',
        blocks: [
          {
            ul: [
              'As respostas são arredondadas para duas casas decimais e um ",00" no fim é removido, então 30,00 aparece como 30.',
              'Os valores intermediários da conta passo a passo aparecem com até seis casas decimais, para que cada linha seja coerente com a seguinte.',
              'O arredondamento acontece só na exibição. A aritmética roda com valores não arredondados, então operações encadeadas não acumulam erro de exibição.',
              'As porcentagens não são limitadas a nenhuma faixa. Um resultado acima de 100% ou abaixo de zero aparece como calculado, porque os dois fazem sentido em vários destes contextos.'
            ]
          },
          { h: 'Ponto flutuante' },
          'Os cálculos usam a aritmética IEEE 754 de precisão dupla embutida em todo navegador e planilha. Algumas frações decimais não têm representação exata em binário, e é por isso que 0,1 + 0,2 notoriamente não é igual a 0,3 em quase toda linguagem de programação. Com duas casas na exibição isso é invisível, mas é uma propriedade real da aritmética e não um defeito deste site.',
          { h: 'O que isso significa para a contabilidade' },
          'A legislação tributária costuma dizer onde o arredondamento deve ocorrer — por item, por documento ou por alíquota — e a resposta exigida pode diferir em centavos de um único cálculo arredondado. Use o número exibido como conferência, não como lançamento, e aplique a regra de arredondamento da sua jurisdição na etapa que ela indicar.'
        ]
      },
      {
        id: 'dados-de-referencia',
        heading: 'Dados de referência neste site',
        blocks: [
          'Algumas páginas trazem tabelas que não são aritmética derivada e sim dados observados — alíquotas por país, costumes de gorjeta, faixas típicas de margem. Elas são compiladas de fontes públicas governamentais e setoriais e servem de orientação, não de autoridade.',
          {
            ul: [
              'Alíquotas mudam, muitas vezes com pouco aviso, e a maioria das jurisdições mantém alíquotas reduzidas ao lado da padrão. Confirme a alíquota vigente com o órgão competente antes de emitir qualquer documento.',
              'Costumes de gorjeta são sociais e não legais, variam dentro de um mesmo país e mudam com o tempo. As faixas descrevem prática comum, não regra.',
              'Nada neste site é orientação financeira, tributária, contábil ou jurídica. A aritmética é apenas uma entrada em decisões que normalmente dependem de regras específicas da sua situação.'
            ]
          }
        ]
      },
      {
        id: 'como-as-paginas-sao-feitas',
        heading: 'Como as páginas são escritas e revisadas',
        blocks: [
          'As páginas são escritas à mão, não geradas. Todo exemplo resolvido do site foi calculado e conferido contra a ferramenta ao lado da qual aparece, e os números das tabelas foram recalculados em vez de copiados de outro lugar.',
          'Cada página traz a data da última revisão no rodapé do texto. Essa data muda quando a substância da página muda — um número corrigido, uma seção reescrita, uma tabela nova — e não por correções tipográficas. A mesma data é publicada nos dados estruturados da página e no sitemap do site, para que as três concordem.',
          { h: 'Correções' },
          `Se um resultado ou um dado estiver errado, ele é corrigido. Relatos vão para ${CONTACT_EMAIL}; informar os números que você digitou e a resposta que esperava costuma bastar para reproduzir o problema no mesmo dia. Correções de substância são feitas na própria página e a data de revisão é atualizada.`,
          { h: 'Traduções' },
          'As versões em português e inglês de cada página são escritas como textos paralelos, não traduzidas por máquina, e os exemplos resolvidos são conferidos nos dois idiomas. Onde um idioma ainda não tem uma página, os links apontam para a versão em inglês em vez de para um esboço.'
        ]
      }
    ],
    faq: [
      {
        q: 'Como os resultados são arredondados?',
        a: 'Para duas casas decimais na exibição, com os zeros finais removidos. A aritmética por baixo não é arredondada, então cálculos encadeados não acumulam erro de exibição.'
      },
      {
        q: 'Por que a conta mostra mais casas decimais que a resposta?',
        a: 'Para que cada linha decorra da anterior. Arredondar um valor intermediário para duas casas às vezes faria a multiplicação final parecer errada.'
      },
      {
        q: 'Posso usar estes números em uma nota fiscal?',
        a: 'Use como conferência. A legislação define onde o arredondamento deve ocorrer, e o valor exigido pode diferir em centavos de um único cálculo arredondado.'
      },
      {
        q: 'De onde vêm as alíquotas e os costumes de gorjeta?',
        a: 'De fontes públicas governamentais e setoriais, compiladas para orientação. Alíquotas mudam e costumes variam, então confirme o que for importante com o órgão competente.'
      },
      {
        q: 'O que significa a data de "última revisão"?',
        a: 'A página foi lida por inteiro e seus números conferidos naquela data. Ela muda quando a substância muda, não por correções tipográficas.'
      }
    ]
  },

  about: {
    title: 'Sobre o CalcPercentages',
    lead:
      'Um site pequeno e independente que faz uma coisa: aritmética de porcentagem, rápido, mostrando a conta e sem atrapalhar.',
    sections: [
      {
        id: 'o-que-e-este-site',
        heading: 'O que é este site',
        blocks: [
          'O CalcPercentages é um projeto independente, não uma empresa. Ele existe porque a maioria das calculadoras de porcentagem online enterra uma ferramenta simples sob pop-ups, cadastros obrigatórios e três telas de rolagem antes dos campos aparecerem.',
          'A meta de projeto é que a calculadora esteja utilizável em um segundo depois que a página carrega, no celular, em uma conexão ruim. Todo o resto — as explicações, as tabelas de referência, os exemplos resolvidos — fica abaixo da ferramenta, onde ajuda quem quiser e não atrapalha quem não quiser.',
          'A segunda meta é que o site valha a leitura, e não apenas o uso. Qualquer um coloca quatro campos em uma página; a parte trabalhosa é explicar por que dividir um preço cheio por 1,2 não é a mesma coisa que subtrair 20% dele, e por que essa distinção custa dinheiro em toda nota em que ela é ignorada.'
        ]
      },
      {
        id: 'o-que-ele-nao-faz',
        heading: 'O que ele deliberadamente não faz',
        blocks: [
          {
            ul: [
              'Sem conta, sem cadastro, sem e-mail exigido para nada.',
              'Sem aviso de cookies além do consentimento que a legislação publicitária exige no Espaço Econômico Europeu, no Reino Unido e na Suíça.',
              'Sem transmitir os números que você digita. Não existe servidor que pudesse recebê-los.',
              'Sem anúncios dentro ou acima da calculadora. A publicidade fica abaixo da ferramenta, depois do conteúdo.',
              'Sem telas intersticiais, sem pop-up de newsletter, sem "leia o resto" bloqueado.'
            ]
          },
          'São restrições, não funcionalidades, e algumas delas custam tráfego ou receita. Elas se mantêm porque uma calculadora contra a qual você precisa lutar não é uma calculadora.'
        ]
      },
      {
        id: 'como-funciona',
        heading: 'Como funciona',
        blocks: [
          'O site é uma aplicação estática pré-renderizada. Cada página é HTML puro entregue por uma CDN, e a calculadora interativa assume depois que o JavaScript carrega. Não há backend nem banco de dados.',
          'Os cálculos acontecem inteiramente no seu aparelho. Nada do que você digita é enviado, registrado ou armazenado. A única coisa guardada entre visitas é a sua escolha de separador decimal, no armazenamento local do navegador.',
          { h: 'Precisão' },
          'As fórmulas usadas estão documentadas abertamente na página de metodologia e repetidas em cada calculadora, e a ferramenta mostra a conta com os seus próprios números para que você confira o resultado em vez de confiar nele. Se encontrar um resultado que pareça errado, avise — veja a página de contato.',
          { h: 'Como o conteúdo é feito' },
          'As páginas são escritas à mão. Os exemplos resolvidos são calculados e conferidos contra a ferramenta ao lado da qual aparecem, e as tabelas de referência são recalculadas em vez de copiadas. Cada página traz a data da última revisão.'
        ]
      },
      {
        id: 'como-se-mantem',
        heading: 'Como o site se mantém',
        blocks: [
          'O site é gratuito e se mantém com publicidade posicionada abaixo da calculadora e fora do texto dos artigos. Não há links de afiliado, não há conteúdo patrocinado e nada aqui é escrito para vender um produto. As tabelas e recomendações não sofrem influência de relação comercial nenhuma, porque não existe nenhuma.',
          'A política de privacidade explica o que a publicidade envolve e como recusar anúncios personalizados.'
        ]
      },
      {
        id: 'outras-ferramentas',
        heading: 'Ferramentas relacionadas',
        blocks: [
          'A mesma abordagem foi aplicada a duas calculadoras irmãs feitas pela mesma pessoa: uma calculadora de matrizes em matrixcalc.net e uma calculadora de dias úteis em calcworkdays.com. Elas compartilham o desenho e o princípio — a ferramenta primeiro, a explicação abaixo — mas nenhum dado de qualquer tipo é compartilhado entre os sites.'
        ]
      }
    ]
  },

  contact: {
    title: 'Contato',
    lead: 'Correções, relatos de erro, ajustes de tradução e sugestões são todos bem-vindos, e erros de substância são corrigidos rápido.',
    sections: [
      {
        id: 'fale-conosco',
        heading: 'Fale conosco',
        blocks: [
          `O jeito mais rápido de falar com o site é por e-mail: ${CONTACT_EMAIL}`,
          'Não há formulário de contato, porque um formulário significaria guardar o que você escreve em um servidor, e o site não tem um.',
          { h: 'Relatando um resultado errado' },
          'Informe quatro coisas: o modo de cálculo que você usava, os números exatos que digitou, o resultado que apareceu e o resultado que você esperava. Isso costuma bastar para reproduzir e corrigir o problema no mesmo dia.',
          'Um relato útil se parece com isto: "Na página de imposto, modo de aumento/redução, digitei 300 na base e 20 na porcentagem. Apareceu 360, e eu esperava 250 porque queria tirar o imposto e não somar." Metade dos relatos que chegam acaba sendo esse mal-entendido específico, e vale conferir a seção sobre retirar imposto antes de escrever.',
          { h: 'O que vale relatar' },
          {
            ul: [
              'Um resultado aritmeticamente errado, com os números que o produziram.',
              'Um dado desatualizado em alguma tabela — uma alíquota que mudou, por exemplo.',
              'Uma tradução que soa estranha ou usa o termo técnico errado no seu idioma.',
              'Qualquer coisa que não funcione com teclado ou leitor de tela.',
              'Uma página lenta, quebrada no seu aparelho ou mal renderizada no seu tamanho de tela.'
            ]
          }
        ]
      },
      {
        id: 'prazos',
        heading: 'O que esperar',
        blocks: [
          'Este é um projeto de uma pessoa só, não um suporte. Relatos de erro reproduzíveis costumam ser tratados em um ou dois dias; sugestões de funcionalidade e perguntas gerais demoram mais, e nem toda sugestão vira código. Todas as mensagens são lidas.',
          'Pedidos de funcionalidade, correções de tradução, problemas de acessibilidade e assuntos de publicidade vão todos para o mesmo endereço.'
        ]
      },
      {
        id: 'privacidade',
        heading: 'Pedidos sobre privacidade',
        blocks: [
          'Para dúvidas sobre tratamento de dados, ou para exercer um direito sob a LGPD, o GDPR ou a CCPA, use o mesmo endereço e mencione sob qual regulamento você está escrevendo. Os pedidos são atendidos dentro do prazo legal.',
          'Vale ler a política de privacidade antes: como o site não coleta dado pessoal nenhum, a maioria dos pedidos de acesso e exclusão não tem sobre o que agir, e a resposta costuma ser que não existe registro seu a apresentar.'
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
    lead: 'As condições sob as quais este site é disponibilizado, e os limites do que ele promete.',
    sections: [
      {
        id: 'aceitacao',
        heading: 'Aceitação',
        blocks: [
          'Ao usar o CalcPercentages você concorda com estes termos. Se não concordar com eles, por favor não use o site.',
          'Estes termos valem para todas as páginas do domínio, em todos os idiomas, e para as próprias calculadoras. Eles não criam uma relação de conta, porque não existe sistema de contas — usar o site é o acordo inteiro.'
        ]
      },
      {
        id: 'uso-do-site',
        heading: 'Uso do site',
        blocks: [
          'A calculadora e as explicações que a acompanham são oferecidas gratuitamente para uso pessoal e comercial. Você pode usar os resultados no seu próprio trabalho sem citar a fonte, e pode citar uma fórmula ou um exemplo resolvido no seu material.',
          'Você não pode tentar prejudicar o funcionamento do site, usar sistemas automatizados para sobrecarregá-lo nem apresentá-lo como se fosse um serviço seu.',
          { h: 'O que não é permitido' },
          {
            ul: [
              'Republicar as explicações, tabelas de referência ou a estrutura das páginas como conteúdo próprio.',
              'Embutir a calculadora em outro site de forma a apresentá-la como ferramenta daquele site.',
              'Coleta automatizada em ritmo que degrade o serviço para os demais visitantes.',
              'Contornar, esconder ou clicar automaticamente na publicidade que sustenta o site.',
              'Usar o site de maneira que infrinja a lei do lugar onde você está.'
            ]
          },
          'O uso da aritmética não é restrito, e nem poderia ser: fórmulas matemáticas não pertencem a ninguém. O que estes termos cobrem é o texto ao redor delas.'
        ]
      },
      {
        id: 'sem-garantia',
        heading: 'Precisão e isenção de responsabilidade',
        blocks: [
          'Há cuidado considerável nas fórmulas e nos exemplos resolvidos deste site, mas a ferramenta é oferecida "como está", sem garantia de nenhuma espécie, expressa ou implícita, inclusive qualquer garantia implícita de adequação a uma finalidade específica.',
          'Nada aqui é orientação financeira, tributária, contábil ou jurídica. A aritmética de porcentagem é apenas uma entrada em decisões que normalmente dependem de regras específicas da sua jurisdição e das suas circunstâncias. Confira qualquer resultado que seja importante antes de se apoiar nele e consulte um profissional habilitado quando for o caso.',
          { h: 'Especialmente os dados de referência' },
          'Algumas páginas trazem valores observados em vez de aritmética derivada — alíquotas por país, costumes de gorjeta, faixas típicas de margem. Alíquotas mudam, muitas vezes de uma hora para outra, e costumes variam dentro de um mesmo país. Essas tabelas são orientação, não autoridade, e devem ser confirmadas na fonte oficial competente antes de qualquer decisão. A página de metodologia explica de onde elas vêm.',
          'Na máxima extensão permitida por lei, o responsável por este site não assume qualquer responsabilidade por perdas decorrentes do uso do site ou do conteúdo dele, ou da confiança neles depositada.'
        ]
      },
      {
        id: 'disponibilidade',
        heading: 'Disponibilidade e alterações',
        blocks: [
          'O site é oferecido sem qualquer garantia de disponibilidade. Funcionalidades, conteúdo e estes termos podem mudar a qualquer momento sem aviso, e páginas podem ser acrescentadas, reescritas ou removidas.',
          'Quando uma alteração nestes termos for substancial, a versão revisada é publicada nesta página e a data de revisão no rodapé é atualizada. Continuar usando o site depois de uma alteração significa aceitar os termos revisados.'
        ]
      },
      {
        id: 'publicidade-e-links',
        heading: 'Publicidade e links externos',
        blocks: [
          'O site é gratuito e se mantém com publicidade posicionada fora da calculadora. Os anúncios são veiculados por terceiros e o seu conteúdo não é selecionado, endossado nem verificado por este site. O que a publicidade envolve em relação aos seus dados, e como recusar anúncios personalizados, está descrito na política de privacidade.',
          'As páginas daqui apontam para outras calculadoras e para referências de terceiros. Esses sites têm termos e políticas próprios, e os daqui não os cobrem. Um link não é endosso do conteúdo, da precisão ou das práticas comerciais do site apontado.'
        ]
      },
      {
        id: 'propriedade-intelectual',
        heading: 'Propriedade intelectual',
        blocks: [
          'As explicações escritas, as tabelas de referência, os exemplos resolvidos e o desenho deste site pertencem ao seu responsável. As fórmulas matemáticas em si não pertencem a ninguém; você é livre para usá-las e para reproduzir uma citação curta com atribuição.',
          'Se você acredita que algo neste site infringe os seus direitos, escreva para o endereço abaixo com detalhes suficientes para identificar o material, e o caso será analisado.'
        ]
      },
      {
        id: 'contato-termos',
        heading: 'Dúvidas',
        blocks: [
          `Dúvidas sobre estes termos podem ser enviadas para ${CONTACT_EMAIL}. Correções ao próprio conteúdo são bem-vindas no mesmo endereço e costumam ser tratadas rápido — veja na página de contato o que torna um relato fácil de reproduzir.`
        ]
      }
    ]
  }
};

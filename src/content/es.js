import { CONTACT_EMAIL } from '../config/site';

export default {
  home: {
    title: 'Calculadora de Porcentajes',
    lead:
      'Calcula cualquier porcentaje en un solo paso y ve la operación que hay detrás del resultado. Rellena dos campos cualesquiera y el tercero se calcula al instante: sin registro, sin anuncios dentro de la herramienta y funcionando sin conexión una vez cargada la página.',
    sections: [
      {
        id: 'como-calcular-porcentajes',
        heading: 'Cómo calcular un porcentaje',
        blocks: [
          'Un porcentaje no es más que una fracción con 100 en el denominador. «20 %» significa 20 de cada 100, o 0,20 en decimal. Todos los cálculos de esta página parten de esa misma idea, y por eso cuatro preguntas de apariencia distinta se reducen al mismo puñado de fórmulas.',
          { h: '1. ¿Cuánto es X % de Y?' },
          { formula: 'resultado = base × (porcentaje ÷ 100)' },
          'Es el caso cotidiano: un descuento, una propina, una comisión. Para hallar el 20 % de 150, convierte 20 % en 0,20 y multiplica: 150 × 0,20 = 30. Un atajo útil es que los porcentajes son reversibles: el 20 % de 150 y el 150 % de 20 son ambos 30, así que puedes intercambiar los números si uno de ellos resulta más cómodo mentalmente.',
          { h: '2. ¿Qué porcentaje es X de Y?' },
          { formula: 'porcentaje = (parte ÷ total) × 100' },
          'Úsalo cuando ya tienes ambos números y quieres saber cómo se relacionan. Si acertaste 45 de 180 preguntas: 45 ÷ 180 = 0,25, es decir, un 25 %. El orden importa: el número que mides va arriba y el total abajo.',
          { h: '3. Aumentar o reducir un número en un porcentaje' },
          { formula: 'resultado = base × (1 + porcentaje ÷ 100)' },
          'Sumar un 15 % a 120 da 120 × 1,15 = 138. Restarlo da 120 × 0,85 = 102. Una operación no deshace la otra: subir un 15 % y luego bajar un 15 % te deja en 117, no en 120, porque el segundo porcentaje se aplica sobre un número mayor.',
          { h: '4. Variación porcentual entre dos números' },
          { formula: 'variación = ((nuevo − antiguo) ÷ antiguo) × 100' },
          'Pasar de 80 a 100 es ((100 − 80) ÷ 80) × 100 = un aumento del 25 %. Volver de 100 a 80 es una caída del 20 %, no del 25 %, porque el valor de partida ha cambiado y la misma diferencia absoluta representa otra fracción de él. Esta asimetría confunde constantemente y vale la pena interiorizarla.'
        ]
      },
      {
        id: 'tabla-de-referencia',
        heading: 'Porcentajes, fracciones y decimales',
        blocks: [
          'Los valores siguientes aparecen con la frecuencia suficiente como para que reconocerlos te ahorre recurrir a la calculadora.',
          {
            table: {
              head: ['Porcentaje', 'Fracción', 'Decimal', 'Método rápido'],
              rows: [
                ['1 %', '1/100', '0,01', 'Mueve la coma dos lugares a la izquierda'],
                ['5 %', '1/20', '0,05', 'Toma el 10 % y divídelo entre dos'],
                ['10 %', '1/10', '0,10', 'Mueve la coma un lugar a la izquierda'],
                ['12,5 %', '1/8', '0,125', 'La mitad del 25 %'],
                ['20 %', '1/5', '0,20', 'El doble del 10 %'],
                ['25 %', '1/4', '0,25', 'La mitad, y otra vez la mitad'],
                ['33,3 %', '1/3', '0,333…', 'Divide entre 3'],
                ['50 %', '1/2', '0,50', 'La mitad'],
                ['75 %', '3/4', '0,75', 'Quita una cuarta parte'],
                ['100 %', '1/1', '1,00', 'El propio número'],
                ['150 %', '3/2', '1,50', 'El número más su mitad']
              ]
            }
          },
          'Leer la tabla en sentido inverso es igual de útil: si te dicen que un precio ha subido «un tercio», eso es un aumento del 33,3 %, y el multiplicador que necesitas es 1,333.'
        ]
      },
      {
        id: 'donde-aparecen',
        heading: 'Dónde aparecen los porcentajes',
        blocks: [
          { h: 'Compras y descuentos' },
          'Un cartel de «30 % de descuento» significa que pagas el 70 % del precio original. Los descuentos acumulados se multiplican en vez de sumarse: un 20 % seguido de otro 10 % es 0,8 × 0,9 = 0,72, es decir, un 28 % de descuento total y no un 30 %.',
          { h: 'Propinas y cargo por servicio' },
          'La propina es un «X % de Y» puro sobre el importe antes de impuestos. El método mental más rápido es hallar el 10 % moviendo la coma y luego escalar: el 15 % es el 10 % más la mitad de esa cifra.',
          { h: 'IVA e impuestos' },
          'El impuesto suele añadirse sobre un precio sin IVA, así que un tipo del 21 % significa multiplicar por 1,21. En sentido contrario —extraer el impuesto de un precio final— hay que dividir entre 1,21, no restar el 21 %.',
          { h: 'Notas y exámenes' },
          'Una nota sobre un total cualquiera es el caso «X es qué porcentaje de Y». 34 sobre 40 es un 85 %.',
          { h: 'Sueldo y subidas' },
          'Una subida salarial es una variación porcentual sobre el sueldo actual, pero lo que importa es la subida descontada la inflación. Un 3 % en un año con un 4 % de inflación te deja algo peor de lo que estabas.',
          { h: 'Intereses y crecimiento' },
          'El interés se compone, es decir, cada periodo aplica su porcentaje al resultado anterior. Un 5 % anual durante tres años es un factor de 1,05³ = 1,157, o un 15,7 % de crecimiento total, bastante más que el 15 % que daría la suma.'
        ]
      },
      {
        id: 'errores-frecuentes',
        heading: 'Tres errores que conviene evitar',
        blocks: [
          { h: 'Un punto porcentual no es un porcentaje' },
          'Si un tipo de interés pasa del 4 % al 5 %, eso es una subida de un punto porcentual, pero un aumento del 25 % en términos relativos. Los medios mezclan constantemente ambas cosas, y la diferencia basta para cambiar decisiones.',
          { h: 'Las variaciones porcentuales no se deshacen solas' },
          'Un valor que cae un 50 % necesita subir un 100 % para volver al punto de partida. En general, recuperarse de una caída del p % exige una ganancia de p ÷ (100 − p) × 100 por ciento.',
          { h: 'Promediar porcentajes ignora la base' },
          'Una tasa de aprobados del 90 % en una clase de 10 y del 50 % en una de 100 no promedian un 70 %. Pondera cada porcentaje por el tamaño de su grupo, o trabaja con los recuentos brutos.'
        ]
      },
      {
        id: 'el-resto-del-sitio',
        heading: 'El resto del sitio',
        blocks: [
          'La calculadora de arriba resuelve los cuatro casos generales. Las páginas siguientes toman una situación concreta y profundizan en ella, cada una con sus propios ejemplos resueltos y tablas de referencia. Por ahora están escritas en inglés; los enlaces del pie de página llevan directamente a ellas.',
          {
            table: {
              head: ['Página', 'Úsala cuando'],
              rows: [
                ['Calculadora de descuentos', 'Un precio se rebaja, o quieres el precio original a partir del rebajado'],
                ['Calculadora de propinas', 'Vas a dividir una cuenta y quieres comprobar la costumbre local'],
                ['IVA e impuestos', 'Hay que añadir el impuesto a un precio o extraerlo de él'],
                ['Margen de beneficio', 'Estás fijando un precio y necesitas margen, no markup'],
                ['Subida salarial', 'Una oferta hay que convertirla en porcentaje o compararla con la inflación'],
                ['Puntos porcentuales', 'Hay que comparar dos porcentajes y cada medida necesita su nombre'],
                ['Fórmulas de porcentaje', 'Quieres todas las fórmulas y sus inversas en una sola página'],
                ['Cálculo mental', 'Quieres dejar de necesitar la calculadora en los casos habituales'],
                ['Errores frecuentes', 'Un resultado porcentual parece erróneo y quieres saber por qué']
              ]
            }
          }
        ]
      }
    ],
    faq: [
      {
        q: '¿Cómo se calcula el porcentaje de un número?',
        a: 'Divide el porcentaje entre 100 y multiplícalo por el número. El 20 % de 150 es 150 × 0,2 = 30.'
      },
      {
        q: '¿Cómo sé qué porcentaje es un número de otro?',
        a: 'Divide la parte entre el total y multiplica por 100. 45 de 180 es 45 ÷ 180 = 0,25, es decir, un 25 %.'
      },
      {
        q: '¿Cómo se añade un porcentaje a un precio?',
        a: 'Multiplica por 1 más el porcentaje en decimal. Añadir un 21 % es multiplicar por 1,21; para quitarlo, divide entre 1,21 en lugar de restar un 21 %.'
      },
      {
        q: '¿Cuál es la diferencia entre variación porcentual y puntos porcentuales?',
        a: 'Los puntos porcentuales miden la diferencia bruta entre dos porcentajes. La variación porcentual mide esa diferencia respecto al valor inicial. Pasar del 4 % al 5 % es un punto porcentual y una variación del 25 %.'
      },
      {
        q: '¿Por qué una pérdida del 50 % necesita una ganancia del 100 %?',
        a: 'Porque la ganancia se calcula sobre el valor ya reducido. 100 cayendo un 50 % deja 50, y pasar de 50 a 100 es duplicar.'
      },
      {
        q: '¿La calculadora admite la coma decimal?',
        a: 'Sí. El selector de la cabecera cambia entre punto y coma, y la elección se guarda en tu dispositivo.'
      },
      {
        q: '¿Dos descuentos acumulados se suman?',
        a: 'No, se multiplican. Un 20 % y después un 10 % dejan 0,8 × 0,9 = 0,72 del precio original, un 28 % de descuento total.'
      },
      {
        q: '¿La calculadora muestra cómo llega al resultado?',
        a: 'Sí. En cuanto hay dos campos rellenos, el panel enumera la operación paso a paso con tus propios números, para que puedas comprobar cada línea en vez de fiarte del total.'
      },
      {
        q: '¿Es gratuita?',
        a: 'Sí, es gratuita, no requiere registro y funciona íntegramente en tu navegador: los números que escribes nunca se envían a ningún servidor.'
      }
    ]
  },

  methodology: {
    title: 'Metodología',
    lead:
      'Qué fórmulas usa la calculadora, cómo se redondean los resultados, dónde tiene límites conocidos la aritmética y cómo se escriben y revisan las páginas de este sitio.',
    sections: [
      {
        id: 'formulas-usadas',
        heading: 'Las fórmulas que hay detrás',
        blocks: [
          'Nada en este sitio usa un método propietario. Todos los resultados salen de aritmética estándar que puedes reproducir en papel, y el desglose paso a paso bajo cada respuesta muestra exactamente qué operaciones se han aplicado a tus números.',
          {
            table: {
              head: ['Cálculo', 'Fórmula usada'],
              rows: [
                ['Porcentaje de un número', 'base × (porcentaje ÷ 100)'],
                ['Qué porcentaje es X de Y', '(parte ÷ total) × 100'],
                ['Aumento o reducción', 'base × (1 + porcentaje ÷ 100)'],
                ['Variación porcentual', '((nuevo − antiguo) ÷ antiguo) × 100'],
                ['Descuento', 'precio × (1 − descuento ÷ 100)'],
                ['Propina', 'cuenta × (porcentaje ÷ 100)'],
                ['Añadir IVA', 'base imponible × (1 + tipo ÷ 100)'],
                ['Quitar IVA', 'precio final ÷ (1 + tipo ÷ 100)'],
                ['Margen de beneficio', '((ingresos − coste) ÷ ingresos) × 100'],
                ['Puntos porcentuales', 'segundo − primero'],
                ['Variación relativa', '((segundo − primero) ÷ primero) × 100']
              ]
            }
          },
          'La calculadora también resuelve cada fórmula en sentido inverso cuando dejas otro campo vacío. La inversa de una multiplicación es una división, no una resta, y esa es la idea más importante que este sitio intenta hacer visible.'
        ]
      },
      {
        id: 'redondeo',
        heading: 'Redondeo y precisión',
        blocks: [
          {
            ul: [
              'Las respuestas se redondean a dos decimales y se elimina un «,00» final, de modo que 30,00 se muestra como 30.',
              'Los valores intermedios del desglose se muestran con hasta seis decimales, para que cada línea sea coherente con la siguiente.',
              'El redondeo solo ocurre al mostrar. La aritmética funciona con valores sin redondear, así que las operaciones encadenadas no acumulan error de visualización.',
              'Los porcentajes no se limitan a ningún rango. Un resultado por encima del 100 % o por debajo de cero se muestra tal cual, porque ambos tienen sentido en varios de estos contextos.'
            ]
          },
          { h: 'Coma flotante' },
          'Los cálculos usan la aritmética IEEE 754 de doble precisión integrada en cualquier navegador y hoja de cálculo. Algunas fracciones decimales no tienen representación exacta en binario, y por eso 0,1 + 0,2 no es exactamente 0,3 en casi ningún lenguaje de programación. Con dos decimales en pantalla eso es invisible, pero es una propiedad real de la aritmética y no un fallo de este sitio.',
          { h: 'Qué implica para la contabilidad' },
          'La normativa fiscal suele especificar dónde debe producirse el redondeo —por línea, por factura o por tipo impositivo— y la cifra exigida puede diferir en unos céntimos de un único cálculo redondeado. Usa el número mostrado como comprobación, no como asiento, y aplica la regla de redondeo de tu jurisdicción en el paso que ella indique.'
        ]
      },
      {
        id: 'datos-de-referencia',
        heading: 'Los datos de referencia',
        blocks: [
          'Algunas páginas incluyen tablas que no son aritmética derivada sino datos observados: tipos de IVA por país, costumbres de propina, rangos típicos de margen. Están compiladas de fuentes públicas oficiales y sectoriales y sirven de orientación, no de autoridad.',
          {
            ul: [
              'Los tipos impositivos cambian, a menudo con poco aviso, y la mayoría de las jurisdicciones mantiene tipos reducidos junto al general. Confirma el tipo vigente con la administración competente antes de facturar.',
              'Las costumbres de propina son sociales, no legales, varían dentro de un mismo país y cambian con el tiempo. Los rangos describen la práctica habitual, no una regla.',
              'Nada en este sitio es asesoramiento financiero, fiscal, contable ni jurídico. La aritmética es solo una entrada más en decisiones que suelen depender de normas propias de tu situación.'
            ]
          }
        ]
      },
      {
        id: 'como-se-escriben',
        heading: 'Cómo se escriben y revisan las páginas',
        blocks: [
          'Las páginas se escriben a mano, no se generan. Todos los ejemplos resueltos del sitio se han calculado y comprobado contra la herramienta junto a la que aparecen, y las cifras de las tablas se han recalculado en lugar de copiarse.',
          'Cada página lleva al pie la fecha de su última revisión. Esa fecha cambia cuando cambia el fondo de la página —una cifra corregida, una sección reescrita, una tabla nueva— y no por correcciones tipográficas. La misma fecha se publica en los datos estructurados de la página y en el sitemap del sitio, de modo que los tres coinciden.',
          { h: 'Correcciones' },
          `Si un resultado o un dato es incorrecto, se corrige. Los avisos van a ${CONTACT_EMAIL}; indicar los números que introdujiste y la respuesta que esperabas suele bastar para reproducir el problema el mismo día.`,
          { h: 'Idiomas' },
          'La interfaz de la calculadora está en español, inglés, portugués, francés, alemán e italiano. El conjunto completo de artículos existe por ahora en inglés y portugués; donde un idioma aún no tiene una página, los enlaces apuntan a la versión inglesa en lugar de a un esbozo.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Cómo se redondean los resultados?',
        a: 'A dos decimales al mostrarlos, quitando los ceros finales. La aritmética subyacente no se redondea, así que los cálculos encadenados no acumulan error.'
      },
      {
        q: '¿Por qué el desglose muestra más decimales que la respuesta?',
        a: 'Para que cada línea se deduzca de la anterior. Redondear un valor intermedio a dos decimales haría que a veces la multiplicación final pareciera incorrecta.'
      },
      {
        q: '¿Puedo usar estas cifras en una factura?',
        a: 'Úsalas como comprobación. La normativa fiscal define dónde debe producirse el redondeo, y el importe exigido puede diferir en céntimos de un único cálculo redondeado.'
      },
      {
        q: '¿Qué significa la fecha de última revisión?',
        a: 'Que la página se leyó entera y se comprobaron sus cifras en esa fecha. Cambia cuando cambia el fondo, no por correcciones tipográficas.'
      }
    ]
  }
};

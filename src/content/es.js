export default {
  home: {
    title: 'Calculadora de Porcentajes',
    lead:
      'Calcula cualquier porcentaje en un solo paso. Rellena dos campos cualesquiera y el tercero se calcula al instante: sin registro, sin anuncios dentro de la herramienta y funcionando sin conexión una vez cargada la página.',
    sections: [
      {
        id: 'como-calcular-porcentajes',
        heading: 'Cómo calcular un porcentaje',
        blocks: [
          'Un porcentaje no es más que una fracción con 100 en el denominador. «20 %» significa 20 de cada 100, o 0,20 en decimal. Todos los cálculos de esta página parten de esa misma idea.',
          { h: '1. ¿Cuánto es X % de Y?' },
          { formula: 'resultado = base × (porcentaje ÷ 100)' },
          'Es el caso cotidiano: un descuento, una propina, una comisión. Para hallar el 20 % de 150, convierte 20 % en 0,20 y multiplica: 150 × 0,20 = 30.',
          { h: '2. ¿Qué porcentaje es X de Y?' },
          { formula: 'porcentaje = (parte ÷ total) × 100' },
          'Si acertaste 45 de 180 preguntas: 45 ÷ 180 = 0,25, es decir, un 25 %. El orden importa: el número que mides va arriba y el total abajo.',
          { h: '3. Aumentar o reducir un número en un porcentaje' },
          { formula: 'resultado = base × (1 + porcentaje ÷ 100)' },
          'Sumar un 15 % a 120 da 120 × 1,15 = 138. Restarlo da 120 × 0,85 = 102. Una operación no deshace la otra: subir un 15 % y luego bajar un 15 % te deja en 117, no en 120.',
          { h: '4. Variación porcentual entre dos números' },
          { formula: 'variación = ((nuevo − antiguo) ÷ antiguo) × 100' },
          'Pasar de 80 a 100 es un aumento del 25 %. Volver de 100 a 80 es una caída del 20 %, no del 25 %, porque el valor de partida ha cambiado.'
        ]
      },
      {
        id: 'errores-frecuentes',
        heading: 'Errores frecuentes',
        blocks: [
          'Un punto porcentual no es un porcentaje: pasar del 4 % al 5 % es un punto porcentual, pero un aumento del 25 %.',
          'Los descuentos acumulados se multiplican, no se suman: un 20 % y después un 10 % dejan 0,8 × 0,9 = 0,72, es decir, un 28 % de descuento total.',
          'Una caída del 50 % necesita una subida del 100 % para recuperarse, porque la subida se calcula sobre el valor ya reducido.'
        ]
      }
    ],
    faq: [
      {
        q: '¿Cómo se calcula el porcentaje de un número?',
        a: 'Divide el porcentaje entre 100 y multiplícalo por el número. El 20 % de 150 es 150 × 0,2 = 30.'
      },
      {
        q: '¿Cómo se añade un porcentaje a un precio?',
        a: 'Multiplica por 1 más el porcentaje en decimal. Añadir un 21 % es multiplicar por 1,21; para quitarlo, divide entre 1,21.'
      },
      {
        q: '¿La calculadora admite la coma decimal?',
        a: 'Sí. El selector de la cabecera cambia entre punto y coma, y la elección se guarda en tu dispositivo.'
      },
      {
        q: '¿Es gratuita?',
        a: 'Sí, es gratuita, no requiere registro y funciona íntegramente en tu navegador.'
      }
    ]
  }
};

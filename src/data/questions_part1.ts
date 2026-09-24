import { QuestionDefinition } from './types';

export const QUESTIONS_PART_1: QuestionDefinition[] = [
  {
    id: 1,
    conasetId: 1,
    category: 'mecanica',
    isCritical: false,
    text: 'Su vehículo se desvía hacia un lado cuando usted frena. Usted debería:',
    isMultiple: false,
    options: [
      { text: 'Cambiar los neumáticos de un lado hacia el otro y viceversa.', isCorrect: false },
      { text: 'Bombear el pedal al frenar.', isCorrect: false },
      { text: 'Usar su freno de mano.', isCorrect: false },
      { text: 'Consultar con su mecánico lo antes posible.', isCorrect: true }
    ],
    explanation: 'Si el vehículo tira hacia un lado al frenar, indica un desajuste o desgaste desigual en los frenos o presión dispareja, lo cual es peligroso y requiere revisión mecánica inmediata.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Mantenimiento del Vehículo'
  },
  {
    id: 2,
    conasetId: 2,
    category: 'mecanica',
    isCritical: false,
    text: 'Su vehículo se desvía hacia un lado cuando usted frena. ¿Cuál es la falla más probable?',
    isMultiple: false,
    options: [
      { text: 'Un bajo nivel del líquido de frenos.', isCorrect: false },
      { text: 'Su freno de mano está todavía puesto.', isCorrect: false },
      { text: 'Frenos mal ajustados.', isCorrect: true },
      { text: 'Neumáticos con presión de aire inadecuada.', isCorrect: false }
    ],
    explanation: 'Cuando los frenos actúan con desigual fuerza entre el lado izquierdo y derecho, la fuerza de frenado asimétrica desvía la trayectoria del auto hacia el lado que más frena.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Los Frenos'
  },
  {
    id: 3,
    conasetId: 3,
    category: 'mecanica',
    isCritical: false,
    text: 'Mientras conduce usted siente un fuerte olor a gasolina. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'No preocuparse, ya que sólo son los gases de escape.', isCorrect: false },
      { text: 'Continuar a una velocidad reducida.', isCorrect: false },
      { text: 'Continuar porque sabe que se detendrá algunos kilómetros más allá.', isCorrect: false },
      { text: 'Detenerse e investigar el problema.', isCorrect: true }
    ],
    explanation: 'El olor a combustible no quemado denota una fuga en conductos, inyectores o estanque, con altísimo riesgo de incendio en contacto con zonas calientes del motor o escape.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Seguridad del Vehículo'
  },
  {
    id: 4,
    conasetId: 4,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Manteniendo los niveles de agua sobre el máximo.', isCorrect: false },
      { text: 'Evitando conducir con el estanque lleno de combustible.', isCorrect: false },
      { text: 'Usando gasolina sin plomo.', isCorrect: false },
      { text: 'Revisando su vehículo ante cualquier olor a gasolina extraño.', isCorrect: true }
    ],
    explanation: 'Investigar oportunamente olores anormales a gasolina o chispas eléctricas previene incendios catastróficos en el compartimento del motor.',
    legalReference: 'Manual CONASET - Prevención de Incendios'
  },
  {
    id: 5,
    conasetId: 5,
    category: 'seguridad',
    isCritical: false,
    text: '¿Por qué es importante usar zapatos apropiados cuando conduce?',
    isMultiple: false,
    options: [
      { text: 'Para tener un adecuado control de los pedales.', isCorrect: true },
      { text: 'Para evitar el desgaste acelerado de las gomas de los pedales.', isCorrect: false },
      { text: 'Para poder efectuar los cambios de marcha más rápidamente.', isCorrect: false },
      { text: 'Para poder caminar sin problemas en el caso que necesite solicitar ayuda.', isCorrect: false }
    ],
    explanation: 'El calzado debe ser firme, cómodo y antideslizante para modular la presión exacta sobre embrague, freno y acelerador sin resbalar ni trabarse.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 6,
    conasetId: 6,
    category: 'infantil',
    isCritical: true,
    text: 'En un automóvil, ¿cuál de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisión?',
    isMultiple: false,
    options: [
      { text: 'Un asiento dotado de air-bag (bolsa de aire).', isCorrect: false },
      { text: 'Los frenos ABS.', isCorrect: false },
      { text: 'Una columna de dirección colapsable.', isCorrect: false },
      { text: 'Un asiento con apoya-cabeza ajustado en forma apropiada.', isCorrect: true }
    ],
    explanation: 'El apoyacabezas previene el latigazo cervical (whiplash). Su borde superior debe quedar al mismo nivel que la parte superior de la cabeza y a no más de 4 cm de distancia.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Seguridad Pasiva'
  },
  {
    id: 7,
    conasetId: 7,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta luz de advertencia en el panel de instrumentos?',
    illustrationType: 'luz_advertencia',
    isMultiple: false,
    options: [
      { text: 'Luces neblineras.', isCorrect: false },
      { text: 'Intermitentes de advertencia de peligro.', isCorrect: true },
      { text: 'Luces altas.', isCorrect: false },
      { text: 'Freno de mano puesto.', isCorrect: false }
    ],
    explanation: 'El triángulo rojo en el panel indica el accionamiento de las luces de advertencia de peligro (hazard / 4 intermitentes al unísono).',
    legalReference: 'Manual de Señalización de Tránsito / CONASET'
  },
  {
    id: 8,
    conasetId: 8,
    category: 'mecanica',
    isCritical: false,
    text: 'Es esencial que la presión de los neumáticos sea chequeada regularmente. ¿Cuándo se debe hacer esto?',
    isMultiple: false,
    options: [
      { text: 'Después de un viaje largo.', isCorrect: false },
      { text: 'Después de conducir a alta velocidad.', isCorrect: false },
      { text: 'Cuando los neumáticos están fríos.', isCorrect: true },
      { text: 'Cuando los neumáticos están calientes.', isCorrect: false }
    ],
    explanation: 'La presión del aire debe medirse siempre en frío, ya que al rodar el aire se calienta y dilata, marcando una lectura falsamente elevada.',
    legalReference: 'Manual CONASET - Neumáticos'
  },
  {
    id: 9,
    conasetId: 9,
    category: 'mecanica',
    isCritical: false,
    text: 'La presión de los neumáticos debe revisarse:',
    isMultiple: false,
    options: [
      { text: 'Cuando los neumáticos están fríos.', isCorrect: true },
      { text: 'Cuando los neumáticos están calientes.', isCorrect: false },
      { text: 'En cualquier momento, porque da igual que los neumáticos estén fríos o calientes.', isCorrect: false }
    ],
    explanation: 'Siempre en frío, antes de iniciar viajes prolongados o al menos cada dos semanas según las especificaciones del fabricante del vehículo.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 10,
    conasetId: 10,
    category: 'mecanica',
    isCritical: false,
    text: '¿Cuál de estos líquidos, en el caso de estar en un nivel bajo, podría causar un accidente?',
    isMultiple: false,
    options: [
      { text: 'El líquido de freno.', isCorrect: true },
      { text: 'El anticongelante.', isCorrect: false },
      { text: 'El agua de la batería.', isCorrect: false },
      { text: 'El líquido refrigerante.', isCorrect: false }
    ],
    explanation: 'Un nivel bajo del líquido de freno puede provocar la pérdida total de la capacidad de detención hidráulica del vehículo.',
    legalReference: 'Manual CONASET - Sistema de Frenado'
  },
  {
    id: 11,
    conasetId: 11,
    category: 'seguridad',
    isCritical: false,
    text: 'Frente a una situación normal, ¿cuál es la forma más segura de frenar?',
    isMultiple: false,
    options: [
      { text: 'Frenando fuerte, poniendo la palanca de cambio en neutro y tirando el freno de mano justo antes de detenerse.', isCorrect: false },
      { text: 'Frenando suavemente, presionando el pedal de embrague y tirando el freno de mano justo antes de detenerse.', isCorrect: false },
      { text: 'Poniendo la palanca de cambio en neutro, frenando fuerte y luego soltando el freno justo antes de detenerse.', isCorrect: false },
      { text: 'Frenando suavemente, luego un poco más fuerte cuando comienza a detenerse y después aflojando de a poco el freno antes de detenerse.', isCorrect: true }
    ],
    explanation: 'El frenado progresivo y suave evita bloqueos de ruedas, transferencias bruscas de peso y asegura el confort y control del auto.',
    legalReference: 'Manual CONASET - Técnicas de Conducción'
  },
  {
    id: 12,
    conasetId: 12,
    category: 'senales',
    isCritical: false,
    text: '¿Cuándo usaría usted las luces intermitentes de advertencia de peligro?',
    isMultiple: false,
    options: [
      { text: 'Cuando esté en pana obstruyendo el tránsito.', isCorrect: true },
      { text: 'Cuando se estacione en doble fila respecto a otro vehículo estacionado junto a la cuneta.', isCorrect: false },
      { text: 'Cuando estacione junto a una cuneta en la que hay línea amarilla pintada.', isCorrect: false },
      { text: 'Cuando sus señalizadores de viraje no estén funcionando.', isCorrect: false }
    ],
    explanation: 'Solo deben emplearse cuando el vehículo representa un obstáculo o peligro inminente para los demás usuarios, como en caso de panne o accidente.',
    legalReference: 'Ley N° 18.290, Art. 71'
  },
  {
    id: 13,
    conasetId: 13,
    category: 'senales',
    isCritical: false,
    text: 'Las luces de advertencia de peligro deberían ser usadas:',
    isMultiple: false,
    options: [
      { text: 'Cuando estaciona en doble fila respecto a otro vehículo estacionado junto a la cuneta.', isCorrect: false },
      { text: 'Para advertir a quienes vienen detrás de un peligro que hay más adelante.', isCorrect: true },
      { text: 'Para advertir a quienes vienen detrás suyo que usted pretende virar.', isCorrect: false },
      { text: 'Para advertir a los demás que usted tiene prisa.', isCorrect: false }
    ],
    explanation: 'Permiten advertir anticipadamente a los vehículos que circulan atrás sobre una detención brusca obligada por un peligro en la vía.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 14,
    conasetId: 14,
    category: 'senales',
    isCritical: false,
    text: '¿Cuándo usaría usted las luces de advertencia de peligro de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Cuando esté en pana moviéndose lentamente.', isCorrect: false },
      { text: 'Cuando esté siendo remolcado.', isCorrect: false },
      { text: 'Cuando esté retrocediendo en una calle de poco tránsito.', isCorrect: false },
      { text: 'Cuando esté en pana y obstaculizando el tránsito.', isCorrect: true }
    ],
    explanation: 'Indica a los demás conductores que el móvil se encuentra inmovilizado y genera una situación de riesgo de colisión.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 15,
    conasetId: 15,
    category: 'mecanica',
    isCritical: false,
    text: 'Usted está probando la suspensión de su vehículo cuando nota que éste rebota u oscila al cargarlo en un extremo lateral frontal. ¿Qué significa esto?',
    isMultiple: false,
    options: [
      { text: 'Neumáticos gastados.', isCorrect: false },
      { text: 'Neumáticos poco inflados.', isCorrect: false },
      { text: 'Volante de dirección no centrado.', isCorrect: false },
      { text: 'Amortiguadores gastados.', isCorrect: true }
    ],
    explanation: 'Un amortiguador en buen estado disipa la oscilación de inmediato. Si el auto rebota más de una vez, los amortiguadores han perdido eficacia.',
    legalReference: 'Manual CONASET - Suspensión y Amortiguación'
  },
  {
    id: 16,
    conasetId: 16,
    category: 'mecanica',
    isCritical: false,
    text: '¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?',
    isMultiple: false,
    options: [
      { text: 'Para que el vehículo se mantenga a la altura correcta sobre la vía.', isCorrect: false },
      { text: 'Para no desgastar el motor.', isCorrect: false },
      { text: 'Para ayudar a evitar que el automóvil se roncee.', isCorrect: true },
      { text: 'Para evitar que el automóvil se incline hacia un lado.', isCorrect: false }
    ],
    explanation: 'La presión correcta optimiza la huella de adherencia, reduciendo drásticamente el riesgo de pérdida de control o ronceo en curvas.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 17,
    conasetId: 17,
    category: 'seguridad',
    isCritical: false,
    text: '¿A qué se debe un alto consumo de combustible?',
    isMultiple: false,
    options: [
      { text: 'Fallas en el sistema de dirección.', isCorrect: false },
      { text: 'Aceleraciones en curvas.', isCorrect: false },
      { text: 'Frecuentes frenadas y aceleraciones.', isCorrect: true },
      { text: 'Conducción en marchas altas.', isCorrect: false }
    ],
    explanation: 'La conducción agresiva con cambios repentinos de aceleración y frenada rompe la inercia e incrementa el consumo de combustible hasta en un 30%.',
    legalReference: 'Manual CONASET - Conducción Eficiente'
  },
  {
    id: 18,
    conasetId: 18,
    category: 'mecanica',
    isCritical: false,
    text: 'La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a ...',
    isMultiple: false,
    options: [
      { text: '5.0 mm', isCorrect: false },
      { text: '4.0 mm', isCorrect: false },
      { text: '1.6 mm', isCorrect: true },
      { text: '1.0 mm', isCorrect: false }
    ],
    explanation: 'El límite legal y técnico mínimo en Chile es de 1,6 mm. Con menor profundidad el neumático pierde capacidad de desalojar agua y se produce aquaplaning.',
    legalReference: 'Decreto N° 212 y Manual CONASET'
  },
  {
    id: 19,
    conasetId: 19,
    category: 'seguridad',
    isCritical: false,
    text: 'Uno de sus neumáticos traseros se revienta mientras usted conduce. ¿Cuáles 2 cosas debe hacer usted? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Poner marcha atrás para detener el vehículo.', isCorrect: false },
      { text: 'Hacer una señal de detención con el brazo y disminuir la velocidad.', isCorrect: false },
      { text: 'Detenerse lentamente al costado de la vía.', isCorrect: true },
      { text: 'Detener el vehículo frenando lo más fuerte que pueda.', isCorrect: false },
      { text: 'Girar el volante hacia el mismo lado hacia el cual se desvía la cola del vehículo.', isCorrect: true }
    ],
    explanation: 'Al reventar un neumático trasero la cola coleará: no frene bruscamente, contravolantee suavemente hacia donde se desplaza la cola y deténgase despacio al costado.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Emergencias'
  },
  {
    id: 20,
    conasetId: 20,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles 2 cosas debe usted hacer si se le revienta un neumático delantero? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Cambiarse de pista y frenar a fondo.', isCorrect: false },
      { text: 'Frenar suavemente o dejar que el vehículo siga hasta detenerse.', isCorrect: true },
      { text: 'Frenar rápida y firmemente.', isCorrect: false },
      { text: 'Sostener firmemente el volante manteniendo la trayectoria.', isCorrect: true },
      { text: 'Sostener el volante con una mano advirtiendo con la otra a los demás que usted se detendrá.', isCorrect: false }
    ],
    explanation: 'Un reventón delantero jala violentamente el volante hacia el lado del pinchazo. Sostenga firmemente el volante con ambas manos y frene suavemente.',
    legalReference: 'Manual CONASET - Emergencias en Ruta'
  },
  {
    id: 21,
    conasetId: 21,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué es lo que usted nunca debería hacer en una bomba de bencina?',
    isMultiple: false,
    options: [
      { text: 'Circular por ella', isCorrect: false },
      { text: 'Fumar', isCorrect: true },
      { text: 'Comer', isCorrect: false },
      { text: 'Lavar los parabrisas', isCorrect: false }
    ],
    explanation: 'Los vapores de los combustibles son altamente inflamables y una pequeña brasa de cigarrillo puede provocar una explosión.',
    legalReference: 'Normas de Seguridad en Estaciones de Servicio'
  },
  {
    id: 22,
    conasetId: 22,
    category: 'seguridad',
    isCritical: false,
    text: 'Desenganchar el motor del vehículo...',
    isMultiple: false,
    options: [
      { text: 'permite un mejor control al conductor.', isCorrect: false },
      { text: 'hace más fácil las maniobras.', isCorrect: false },
      { text: 'aumenta el consumo de combustible.', isCorrect: false },
      { text: 'reduce el control del conductor.', isCorrect: true }
    ],
    explanation: 'Circular en neutro o con el pedal de embrague presionado elimina el freno de motor, sobrecargando los frenos y restando capacidad de respuesta inmediata.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 23,
    conasetId: 23,
    category: 'seguridad',
    isCritical: false,
    text: '¿Por qué no es bueno desenganchar el motor del vehículo al ir circulando?',
    isMultiple: false,
    options: [
      { text: 'Porque ello hace que el vehículo resbale.', isCorrect: false },
      { text: 'Porque el motor se detendrá.', isCorrect: false },
      { text: 'Porque no hay frenado del motor.', isCorrect: true },
      { text: 'Porque el motor funcionará más rápido.', isCorrect: false }
    ],
    explanation: 'Al desenganchar, las ruedas quedan libres de la retención del motor (freno motor), aumentando la distancia de parada y calentando los frenos.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 24,
    conasetId: 24,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles son las 2 principales razones por las cuales no debe desengancharse el motor al ir cuesta abajo? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Porque tendrá menor control del frenado y dirección.', isCorrect: true },
      { text: 'Porque el vehículo agarrará velocidad.', isCorrect: true },
      { text: 'Porque el consumo de combustible será mayor.', isCorrect: false },
      { text: 'Porque se gastan y deterioran más los neumáticos.', isCorrect: false },
      { text: 'Porque se daña el motor.', isCorrect: false }
    ],
    explanation: 'En bajada libre el auto se acelera sin freno motor, sobrecalentando las pastillas hasta la fatiga (fading) y perdiendo gobernabilidad.',
    legalReference: 'Manual CONASET - Pendientes y Bajadas'
  },
  {
    id: 25,
    conasetId: 25,
    category: 'seguridad',
    isCritical: false,
    text: '¿Por qué usted no debería conducir presionando el pedal de embrague durante más tiempo que el necesario?',
    isMultiple: false,
    options: [
      { text: 'Porque reduce su control sobre el vehículo.', isCorrect: true },
      { text: 'Porque aumenta el desgaste de la caja de cambios.', isCorrect: false },
      { text: 'Porque aumenta el consumo de combustible.', isCorrect: false },
      { text: 'Porque reduce el agarre de los neumáticos.', isCorrect: false }
    ],
    explanation: 'Llevar el embrague presionado equivale a ir en punto muerto, reduciendo la capacidad de maniobra y control del vehículo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 26,
    conasetId: 26,
    category: 'infantil',
    isCritical: true,
    text: '¿Para qué sirven los seguros de niños de los vehículos?',
    isMultiple: false,
    options: [
      { text: 'Aseguran las hebillas de los cinturones de seguridad.', isCorrect: false },
      { text: 'Impiden que las puertas puedan abrirse desde el interior.', isCorrect: true },
      { text: 'Bloquean las ventanas traseras manteniéndolas cerradas.', isCorrect: false },
      { text: 'Impiden que los asientos se reclinen.', isCorrect: false }
    ],
    explanation: 'El seguro infantil en las puertas traseras imposibilita su apertura accidental desde las manillas interiores por parte de menores en movimiento.',
    legalReference: 'Manual CONASET - Seguridad Infantil'
  },
  {
    id: 27,
    conasetId: 27,
    category: 'mecanica',
    isCritical: false,
    text: 'Una baja presión de aire en los neumáticos delanteros ...',
    isMultiple: false,
    options: [
      { text: 'hace que el vehículo tienda a torcer hacia un lado.', isCorrect: false },
      { text: 'mejora el rendimiento del combustible.', isCorrect: false },
      { text: 'hace sentir la dirección más liviana.', isCorrect: false },
      { text: 'hace sentir la dirección más pesada.', isCorrect: true }
    ],
    explanation: 'Neumáticos desinflados aumentan la superficie de rozamiento y resistencia al giro, haciendo la dirección dura y pesada.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 28,
    conasetId: 28,
    category: 'velocidad',
    isCritical: true,
    text: 'En un pavimento mojado, ¿influye el estado de los neumáticos en la distancia de frenado de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'No, la distancia de frenado depende sólo de la velocidad.', isCorrect: false },
      { text: 'No, porque una vez que se acciona el freno la distancia de frenado es siempre la misma para cada vehículo.', isCorrect: false },
      { text: 'Sí, a mayor desgaste de los neumáticos menor es dicha distancia.', isCorrect: false },
      { text: 'Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor.', isCorrect: true }
    ],
    explanation: 'El desgaste de los surcos reduce la evacuación del agua entre neumático y calzada, aumentando peligrosamente la distancia de frenada.',
    legalReference: 'Manual CONASET - Distancia de Frenado'
  },
  {
    id: 29,
    conasetId: 29,
    category: 'mecanica',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo.', isCorrect: true },
      { text: 'Una batería mal cargada hace que el vehículo tenga dificultades para arrancar.', isCorrect: true },
      { text: 'Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor.', isCorrect: true },
      { text: 'Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua.', isCorrect: true }
    ],
    explanation: 'Todas son afirmaciones mecánicas correctas sobre lubricación, carga eléctrica, refrigeración y bomba de agua en motores de combustión.',
    legalReference: 'Manual CONASET - Mecánica Básica'
  },
  {
    id: 30,
    conasetId: 30,
    category: 'mecanica',
    isCritical: false,
    text: '¿Cuáles 2 de las siguientes afirmaciones son verdaderas? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Los gases de escape no son peligrosos para la salud de las personas.', isCorrect: false },
      { text: 'Un sistema de escape de gases oxidado puede hacer que penetre monóxido de carbono al interior del vehículo.', isCorrect: true },
      { text: 'Los gases de escape contienen monóxido de carbono, que carece de olor y es incoloro.', isCorrect: true },
      { text: 'Los vapores de la gasolina son inocuos.', isCorrect: false }
    ],
    explanation: 'El monóxido de carbono (CO) es un gas letal, incoloro e inodoro resultante de la combustión incompleta. Un tubo roto puede filtrarlo a la cabina.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 31,
    conasetId: 31,
    category: 'mecanica',
    isCritical: false,
    text: '¿Cuáles 2 de las siguientes afirmaciones son verdaderas? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'A mayor velocidad, mayor es el consumo del líquido de frenos.', isCorrect: false },
      { text: 'Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente.', isCorrect: true },
      { text: 'El consumo del líquido de frenos depende de la cantidad e intensidad de las frenadas.', isCorrect: false },
      { text: 'El líquido de frenos no se consume y si disminuye es porque hay algún defecto.', isCorrect: true },
      { text: 'Lo mejor es que el pedal de freno se sienta elástico.', isCorrect: false }
    ],
    explanation: 'El circuito de frenos es sellado; si el nivel baja indica una fuga o desgaste severo de pastillas. El ABS permite mantener la dirección frenando a fondo.',
    legalReference: 'Manual CONASET - Frenos y ABS'
  },
  {
    id: 32,
    conasetId: 32,
    category: 'mecanica',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: false,
    options: [
      { text: 'Una profundidad de 1 mm de los surcos de las bandas de rodamiento de los neumáticos siempre es suficiente para asegurar una buena fricción con el pavimento.', isCorrect: false },
      { text: 'Un desgaste notorio de la zona central de las bandas de rodamiento de los neumáticos indica que éstos se han usado con muy poco aire.', isCorrect: false },
      { text: 'Un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación.', isCorrect: true },
      { text: 'Independientemente de la ubicación de las ruedas de tracción, para una mejor estabilidad del vehículo los mejores neumáticos deben ir adelante.', isCorrect: false }
    ],
    explanation: 'Desgastes irregulares o en dientes de sierra provienen de desalineación o amortiguadores deteriorados. (Con poco aire se gastan los hombros, no el centro).',
    legalReference: 'Manual CONASET - Neumáticos'
  },
  {
    id: 33,
    conasetId: 33,
    category: 'seguridad',
    isCritical: true,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: false,
    options: [
      { text: 'El cinturón de seguridad disminuye las posibilidades de sufrir lesiones en un accidente.', isCorrect: true },
      { text: 'Los air-bags (o bolsas de aire) reemplazan ventajosamente al cinturón de seguridad.', isCorrect: false },
      { text: 'Para quienes viajan en el asiento trasero de un automóvil el cinturón de seguridad no les presta utilidad.', isCorrect: false },
      { text: 'Usar cinturón de seguridad es más necesario cuando se conduce en carreteras.', isCorrect: false }
    ],
    explanation: 'El cinturón reduce a la mitad el riesgo de muerte en siniestros y es obligatorio en todos los asientos. El airbag es complementario, nunca sustituto.',
    legalReference: 'Ley N° 18.290, Art. 75'
  },
  {
    id: 34,
    conasetId: 34,
    category: 'infantil',
    isCritical: true,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'No es seguro que un adulto lleve a un niño pequeño incluyéndolo en su cinturón de seguridad.', isCorrect: true },
      { text: 'El cinturón de seguridad disminuye las posibilidades de resultar lesionado en un accidente.', isCorrect: true },
      { text: 'Para quienes viajan en el asiento trasero el cinturón de seguridad no brinda mayor seguridad.', isCorrect: false },
      { text: 'Un cinturón de seguridad bien tensado brinda mayor seguridad que uno menos tensado.', isCorrect: true }
    ],
    explanation: 'Llevar un niño bajo el mismo cinturón aplasta al menor con el peso del adulto en un impacto. El cinturón debe ir ajustado y ceñido al cuerpo.',
    legalReference: 'Manual CONASET - Sistemas de Retención'
  },
  {
    id: 35,
    conasetId: 35,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué elementos de su vehículo debe usted mantener limpios? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Las luces.', isCorrect: true },
      { text: 'Los espejos.', isCorrect: true },
      { text: 'Los neumáticos.', isCorrect: false },
      { text: 'Los vidrios.', isCorrect: true }
    ],
    explanation: 'Vidrios, espejos y grupos ópticos deben permanecer limpios para garantizar plena visibilidad del entorno e iluminar y ser visto adecuadamente.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 36,
    conasetId: 36,
    category: 'velocidad',
    isCritical: true,
    text: 'Suponga que en una ocasión: su distancia de reacción es de 10 metros, su distancia de frenado es de 8 metros y su distancia de detención es de 18 metros. ¿Cuál sería su distancia de detención si sigue en idénticas condiciones, pero aumenta al doble su velocidad?',
    isMultiple: false,
    options: [
      { text: '46 metros', isCorrect: false },
      { text: '52 metros', isCorrect: true },
      { text: '64 metros', isCorrect: false },
      { text: '78 metros', isCorrect: false }
    ],
    explanation: 'Al duplicar la velocidad: la reacción se duplica (10 m x 2 = 20 m) y la distancia de frenado se cuadruplica (8 m x 4 = 32 m). Total de detención = 20 + 32 = 52 metros.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Leyes Físicas'
  },
  {
    id: 37,
    conasetId: 37,
    category: 'velocidad',
    isCritical: true,
    text: '¿Cuál de las siguientes afirmaciones es falsa cuando usted aumenta su velocidad de 30 km/h a 60 km/h?',
    isMultiple: false,
    options: [
      { text: 'Se duplica la energía cinética.', isCorrect: true },
      { text: 'Se cuadruplica la energía cinética.', isCorrect: false },
      { text: 'Se duplica la distancia de reacción.', isCorrect: false },
      { text: 'Se cuadruplica la distancia de frenado.', isCorrect: false }
    ],
    explanation: 'La afirmación falsa es "Se duplica la energía cinética", ya que la energía cinética crece con el cuadrado de la velocidad (v²): al doblar la velocidad se cuadruplica.',
    legalReference: 'Manual CONASET - Energía Cinética'
  },
  {
    id: 38,
    conasetId: 38,
    category: 'velocidad',
    isCritical: true,
    text: 'El auto azul circula a 70 km/h y el rojo a 90 km/h. ¿Dónde es más probable que sus conductores estimen el punto en que se producirá el encuentro de ambos vehículos? Marque dos respuestas',
    illustrationType: 'reunion_velocidad_38',
    isMultiple: true,
    options: [
      { text: 'El conductor del auto rojo estima que dicho punto será el 3.', isCorrect: true },
      { text: 'El conductor del auto rojo estima que dicho punto será el 2.', isCorrect: false },
      { text: 'El conductor del auto azul estima que dicho punto será el 1.', isCorrect: false },
      { text: 'El conductor del auto azul estima que dicho punto será el 3.', isCorrect: true }
    ],
    explanation: 'Ambos conductores tienden a subestimar la velocidad y calcular erróneamente que el punto de cruce estará en el medio (punto 3), ignorando que el móvil más veloz avanzará más rápido.',
    legalReference: 'Manual CONASET - Estimación de Distancias y Cruces'
  },
  {
    id: 39,
    conasetId: 39,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué distancia de detención tiene un tren que circula a alrededor de 100 km/h?',
    isMultiple: false,
    options: [
      { text: 'Aproximadamente 100 metros.', isCorrect: false },
      { text: 'Aproximadamente 200 metros.', isCorrect: false },
      { text: 'Entre 800 y 1000 metros.', isCorrect: true },
      { text: 'Más de 2000 metros.', isCorrect: false }
    ],
    explanation: 'Debido a su enorme masa e inercia y al escaso roce rueda de acero-riel, un convoy de ferrocarril necesita de 800 a 1.000 metros para detenerse.',
    legalReference: 'Manual CONASET - Cruces Ferroviarios'
  },
  {
    id: 40,
    conasetId: 40,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué es lo más importante para evitar chocar al vehículo que va adelante?',
    isMultiple: false,
    options: [
      { text: 'Asegurarse de que sus frenos sean eficientes.', isCorrect: false },
      { text: 'Conducir a una velocidad constante.', isCorrect: false },
      { text: 'Mantener una adecuada distancia de separación entre vehículos.', isCorrect: true },
      { text: 'Tener neumáticos en muy buen estado.', isCorrect: false }
    ],
    explanation: 'Una distancia de seguimiento prudente (regla de los 3 segundos como mínimo) proporciona el margen temporal necesario para reaccionar y frenar con seguridad.',
    legalReference: 'Ley N° 18.290, Art. 126'
  },
  {
    id: 41,
    conasetId: 41,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va circulando a 50 km/h a lo largo de un camino plano y de asfalto. Las condiciones climáticas son buenas. Sus neumáticos y frenos también están buenos. En estas circunstancias, detenerse le tomará aproximadamente ...',
    isMultiple: false,
    options: [
      { text: 'unos 50 metros', isCorrect: false },
      { text: 'unos 15 metros', isCorrect: false },
      { text: 'unos 10 metros', isCorrect: true },
      { text: 'unos 30 metros', isCorrect: false }
    ],
    explanation: 'Según la tabla del cuestionario general oficial CONASET, la distancia de frenado pura a 50 km/h en asfalto seco óptimo bordea los 10-12 metros.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 42,
    conasetId: 42,
    category: 'velocidad',
    isCritical: true,
    text: 'La distancia de detención total es igual a la suma de la distancia de reacción y la de frenado. Aproximadamente, ¿cuál es la mínima distancia de detención total en un asfalto seco, si usted viaja a 90 km/h?',
    isMultiple: false,
    options: [
      { text: 'Unos 50 metros', isCorrect: false },
      { text: 'Unos 70 metros', isCorrect: true },
      { text: 'Unos 30 metros', isCorrect: false },
      { text: 'Unos 120 metros', isCorrect: false }
    ],
    explanation: 'A 90 km/h, la reacción de 1 s recorre aprox 25 m y la distancia de frenado es de aprox 45 m. La detención total mínima es de unos 70 metros.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 43,
    conasetId: 43,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted conduce un vehículo con frenos y neumáticos en buenas condiciones. La superficie de calzada está seca. ¿Cuál es la distancia aproximada de detención total (distancia de reacción más distancia de frenado) si usted va a 70 km/h?',
    isMultiple: false,
    options: [
      { text: 'Unos 15 metros', isCorrect: false },
      { text: 'Unos 80 metros', isCorrect: false },
      { text: 'Unos 45 metros', isCorrect: true },
      { text: 'Unos 25 metros', isCorrect: false }
    ],
    explanation: 'A 70 km/h, la distancia de reacción es de aprox 20 metros y la de frenada de unos 25 metros, sumando cerca de 45 metros de detención total.',
    legalReference: 'Manual CONASET - Distancia de Detención'
  },
  {
    id: 44,
    conasetId: 44,
    category: 'normativa',
    isCritical: false,
    text: 'Usted desea estacionar en bajada en una calle con pendiente pronunciada. ¿Qué debería hacer? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Estacionar detrás de otro auto.', isCorrect: false },
      { text: 'Estacionar con dos ruedas sobre la acera.', isCorrect: false },
      { text: 'Dejar el volante girado hacia la acera.', isCorrect: true },
      { text: 'Dejar puesto el freno de mano.', isCorrect: true }
    ],
    explanation: 'En bajada se deben girar las ruedas delanteras hacia la cuneta/acera (y enganchar marcha atrás), además de accionar firmemente el freno de mano.',
    legalReference: 'Ley N° 18.290, Art. 156'
  },
  {
    id: 45,
    conasetId: 45,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está descendiendo una pendiente muy larga. ¿Qué debería hacer para ayudar a controlar la velocidad de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Tomar el manubrio firmemente.', isCorrect: false },
      { text: 'Seleccionar una marcha baja.', isCorrect: true },
      { text: 'Seleccionar neutro.', isCorrect: false },
      { text: 'Presionar el pedal de embrague.', isCorrect: false }
    ],
    explanation: 'Enganchar una marcha baja aprovecha la compresión del motor (freno de motor) para retener el coche sin sobrecalentar los frenos.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 46,
    conasetId: 46,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está virando hacia la derecha en un camino resbaladizo y las ruedas traseras de su vehículo resbalan hacia la izquierda. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Frenar firmemente y no girar el manubrio.', isCorrect: false },
      { text: 'Guiar cuidadosamente hacia la izquierda.', isCorrect: true },
      { text: 'Usar el embrague y frenar firmemente.', isCorrect: false },
      { text: 'Girar hacia la derecha.', isCorrect: false }
    ],
    explanation: 'Para corregir el sobreviraje (coletazo hacia la izquierda), debe girarse suavemente el volante hacia ese mismo lado (la izquierda).',
    legalReference: 'Manual del Nuevo Conductor CONASET - Control de Derrapes'
  },
  {
    id: 47,
    conasetId: 47,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Seleccionar un cambio bajo y usar los frenos cuidadosamente.', isCorrect: true },
      { text: 'Seleccionar un cambio alto y usar los frenos cuidadosamente.', isCorrect: false },
      { text: 'Seleccionar un cambio alto y usar los frenos firmemente.', isCorrect: false },
      { text: 'Seleccionar un cambio bajo y evitar usar los frenos.', isCorrect: false }
    ],
    explanation: 'Engranar marcha baja antes de iniciar la bajada pronunciada y dosificar los frenos con suavidad evita la cristalización de balatas y pastillas.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 48,
    conasetId: 48,
    category: 'velocidad',
    isCritical: true,
    text: 'La distancia de frenado es la que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. En condiciones normales, ¿cuál sería aproximadamente su distancia de frenado si usted circula a 90 km/h?',
    isMultiple: false,
    options: [
      { text: 'Unos 45 metros', isCorrect: true },
      { text: 'Unos 70 metros', isCorrect: false },
      { text: 'Unos 20 metros', isCorrect: false },
      { text: 'Unos 15 metros', isCorrect: false }
    ],
    explanation: 'A 90 km/h la distancia de frenado físico sobre asfalto seco en buen estado es de aproximadamente 45 metros.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 49,
    conasetId: 49,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué debería hacer usted para corregir un coletazo de las ruedas traseras?',
    isMultiple: false,
    options: [
      { text: 'No girar el volante del vehículo para nada.', isCorrect: false },
      { text: 'Girar el volante hacia el lado opuesto al coletazo.', isCorrect: false },
      { text: 'Girar el volante hacia el lado que se desplaza la cola del vehículo.', isCorrect: true },
      { text: 'Aplicar su freno de mano.', isCorrect: false }
    ],
    explanation: 'Se debe contravolantear hacia la misma dirección a la que se fue la cola del auto para alinear las ruedas y recuperar tracción.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 50,
    conasetId: 50,
    category: 'velocidad',
    isCritical: true,
    text: 'La distancia de frenado es la distancia que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. De las siguientes variables, ¿cuáles influyen en la distancia de frenado? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'La velocidad.', isCorrect: true },
      { text: 'El alumbrado público.', isCorrect: false },
      { text: 'El estado de los frenos y neumáticos.', isCorrect: true },
      { text: 'Las condiciones climáticas.', isCorrect: true },
      { text: 'La hora del día.', isCorrect: false }
    ],
    explanation: 'La distancia de frenado depende directamente de la velocidad (al cuadrado), el estado de neumáticos/frenos y la adherencia del pavimento (lluvia, hielo).',
    legalReference: 'Manual CONASET'
  },
  {
    id: 51,
    conasetId: 51,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va a 70 km/hr. Aproximadamente, ¿qué distancia recorrerá su vehículo desde el momento en que usted se percata de un peligro que hay más adelante hasta que comienza a frenar?',
    isMultiple: false,
    options: [
      { text: 'Unos 5 metros.', isCorrect: false },
      { text: 'Unos 8 metros.', isCorrect: false },
      { text: 'Unos 20 metros.', isCorrect: true },
      { text: 'Unos 30 metros.', isCorrect: false }
    ],
    explanation: 'En 1 segundo de tiempo de reacción a 70 km/h (19,4 m/s), el vehículo recorre aproximadamente 20 metros antes de que el pie toque el freno.',
    legalReference: 'Manual CONASET - Distancia de Reacción'
  },
  {
    id: 52,
    conasetId: 52,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál es el tiempo de reacción promedio de un conductor ante un imprevisto?',
    isMultiple: false,
    options: [
      { text: '1 segundo', isCorrect: true },
      { text: '0.1 minuto', isCorrect: false },
      { text: '0.1 segundo', isCorrect: false },
      { text: '2 segundos', isCorrect: false }
    ],
    explanation: 'El tiempo de reacción psicomotor estándar de un conductor atento en condiciones normales oscila en torno a 1 segundo.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 53,
    conasetId: 53,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Quien sobrestima sus habilidades para conducir conduce con frecuencia demasiado rápido.', isCorrect: true },
      { text: 'Quien sobrestima sus habilidades para conducir crea situaciones de riesgo a menudo.', isCorrect: true },
      { text: 'Con frecuencia, los muchachos jóvenes sobrestiman sus habilidades, conducen a velocidades excesivas y se ven más involucrados en accidentes que otros.', isCorrect: true },
      { text: 'Muchos conductores muestran deficiencias en su madurez personal.', isCorrect: false }
    ],
    explanation: 'La sobrevaloración de las propias capacidades genera asunción excesiva de riesgos y es uno de los principales factores de siniestralidad en jóvenes.',
    legalReference: 'Manual CONASET - El Individuo en el Tránsito'
  },
  {
    id: 54,
    conasetId: 54,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas.', isCorrect: true },
      { text: 'Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas.', isCorrect: true },
      { text: 'Como la moral de las personas es algo innato, no se puede cambiar.', isCorrect: false },
      { text: 'El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral.', isCorrect: true }
    ],
    explanation: 'La moral y la convivencia vial se desarrollan con la maduración personal y la empatía hacia los demás usuarios de las vías.',
    legalReference: 'Manual CONASET - Psicología del Tránsito'
  },
  {
    id: 55,
    conasetId: 55,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles 2 de las siguientes cualidades de un individuo denotan que ha alcanzado un alto grado de madurez personal? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'No sobrestima sus habilidades; tiene un buen conocimiento de sí mismo.', isCorrect: true },
      { text: 'Mantiene su vehículo en muy buen estado.', isCorrect: false },
      { text: 'Tiene buen conocimiento de las normas que regulan el tránsito.', isCorrect: false },
      { text: 'Cuenta con que otros pueden cometer errores y los acepta.', isCorrect: true }
    ],
    explanation: 'La madurez se manifiesta en la autocrítica, la prudencia y la anticipación tolerante ante eventuales fallas ajenas.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 56,
    conasetId: 56,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál de las siguientes afirmaciones es correcta en cuanto a la capacidad de reacción de los conductores jóvenes inexpertos, comparados con conductores experimentados cuya edad fluctúa entre 35 y 50 años?',
    isMultiple: false,
    options: [
      { text: 'Ante situaciones complejas, los conductores jóvenes reaccionan más rápido.', isCorrect: false },
      { text: 'Los conductores jóvenes reaccionan siempre con mayor rapidez.', isCorrect: false },
      { text: 'No hay diferencia entre la capacidad de reacción de los conductores jóvenes inexpertos y la de los mayores.', isCorrect: false },
      { text: 'En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo más corto que los jóvenes inexpertos.', isCorrect: true }
    ],
    explanation: 'La experiencia acumulada permite a los conductores de 35 a 50 años interpretar patrones de riesgo mucho más rápido ante situaciones complejas.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 57,
    conasetId: 57,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Conduce con prudencia y hace todo lo posible por evitar accidentes.', isCorrect: true },
      { text: 'Es considerado y amable con los demás conductores y con los peatones.', isCorrect: true },
      { text: 'Es respetuoso, no obstaculiza ni perturba al resto.', isCorrect: true },
      { text: 'Conduce con buen criterio.', isCorrect: true }
    ],
    explanation: 'Un conductor defensivo y seguro aúna prudencia, cortesía, respeto normativo y capacidad de anticipación.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 58,
    conasetId: 58,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles 2 de los siguientes rasgos son característicos de personas que ceden con facilidad a la presión del grupo? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Por lo general, son muy inseguras de sí mismas.', isCorrect: true },
      { text: 'Sienten temor a ser motivo de bromas y risas de los demás.', isCorrect: true },
      { text: 'Tienen mayor autonomía y voluntad para defender sus opiniones.', isCorrect: false },
      { text: 'Son capaces de soportar bromas o que lo tilden de "cobardes" o "mala persona".', isCorrect: false },
      { text: 'Son muy seguras de sí mismas.', isCorrect: false }
    ],
    explanation: 'La inseguridad personal y el miedo al ridículo o rechazo grupal llevan a asumir conductas temerarias al volante.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 59,
    conasetId: 59,
    category: 'alcohol',
    isCritical: true,
    text: 'De los siguientes factores que se presentan en los accidentes de tránsito, ¿cuáles son los 2 más frecuentes en los accidentes que ocurren en carreteras viéndose involucrado un solo vehículo? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Que el conductor no posea licencia para conducir.', isCorrect: false },
      { text: 'Que el conductor esté muy cansado o bajo los efectos del alcohol.', isCorrect: true },
      { text: 'Que el conductor esté bajo los efectos de medicamentos.', isCorrect: false },
      { text: 'Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad.', isCorrect: true }
    ],
    explanation: 'En despistes y choques en solitario en carretera, los factores primordiales son la fatiga/alcohol y el exceso de velocidad por imprudencia.',
    legalReference: 'Estadísticas Oficiales CONASET / Carabineros'
  },
  {
    id: 60,
    conasetId: 60,
    category: 'seguridad',
    isCritical: false,
    text: 'De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en los accidentes de tránsito?',
    isMultiple: false,
    options: [
      { text: 'Los errores de los conductores.', isCorrect: true },
      { text: 'Las condiciones climáticas.', isCorrect: false },
      { text: 'Las condiciones de calles y caminos.', isCorrect: false },
      { text: 'Las fallas mecánicas.', isCorrect: false }
    ],
    explanation: 'El factor humano (fallas de atención, infracciones, imprudencias) está presente en más del 90% de los siniestros viales.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 61,
    conasetId: 61,
    category: 'seguridad',
    isCritical: false,
    text: 'En cuanto al estrés al conducir, ¿cuál de las siguientes afirmaciones es falsa?',
    isMultiple: false,
    options: [
      { text: 'Un grado demasiado alto de estrés disminuye su campo de atención.', isCorrect: false },
      { text: 'Un estrés moderado puede contribuir a mejorar su rendimiento.', isCorrect: false },
      { text: 'Un conductor muy estresado puede tener reacciones de pánico.', isCorrect: false },
      { text: 'El estrés no influye en absoluto en los actos de un conductor.', isCorrect: true }
    ],
    explanation: 'El estrés altera notablemente las capacidades motrices y psicológicas; afirmar que no influye es totalmente falso.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 62,
    conasetId: 62,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué puede esperarse de un conductor impulsivo? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Que reaccione adecuadamente ante cualquier imprevisto.', isCorrect: false },
      { text: 'Que actúe sin pensar en las consecuencias.', isCorrect: true },
      { text: 'Que conduzca con excesiva precaución.', isCorrect: false },
      { text: 'Que efectúe maniobras sorpresivas que sorprendan a los demás.', isCorrect: true }
    ],
    explanation: 'La impulsividad al volante genera conductas erráticas, decisiones apresuradas y maniobras bruscas que desestabilizan el flujo de tráfico.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 63,
    conasetId: 63,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál es el mejor consejo para una conducción segura?',
    isMultiple: false,
    options: [
      { text: 'Mantener el vehículo en muy buenas condiciones.', isCorrect: false },
      { text: 'Respetar los límites de velocidad.', isCorrect: false },
      { text: 'Evitar conducir durante la noche.', isCorrect: false },
      { text: 'Contar siempre con tiempo de sobra al conducir.', isCorrect: true }
    ],
    explanation: 'Disponer de tiempo de sobra elimina el estrés de la prisa y predispone a una actitud tolerante y defensiva.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 64,
    conasetId: 64,
    category: 'seguridad',
    isCritical: false,
    text: '¿De cuáles 2 maneras puede usted contribuir con mayor eficacia a la seguridad de tránsito? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Contando siempre con tiempo de sobra para conducir.', isCorrect: true },
      { text: 'Manteniendo su vehículo en condiciones óptimas.', isCorrect: false },
      { text: 'Evitando conducir durante la noche.', isCorrect: false },
      { text: 'Conduciendo a la defensiva.', isCorrect: true }
    ],
    explanation: 'El manejo defensivo y salir con tiempo suficiente son las dos medidas preventivas de mayor impacto comprobado para evitar siniestros.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 65,
    conasetId: 65,
    category: 'alcohol',
    isCritical: true,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'La capacidad de reacción de una persona se ve afectada con pequeñas concentraciones de alcohol en su organismo.', isCorrect: true },
      { text: 'Una buena taza de café acelera el proceso mediante el cual el organismo se libera del alcohol.', isCorrect: false },
      { text: 'Con pequeñas concentraciones de alcohol en el organismo de un individuo, disminuyen ciertas inhibiciones y tiende a sobrestimar sus capacidades.', isCorrect: true },
      { text: 'La capacidad de interpretación y decisión de un conductor experimentado no se ven afectadas con sólo 2 tragos de licor fuerte.', isCorrect: false }
    ],
    explanation: 'Incluso dosis mínimas de alcohol merman la percepción e incrementan la asunción de riesgos. El café no elimina el alcohol de la sangre.',
    legalReference: 'Ley Tolerancia Cero / CONASET'
  },
  {
    id: 66,
    conasetId: 66,
    category: 'alcohol',
    isCritical: true,
    text: 'En cuanto a la concentración de alcohol en la sangre de una persona que ingiere la misma cantidad en ocasiones diferentes, ¿cuál de las siguientes afirmaciones es falsa?',
    isMultiple: false,
    options: [
      { text: 'Aunque la persona beba la misma cantidad de alcohol cada ocasión, la concentración de éste en su sangre puede ser diferente.', isCorrect: false },
      { text: 'La concentración de alcohol depende de cuánto se come en cada ocasión.', isCorrect: false },
      { text: 'Entre otros factores, la concentración de alcohol también depende del tiempo que dura la ingestión cada vez.', isCorrect: false },
      { text: 'Si la cantidad de alcohol ingerida en cada ocasión es exactamente la misma, la concentración de alcohol en la sangre también será la misma.', isCorrect: true }
    ],
    explanation: 'La alcoholemia varía según alimentos en el estómago, fatiga, ritmo de ingestión y estado físico, por lo que la afirmación de que será siempre idéntica es falsa.',
    legalReference: 'Manual CONASET - Efectos del Alcohol'
  },
  {
    id: 67,
    conasetId: 67,
    category: 'velocidad',
    isCritical: true,
    text: '¿Qué efecto(s) sobre la visión tiene el conducir a unos 100 km/h? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'A la mayoría de los conductores se les cansa la vista después de conducir más o menos media hora.', isCorrect: false },
      { text: 'El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.', isCorrect: true },
      { text: 'Resulta más difícil percibir movimientos a los lados de la carretera.', isCorrect: true },
      { text: 'La visión se adapta automáticamente a la alta velocidad y, por lo tanto, el resto del tránsito se percibe igual que al ir a una velocidad baja.', isCorrect: false }
    ],
    explanation: 'Es el efecto túnel: a mayor velocidad el campo visual periférico se estrecha progresivamente, dificultando advertir peligros laterales.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 68,
    conasetId: 68,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles son los primeros síntomas de cansancio?',
    isMultiple: false,
    options: [
      { text: 'Se comienza a sentir calor y agresividad.', isCorrect: false },
      { text: 'Se comienza a sentir falta de interés y aparecen los bostezos.', isCorrect: true },
      { text: 'Se comienza a sentir dificultad para mantener la dirección.', isCorrect: false },
      { text: 'Se comienza a sentir que los párpados se cierran.', isCorrect: false }
    ],
    explanation: 'Los bostezos, pesadez ocular y desconcentración o falta de interés son las señales iniciales para detenerse y descansar.',
    legalReference: 'Manual CONASET - Fatiga y Sueño'
  },
  {
    id: 69,
    conasetId: 69,
    category: 'seguridad',
    isCritical: false,
    text: 'El modo como percibimos una situación depende de nuestras experiencias anteriores, intereses, expectativas y necesidades. En este contexto, ¿cuál de las siguientes afirmaciones es falsa?',
    isMultiple: false,
    options: [
      { text: 'Un conductor que siente apremio por falta de tiempo puede subestimar los riesgos de la alta velocidad.', isCorrect: false },
      { text: 'Los conductores ven principalmente aquéllo que les interesa en un momento y lo que esperan ver.', isCorrect: false },
      { text: 'Varios conductores que ven lo mismo perciben las situaciones de tránsito también del mismo modo.', isCorrect: true },
      { text: 'También a los conductores experimentados a veces les pasan inadvertidas informaciones importantes.', isCorrect: false }
    ],
    explanation: 'Cada persona procesa la información visual de manera subjetiva; no todos los conductores perciben una misma situación de igual manera.',
    legalReference: 'Manual CONASET - Percepción'
  },
  {
    id: 70,
    conasetId: 70,
    category: 'seguridad',
    isCritical: false,
    text: 'De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'El factor humano es el principal causante de que surjan situaciones de riesgo en el tránsito.', isCorrect: true },
      { text: 'La falta de atención a las condiciones del tránsito es una de las principales causa de accidentes.', isCorrect: true },
      { text: 'Un conductor que va con mucha prisa tiende a subestimar los riesgos.', isCorrect: true },
      { text: 'Discutir con alguien o estar pendiente de la música de la radio, aumenta las posibilidades de pasar por alto circunstancias importantes en el tránsito.', isCorrect: true }
    ],
    explanation: 'Todas son causas directas de origen humano comprobadas en la siniestralidad vial chilena.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  }
];

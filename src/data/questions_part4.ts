import { QuestionDefinition } from './types';

export const QUESTIONS_PART_4: QuestionDefinition[] = [
  {
    id: 211,
    conasetId: 211,
    category: 'clima',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción bajo la lluvia? Marque la o las respuesta(s) correcta(s)',
    isMultiple: false,
    options: [
      { text: 'Cuando los neumáticos son nuevos no hay riesgo de que éstos patinen a consecuencia del agua en la calzada.', isCorrect: false },
      { text: 'Independientemente del estado de los neumáticos, el riesgo de que éstos patinen es mayor mientras mayor es la velocidad.', isCorrect: true },
      { text: 'El riesgo de que los neumáticos patinen es menor cuando recién ha comenzado a llover.', isCorrect: false },
      { text: 'Cuando los frenos están buenos el riesgo de patinaje no existe.', isCorrect: false }
    ],
    explanation: 'A mayor velocidad, los canales del neumático no alcanzan a desalojar el caudal de agua, levantando la rueda sobre una película líquida (aquaplaning).',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 212,
    conasetId: 212,
    category: 'clima',
    isCritical: false,
    text: '¿Cuáles son las 2 causas más comunes de los resbalones ante la existencia de agua en la calzada? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Frenos en mal estado.', isCorrect: false },
      { text: 'Neumáticos desgastados.', isCorrect: true },
      { text: 'Exceso de velocidad en relación a las condiciones de la calzada.', isCorrect: true },
      { text: 'Fallas en el sistema de dirección.', isCorrect: false }
    ],
    explanation: 'La falta de dibujo en las bandas de rodadura combinada con una velocidad excesiva para calzada mojada provocan la pérdida total de adherencia.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 213,
    conasetId: 213,
    category: 'clima',
    isCritical: false,
    text: 'Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Bajar su visor de protección solar.', isCorrect: false },
      { text: 'Poner luces delanteras altas.', isCorrect: false },
      { text: 'Poner su mano sobre sus ojos.', isCorrect: false },
      { text: 'Bajar la velocidad y eventualmente detenerse.', isCorrect: true }
    ],
    explanation: 'La ceguera momentánea exige reducir de inmediato la velocidad y detenerse a la derecha si no se divisa la trayectoria con claridad.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 214,
    conasetId: 214,
    category: 'clima',
    isCritical: false,
    text: 'Conduciendo de noche usted se ve encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Frenar fuerte.', isCorrect: false },
      { text: 'Acelerar para alejarse rápido del vehículo que lo encandila.', isCorrect: false },
      { text: 'Hacer parpadear sus luces.', isCorrect: false },
      { text: 'Bajar la velocidad o detenerse.', isCorrect: true }
    ],
    explanation: 'Disminuir la marcha y detenerse de forma progresiva hasta recuperar la adaptación visual.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 215,
    conasetId: 215,
    category: 'clima',
    isCritical: false,
    text: 'Al frenar en una calzada mojada su vehículo comienza a patinar. ¿Qué es lo primero que usted debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Soltar el freno completamente.', isCorrect: true },
      { text: 'Tirar rápidamente del freno de mano.', isCorrect: false },
      { text: 'Apretar con más fuerza el pedal de freno.', isCorrect: false },
      { text: 'Poner el pie en el pedal de embrague.', isCorrect: false }
    ],
    explanation: 'Al soltar el freno las ruedas recuperan giro y rodadura, restituyendo el agarre con el suelo para recuperar el control direccional.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 216,
    conasetId: 216,
    category: 'clima',
    isCritical: false,
    text: '¿Cómo puede usted evitar que los neumáticos patinen cuando la calzada está con hielo?',
    isMultiple: false,
    options: [
      { text: 'Manteniéndose siempre en primera.', isCorrect: false },
      { text: 'Poniendo el freno de mano si las ruedas comienzan a patinar.', isCorrect: false },
      { text: 'Conduciendo lentamente en la marcha más alta posible.', isCorrect: true },
      { text: 'Conduciendo en neutro.', isCorrect: false }
    ],
    explanation: 'Una marcha alta transmite menor par motor a las ruedas motrices, evitando que éstas derrapen o patinen en falso sobre el hielo.',
    legalReference: 'Manual CONASET - Conducción en Hielo'
  },
  {
    id: 217,
    conasetId: 217,
    category: 'clima',
    isCritical: false,
    text: 'Cuando la calzada está con hielo la distancia de frenado puede ser ...',
    isMultiple: false,
    options: [
      { text: '2 veces la distancia normal.', isCorrect: false },
      { text: '5 veces la distancia normal.', isCorrect: false },
      { text: '7 veces la distancia normal.', isCorrect: false },
      { text: '10 veces la distancia normal.', isCorrect: true }
    ],
    explanation: 'El coeficiente de fricción sobre hielo desciende drásticamente: la distancia de frenada puede multiplicarse hasta por 10 veces.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 218,
    conasetId: 218,
    category: 'clima',
    isCritical: false,
    text: 'Al conducir con neblina a la luz del día, ¿qué luces enciende usted?',
    isMultiple: false,
    options: [
      { text: 'Las luces delanteras bajas.', isCorrect: true },
      { text: 'Las luces de estacionamiento.', isCorrect: false },
      { text: 'Las luces delanteras altas.', isCorrect: false },
      { text: 'Las luces de advertencia de peligro.', isCorrect: false }
    ],
    explanation: 'Las luces bajas iluminan el pavimento sin rebotar en las gotas de niebla; las luces altas crean una pared blanca cegadora.',
    legalReference: 'Ley N° 18.290, Art. 71'
  },
  {
    id: 219,
    conasetId: 219,
    category: 'clima',
    isCritical: false,
    text: 'Al conducir sobre una calzada con hielo usted siente la dirección de su vehículo más liviana. ¿Por qué sucede esto?',
    isMultiple: false,
    options: [
      { text: 'Porque los neumáticos tienen menos adherencia a la calzada.', isCorrect: true },
      { text: 'Porque los neumáticos tienen más adherencia a la calzada.', isCorrect: false },
      { text: 'Porque los neumáticos están demasiado blandos.', isCorrect: false },
      { text: 'Porque los neumáticos están demasiado duros.', isCorrect: false }
    ],
    explanation: 'La pérdida de resistencia y fricción entre el caucho y la superficie congelada hace que el volante no ofrezca resistencia.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 220,
    conasetId: 220,
    category: 'clima',
    isCritical: false,
    text: '¿Cuándo es su distancia de detención total mucho más larga?',
    isMultiple: false,
    options: [
      { text: 'Cuando hay neblina.', isCorrect: false },
      { text: 'Cuando es de noche.', isCorrect: false },
      { text: 'Cuando está lloviendo.', isCorrect: true },
      { text: 'Cuando hay vientos fuertes.', isCorrect: false }
    ],
    explanation: 'La presencia de agua en la calzada duplica la distancia de frenado técnico.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 221,
    conasetId: 221,
    category: 'clima',
    isCritical: false,
    text: 'Usted acaba de conducir a través de una calle inundada. ¿Qué es lo primero que debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Chequear sus frenos.', isCorrect: true },
      { text: 'Detenerse y revisar sus neumáticos.', isCorrect: false },
      { text: 'Detenerse y secar sus frenos.', isCorrect: false },
      { text: 'Activar su limpiaparabrisas.', isCorrect: false }
    ],
    explanation: 'El agua empapa las pastillas y discos disminuyendo transitoriamente su eficacia; frene suavemente repetidas veces para secarlos por fricción.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 222,
    conasetId: 222,
    category: 'clima',
    isCritical: false,
    text: '¿Cómo puede usted evitar que su vehículo patine cuando la calzada está cubierta con una capa de hielo?',
    isMultiple: false,
    options: [
      { text: 'Usando el freno de mano si las ruedas comienzan a resbalar.', isCorrect: false },
      { text: 'Conduciendo a una velocidad baja en el cambio más alto posible.', isCorrect: true },
      { text: 'Frenando suave y repetidamente.', isCorrect: false },
      { text: 'Conduciendo en un cambio bajo todo el tiempo.', isCorrect: false }
    ],
    explanation: 'Circular en una marcha alta suaviza la fuerza entregada al neumático evitando pérdidas de tracción.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 223,
    conasetId: 223,
    category: 'clima',
    isCritical: false,
    text: 'Usted está conduciendo bajo mucha lluvia y repentinamente siente la dirección muy liviana. ¿Qué hace usted para tener nuevamente el control de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Cambia a una marcha más baja.', isCorrect: false },
      { text: 'Frena levemente para reducir la velocidad.', isCorrect: false },
      { text: 'Guía el vehículo por la parte más seca de la calzada.', isCorrect: false },
      { text: 'Suelta el acelerador.', isCorrect: true }
    ],
    explanation: 'Está sufriendo aquaplaning o hidroplaneo. No frene ni gire bruscamente: levante suavemente el pie del acelerador hasta que las ruedas toquen asfalto.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 224,
    conasetId: 224,
    category: 'clima',
    isCritical: false,
    text: 'Cuando hay nieve lo mejor es conducir manteniéndose en la marcha más alta posible. ¿Por qué es esto?',
    isMultiple: false,
    options: [
      { text: 'Para reducir rápidamente la velocidad al frenar.', isCorrect: false },
      { text: 'Para que el patinaje de las ruedas no haga que el motor funcione demasiado rápido.', isCorrect: false },
      { text: 'Para ayudar a evitar que las ruedas patinen.', isCorrect: true },
      { text: 'Para dejar disponible una marcha baja en el caso de que las ruedas patinen.', isCorrect: false }
    ],
    explanation: 'Una relación de cambio alta reduce el torque en las ruedas y minimiza el riesgo de que patinen sobre nieve o hielo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 225,
    conasetId: 225,
    category: 'clima',
    isCritical: false,
    text: '¿Cuál es la principal razón por la cual su distancia de detención total es mayor después de una lluvia torrencial?',
    isMultiple: false,
    options: [
      { text: 'Porque puede que usted no vea las pozas grandes.', isCorrect: false },
      { text: 'Porque los frenos estarán fríos al estar mojados.', isCorrect: false },
      { text: 'Porque sus neumáticos tendrán menos adherencia sobre la calzada.', isCorrect: true },
      { text: 'Porque el agua sobre el parabrisas nublará su visión hacia el frente.', isCorrect: false }
    ],
    explanation: 'El agua reduce sustancialmente el coeficiente de fricción entre el neumático y el pavimento.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 226,
    conasetId: 226,
    category: 'clima',
    isCritical: false,
    text: 'En una ocasión de mucha neblina usted va detrás de otros vehículos y lleva encendidas sus luces bajas. ¿De qué otra forma puede reducir las probabilidades de verse involucrado en un accidente?',
    isMultiple: false,
    options: [
      { text: 'Usando sus luces altas en vez de bajas.', isCorrect: false },
      { text: 'Circulando a baja velocidad y aumentando la distancia al vehículo que va adelante.', isCorrect: true },
      { text: 'Manteniéndose cerca del vehículo que va delante suyo.', isCorrect: false },
      { text: 'Encendiendo sus luces de advertencia de peligro.', isCorrect: false }
    ],
    explanation: 'Reducir la velocidad y aumentar la distancia da margen suficiente para frenar ante detenciones imprevistas en la niebla.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 227,
    conasetId: 227,
    category: 'seguridad',
    isCritical: false,
    text: 'En un pavimento mojado usted va circulando detrás de un vehículo manteniéndose a una distancia segura de él. De pronto es adelantado por otro vehículo que se ubica en el espacio que usted había dejado. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Encender y apagar sus luces en señal de advertencia.', isCorrect: false },
      { text: 'Tratar de adelantar tan pronto pueda hacerlo en forma segura.', isCorrect: false },
      { text: 'Disminuir su velocidad hasta recuperar una distancia segura respecto del que va adelante.', isCorrect: true },
      { text: 'Mantener su velocidad y esperar a que el vehículo se aleje.', isCorrect: false }
    ],
    explanation: 'Reestablezca de inmediato el colchón de seguridad de 4 segundos aflojando el acelerador con calma.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 228,
    conasetId: 228,
    category: 'clima',
    isCritical: false,
    text: '¿Cómo puede usted controlar mejor su vehículo al conducir con nieve?',
    isMultiple: false,
    options: [
      { text: 'Conduciendo en un cambio bajo y sujetando el volante muy firmemente.', isCorrect: false },
      { text: 'Conduciendo en primera.', isCorrect: false },
      { text: 'Manteniendo el motor acelerado y presionando el pedal de embrague.', isCorrect: false },
      { text: 'Conduciendo lentamente en el cambio más alto posible.', isCorrect: true }
    ],
    explanation: 'Marcha alta y movimientos muy suaves de volante y pedales son la clave para no desestabilizar el auto en la nieve.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 229,
    conasetId: 229,
    category: 'clima',
    isCritical: false,
    text: 'Al ir de noche por una carretera usted debe mantener sus focos delanteros encendidos, a menos que ...',
    isMultiple: false,
    options: [
      { text: 'su vehículo esté en pana en la berma.', isCorrect: true },
      { text: 'vayan vehículos muy cerca delante suyo.', isCorrect: false },
      { text: 'circule a menos de 50 km/hr.', isCorrect: false },
      { text: 'la carretera esté iluminada.', isCorrect: false }
    ],
    explanation: 'En panne en la berma se apagan los faros principales y se dejan encendidas las luces de estacionamiento y de emergencia.',
    legalReference: 'Ley N° 18.290, Art. 71'
  },
  {
    id: 230,
    conasetId: 230,
    category: 'clima',
    isCritical: false,
    text: '¿Cómo debería conducir usted en una curva cuando hay hielo en la calzada?',
    isMultiple: false,
    options: [
      { text: 'Usando el embrague y el freno al mismo tiempo.', isCorrect: false },
      { text: 'Lenta y suavemente.', isCorrect: true },
      { text: 'En primera.', isCorrect: false },
      { text: 'Frenando a medida que va tomando la curva.', isCorrect: false }
    ],
    explanation: 'Entre a la curva a muy baja velocidad y maniobre el volante con extrema suavidad sin toques bruscos de acelerador ni freno.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 231,
    conasetId: 231,
    category: 'clima',
    isCritical: false,
    text: 'Hay mucha neblina y el auto que viene detrás suyo parece estar muy cerca. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Encender sus luces de advertencia de peligro.', isCorrect: false },
      { text: 'Desplazarse hacia el costado derecho y detenerse de inmediato.', isCorrect: false },
      { text: 'Acelerar y alejarse de él.', isCorrect: false },
      { text: 'Continuar con mucho cuidado.', isCorrect: true }
    ],
    explanation: 'Prosiga con extrema precaución sin frenar bruscamente ni realizar maniobras imprevistas que puedan causar un alcance.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 232,
    conasetId: 232,
    category: 'clima',
    isCritical: false,
    text: 'Usted va conduciendo de noche por una carretera cerca de otros vehículos que van delante suyo. ¿Qué luces debería mantener encendidas?',
    isMultiple: false,
    options: [
      { text: 'Las neblineras delanteras.', isCorrect: false },
      { text: 'Las luces altas.', isCorrect: false },
      { text: 'Las luces bajas.', isCorrect: true },
      { text: 'Las luces de estacionamiento.', isCorrect: false }
    ],
    explanation: 'Al seguir a otro móvil en carretera deben usarse luces bajas para no encandilar a su conductor a través de los espejos.',
    legalReference: 'Ley N° 18.290, Art. 73'
  },
  {
    id: 233,
    conasetId: 233,
    category: 'clima',
    isCritical: false,
    text: '¿Por qué razón debería usted reducir siempre su velocidad al conducir con neblina?',
    isMultiple: false,
    options: [
      { text: 'Porque los frenos no funcionan bien.', isCorrect: false },
      { text: 'Porque las luces neblineras de otros lo pueden encandilar.', isCorrect: false },
      { text: 'Porque es más difícil ver lo que hay más adelante.', isCorrect: true },
      { text: 'Porque el motor está más frío.', isCorrect: false }
    ],
    explanation: 'La visibilidad reducida acorta drásticamente el tiempo disponible para divisar un obstáculo y detener el móvil a tiempo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 234,
    conasetId: 234,
    category: 'seguridad',
    isCritical: false,
    text: 'Su vehículo ha quedado en pana en medio de una autopista. ¿Qué es lo primero que usted debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Intentar detener a los autos que pasan para solicitar ayuda.', isCorrect: false },
      { text: 'Intentar reparar su vehículo rápidamente.', isCorrect: false },
      { text: 'Encender sus luces de advertencia de peligro.', isCorrect: true },
      { text: 'Instalar un triángulo reflectante para advertir a los demás usuarios.', isCorrect: false }
    ],
    explanation: 'Lo primero e instantáneo desde el puesto del conductor es activar las luces de emergencia para advertir a los vehículos que circulan a alta velocidad.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 235,
    conasetId: 235,
    category: 'normativa',
    isCritical: false,
    text: 'Usted va circulando por la pista de la derecha de una carretera de doble calzada muy transitada. Una señal le indica que a 800 m su pista se encuentra cerrada. ¿Qué debería hacer usted?',
    illustrationType: 'pista_cerrada_800m_235',
    isMultiple: false,
    options: [
      { text: 'Señalizar a la izquierda, luego detenerse y esperar a que alguien le dé la pasada.', isCorrect: false },
      { text: 'Encender sus luces de advertencia de peligro y desplazarse hacia la pista de su izquierda.', isCorrect: false },
      { text: 'Continuar hasta llegar a la obstrucción y luego se cambia hacia la pista de la izquierda.', isCorrect: false },
      { text: 'Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura.', isCorrect: true }
    ],
    explanation: 'Aproveche la anticipación de 800 m para cambiar de pista con fluidez y seguridad sin generar frenadas bruscas de último minuto.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 236,
    conasetId: 236,
    category: 'normativa',
    isCritical: false,
    text: 'En una calle de una pista por sentido de tránsito usted se encuentra con que su pista está obstruida. ¿Qué hace usted?',
    illustrationType: 'obstruccion_pista_236',
    isMultiple: false,
    options: [
      { text: 'Continúa, porque usted tiene el derecho a vía.', isCorrect: false },
      { text: 'Hace señas con la mano a quienes vienen en contra para que le den la pasada.', isCorrect: false },
      { text: 'Cede el paso al tránsito que viene en sentido contrario.', isCorrect: true },
      { text: 'Acelera para poder pasar primero.', isCorrect: false }
    ],
    explanation: 'El conductor que tiene el obstáculo en su pista de circulación pierde el derecho preferente y debe ceder el paso a quien viene de frente.',
    legalReference: 'Ley N° 18.290, Art. 125'
  },
  {
    id: 237,
    conasetId: 237,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va tirando un remolque pequeño que comienza a zigzaguear. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Frena a fondo y mantiene la presión sobre el pedal de freno.', isCorrect: false },
      { text: 'Aumenta su velocidad tan pronto sea posible.', isCorrect: false },
      { text: 'Suelta ligeramente el volante y espera que el problema se corrija solo.', isCorrect: false },
      { text: 'Retira suavemente el pie del acelerador y disminuye la velocidad.', isCorrect: true }
    ],
    explanation: 'Levantar suavemente el pie del acelerador sin frenadas bruscas estabiliza la oscilación lateral y devuelve el control al tren motriz.',
    legalReference: 'Manual CONASET - Conducción con Remolques'
  },
  {
    id: 238,
    conasetId: 238,
    category: 'normativa',
    isCritical: false,
    text: 'En relación con el transporte de una carga sobre la parrilla de un automóvil, ¿cuál de las siguientes afirmaciones constituye una obligación para el conductor?',
    isMultiple: false,
    options: [
      { text: 'Debe llevarse sólo cuando es estrictamente necesario.', isCorrect: false },
      { text: 'Debe ser lo más liviana posible.', isCorrect: false },
      { text: 'Debe estar cubierta con un plástico.', isCorrect: false },
      { text: 'Debe estar muy bien sujeta.', isCorrect: true }
    ],
    explanation: 'Toda carga sobre el techo debe estar sólidamente estibada y asegurada para evitar caídas sobre la calzada.',
    legalReference: 'Ley N° 18.290, Art. 60'
  },
  {
    id: 239,
    conasetId: 239,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cómo puede usted detener el zigzagueo de una casa rodante que va remolcando?',
    isMultiple: false,
    options: [
      { text: 'Moviendo el volante lentamente hacia cada lado.', isCorrect: false },
      { text: 'Acelerando para aumentar la velocidad.', isCorrect: false },
      { text: 'Disminuyendo la velocidad gradualmente.', isCorrect: true },
      { text: 'Deteniéndose lo más rápido que pueda.', isCorrect: false }
    ],
    explanation: 'Reducir la velocidad de manera progresiva disminuye las fuerzas dinámicas laterales que provocan el latigazo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 240,
    conasetId: 240,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué precaución debe tomar usted al cargar un remolque que va a arrastrar con su automóvil?',
    isMultiple: false,
    options: [
      { text: 'Que el mayor peso se concentre en la parte trasera.', isCorrect: false },
      { text: 'Que la mayor parte del peso se concentre en la parte delantera.', isCorrect: false },
      { text: 'Que el peso se distribuya en forma pareja.', isCorrect: true },
      { text: 'Que el peso se concentre al lado derecho.', isCorrect: false }
    ],
    explanation: 'La distribución equilibrada y homogénea del peso sobre el eje del remolque es indispensable para mantener el aplomo y estabilidad del tiro.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 241,
    conasetId: 241,
    category: 'seguridad',
    isCritical: false,
    text: 'En una carretera de doble calzada y de mucho tránsito, usted está siendo seguido muy de cerca por un vehículo que viene atrás. ¿Qué hace usted para disminuir el riesgo de accidente?',
    isMultiple: false,
    options: [
      { text: 'Sale a la berma y se detiene.', isCorrect: false },
      { text: 'Enciende sus luces de advertencia de peligro.', isCorrect: false },
      { text: 'Frena.', isCorrect: false },
      { text: 'Aumenta su distancia al vehículo que va adelante.', isCorrect: true }
    ],
    explanation: 'Aumentar la distancia con el coche delantero le permite frenar con mayor suavidad si surge un imprevisto, evitando ser chocado por el vehículo pegado atrás.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 242,
    conasetId: 242,
    category: 'senales',
    isCritical: false,
    text: 'Combine los números de las señales con los textos que correspondan.',
    illustrationType: 'combinar_senales_242',
    isMultiple: false,
    options: [
      { text: 'a) Mantenga su derecha: 3 / b) Pavimento resbaladizo: 5 / c) Curva: 1 / d) No adelantar: 4', isCorrect: true },
      { text: 'a) Mantenga su derecha: 1 / b) Pavimento resbaladizo: 3 / c) Curva: 5 / d) No adelantar: 2', isCorrect: false },
      { text: 'a) Mantenga su derecha: 4 / b) Pavimento resbaladizo: 1 / c) Curva: 3 / d) No adelantar: 5', isCorrect: false },
      { text: 'a) Mantenga su derecha: 5 / b) Pavimento resbaladizo: 4 / c) Curva: 2 / d) No adelantar: 1', isCorrect: false }
    ],
    explanation: 'Correspondencia oficial: 1 = Curva preventiva; 3 = Mantenga su derecha reglamentaria; 4 = Prohibido adelantar; 5 = Pavimento resbaladizo.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 243,
    conasetId: 243,
    category: 'senales',
    isCritical: false,
    text: 'Usted va circulando por una carretera de doble calzada con tres pistas por sentido. Las demarcaciones de pistas y de eje central están reforzadas con tachas reflectantes. Si a su izquierda las tachas son rojas y a su derecha éstas son blancas, ¿por cuál pista va usted?',
    isMultiple: false,
    options: [
      { text: 'Por la pista del medio.', isCorrect: false },
      { text: 'Por la pista de la izquierda.', isCorrect: true },
      { text: 'Por la pista de la derecha.', isCorrect: false }
    ],
    explanation: 'Las tachas rojas demarcan la línea de borde izquierdo adyacente a la mediana o bandejón central (que no se debe traspasar). Si están a su izquierda, usted va por la pista izquierda.',
    legalReference: 'Manual de Señalización de Tránsito - Tachas Reflectantes'
  },
  {
    id: 244,
    conasetId: 244,
    category: 'velocidad',
    isCritical: true,
    text: 'Al ir circulando en su vehículo usted enfrenta esta señal. ¿Qué significa?',
    illustrationType: 'senal_velocidad_70',
    isMultiple: false,
    options: [
      { text: 'Que usted puede conducir hasta un 10% más rápido, porque la señal es sólo una recomendación.', isCorrect: false },
      { text: 'Que en días no hábiles, cuando hay poco tránsito, no rige tal restricción.', isCorrect: false },
      { text: 'Que usted no debe exceder esta velocidad.', isCorrect: true },
      { text: 'Que usted debe mantener una velocidad inferior a la indicada en la señal.', isCorrect: false }
    ],
    explanation: 'Señal reglamentaria restrictiva: establece la velocidad máxima legal permitida bajo cualquier circunstancia.',
    legalReference: 'Ley N° 18.290, Art. 144'
  },
  {
    id: 245,
    conasetId: 245,
    category: 'velocidad',
    isCritical: true,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_velocidad_60',
    isMultiple: false,
    options: [
      { text: 'Usted no debe exceder la velocidad indicada.', isCorrect: true },
      { text: 'Es más seguro conducir a la velocidad indicada.', isCorrect: false },
      { text: 'La velocidad indicada es la máxima aconsejada.', isCorrect: false },
      { text: 'Es una recomendación para cuando hay mucho tránsito.', isCorrect: false }
    ],
    explanation: 'Es un mandato legal imperativo de velocidad tope (60 km/h) que no puede sobrepasarse.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 246,
    conasetId: 246,
    category: 'senales',
    isCritical: false,
    text: '¿Cuándo puede usted ingresar a un cruce en cuya calzada se han pintado franjas amarillas diagonales?',
    illustrationType: 'zona_achurada_amarilla_246',
    isMultiple: false,
    options: [
      { text: 'Siempre que el semáforo esté en verde.', isCorrect: false },
      { text: 'Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en él.', isCorrect: true },
      { text: 'Cada vez que va a virar hacia la derecha.', isCorrect: false },
      { text: 'Sólo cuando haya menos de dos vehículos delante suyo.', isCorrect: false }
    ],
    explanation: 'Demarcación "No bloquear cruce": está prohibido ingresar a la intersección si no hay espacio seguro al otro lado para despejarla.',
    legalReference: 'Ley N° 18.290, Art. 129'
  },
  {
    id: 247,
    conasetId: 247,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal de tránsito?',
    illustrationType: 'senal_resbaladizo',
    isMultiple: false,
    options: [
      { text: 'Gravilla suelta.', isCorrect: false },
      { text: 'Peligro de que se pinchen los neumáticos.', isCorrect: false },
      { text: 'Pavimento resbaladizo.', isCorrect: true },
      { text: 'Curvas en el camino.', isCorrect: false }
    ],
    explanation: 'Señal preventiva que advierte proximidad de un tramo de calzada donde la adherencia es reducida.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 248,
    conasetId: 248,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_no_adelantar',
    isMultiple: false,
    options: [
      { text: 'No adelantar.', isCorrect: true },
      { text: 'Mantenga su derecha.', isCorrect: false },
      { text: 'Preferencia al tránsito que viene en sentido contrario.', isCorrect: false },
      { text: 'No cambiar de pista.', isCorrect: false }
    ],
    explanation: 'Señal reglamentaria de prohibición R-14: prohíbe taxativamente la maniobra de adelantamiento.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 249,
    conasetId: 249,
    category: 'senales',
    isCritical: false,
    text: '¿Cuál de los siguientes tipos de señales le indica que no haga algo?',
    illustrationType: 'tipos_senales_249',
    isMultiple: false,
    options: [
      { text: 'A (Señal rectangular azul)', isCorrect: false },
      { text: 'B (Señal rombo amarillo)', isCorrect: false },
      { text: 'C (Señal circular con orla roja y franja diagonal)', isCorrect: true },
      { text: 'D (Señal rombo de prioridad)', isCorrect: false }
    ],
    explanation: 'Las señales circulares con fondo blanco, orla roja y línea diagonal cruzada son señales reglamentarias de prohibición.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 250,
    conasetId: 250,
    category: 'senales',
    isCritical: false,
    text: '¿Qué debe hacer usted cuando enfrenta esta señal?',
    illustrationType: 'senal_pare',
    isMultiple: false,
    options: [
      { text: 'Detenerse sólo si viene algún vehículo por la otra vía.', isCorrect: false },
      { text: 'Detenerse sólo si hay peatones esperando para cruzar.', isCorrect: false },
      { text: 'Detenerse sólo si en la calzada está pintada la leyenda PARE.', isCorrect: false },
      { text: 'Detenerse siempre.', isCorrect: true }
    ],
    explanation: 'La señal PARE impone la detención completa y total de la marcha obligatoriamente en todos los casos.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 251,
    conasetId: 251,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_semaforo_251',
    isMultiple: false,
    options: [
      { text: 'Semáforo fuera de servicio.', isCorrect: false },
      { text: 'Proximidad de semáforo.', isCorrect: true },
      { text: 'Semáforo activado por peatones.', isCorrect: false },
      { text: 'Semáforos sincronizados.', isCorrect: false }
    ],
    explanation: 'Señal preventiva que advierte la cercanía de un cruce regulado por semáforo.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 252,
    conasetId: 252,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa un semáforo en rojo?',
    isMultiple: false,
    options: [
      { text: 'Que usted puede seguir su camino si no vienen vehículos por la otra vía.', isCorrect: false },
      { text: 'Que usted debe disminuir su velocidad y estar preparado para detenerse.', isCorrect: false },
      { text: 'Que usted debe detenerse antes de la línea de detención de vehículos.', isCorrect: true },
      { text: 'Que usted debe detenerse sobre el paso de peatones.', isCorrect: false }
    ],
    explanation: 'La luz roja indica detención obligatoria inmediata antes de la línea de detención demarcada o antes del cruce de peatones.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 253,
    conasetId: 253,
    category: 'senales',
    isCritical: false,
    text: '¿Para qué sirven las señales amarillas con forma de rombo?',
    isMultiple: false,
    options: [
      { text: 'Para entregar información.', isCorrect: false },
      { text: 'Para dar órdenes.', isCorrect: false },
      { text: 'Para indicar direcciones.', isCorrect: false },
      { text: 'Para advertir acerca de peligros.', isCorrect: true }
    ],
    explanation: 'Son las señales de Advertencia de Peligro (preventivas): su función es alertar al conductor sobre riesgos o condiciones singulares de la vía.',
    legalReference: 'Manual de Señalización de Tránsito CONASET'
  },
  {
    id: 254,
    conasetId: 254,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa un semáforo en amarillo?',
    isMultiple: false,
    options: [
      { text: 'Que usted debe prepararse para continuar.', isCorrect: false },
      { text: 'Que usted debe detenerse antes de entrar al cruce, a menos que no alcance a hacerlo en forma segura.', isCorrect: true },
      { text: 'Que usted debe continuar, siempre que vaya a virar.', isCorrect: false },
      { text: 'Que usted debe continuar si no hay peatones cruzando.', isCorrect: false }
    ],
    explanation: 'La luz amarilla advierte la inminencia de la luz roja; el conductor debe detenerse salvo que por cercanía la frenada resulte peligrosa.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 255,
    conasetId: 255,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_dos_sentidos_255',
    isMultiple: false,
    options: [
      { text: 'Angostamiento de la vía.', isCorrect: false },
      { text: 'Preferencia al tránsito que viene en sentido contrario.', isCorrect: false },
      { text: 'Proximidad de doble calzada.', isCorrect: false },
      { text: 'Dos sentidos de tránsito más adelante.', isCorrect: true }
    ],
    explanation: 'Advierte que una calzada de un solo sentido pasa a tener tránsito en ambos sentidos.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 256,
    conasetId: 256,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_cruce_peatones_256',
    isMultiple: false,
    options: [
      { text: 'Zona de escuela.', isCorrect: false },
      { text: 'Cruce de peatones.', isCorrect: true },
      { text: 'Niños jugando.', isCorrect: false },
      { text: 'Peatón debe transitar por su izquierda.', isCorrect: false }
    ],
    explanation: 'Señal preventiva de peligro que previene la proximidad de un paso para peatones.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 257,
    conasetId: 257,
    category: 'senales',
    isCritical: false,
    text: '¿Cuál de estas señales le previene que más adelante hay una serie de curvas?',
    illustrationType: 'senales_curvas_257',
    isMultiple: false,
    options: [
      { text: 'A', isCorrect: false },
      { text: 'B', isCorrect: true },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: false }
    ],
    explanation: 'La señal B advierte la existencia de curvas sucesivas o camino sinuoso.',
    legalReference: 'Manual de Señalización'
  },
  {
    id: 258,
    conasetId: 258,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa esta señal?',
    illustrationType: 'senal_ciclistas',
    isMultiple: false,
    options: [
      { text: 'Que se cerca a una zona en la que no se permiten bicicletas.', isCorrect: false },
      { text: 'Que los ciclistas deben circular por la pista de la derecha.', isCorrect: false },
      { text: 'Que los ciclistas deben circular en sentido contrario.', isCorrect: false },
      { text: 'Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía.', isCorrect: true }
    ],
    explanation: 'Señal preventiva que advierte sobre la presencia o cruce habitual de ciclistas en la calzada.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 259,
    conasetId: 259,
    category: 'senales',
    isCritical: false,
    text: '¿Cuál de estas señales le advierte la proximidad de un cruce de peatones?',
    illustrationType: 'senales_peatones_comparar_259',
    isMultiple: false,
    options: [
      { text: 'A', isCorrect: true },
      { text: 'B', isCorrect: false },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: false }
    ],
    explanation: 'La figura A corresponde al rombo amarillo oficial de cruce de peatones reglamentario.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 260,
    conasetId: 260,
    category: 'senales',
    isCritical: false,
    text: 'De las siguientes señales de tránsito, ¿cuál o cuáles corresponden a señales amarillas con forma de rombo? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Puente angosto', isCorrect: false },
      { text: 'Angostamiento de la vía', isCorrect: true },
      { text: 'Dirección obligada', isCorrect: false },
      { text: 'Mantenga su derecha', isCorrect: false },
      { text: 'Bifurcación o cruce en T', isCorrect: true },
      { text: 'Cruce ferroviario', isCorrect: false }
    ],
    explanation: 'Angostamiento de la vía y bifurcación en T son señales preventivas estándar amarillas en rombo.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 261,
    conasetId: 261,
    category: 'senales',
    isCritical: false,
    text: 'Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?',
    isMultiple: false,
    options: [
      { text: 'Primero la roja y luego la amarilla nuevamente.', isCorrect: false },
      { text: 'Primero la roja y luego la verde.', isCorrect: true },
      { text: 'Primero la verde y luego la roja.', isCorrect: false },
      { text: 'Primero la verde y luego la amarilla nuevamente.', isCorrect: false }
    ],
    explanation: 'La secuencia estándar de los semáforos en Chile es: Verde -> Amarillo -> Rojo -> Verde.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 262,
    conasetId: 262,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa la demarcación de centro de calzada que muestra la figura?',
    illustrationType: 'demarcacion_lineas_262',
    isMultiple: false,
    options: [
      { text: 'Que no puede ser traspasada por un conductor que viene por la pista A.', isCorrect: false },
      { text: 'Que no puede ser traspasada por un conductor que va por la pista B.', isCorrect: true },
      { text: 'Que en ningún caso pueden efectuarse adelantamientos.', isCorrect: false },
      { text: 'Que sólo un conductor que va por la pista B podría efectuar un adelantamiento.', isCorrect: false }
    ],
    explanation: 'Cuando hay línea mixta (continua y segmentada paralelas), quien tiene la línea continua a su lado inmediato (pista B) tiene prohibido traspasarla.',
    legalReference: 'Manual de Señalización - Demarcaciones Longitudinales'
  },
  {
    id: 263,
    conasetId: 263,
    category: 'normativa',
    isCritical: false,
    text: 'El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?',
    illustrationType: 'zona_achurada_viraje_263',
    isMultiple: false,
    options: [
      { text: 'Sí, la zona achurada sólo separa sentidos de circulación.', isCorrect: false },
      { text: 'Sí, siempre que la zona achurada no esté reforzada con tachas o tachones reflectantes.', isCorrect: false },
      { text: 'No, porque los vehículos no pueden detenerse ni circular por zonas achuradas.', isCorrect: true },
      { text: 'No, porque se trata de una vía de mucho tránsito.', isCorrect: false }
    ],
    explanation: 'Las líneas de canalización achuradas delimitan áreas donde la circulación, detención y estacionamiento de vehículos están tajantemente prohibidos.',
    legalReference: 'Ley N° 18.290, Art. 120'
  },
  {
    id: 264,
    conasetId: 264,
    category: 'normativa',
    isCritical: false,
    text: 'De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho?',
    illustrationType: 'demarcacion_flechas_pistas_264',
    isMultiple: false,
    options: [
      { text: 'Sí', isCorrect: false },
      { text: 'No', isCorrect: true }
    ],
    explanation: 'La demarcación de flechas direccionales en el pavimento obliga a seguir exclusivamente la dirección asignada a dicha pista.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 265,
    conasetId: 265,
    category: 'senales',
    isCritical: false,
    text: '¿Qué le indica la señal de tránsito que se observa en la fotografía?',
    illustrationType: 'senal_ceda_paso_foto_265',
    isMultiple: false,
    options: [
      { text: 'Que usted está obligado a detenerse a la altura de la señal.', isCorrect: false },
      { text: 'Advierte que el cruce al que usted se aproxima es peligroso.', isCorrect: false },
      { text: 'Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía.', isCorrect: true },
      { text: 'Es sólo una recomendación para que usted ponga especial atención al pasar el cruce.', isCorrect: false }
    ],
    explanation: 'La señal CEDA EL PASO (R-2) obliga a reducir la velocidad y ceder la preferencia a todo vehículo que circule por la vía prioritaria.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 266,
    conasetId: 266,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué significa la luz verde del semáforo?',
    isMultiple: false,
    options: [
      { text: 'Siga tan pronto aparezca la luz verde.', isCorrect: false },
      { text: 'Siga, pero sólo si su pista está expedita justo después del cruce.', isCorrect: true },
      { text: 'Siga después de mirar hacia ambos lados.', isCorrect: false },
      { text: 'Siga.', isCorrect: false }
    ],
    explanation: 'La luz verde autoriza el paso sólo si existe espacio libre al otro lado para no quedar detenido bloqueando el tránsito transversal.',
    legalReference: 'Ley N° 18.290, Art. 129'
  },
  {
    id: 267,
    conasetId: 267,
    category: 'normativa',
    isCritical: false,
    text: '¿Cuándo no debería usted detenerse al ponerse el semáforo en amarillo? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Cuando la luz cambia sorpresivamente.', isCorrect: false },
      { text: 'Cuando va demasiado rápido.', isCorrect: false },
      { text: 'Cuando ya ha ingresado al cruce.', isCorrect: true },
      { text: 'Cuando está tan cerca del cruce que su detención puede ocasionar un accidente.', isCorrect: true }
    ],
    explanation: 'Si ya cruzó la línea o frenar en seco provocaría que el vehículo trasero le embista, debe despejar la intersección.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 268,
    conasetId: 268,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted se encuentra en el lugar de un accidente. ¿Qué hace para ayudar de mejor forma a una persona herida que está con una fuerte hemorragia en la parte inferior de una pierna? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'La sienta y le da a beber algo caliente para tranquilizarla.', isCorrect: false },
      { text: 'La mantiene tendida con la pierna herida en alto.', isCorrect: true },
      { text: 'Aplica presión manual firme sobre la herida con un paño limpio y luego la venda.', isCorrect: true },
      { text: 'La sienta y espera a que llegue una ambulancia.', isCorrect: false },
      { text: 'Le conversa tranquilamente ayudándola a mantenerse de pie.', isCorrect: false }
    ],
    explanation: 'Presión directa con apósito limpio y elevación del miembro por sobre el nivel cardíaco son las maniobras clave para cohibir hemorragias.',
    legalReference: 'Manual CONASET - Primeros Auxilios'
  },
  {
    id: 269,
    conasetId: 269,
    category: 'normativa',
    isCritical: false,
    text: 'Excepcionalmente, un joven de 17 años puede obtener licencia de conducir clase B. En tanto no cumpla 18 años deberá conducir siempre acompañado. ¿Qué requisitos debe cumplir su acompañante? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Debe ir siempre sentado en el asiento delantero.', isCorrect: true },
      { text: 'Debe ser mayor de 35 años.', isCorrect: false },
      { text: 'Debe ser egresado de enseñanza media.', isCorrect: false },
      { text: 'Debe haber efectuado un curso especial en una escuela de conductores.', isCorrect: false },
      { text: 'Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad.', isCorrect: true }
    ],
    explanation: 'El acompañante debe ir sentado en el copiloto y contar con licencia Clase B vigente con al menos 5 años de experiencia.',
    legalReference: 'Ley N° 18.290, Art. 13'
  },
  {
    id: 270,
    conasetId: 270,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted se ve involucrado en un accidente. Un pasajero del otro vehículo ha resultado con lesiones leves. ¿Debe usted informar el hecho a la policía?',
    isMultiple: false,
    options: [
      { text: 'Sí, debe dar cuenta del hecho a la policía dentro de los próximos 20 días.', isCorrect: false },
      { text: 'No, el pasajero lesionado debe decidir si se informa a la policía o no.', isCorrect: false },
      { text: 'No, los accidentes en que sólo resultan lesionados leves no se informan a la policía.', isCorrect: false },
      { text: 'Sí, debe dar cuenta del hecho a la autoridad policial más inmediata a la brevedad.', isCorrect: true }
    ],
    explanation: 'Todo accidente con personas lesionadas (sin importar la levedad) obliga por ley a dar cuenta inmediata a Carabineros.',
    legalReference: 'Ley N° 18.290, Art. 168 (Ley Emilia)'
  },
  {
    id: 271,
    conasetId: 271,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted se ha detenido en el lugar de un accidente para prestar ayuda. ¿Qué debería hacer usted ? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'Mantener a las personas lesionadas en movimiento haciéndolas caminar.', isCorrect: false },
      { text: 'Dar a las personas heridas algo caliente para beber.', isCorrect: false },
      { text: 'Mantener abrigadas y cómodas a las personas heridas.', isCorrect: true },
      { text: 'Mantener tranquilas a las personas heridas hablándoles alentadoramente.', isCorrect: true },
      { text: 'Asegurarse de que no queden solos los heridos.', isCorrect: true }
    ],
    explanation: 'Evitar el shock hipotérmico abrigando al herido, brindarle apoyo psicológico y acompañarlo permanentemente hasta la llegada del SAMU.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 272,
    conasetId: 272,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Encender sus luces de advertencia de peligro para alertar a los demás conductores.', isCorrect: true },
      { text: 'Asegurarse de que los motores de los vehículos involucrados estén apagados.', isCorrect: true },
      { text: 'Abandonar el lugar tan pronto llegue otro conductor.', isCorrect: false },
      { text: 'Ayudar a salir a las personas ilesas de los vehículos.', isCorrect: true }
    ],
    explanation: 'Asegurar la zona (luces de peligro), prevenir incendios apagando contactos eléctricos y evacuar a personas ilesas sin mover a heridos graves.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 273,
    conasetId: 273,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Enciende sus luces de advertencia de peligro.', isCorrect: true },
      { text: 'Se asegura de que alguien llame al 133 de Carabineros.', isCorrect: true },
      { text: 'Intenta que los heridos beban algo.', isCorrect: false },
      { text: 'Saca de los autos a los heridos.', isCorrect: false }
    ],
    explanation: 'Protocolo PAS (Proteger, Avisar, Socorrer): señalice el área y contacte inmediatamente a los servicios de auxilio (Carabineros 133, SAMU 131).',
    legalReference: 'Manual CONASET'
  },
  {
    id: 274,
    conasetId: 274,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted llega al lugar de un accidente en el que participó un camión cargado con productos químicos peligrosos. ¿Qué debería hacer usted antes de llamar al 133 de Carabineros?',
    isMultiple: false,
    options: [
      { text: 'Tratar de mover el camión.', isCorrect: false },
      { text: 'Tratar de diluir los productos químicos con agua.', isCorrect: false },
      { text: 'Averiguar de qué clase de producto químico se trata mirando los rótulos y letreros que tiene el camión.', isCorrect: true },
      { text: 'Tratar de evitar que los productos químicos se sigan derramando.', isCorrect: false }
    ],
    explanation: 'Identificar el número de Naciones Unidas (NU) o rombo de riesgo permite a Bomberos y policía enviar el equipo especializado idóneo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 275,
    conasetId: 275,
    category: 'accidentes',
    isCritical: false,
    text: 'Usted llega al lugar de un accidente en el que ha participado un motociclista. El motociclista yace consciente, pero en estado de shock. ¿De qué debería asegurarse usted?',
    isMultiple: false,
    options: [
      { text: 'Que el motociclista se saque el casco.', isCorrect: false },
      { text: 'Que el motociclista no se saque el casco.', isCorrect: true },
      { text: 'Que al motociclista se le ayude a ponerse de pie.', isCorrect: false },
      { text: 'Que al motociclista se le dé algo para beber.', isCorrect: false }
    ],
    explanation: 'Bajo ningún concepto retire el casco; mover el cuello puede causar una sección medular o parálisis irreversible.',
    legalReference: 'Manual CONASET - Primeros Auxilios'
  },
  {
    id: 276,
    conasetId: 276,
    category: 'normativa',
    isCritical: false,
    text: 'Usted va por una autopista. De un camión cargado que va delante suyo cae una caja sin que su conductor se dé cuenta. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Trata de alcanzar al camión y de llamar la atención de su conductor.', isCorrect: false },
      { text: 'Se detiene junto a la caja y enciende sus luces de emergencia hasta que llegue la policía.', isCorrect: false },
      { text: 'Se desplaza hacia la berma y luego intenta recoger la caja.', isCorrect: false },
      { text: 'Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia.', isCorrect: true }
    ],
    explanation: 'En autopistas de alta velocidad es extremadamente riesgoso caminar por la calzada; avance al próximo poste SOS o salida y avise a emergencias.',
    legalReference: 'Manual CONASET - Vías de Alta Velocidad'
  },
  {
    id: 277,
    conasetId: 277,
    category: 'normativa',
    isCritical: false,
    text: '¿Quién o quiénes están cubiertos por el Seguro Obligatorio de Accidentes Personales?',
    isMultiple: false,
    options: [
      { text: 'Sólo el conductor del vehículo asegurado.', isCorrect: false },
      { text: 'Sólo los pasajeros del vehículo asegurado.', isCorrect: false },
      { text: 'Sólo los pasajeros y el conductor del vehículo asegurado.', isCorrect: false },
      { text: 'El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado.', isCorrect: true }
    ],
    explanation: 'El SOAP ampara a la totalidad de las personas lesionadas o fallecidas a raíz del siniestro: conductor, ocupantes y terceros o peatones.',
    legalReference: 'Ley N° 18.490 (SOAP)'
  },
  {
    id: 278,
    conasetId: 278,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué documento no está obligado a portar usted siempre en su vehículo?',
    isMultiple: false,
    options: [
      { text: 'El Permiso de Circulación.', isCorrect: false },
      { text: 'El certificado de un Seguro Obligatorio de Accidentes Personales.', isCorrect: false },
      { text: 'Su licencia de conductor.', isCorrect: false },
      { text: 'El certificado de revisión técnica o de homologación.', isCorrect: false },
      { text: 'El certificado de inscripción en el Registro Nacional de Vehículos Motorizados.', isCorrect: true }
    ],
    explanation: 'El Padrón o certificado de inscripción en el Registro Civil no es obligatorio portarlo permanentemente en el vehículo durante la circulación rutinaria.',
    legalReference: 'Ley N° 18.290, Arts. 5 y 51'
  },
  {
    id: 279,
    conasetId: 279,
    category: 'normativa',
    isCritical: false,
    text: 'En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Conducir un vehículo bajo los efectos del alcohol es una infracción gravísima.', isCorrect: true },
      { text: 'No respetar una señal PARE es una infracción gravísima.', isCorrect: true },
      { text: 'La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.', isCorrect: true },
      { text: 'Solamente son infracciones gravísimas el no respetar la luz roja de un semáforo y el exceso de velocidad.', isCorrect: false },
      { text: 'En ningún caso una licencia de conducir puede ser cancelada por el Juez.', isCorrect: false }
    ],
    explanation: 'Las faltas gravísimas (luz roja, PARE, alcohol, no portar SRI, etc.) conllevan obligatoriamente multa en UTM y suspensión de licencia de 5 a 45 días.',
    legalReference: 'Ley N° 18.290, Arts. 197 y 207'
  },
  {
    id: 280,
    conasetId: 280,
    category: 'normativa',
    isCritical: false,
    text: 'En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Las únicas infracciones gravísimas son el conducir bajo los efectos del alcohol y el exceso de velocidad.', isCorrect: false },
      { text: 'Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.', isCorrect: true },
      { text: 'Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.', isCorrect: true },
      { text: 'No respetar el derecho preferente de paso de un peatón es una infracción leve.', isCorrect: false },
      { text: 'No respetar una señal Ceda el Paso es una infracción gravísima si a consecuencia de la infracción se produce un accidente.', isCorrect: true }
    ],
    explanation: 'Reiteración de 2 faltas graves en 12 meses suspende licencia (de 5 a 30 días). Infringir un Ceda el Paso provocando accidente eleva la falta a gravísima.',
    legalReference: 'Ley N° 18.290, Arts. 197, 198 y 207'
  }
];

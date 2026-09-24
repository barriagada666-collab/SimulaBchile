import { QuestionDefinition } from './types';

export const QUESTIONS_PART_3: QuestionDefinition[] = [
  {
    id: 141,
    conasetId: 141,
    category: 'normativa',
    isCritical: false,
    text: 'Usted va por una calle de doble sentido de tránsito. Para virar a la izquierda, ¿dónde debería ubicarse?',
    isMultiple: false,
    options: [
      { text: 'Lo más a la derecha posible.', isCorrect: false },
      { text: 'Justo a la izquierda de la línea de centro de calzada.', isCorrect: false },
      { text: 'Justo a la derecha de la línea de centro de calzada.', isCorrect: true }
    ],
    explanation: 'En calles bidireccionales, debe arrimarse inmediatamente a la derecha del eje de la calzada sin invadir la pista del sentido contrario.',
    legalReference: 'Ley N° 18.290, Art. 134'
  },
  {
    id: 142,
    conasetId: 142,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va detrás de un camión articulado que va a doblar a la derecha hacia una vía angosta. ¿Qué debe hacer usted?',
    illustrationType: 'camion_articulado_curva_142',
    isMultiple: false,
    options: [
      { text: 'Desplazarse rápidamente hacia la pista adyacente y sobrepasarlo.', isCorrect: false },
      { text: 'Tocar la bocina para advertir su presencia.', isCorrect: false },
      { text: 'Sobrepasarlo por la derecha mientras él se desplace hacia la izquierda.', isCorrect: false },
      { text: 'Mantenerse detrás de él hasta que finalice su maniobra.', isCorrect: true }
    ],
    explanation: 'Los vehículos de gran longitud deben abrirse a la izquierda para poder girar sus remolques; nunca intente colarse por su derecha.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 143,
    conasetId: 143,
    category: 'normativa',
    isCritical: false,
    text: '¿Cómo señaliza usted con el brazo cuando va a virar hacia la derecha?',
    illustrationType: 'brazo_viraje_derecha_143',
    isMultiple: false,
    options: [
      { text: 'A: Brazo extendido hacia abajo.', isCorrect: false },
      { text: 'B: Brazo extendido horizontalmente con el antebrazo doblado hacia arriba en ángulo recto.', isCorrect: true },
      { text: 'C: Brazo extendido horizontalmente hacia afuera.', isCorrect: false }
    ],
    explanation: 'Para virar a la derecha, el brazo izquierdo se coloca en ángulo de 90° hacia arriba.',
    legalReference: 'Ley N° 18.290, Art. 138'
  },
  {
    id: 144,
    conasetId: 144,
    category: 'normativa',
    isCritical: false,
    text: '¿Cuál señalización con el brazo del conductor de un vehículo que va adelante le indica que va a virar a la izquierda?',
    illustrationType: 'brazo_viraje_izquierda_144',
    isMultiple: false,
    options: [
      { text: 'A: Brazo hacia abajo.', isCorrect: false },
      { text: 'B: Brazo en ángulo hacia arriba.', isCorrect: false },
      { text: 'C: Brazo izquierdo extendido horizontalmente.', isCorrect: true }
    ],
    explanation: 'El brazo extendido horizontalmente indica intención de virar hacia la izquierda.',
    legalReference: 'Ley N° 18.290, Art. 138'
  },
  {
    id: 145,
    conasetId: 145,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted ha alcanzado a un auto al que desea adelantar. ¿Cuáles son las 3 cosas más difíciles de juzgar? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'La velocidad del auto al que desea adelantar.', isCorrect: false },
      { text: 'Si es suficientemente ancho el espacio a la izquierda del vehículo que va adelante.', isCorrect: false },
      { text: 'La distancia al vehículo que viene en sentido contrario.', isCorrect: true },
      { text: 'La longitud de la distancia de adelantamiento.', isCorrect: true },
      { text: 'El punto de encuentro con el vehículo que viene en contra.', isCorrect: true }
    ],
    explanation: 'Apreciar la distancia real, el punto de colisión de frente y el espacio longitudinal de retorno son los mayores desafíos perceptivos al adelantar.',
    legalReference: 'Manual CONASET - Maniobras de Adelantamiento'
  },
  {
    id: 146,
    conasetId: 146,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo? Marque dos respuestas',
    illustrationType: 'carretera_adelantamiento_146',
    isMultiple: true,
    options: [
      { text: 'Conduce lo más a la derecha posible.', isCorrect: true },
      { text: 'Se desplaza hacia la berma y circula por ella.', isCorrect: false },
      { text: 'Enciende sus luces de advertencia de peligro.', isCorrect: false },
      { text: 'No acelera.', isCorrect: true }
    ],
    explanation: 'Al ser adelantado, la ley exige ceñirse a la derecha y mantener la velocidad sin acelerar para facilitar el regreso seguro del otro vehículo.',
    legalReference: 'Ley N° 18.290, Art. 123'
  },
  {
    id: 147,
    conasetId: 147,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va por una carretera a 100 km/h. ¿Qué hace usted si a pesar de todo un vehículo que viene atrás desea adelantarlo? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Acelera para impedir el adelantamiento.', isCorrect: false },
      { text: 'Se mantiene lo más a la derecha posible.', isCorrect: true },
      { text: 'Mantiene o disminuye su velocidad.', isCorrect: true },
      { text: 'Enciende su intermitente izquierdo en señal de advertencia de que viene un vehículo en contra.', isCorrect: false },
      { text: 'Se acerca lo más posible hacia la línea de centro de calzada, para impedir el adelantamiento.', isCorrect: false }
    ],
    explanation: 'Jamás compita ni obstaculice a quien le adelanta; manténgase a la derecha y conserve o reduzca la velocidad.',
    legalReference: 'Ley N° 18.290, Art. 123'
  },
  {
    id: 148,
    conasetId: 148,
    category: 'normativa',
    isCritical: false,
    text: 'Usted desea adelantar. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'carretera_adelantar_camion_148',
    isMultiple: false,
    options: [
      { text: 'El camión tiene la obligación de correrse hacia la berma para dejarle a usted más espacio.', isCorrect: false },
      { text: 'El auto que viene en sentido contrario tiene la obligación de correrse a la berma para aumentar la seguridad.', isCorrect: false },
      { text: 'El camión está obligado a reducir la velocidad.', isCorrect: false },
      { text: 'Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar.', isCorrect: true }
    ],
    explanation: 'La responsabilidad de verificar que la pista contraria esté completamente libre y despejada recae de manera exclusiva en quien inicia el adelantamiento.',
    legalReference: 'Ley N° 18.290, Art. 122'
  },
  {
    id: 149,
    conasetId: 149,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intención de adelantar. ¿Qué hace usted?',
    illustrationType: 'espejo_retrovisor_adelantar_149',
    isMultiple: false,
    options: [
      { text: 'Frena ligeramente y vuelve a la pista derecha.', isCorrect: true },
      { text: 'Acelera y adelanta, porque el auto que usted adelanta tiene la obligación de reducir la velocidad.', isCorrect: false },
      { text: 'Acelera y adelanta tan rápido como pueda, para no obstaculizar al que viene detrás suyo.', isCorrect: false },
      { text: 'Acelera y adelanta, ya que el ancho de la calzada es suficiente para 3 vehículos si el que viene en contra se corre bien a su derecha.', isCorrect: false }
    ],
    explanation: 'Ante el conflicto y riesgo inminente en la pista izquierda, aborte la maniobra frenando suavemente y reincorpórese a su pista derecha.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 150,
    conasetId: 150,
    category: 'seguridad',
    isCritical: false,
    text: 'Antes de adelantar a un vehículo de gran tamaño usted debería mantenerse suficientemente atrás de él. ¿Por qué?',
    isMultiple: false,
    options: [
      { text: 'Para tener una mejor visual hacia adelante sobre la vía.', isCorrect: true },
      { text: 'Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.', isCorrect: false },
      { text: 'Para tener espacio suficiente en caso que el vehículo se detenga y retroceda.', isCorrect: false },
      { text: 'Para poder ver mejor las señales que le pueda hacer su conductor.', isCorrect: false }
    ],
    explanation: 'Una distancia prudente hacia atrás permite divisar la calzada a lo lejos sorteando la voluminosa carrocería del camión.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 151,
    conasetId: 151,
    category: 'seguridad',
    isCritical: false,
    text: '¿Por qué adelantar a un camión es más arriesgado que adelantar a un auto?',
    isMultiple: false,
    options: [
      { text: 'Porque los camiones pueden detenerse sorpresivamente.', isCorrect: false },
      { text: 'Porque los camiones son más largos que los autos.', isCorrect: true },
      { text: 'Porque los frenos de los camiones no son tan buenos.', isCorrect: false },
      { text: 'Porque los camiones suben las pendientes más lentamente.', isCorrect: false }
    ],
    explanation: 'Su mayor longitud exige un tiempo y una distancia en la pista contraria significativamente mayores para completar el adelantamiento.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 152,
    conasetId: 152,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Tocar la bocina para advertirle al conductor que usted está ahí.', isCorrect: false },
      { text: 'Mantenerse bien atrás del vehículo para tener una mayor visual.', isCorrect: true },
      { text: 'Conducir cerca del vehículo con el propósito de adelantarlo rápidamente.', isCorrect: false },
      { text: 'Encender y apagar sus luces y esperar hasta que el conductor le avise que es seguro adelantar.', isCorrect: false }
    ],
    explanation: 'Mantener distancia por detrás amplía el ángulo de visión de la pista contraria y evita los ángulos ciegos del conductor del camión.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 153,
    conasetId: 153,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va conduciendo de día por una zona rural. La calzada tiene pavimento en buen estado y tránsito bidireccional. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...',
    isMultiple: false,
    options: [
      { text: '50 km/hr', isCorrect: false },
      { text: '90 km/hr', isCorrect: false },
      { text: '120 km/hr', isCorrect: false },
      { text: '100 km/hr', isCorrect: true }
    ],
    explanation: 'En caminos rurales con una pista por sentido de tránsito, el límite legal máximo para vehículos livianos es de 100 km/h.',
    legalReference: 'Ley N° 18.290, Art. 145'
  },
  {
    id: 154,
    conasetId: 154,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va conduciendo en la ciudad por una calle con 2 pistas en sentido único de tránsito. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...',
    isMultiple: false,
    options: [
      { text: '30 km/hr', isCorrect: false },
      { text: '60 km/hr', isCorrect: true },
      { text: '50 km/hr', isCorrect: false },
      { text: '80 km/hr', isCorrect: false }
    ],
    explanation: 'En el cuestionario oficial histórico de CONASET figura 60 km/h como respuesta validada (nota: la Ley de Convivencia Vial fijó 50 km/h como norma urbana general).',
    legalReference: 'Cuestionario Oficial CONASET Clase B'
  },
  {
    id: 155,
    conasetId: 155,
    category: 'seguridad',
    isCritical: false,
    text: 'Como norma general, antes de tomar una curva cerrada, usted debe ...',
    isMultiple: false,
    options: [
      { text: 'acelerar para salir cuanto antes de ella.', isCorrect: false },
      { text: 'acelerar para luego reducir la velocidad mientras vaya saliendo de ella.', isCorrect: false },
      { text: 'disminuir la velocidad, pero sólo si la calzada está mojada.', isCorrect: false },
      { text: 'disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo.', isCorrect: true }
    ],
    explanation: 'Frene siempre antes de entrar a la curva y acelere suavemente en su desarrollo para estabilizar el centro de gravedad del vehículo.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 156,
    conasetId: 156,
    category: 'normativa',
    isCritical: false,
    text: '¿En cuál o cuáles situaciones el vehículo está mal estacionado? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'estacionamiento_correcto_156',
    isMultiple: true,
    options: [
      { text: 'A', isCorrect: true },
      { text: 'B', isCorrect: true },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: false }
    ],
    explanation: 'En A y B los vehículos se encuentran vulnerando la prohibición sobre aceras, pasos peatonales o esquinas.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 157,
    conasetId: 157,
    category: 'normativa',
    isCritical: false,
    text: '¿En cuál o cuáles de las siguientes situaciones el conductor se ha detenido correctamente para recoger un pasajero? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'detencion_pasajero_157',
    isMultiple: true,
    options: [
      { text: 'A', isCorrect: false },
      { text: 'B', isCorrect: true },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: true }
    ],
    explanation: 'La detención para subida y bajada de pasajeros es correcta al costado derecho de la calzada sin obstaculizar cruces ni paradas oficiales.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 158,
    conasetId: 158,
    category: 'normativa',
    isCritical: false,
    text: 'Por una emergencia usted requiere estacionar de noche en una carretera sin alumbrado y con buenas bermas. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Usted debe estacionar al costado izquierdo enfrentando la circulación.', isCorrect: false },
      { text: 'Mientras el vehículo esté estacionado usted debe mantener encendidas sus luces de estacionamiento.', isCorrect: true },
      { text: 'Usted debe estacionar al costado derecho y de modo que todo el vehículo quede sobre la berma.', isCorrect: true },
      { text: 'No está permitido estacionar en la berma.', isCorrect: false }
    ],
    explanation: 'En carreteras no iluminadas debe despejarse completamente la calzada posicionándose en la berma derecha con luces de posición/estacionamiento encendidas.',
    legalReference: 'Ley N° 18.290, Art. 155'
  },
  {
    id: 159,
    conasetId: 159,
    category: 'normativa',
    isCritical: false,
    text: '¿En cuál o cuáles de estos lugares podría el estacionamiento de su vehículo causar daño u obstrucción a otros usuarios de la vía? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Frente a una entrada de autos de una propiedad.', isCorrect: true },
      { text: 'En o al llegar a una parada de locomoción colectiva.', isCorrect: true },
      { text: 'En un paso de peatones.', isCorrect: true },
      { text: 'En un espacio delimitado para estacionar.', isCorrect: false }
    ],
    explanation: 'Bloquear accesos residenciales, paraderos de microbús o pasos de cebra vulnera la ley y obstaculiza gravemente el tránsito ajeno.',
    legalReference: 'Ley N° 18.290, Art. 160'
  },
  {
    id: 160,
    conasetId: 160,
    category: 'normativa',
    isCritical: false,
    text: '¿En qué circunstancia usted se detendría justo sobre un cruce cebra existente a mitad de cuadra?',
    isMultiple: false,
    options: [
      { text: 'En ningún momento.', isCorrect: false },
      { text: 'Cuando no hay peatones esperando para cruzar.', isCorrect: false },
      { text: 'Durante la noche.', isCorrect: false },
      { text: 'Cuando ello sea necesario para evitar un accidente.', isCorrect: true }
    ],
    explanation: 'Salvo extrema emergencia para evitar una colisión o atropello inminente, jamás se debe inmovilizar el coche sobre la demarcación cebra.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 161,
    conasetId: 161,
    category: 'normativa',
    isCritical: false,
    text: 'Como regla general, ¿en cuál o cuáles de los siguientes lugares usted no debe estacionar? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'En una parada de buses.', isCorrect: true },
      { text: 'Al costado derecho de una vía urbana.', isCorrect: false },
      { text: 'Al lado de un bandejón central.', isCorrect: true },
      { text: 'Frente a una entrada de autos de una casa particular.', isCorrect: true },
      { text: 'En una vía inclinada levemente.', isCorrect: false },
      { text: 'En una curva del camino.', isCorrect: true }
    ],
    explanation: 'La ley prohíbe estacionar en paraderos de transporte público, bandejones centrales, salidas de garaje y curvas con escasa visibilidad.',
    legalReference: 'Ley N° 18.290, Art. 160'
  },
  {
    id: 162,
    conasetId: 162,
    category: 'normativa',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) tratándose de una vía urbana sin señales de tránsito que prohiban o autoricen el estacionamiento o la detención? Marque la o las respuesta(s) correcta(s)',
    isMultiple: false,
    options: [
      { text: 'Usted puede detenerse en doble fila sólo por el tiempo necesario para que bajen pasajeros de su auto.', isCorrect: false },
      { text: 'Usted puede detenerse al costado de un bandejón central para permitir la subida de pasajeros a su vehículo.', isCorrect: false },
      { text: 'Al estacionar, usted debe hacerlo al costado derecho y preocupándose de dejar una distancia de a lo menos 10 m entre su vehículo y la esquina.', isCorrect: true },
      { text: 'Usted puede estacionar al costado derecho y a 5 m de la esquina si el cruce se encuentra semaforizado.', isCorrect: false }
    ],
    explanation: 'Por norma general se estaciona al costado derecho en el sentido del tránsito y a no menos de 10 metros de la esquina.',
    legalReference: 'Ley N° 18.290, Art. 158'
  },
  {
    id: 163,
    conasetId: 163,
    category: 'normativa',
    isCritical: false,
    text: 'Usted va a dejar su vehículo estacionado. ¿En qué caso puede dejarlo con el motor funcionando?',
    isMultiple: false,
    options: [
      { text: 'En ningún caso.', isCorrect: true },
      { text: 'Si va a estar estacionado menos de 5 minutos.', isCorrect: false },
      { text: 'Si la batería está descargada.', isCorrect: false },
      { text: 'Si en el vehículo va a permanecer una persona.', isCorrect: false }
    ],
    explanation: 'Al dejar estacionado el vehículo es obligatorio apagar el motor, enganchar la marcha correspondiente y activar el freno de mano.',
    legalReference: 'Ley N° 18.290, Art. 156'
  },
  {
    id: 164,
    conasetId: 164,
    category: 'normativa',
    isCritical: false,
    text: 'En una vía urbana de sentido único de tránsito, sin señalización que permita o prohíba el estacionamiento, ¿a qué lado puede estacionar?',
    isMultiple: false,
    options: [
      { text: 'A ambos lados.', isCorrect: false },
      { text: 'En ninguno, porque no hay señales que lo permitan.', isCorrect: false },
      { text: 'Sólo al lado derecho según el sentido del tránsito.', isCorrect: true },
      { text: 'Sólo al lado izquierdo según el sentido del tránsito.', isCorrect: false }
    ],
    explanation: 'En Chile la regla general es estacionar al costado derecho. Solo se puede estacionar a la izquierda si la municipalidad lo autoriza con señal expresa.',
    legalReference: 'Ley N° 18.290, Art. 153'
  },
  {
    id: 165,
    conasetId: 165,
    category: 'normativa',
    isCritical: false,
    text: '¿En cuáles 3 de las siguientes ocasiones debe usted detener siempre su vehículo? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'Al verse involucrado en un accidente.', isCorrect: true },
      { text: 'Al enfrentar una señal CEDA EL PASO.', isCorrect: false },
      { text: 'Al enfrentar una luz roja de un semáforo.', isCorrect: true },
      { text: 'Ante un cruce cebra en el que no hay peatones cruzando ni esperando para cruzar.', isCorrect: false },
      { text: 'Cuando un Carabinero se lo solicita.', isCorrect: true }
    ],
    explanation: 'Luz roja, requerimiento policial y participación en un siniestro vial obligan forzosamente a la detención total e indeclinable del móvil.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 166,
    conasetId: 166,
    category: 'normativa',
    isCritical: false,
    text: '¿A cuántos metros de una esquina es lo más cerca que usted puede estacionar?',
    illustrationType: 'distancia_esquina_166',
    isMultiple: false,
    options: [
      { text: '5 metros', isCorrect: false },
      { text: '10 metros', isCorrect: true },
      { text: '12 metros', isCorrect: false },
      { text: '15 metros', isCorrect: false }
    ],
    explanation: 'La distancia mínima legal para estacionar respecto al vértice de una esquina o cruce es de 10 metros.',
    legalReference: 'Ley N° 18.290, Art. 160 N° 2'
  },
  {
    id: 167,
    conasetId: 167,
    category: 'normativa',
    isCritical: false,
    text: 'Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'En un paso de peatones.', isCorrect: true },
      { text: 'En un puente.', isCorrect: true },
      { text: 'A menos de 10 metros de una esquina.', isCorrect: true },
      { text: 'Al costado derecho de una vía urbana.', isCorrect: false },
      { text: 'En o al llegar a una parada de locomoción colectiva.', isCorrect: true }
    ],
    explanation: 'Puentes, pasos peatonales, paradas de buses y cercanías de 10 m de esquinas son zonas expresamente vedadas para estacionar.',
    legalReference: 'Ley N° 18.290, Art. 160'
  },
  {
    id: 168,
    conasetId: 168,
    category: 'clima',
    isCritical: false,
    text: 'De noche, en una zona rural, por emergencia usted estaciona su vehículo al costado de la vía. ¿En qué circunstancia debe usted encender sus luces de estacionamiento?',
    isMultiple: false,
    options: [
      { text: 'Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada.', isCorrect: false },
      { text: 'Cuando el centro de la calzada está demarcado con línea blanca continua.', isCorrect: false },
      { text: 'Cuando el camino es de tierra.', isCorrect: false },
      { text: 'Siempre.', isCorrect: true }
    ],
    explanation: 'De noche en vías rurales no iluminadas, cualquier detención o estacionamiento en berma exige mantener permanentemente encendidas las luces de posición.',
    legalReference: 'Ley N° 18.290, Art. 71'
  },
  {
    id: 169,
    conasetId: 169,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué hace usted ante esta situación?',
    illustrationType: 'peaton_cruce_cebra_169',
    isMultiple: false,
    options: [
      { text: 'Continúa a la misma velocidad.', isCorrect: false },
      { text: 'Toca la bocina.', isCorrect: false },
      { text: 'Pasa el paso de peatones lo más rápido posible.', isCorrect: false },
      { text: 'Se detiene.', isCorrect: true }
    ],
    explanation: 'Ante un peatón cruzando en el paso de cebra es deber estricto detener por completo el vehículo y otorgar el paso.',
    legalReference: 'Ley N° 18.290, Art. 135'
  },
  {
    id: 170,
    conasetId: 170,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted conduce a 90 km/h cuando la vía es obstruida sorpresivamente por un camión que está virando a la izquierda. ¿Qué es lo primero que hace usted?',
    illustrationType: 'camion_virando_obstruccion_170',
    isMultiple: false,
    options: [
      { text: 'Hace señales de luces y toca la bocina.', isCorrect: false },
      { text: 'Frena firmemente.', isCorrect: true },
      { text: 'Se desplaza a la pista de la izquierda.', isCorrect: false },
      { text: 'Disminuye levemente la velocidad.', isCorrect: false }
    ],
    explanation: 'Ante un obstáculo perpendicular imprevisto en la calzada, la acción inmediata prioritaria es frenar con firmeza y decisión para reducir la energía del posible impacto.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 171,
    conasetId: 171,
    category: 'normativa',
    isCritical: false,
    text: '¿Adquiere usted un derecho sobre otros usuarios de la vía cuando utiliza sus luces indicadoras de viraje?',
    isMultiple: false,
    options: [
      { text: 'Sí, el usar las luces indicadoras de viraje le da a usted preferencia sobre los conductores que van en igual dirección a la suya.', isCorrect: false },
      { text: 'Sí, y además de darle a usted preferencia le exime de cualquier responsabilidad.', isCorrect: false },
      { text: 'No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla.', isCorrect: true },
      { text: 'Sí, pero sólo en el caso que usted esté tratando de abandonar un estacionamiento al borde de la calzada.', isCorrect: false }
    ],
    explanation: 'El señalizador avisa una intención, pero no concede preferencia ni derecho de paso alguno sobre los vehículos que ya circulan por la pista.',
    legalReference: 'Ley N° 18.290, Art. 136'
  },
  {
    id: 172,
    conasetId: 172,
    category: 'normativa',
    isCritical: false,
    text: 'Usted se aproxima a un cruce cebra. En la vereda hay peatones esperando cruzar. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Disminuye la velocidad y se prepara para detenerse.', isCorrect: true },
      { text: 'Da la pasada a los peatones sólo si éstos son ancianos o niños.', isCorrect: false },
      { text: 'Usa sus luces para indicarles que pueden pasar.', isCorrect: false },
      { text: 'Toca la bocina para indicarles que pueden cruzar.', isCorrect: false }
    ],
    explanation: 'Todo peatón en las proximidades de un cruce cebra goza de derecho preferente; el conductor debe aminorar la marcha y estar listo a detenerse.',
    legalReference: 'Ley N° 18.290, Art. 135'
  },
  {
    id: 173,
    conasetId: 173,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería ...',
    isMultiple: false,
    options: [
      { text: 'circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.', isCorrect: false },
      { text: 'correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.', isCorrect: true },
      { text: 'hacer indicaciones con la mano a los otros conductores cuando usted crea que podrán adelantarlo rápidamente.', isCorrect: false },
      { text: 'señalizar con su intermitente derecho cuando adelantar no sea peligroso para los otros.', isCorrect: false }
    ],
    explanation: 'Facilitar el adelantamiento de vehículos más rápidos arrimándose a la derecha cuando sea propicio evita tapones y maniobras desesperadas.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 174,
    conasetId: 174,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted está circulando por una vía rápida en buenas condiciones. ¿Cómo puede estar seguro de que lo hace a una distancia adecuada del vehículo que va adelante?',
    isMultiple: false,
    options: [
      { text: 'La distancia entre usted y el vehículo que va adelante debería ser dos veces el largo de su vehículo.', isCorrect: false },
      { text: 'La distancia entre usted y el vehículo que va adelante debería ser igual a su distancia de frenado.', isCorrect: false },
      { text: 'La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en tres segundos.', isCorrect: true },
      { text: 'La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en un segundo.', isCorrect: false }
    ],
    explanation: 'La regla de los tres segundos es la métrica universal recomendada por CONASET para vías rápidas en condiciones normales.',
    legalReference: 'Manual CONASET - Distancia de Seguridad'
  },
  {
    id: 175,
    conasetId: 175,
    category: 'seguridad',
    isCritical: false,
    text: 'El conductor detrás suyo le sigue muy de cerca. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Señaliza a la derecha y le indica con la mano para que lo adelante.', isCorrect: false },
      { text: 'Disminuye la velocidad y le permite que lo adelante.', isCorrect: false },
      { text: 'No hace nada y se mantiene dentro del límite de velocidad.', isCorrect: true },
      { text: 'Se acerca hacia el centro de la calzada.', isCorrect: false }
    ],
    explanation: 'Conserve la calma, no haga frenazos intempestivos ni señales manuales equívocas y mantenga una velocidad uniforme dentro de los límites.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 176,
    conasetId: 176,
    category: 'seguridad',
    isCritical: false,
    text: 'Un bus está detenido en una parada delante suyo. El intermitente izquierdo del bus está parpadeando. ¿Qué hace usted?',
    illustrationType: 'bus_intermitente_salida_176',
    isMultiple: false,
    options: [
      { text: 'Hace parpadear sus luces delanteras y disminuye la velocidad.', isCorrect: false },
      { text: 'Toca la bocina y continúa.', isCorrect: false },
      { text: 'Disminuye la velocidad y luego toca la bocina.', isCorrect: false },
      { text: 'Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro.', isCorrect: true }
    ],
    explanation: 'Se debe facilitar la incorporación a la corriente vehicular a los autobuses de transporte público que señalizan su salida de paradas.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 177,
    conasetId: 177,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va conduciendo en una carretera a la velocidad máxima permitida. El conductor que viene detrás suyo está tratando de adelantarlo. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Se acerca más al vehículo de adelante para que el conductor que viene atrás no tenga espacio suficiente para el adelantamiento.', isCorrect: false },
      { text: 'Le hace señas al conductor de atrás para que lo adelante, cuando sea seguro hacerlo.', isCorrect: false },
      { text: 'Acelera para alejarse del conductor de atrás.', isCorrect: false },
      { text: 'Mantiene o disminuye la velocidad y permite el adelantamiento.', isCorrect: true }
    ],
    explanation: 'Aunque usted vaya a la velocidad máxima, no debe impedir ni bloquear el paso de otro conductor; facilite la maniobra sin acelerar.',
    legalReference: 'Ley N° 18.290, Art. 123'
  },
  {
    id: 178,
    conasetId: 178,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted se está aproximando a un cruce cuando sorpresivamente un vehículo ingresa a la vía por la que usted va y se ubica delante suyo. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Lo esquiva y toca la bocina.', isCorrect: false },
      { text: 'Disminuye la velocidad y está atento para detenerse.', isCorrect: true },
      { text: 'Enciende y apaga sus luces delanteras y continúa muy cerca detrás de él.', isCorrect: false },
      { text: 'Acelera pasándolo inmediatamente.', isCorrect: false }
    ],
    explanation: 'Conducción defensiva: frene oportunamente y aumente la distancia de seguridad para compensar el error del otro conductor.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 179,
    conasetId: 179,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va conduciendo a la velocidad máxima permitida. Un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Acelera para mantener un espacio adecuado detrás suyo.', isCorrect: false },
      { text: 'Presiona su freno para mostrarle sus luces de freno.', isCorrect: false },
      { text: 'Le permite el adelantamiento.', isCorrect: true },
      { text: 'Aumenta su velocidad y le impide que lo adelante.', isCorrect: false }
    ],
    explanation: 'Nunca tome la justicia por su mano ni bloquee el paso a vehículos que se aproximan rápido; permítale sobrepasar con seguridad.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 180,
    conasetId: 180,
    category: 'velocidad',
    isCritical: true,
    text: 'Un espacio entre usted y el vehículo que marcha delante igual a lo que usted recorre en tres segundos es suficiente cuando ...',
    isMultiple: false,
    options: [
      { text: 'las condiciones climáticas son buenas.', isCorrect: true },
      { text: 'está lloviendo fuertemente.', isCorrect: false },
      { text: 'recién ha cesado de llover.', isCorrect: false },
      { text: 'hay neblina.', isCorrect: false }
    ],
    explanation: '3 segundos bastan únicamente en asfalto seco y buena visibilidad. Con lluvia, nieve o neblina este espacio debe duplicarse (a 4 o 6 segundos).',
    legalReference: 'Manual CONASET'
  },
  {
    id: 181,
    conasetId: 181,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está conduciendo al límite de la velocidad máxima permitida y un conductor intenta adelantarlo. ¿Trataría usted de evitar que lo adelante?',
    isMultiple: false,
    options: [
      { text: 'No, a menos que sea seguro hacerlo.', isCorrect: false },
      { text: 'Sí, porque el otro conductor está actuando en forma peligrosa.', isCorrect: false },
      { text: 'Sí, porque el otro conductor está infringiendo la ley.', isCorrect: false },
      { text: 'No, en ningún momento.', isCorrect: true }
    ],
    explanation: 'Ningún conductor particular tiene potestad de bloquear a otro vehículo. Obstaculizar un adelantamiento es falta grave y causa choques frontales.',
    legalReference: 'Ley N° 18.290, Art. 123'
  },
  {
    id: 182,
    conasetId: 182,
    category: 'accidentes',
    isCritical: false,
    text: 'De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?',
    isMultiple: false,
    options: [
      { text: 'El conducir demasiado cerca del vehículo que va adelante.', isCorrect: true },
      { text: 'El cambio repentino de las luces de los semáforos.', isCorrect: false },
      { text: 'La existencia de peatones que cruzan en áreas muy concurridas.', isCorrect: false },
      { text: 'El detenerse en todos los cruces.', isCorrect: false }
    ],
    explanation: 'El no guardar la distancia reglamentaria de seguridad con el móvil precedente es la causa casi unánime de choques por alcance.',
    legalReference: 'Ley N° 18.290, Art. 126'
  },
  {
    id: 183,
    conasetId: 183,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está esperando poder incorporarse a una vía principal desde una calle lateral. ¿Por qué razón debería usted poner especial atención a las motocicletas?',
    isMultiple: false,
    options: [
      { text: 'Porque generalmente las motocicletas circulan más rápido que los autos.', isCorrect: false },
      { text: 'Porque las patrullas de Carabineros suelen andar en motocicletas.', isCorrect: false },
      { text: 'Porque las motocicletas son pequeñas y difíciles de ver.', isCorrect: true },
      { text: 'Porque las motocicletas tienen el derecho preferente de paso.', isCorrect: false }
    ],
    explanation: 'Su angosta silueta frontal las hace pasar inadvertidas con facilidad en los puntos ciegos o detrás de los postes de la carrocería.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 184,
    conasetId: 184,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál de los siguientes grupos de conductores tiene mayores probabilidades de verse involucrado en un accidente de tránsito?',
    isMultiple: false,
    options: [
      { text: 'Los que tienen menos de 25 años.', isCorrect: true },
      { text: 'Los que tienen entre 36 y 45 años.', isCorrect: false },
      { text: 'Los que tienen entre 46 y 55 años.', isCorrect: false },
      { text: 'Los que tienen más de 55 años.', isCorrect: false }
    ],
    explanation: 'Los conductores jóvenes menores de 25 años presentan las tasas más altas de siniestralidad fatal debido a inexperiencia y propensión al riesgo.',
    legalReference: 'Estadísticas CONASET Chile'
  },
  {
    id: 185,
    conasetId: 185,
    category: 'seguridad',
    isCritical: false,
    text: 'En una zona rural, usted va conduciendo por un camino muy angosto. ¿Dónde le resultaría más difícil ver personas a caballo que avanzan delante suyo?',
    isMultiple: false,
    options: [
      { text: 'Al ir usted bajando un cerro.', isCorrect: false },
      { text: 'Al ir ellas subiendo un cerro.', isCorrect: false },
      { text: 'Al ir usted en una curva a la izquierda.', isCorrect: false },
      { text: 'Al ir usted en una curva a la derecha.', isCorrect: true }
    ],
    explanation: 'En las curvas cerradas hacia la derecha el borde del camino y la vegetación o talud bloquean la línea visual hacia adelante.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 186,
    conasetId: 186,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va detrás de un camión articulado que se aproxima a un cruce. Su conductor señaliza hacia la derecha pero el vehículo se desplaza hacia la izquierda. ¿Qué debe hacer usted?',
    illustrationType: 'camion_articulado_maniobra_186',
    isMultiple: false,
    options: [
      { text: 'Advertirle al conductor acerca de su señal equivocada.', isCorrect: false },
      { text: 'Esperar detrás del camión.', isCorrect: true },
      { text: 'Denunciar a Carabineros al conductor.', isCorrect: false },
      { text: 'Pasar al camión por la derecha.', isCorrect: false }
    ],
    explanation: 'El camión necesita abrirse hacia la izquierda para que el acoplado no suba a la acera derecha; manténgase detrás sin adelantar.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 187,
    conasetId: 187,
    category: 'normativa',
    isCritical: false,
    text: 'En una carretera de doble calzada con 2 pistas por sentido de tránsito, usted desea pasar al vehículo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atrás se está cambiando de pista para sobrepasarlo a usted. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Señalizar y luego cambiar de pista para sobrepasar.', isCorrect: false },
      { text: 'Señalizar para indicarle al conductor que viene atrás que usted también desea sobrepasar.', isCorrect: false },
      { text: 'Presionar levemente el pedal de frenos para mostrar sus luces de freno.', isCorrect: false },
      { text: 'No señalizar hasta que el auto lo haya pasado.', isCorrect: true }
    ],
    explanation: 'El conductor que ya inició el cambio de pista tiene preferencia; espere pacientemente a que complete su sobrepaso antes de salir usted.',
    legalReference: 'Ley N° 18.290, Art. 122'
  },
  {
    id: 188,
    conasetId: 188,
    category: 'seguridad',
    isCritical: false,
    text: 'Un vehículo emerge sorpresivamente desde una vía lateral situándose delante suyo y obligándolo a frenar fuertemente. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Enciende y apaga sus luces para manifestarle su enojo.', isCorrect: false },
      { text: 'Ignora el error y permanece calmado.', isCorrect: true },
      { text: 'Toca la bocina para demostrar su enojo.', isCorrect: false },
      { text: 'Lo adelanta dejándolo atrás lo antes posible.', isCorrect: false }
    ],
    explanation: 'Mantener el autocontrol y tolerar las faltas ajenas evita conflictos y agresiones en la vía pública.',
    legalReference: 'Manual CONASET - Inteligencia Emocional y Conducción'
  },
  {
    id: 189,
    conasetId: 189,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Les toca la bocina para apurarlos.', isCorrect: false },
      { text: 'Tiene paciencia y espera.', isCorrect: true },
      { text: 'Prosigue su marcha.', isCorrect: false },
      { text: 'Les hace señas con la mano apurándolos para que crucen.', isCorrect: false }
    ],
    explanation: 'Tenga paciencia y espere; hacer señas manuales apresuradas puede poner en riesgo al peatón frente a otros vehículos que no se detengan.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 190,
    conasetId: 190,
    category: 'seguridad',
    isCritical: false,
    text: 'Cuando el viento sopla muy fuertemente usted necesita tener especial cuidado ...',
    isMultiple: false,
    options: [
      { text: 'al usar los frenos.', isCorrect: false },
      { text: 'al comenzar a subir una pendiente.', isCorrect: false },
      { text: 'al virar hacia un camino angosto.', isCorrect: false },
      { text: 'al pasar cerca de ciclistas.', isCorrect: true }
    ],
    explanation: 'Las ráfagas laterales desestabilizan gravemente a los ciclistas, quienes pueden tambalearse o caer hacia el centro de la calzada.',
    legalReference: 'Manual CONASET - Viento Fuerte'
  },
  {
    id: 191,
    conasetId: 191,
    category: 'normativa',
    isCritical: false,
    text: 'En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué debe hacer usted?',
    illustrationType: 'peatones_calzada_viraje_191',
    isMultiple: false,
    options: [
      { text: 'Hacerles señas con la mano para que continúen.', isCorrect: false },
      { text: 'Tocar la bocina para hacerles notar que usted está ahí.', isCorrect: false },
      { text: 'Esperar que crucen.', isCorrect: true },
      { text: 'Encender sus luces de advertencia de peligro.', isCorrect: false }
    ],
    explanation: 'Al virar en un cruce, el conductor pierde la preferencia frente a los peatones que están cruzando la calzada de destino.',
    legalReference: 'Ley N° 18.290, Art. 134'
  },
  {
    id: 192,
    conasetId: 192,
    category: 'normativa',
    isCritical: false,
    text: 'En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?',
    illustrationType: 'peatones_calzada_viraje_192',
    isMultiple: false,
    options: [
      { text: 'Espera permitiéndoles que crucen.', isCorrect: true },
      { text: 'Continúa ya que usted tiene el derecho preferente de paso.', isCorrect: false },
      { text: 'Les hace señas para que retrocedan.', isCorrect: false },
      { text: 'Les toca la bocina para advertirles su presencia.', isCorrect: false }
    ],
    explanation: 'El peatón goza de preferencia legal de paso en el cruce hacia donde vira el vehículo.',
    legalReference: 'Ley N° 18.290, Art. 134'
  },
  {
    id: 193,
    conasetId: 193,
    category: 'seguridad',
    isCritical: false,
    text: '¿Dónde debe tener usted especial cuidado con los motociclistas?',
    isMultiple: false,
    options: [
      { text: 'En una estación de servicio.', isCorrect: false },
      { text: 'En los cruces de calles.', isCorrect: true },
      { text: 'En las proximidades de un área de servicio.', isCorrect: false },
      { text: 'Al ingresar a un recinto o área de estacionamientos.', isCorrect: false }
    ],
    explanation: 'Los cruces concentran la mayoría de colisiones graves entre autos y motos por no advertir a tiempo su aproximación en los virajes.',
    legalReference: 'Manual CONASET - Usuarios Vulnerables'
  },
  {
    id: 194,
    conasetId: 194,
    category: 'seguridad',
    isCritical: false,
    text: 'Cuando conduce en la ciudad ¿por qué razón debería usted tener cuidado al cruzarse con un bus que se encuentra detenido en una parada?',
    isMultiple: false,
    options: [
      { text: 'Porque el bus puede estar en pana.', isCorrect: false },
      { text: 'Porque el bus puede ponerse en movimiento repentinamente.', isCorrect: false },
      { text: 'Porque pueden aparecer peatones detrás del bus.', isCorrect: true },
      { text: 'Porque el bus puede permanecer detenido.', isCorrect: false }
    ],
    explanation: 'Peatones apurados cruzan por delante o detrás del autobús tapados por la carrocería del bus.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 195,
    conasetId: 195,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted se encuentra muy próximo a un cruce en el que pretende virar a la derecha. Delante suyo va un ciclista. ¿Qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Adelanta al ciclista antes del cruce.', isCorrect: false },
      { text: 'Rodea al ciclista en el cruce.', isCorrect: false },
      { text: 'Se mantiene detrás del ciclista hasta que éste haya pasado la intersección.', isCorrect: true },
      { text: 'Se sitúa al lado del ciclista, sigue en línea recta y desiste de virar.', isCorrect: false }
    ],
    explanation: 'Cortar la trayectoria de un ciclista para virar a la derecha ("encerrona") es causa recurrente de atropellos mortales; espere detrás de él.',
    legalReference: 'Ley de Convivencia Vial (Ley 21.088)'
  },
  {
    id: 196,
    conasetId: 196,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va conduciendo por un camino de doble tránsito cuando se encuentra con personas que van a caballo delante suyo. ¿Qué es lo primero que usted debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Desplazarse hacia el centro de la calzada.', isCorrect: false },
      { text: 'Acelerar alrededor de ellos.', isCorrect: false },
      { text: 'Señalizar hacia la izquierda.', isCorrect: false },
      { text: 'Prepararse para reducir la velocidad.', isCorrect: true }
    ],
    explanation: 'Reduzca inmediatamente la velocidad para evitar asustar a los animales y estar prevenido ante reacciones imprevistas.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 197,
    conasetId: 197,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cómo debería usted adelantar a personas que van a caballo?',
    isMultiple: false,
    options: [
      { text: 'Conduciendo lentamente y dejando bastante espacio lateral.', isCorrect: true },
      { text: 'Pasando cerca de ellas y adelantándolas lo antes posible.', isCorrect: false },
      { text: 'La velocidad no es importante, pero sí el dejar suficiente espacio lateral.', isCorrect: false },
      { text: 'Tocando la bocina sólo una vez como señal de advertencia.', isCorrect: false }
    ],
    explanation: 'Pase a baja velocidad con amplia distancia lateral, sin ruidos de motor ni bocinazos para no espantar al caballo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 198,
    conasetId: 198,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted va circulando a 65 km/h aproximadamente cuando, lamentablemente, atropella a un peatón. A esa velocidad, ....',
    isMultiple: false,
    options: [
      { text: 'es seguro que el peatón morirá.', isCorrect: false },
      { text: 'es muy probable que el peatón muera.', isCorrect: true },
      { text: 'es seguro que el peatón sobrevivirá.', isCorrect: false },
      { text: 'es muy probable que el peatón sobreviva.', isCorrect: false }
    ],
    explanation: 'A más de 60 km/h la probabilidad de muerte de un peatón atropellado supera el 85%-90%. A 30 km/h el riesgo de muerte se reduce al 10%.',
    legalReference: 'Estudios de Biomecánica CONASET / OMS'
  },
  {
    id: 199,
    conasetId: 199,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted desea adelantar a un motociclista que va delante suyo, ¿qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Trata de pasarlo en una curva.', isCorrect: false },
      { text: 'Pasa cerca de él y lo más rápido posible.', isCorrect: false },
      { text: 'Le da tanto espacio lateral como le daría a un automóvil.', isCorrect: true },
      { text: 'Toca la bocina para advertir su presencia.', isCorrect: false }
    ],
    explanation: 'Una motocicleta tiene derecho al uso completo de su pista y requiere la misma separación lateral de seguridad que cualquier otro vehículo.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 200,
    conasetId: 200,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va siguiendo a un automóvil que es conducido por una persona de edad. Usted debería ...',
    isMultiple: false,
    options: [
      { text: 'dar por seguro que el conductor manejará muy mal.', isCorrect: false },
      { text: 'estar consciente de que las reacciones del conductor pueden no ser tan rápidas como las suyas.', isCorrect: true },
      { text: 'encender y apagar sus luces y adelantarlo.', isCorrect: false },
      { text: 'mantenerse cerca tras él y conducir cuidadosamente.', isCorrect: false }
    ],
    explanation: 'Con la edad se alargan los tiempos de reacción ante imprevistos; mantenga mayor distancia y comprensión empática.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 201,
    conasetId: 201,
    category: 'normativa',
    isCritical: false,
    text: 'Al estacionar su vehículo en un lugar en el que no hay señales que lo permitan ni que lo prohiban, usted no debe ....',
    isMultiple: false,
    options: [
      { text: 'dejar el freno de mano puesto.', isCorrect: false },
      { text: 'detener el motor.', isCorrect: false },
      { text: 'obstaculizar el tránsito a otros usuarios de la vía.', isCorrect: true },
      { text: 'estacionar al costado derecho de la calzada.', isCorrect: false }
    ],
    explanation: 'El principio rector del estacionamiento es no perturbar ni obstruir la normal circulación vehicular ni peatonal.',
    legalReference: 'Ley N° 18.290, Art. 153'
  },
  {
    id: 202,
    conasetId: 202,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted nunca debería intentar adelantar a un ciclista ...',
    isMultiple: false,
    options: [
      { text: 'justo antes de doblar a la derecha.', isCorrect: true },
      { text: 'justo antes de doblar a la izquierda.', isCorrect: false },
      { text: 'recién pasada una intersección.', isCorrect: false },
      { text: 'en un camino de tierra.', isCorrect: false }
    ],
    explanation: 'Adelantar e inmediatamente cerrar el viraje a la derecha provoca el encierro o colisión por alcance lateral con el ciclista.',
    legalReference: 'Ley de Convivencia Vial'
  },
  {
    id: 203,
    conasetId: 203,
    category: 'seguridad',
    isCritical: false,
    text: 'Cuando adelanta a un ciclista usted debe dejar el máximo espacio lateral posible. ¿Por qué?',
    isMultiple: false,
    options: [
      { text: 'Porque el ciclista podría cambiar de pista.', isCorrect: false },
      { text: 'Porque el ciclista podría bajarse de la bicicleta.', isCorrect: false },
      { text: 'Porque el ciclista podría tener que virar a la izquierda.', isCorrect: false },
      { text: 'Porque el ciclista podría desviarse bruscamente.', isCorrect: true }
    ],
    explanation: 'Un bache, piedra o ráfaga de aire puede obligar al ciclista a un zigzag imprevisto; la ley fija un mínimo de 1,5 metros de separación.',
    legalReference: 'Ley N° 21.088 (Convivencia Vial)'
  },
  {
    id: 204,
    conasetId: 204,
    category: 'seguridad',
    isCritical: false,
    text: 'Cuando el viento está soplando muy fuerte, ¿por qué debe usted dejar un espacio lateral extra al adelantar a un motociclista?',
    isMultiple: false,
    options: [
      { text: 'Porque el motociclista podría doblar repentinamente para escapar del viento.', isCorrect: false },
      { text: 'Porque el motociclista podría detenerse repentinamente.', isCorrect: false },
      { text: 'Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento.', isCorrect: true },
      { text: 'Porque el motociclista podría ir más rápido de lo normal.', isCorrect: false }
    ],
    explanation: 'El empuje del viento lateral desvía las dos ruedas con facilidad, exigiendo mayor margen de seguridad.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 205,
    conasetId: 205,
    category: 'senales',
    isCritical: false,
    text: '¿De qué le advierte esta señal?',
    illustrationType: 'senal_escolares_205',
    isMultiple: false,
    options: [
      { text: 'De la posible presencia de escolares.', isCorrect: true },
      { text: 'De la proximidad de un cruce de peatones.', isCorrect: false },
      { text: 'De la posible presencia de niños jugando.', isCorrect: false },
      { text: 'De la proximidad de un parque o plaza.', isCorrect: false }
    ],
    explanation: 'Señal de advertencia de peligro en zona de colegios o tránsito habitual de estudiantes.',
    legalReference: 'Manual de Señalización de Tránsito'
  },
  {
    id: 206,
    conasetId: 206,
    category: 'clima',
    isCritical: false,
    text: 'Cuando es de noche, al adelantar usted debería ... Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'tener mucho cuidado porque nuestra capacidad visual se ve reducida.', isCorrect: true },
      { text: 'mantener en todo momento sus luces altas.', isCorrect: false },
      { text: 'tocar 2 veces la bocina antes de desplazarse hacia la pista izquierda.', isCorrect: false },
      { text: 'estar muy atento a las curvas que pueda tener el camino.', isCorrect: true },
      { text: 'cambiar de luces altas a bajas repetidas veces antes de iniciar el adelantamiento.', isCorrect: false }
    ],
    explanation: 'De noche la agudeza visual y la apreciación de profundidad bajan drásticamente; extreme la vigilancia en trazados curvos.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 207,
    conasetId: 207,
    category: 'velocidad',
    isCritical: true,
    text: 'Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?',
    isMultiple: false,
    options: [
      { text: 'A lo menos, el equivalente a lo que recorre en 4 segundos.', isCorrect: true },
      { text: 'El equivalente a lo que recorre en 1 segundo.', isCorrect: false },
      { text: 'El equivalente a lo que recorre en 2 segundos.', isCorrect: false },
      { text: 'Como máximo, el equivalente a lo que recorre en 3 segundos.', isCorrect: false }
    ],
    explanation: 'Con calzada mojada la adherencia disminuye a la mitad; la distancia temporal de seguridad debe ampliarse a un mínimo de 4 segundos.',
    legalReference: 'Manual CONASET - Conducción en Pavimento Mojado'
  },
  {
    id: 208,
    conasetId: 208,
    category: 'clima',
    isCritical: false,
    text: 'Usted está conduciendo de noche y es encandilado por las luces delanteras de un vehículo que se aproxima. En estas circunstancias, ¿qué hace usted?',
    isMultiple: false,
    options: [
      { text: 'Reduce la velocidad o se detiene.', isCorrect: true },
      { text: 'Cierra sus ojos.', isCorrect: false },
      { text: 'Hace parpadear sus luces.', isCorrect: false },
      { text: 'Baja la visera que tiene su vehículo para protegerlo del sol.', isCorrect: false }
    ],
    explanation: 'Ante el encandilamiento ciegue la mirada hacia la línea de borde derecha y disminuya la velocidad hasta detenerse si la visibilidad es nula.',
    legalReference: 'Manual CONASET - Conducción Nocturna'
  },
  {
    id: 209,
    conasetId: 209,
    category: 'clima',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones son correctas en cuanto a la conducción durante la noche? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'En carretera, con luces bajas es posible ver las marcas en el pavimento a 200 m y más.', isCorrect: false },
      { text: 'Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes.', isCorrect: true },
      { text: 'Nuestra capacidad de apreciar distancias en la noche se ve disminuida.', isCorrect: true },
      { text: 'El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores.', isCorrect: true }
    ],
    explanation: 'La oscuridad reduce el campo visual y la percepción de relieve y distancias. La ropa clara o reflectante permite ver al peatón al doble de distancia.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 210,
    conasetId: 210,
    category: 'clima',
    isCritical: false,
    text: '¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción nocturna en un camino rural? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor.', isCorrect: true },
      { text: 'Al acercarse por atrás a otro vehículo hay que poner luces bajas.', isCorrect: true },
      { text: 'Al cruzarse con un ciclista no es necesario poner luces bajas.', isCorrect: false },
      { text: 'Si el camino es ancho no es necesario poner luces bajas al cruzarse con otro vehículo.', isCorrect: false }
    ],
    explanation: 'Es obligación cambiar a luces bajas al cruzarse de frente o al seguir por detrás a otro móvil para evitar cegarlo por los retrovisores.',
    legalReference: 'Ley N° 18.290, Art. 73'
  }
];

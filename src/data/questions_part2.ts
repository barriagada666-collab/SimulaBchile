import { QuestionDefinition } from './types';

export const QUESTIONS_PART_2: QuestionDefinition[] = [
  {
    id: 71,
    conasetId: 71,
    category: 'seguridad',
    isCritical: false,
    text: 'En relación con la técnica de observación de los conductores inexpertos, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: false,
    options: [
      { text: 'Los conductores inexpertos concentran su mirada en puntos fijos.', isCorrect: true },
      { text: 'Los conductores inexpertos aprovechan al máximo su visión periférica.', isCorrect: false },
      { text: 'Los conductores inexpertos observan el entorno que los rodea en forma más sistemática que los conductores experimentados.', isCorrect: false },
      { text: 'No hay mayores diferencias en cuanto a cómo observan el entorno los conductores inexpertos y los con gran experiencia.', isCorrect: false }
    ],
    explanation: 'Los conductores principiantes tienden a fijar la mirada rígidamente justo delante del capó o en puntos fijos, sin explorar activamente el entorno amplio ni los espejos.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Técnicas de Observación'
  },
  {
    id: 72,
    conasetId: 72,
    category: 'seguridad',
    isCritical: false,
    text: 'De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.', isCorrect: true },
      { text: 'Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.', isCorrect: true },
      { text: 'Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.', isCorrect: true },
      { text: 'Las personas jóvenes son más sensibles a la luz deslumbrante que los mayores.', isCorrect: false }
    ],
    explanation: 'La vista suministra más del 80% de la información al conducir. La fatiga ocular en condiciones adversas perturba gravemente el juicio de distancias.',
    legalReference: 'Manual CONASET - La Visión'
  },
  {
    id: 73,
    conasetId: 73,
    category: 'clima',
    isCritical: false,
    text: '¿Cuándo es alto el riesgo de interpretar erróneamente la realidad al conducir? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Cuando va por un camino montañoso y con muchas sinuosidades, y la visibilidad es muy mala.', isCorrect: true },
      { text: 'Cuando usted está muy cansado, especialmente si conduce de noche.', isCorrect: true },
      { text: 'Cuando va por carretera y existe una densa niebla.', isCorrect: true },
      { text: 'Cuando con buenas condiciones de visibilidad usted conduce por una carretera con buenas demarcaciones viales.', isCorrect: false }
    ],
    explanation: 'La falta de referencias visuales nítidas por niebla, curvas nocturnas y cansancio extremo induce ilusiones ópticas y apreciaciones erradas de velocidad y trayectoria.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 74,
    conasetId: 74,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué debería hacer usted si está tomando un remedio para la tos y no está seguro si éste puede afectar su conducción?',
    isMultiple: false,
    options: [
      { text: 'No conducir tan pronto haya ingerido el remedio, sino que esperar un rato.', isCorrect: false },
      { text: 'Conducir siempre que se sienta bien.', isCorrect: false },
      { text: 'Preguntar a su doctor.', isCorrect: true },
      { text: 'Solicitar consejo a un amigo o pariente.', isCorrect: false }
    ],
    explanation: 'Muchos jarabes antitusivos contienen antihistamínicos o codeína que provocan marcada somnolencia; siempre debe consultarse al profesional médico.',
    legalReference: 'Manual CONASET - Medicamentos y Conducción'
  },
  {
    id: 75,
    conasetId: 75,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está tomando unos remedios que probablemente afectarán su conducción. ¿Qué debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Limitar su conducción sólo a viajes esenciales.', isCorrect: false },
      { text: 'Conducir solamente acompañado por alguien que posea una licencia de conducir.', isCorrect: false },
      { text: 'Conducir sólo distancias cortas.', isCorrect: false },
      { text: 'Solicitar consejo médico antes de conducir.', isCorrect: true }
    ],
    explanation: 'Nunca se debe conducir bajo el efecto de fármacos que alteren el sistema nervioso o los reflejos sin expresa autorización médica.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 76,
    conasetId: 76,
    category: 'seguridad',
    isCritical: false,
    text: 'Su doctor le ha recetado un tratamiento. ¿Por qué usted debe consultarle si puede conducir o no?',
    isMultiple: false,
    options: [
      { text: 'Porque algunas medicinas pueden hacer que sus reacciones sean más lentas.', isCorrect: true },
      { text: 'Porque las drogas influyen en su conducción al hacer más rápidas sus reacciones.', isCorrect: false },
      { text: 'Porque en caso de accidente no estaría cubierto por el Seguro Obligatorio.', isCorrect: false },
      { text: 'Porque las medicinas que está tomando pueden afectar su visión.', isCorrect: false }
    ],
    explanation: 'Muchos medicamentos psicotrópicos, relajantes o sedantes aumentan significativamente el tiempo de reacción psicomotora.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 77,
    conasetId: 77,
    category: 'alcohol',
    isCritical: true,
    text: 'Si usted ha ingerido alcohol, ¿cuál o cuáles son los efectos más probables? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Su capacidad de coordinación se reducirá.', isCorrect: true },
      { text: 'Su autoconfianza se incrementará.', isCorrect: true },
      { text: 'Presentará ceguera al color.', isCorrect: false },
      { text: 'Sus reacciones serán más rápidas.', isCorrect: false },
      { text: 'Su juicio empeorará.', isCorrect: true },
      { text: 'Su capacidad de concentración aumentará.', isCorrect: false }
    ],
    explanation: 'El alcohol perturba el lóbulo frontal (deteriora el juicio y la autocrítica mientras genera euforia/falsa confianza) y lentifica las órdenes motoras del cerebro.',
    legalReference: 'Ley Tolerancia Cero (Ley 20.580) / CONASET'
  },
  {
    id: 78,
    conasetId: 78,
    category: 'alcohol',
    isCritical: true,
    text: '¿Cómo afecta el consumo de alcohol a su conducción?',
    isMultiple: false,
    options: [
      { text: 'Acelera sus reacciones.', isCorrect: false },
      { text: 'Aumenta su lucidez.', isCorrect: false },
      { text: 'Mejora su coordinación.', isCorrect: false },
      { text: 'Reduce su concentración.', isCorrect: true }
    ],
    explanation: 'El alcohol disminuye la atención dividida y la capacidad de concentración ante los estímulos del tránsito vial.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 79,
    conasetId: 79,
    category: 'seguridad',
    isCritical: false,
    text: 'Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. ¿Qué debería hacer usted mientras no pueda detenerse?',
    isMultiple: false,
    options: [
      { text: 'Aumentar su velocidad para encontrar pronto un lugar donde detenerse.', isCorrect: false },
      { text: 'Golpear suave y repetidamente el manubrio.', isCorrect: false },
      { text: 'Asegurarse de que entre aire fresco a su vehículo.', isCorrect: true },
      { text: 'Modificar permanentemente la velocidad para mejorar la concentración.', isCorrect: false }
    ],
    explanation: 'Bajar las ventanillas para permitir la entrada de aire fresco oxigena el habitáculo y ayuda a mantenerse alerta momentáneamente hasta poder detenerse.',
    legalReference: 'Manual CONASET - Fatiga'
  },
  {
    id: 80,
    conasetId: 80,
    category: 'alcohol',
    isCritical: true,
    text: '¿Qué consejo daría usted a un conductor que ha ingerido bebidas alcohólicas en una fiesta?',
    isMultiple: false,
    options: [
      { text: 'Que se vuelva a casa en taxi.', isCorrect: true },
      { text: 'Que tome una taza de café cargado y luego conduzca a casa.', isCorrect: false },
      { text: 'Que se vuelva a casa conduciendo lenta y muy cuidadosamente.', isCorrect: false },
      { text: 'Que espere un rato antes de irse conduciendo a casa.', isCorrect: false }
    ],
    explanation: 'Si bebe, no conduzca. La única alternativa segura y legal es utilizar transporte público, taxi o un conductor designado.',
    legalReference: 'Ley N° 20.580 y Ley Emilia N° 20.770'
  },
  {
    id: 81,
    conasetId: 81,
    category: 'seguridad',
    isCritical: false,
    text: 'Un conductor hace algo que a usted le molesta. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Hacerle saber cómo se siente.', isCorrect: false },
      { text: 'Encender y apagar sus luces delanteras repetidamente.', isCorrect: false },
      { text: 'Tratar de no reaccionar.', isCorrect: true },
      { text: 'Tocar la bocina.', isCorrect: false }
    ],
    explanation: 'Evitar confrontaciones y desescalar la agresividad en el tránsito previene incidentes de violencia vial y pérdida de control emocional.',
    legalReference: 'Manual CONASET - Convivencia Vial'
  },
  {
    id: 82,
    conasetId: 82,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está a punto de volver a casa conduciendo, pero no puede encontrar los anteojos que necesita usar para conducir. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Conducir a casa lentamente por calles tranquilas.', isCorrect: false },
      { text: 'Encontrar una forma de llegar a casa sin manejar.', isCorrect: true },
      { text: 'Pedir prestados los anteojos a un amigo para volver conduciendo a casa.', isCorrect: false },
      { text: 'Manejar hasta su casa de noche para que las luces lo ayuden.', isCorrect: false }
    ],
    explanation: 'Si la licencia estipula uso obligatorio de lentes correctores, es ilegal y extremadamente peligroso conducir sin ellos.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 83,
    conasetId: 83,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted está a punto de conducir, pero se siente enfermo. Usted debería ...',
    isMultiple: false,
    options: [
      { text: 'tomar una medicina antes de conducir.', isCorrect: false },
      { text: 'acortar el viaje si puede.', isCorrect: false },
      { text: 'no manejar.', isCorrect: true },
      { text: 'prometerse a sí mismo que se va a acostar tan pronto haya llegado a casa.', isCorrect: false }
    ],
    explanation: 'Una enfermedad reduce las facultades psicofísicas y el estado de alerta; no se debe asumir la conducción bajo malestar severo.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 84,
    conasetId: 84,
    category: 'seguridad',
    isCritical: false,
    text: 'En relación con el cansancio y la conducción, de las siguientes afirmaciones, ¿cuál es falsa?',
    isMultiple: false,
    options: [
      { text: 'El cansancio es una causa importante de los accidentes que se registran en carreteras.', isCorrect: false },
      { text: 'Un conductor cansado ve empeorada su capacidad de reacción.', isCorrect: false },
      { text: 'Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente.', isCorrect: true },
      { text: 'El desorientarse y plantearse preguntas tales como, ¿pasé ya la ciudad X o aún no?, es un síntoma de cansancio.', isCorrect: false }
    ],
    explanation: 'La conversación constante no soluciona el agotamiento fisiológico y puede distraer aún más; el único remedio eficaz es parar y dormir.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 85,
    conasetId: 85,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted comienza a sentir cansancio en un viaje. ¿Qué debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Detenerse y comer una gran comida.', isCorrect: false },
      { text: 'Detenerse inmediatamente y respirar profundo.', isCorrect: false },
      { text: 'Terminar el viaje y después dormir.', isCorrect: false },
      { text: 'Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café.', isCorrect: true }
    ],
    explanation: 'Una siesta breve de 15 a 20 minutos en un lugar seguro restablece la vigilia y disminuye drásticamente el riesgo de microsueño.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 86,
    conasetId: 86,
    category: 'alcohol',
    isCritical: true,
    text: '¿Qué precauciones debe tomar un conductor cuando asiste a un evento social?',
    isMultiple: false,
    options: [
      { text: 'Beber bastante café después de ingerir bebidas alcohólicas.', isCorrect: false },
      { text: 'Evitar circular por calles de mucho tráfico después de beber alcohol.', isCorrect: false },
      { text: 'Evitar beber alcohol con el estómago vacío.', isCorrect: false },
      { text: 'Evitar consumir alcohol.', isCorrect: true }
    ],
    explanation: 'La única conducta 100% segura para un conductor es no consumir ni una sola gota de alcohol antes o durante la conducción.',
    legalReference: 'Ley N° 20.580 (Tolerancia Cero)'
  },
  {
    id: 87,
    conasetId: 87,
    category: 'alcohol',
    isCritical: true,
    text: 'De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?',
    isMultiple: false,
    options: [
      { text: 'Falsa sensación de confianza.', isCorrect: false },
      { text: 'Mayor conciencia del peligro.', isCorrect: true },
      { text: 'Menor control del vehículo.', isCorrect: false },
      { text: 'Escaso juicio de la velocidad.', isCorrect: false }
    ],
    explanation: 'El alcohol suprime las inhibiciones y disminuye (en vez de aumentar) la conciencia del peligro, induciendo a maniobras temerarias.',
    legalReference: 'Manual CONASET - Efectos del Alcohol'
  },
  {
    id: 88,
    conasetId: 88,
    category: 'alcohol',
    isCritical: true,
    text: 'De las siguientes capacidades de un individuo, ¿cuál de ellas no se ve afectada por el consumo de alcohol?',
    isMultiple: false,
    options: [
      { text: 'La percepción de colores.', isCorrect: true },
      { text: 'El juicio acerca de la velocidad.', isCorrect: false },
      { text: 'Los tiempos de reacción.', isCorrect: false },
      { text: 'La coordinación.', isCorrect: false }
    ],
    explanation: 'El alcohol deteriora los tiempos de reacción, la coordinación motriz y la visión espacial de distancias y velocidad, pero no altera la percepción espectral del color de las señales.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 89,
    conasetId: 89,
    category: 'seguridad',
    isCritical: false,
    text: 'El tiempo que transcurre desde que usted percibe un peligro hasta que actúa se denomina tiempo de reacción. En una emergencia, ¿qué factor influye en su tiempo de reacción?',
    isMultiple: false,
    options: [
      { text: 'Su estado de salud.', isCorrect: true },
      { text: 'El estado de la calzada.', isCorrect: false },
      { text: 'La velocidad de su vehículo.', isCorrect: false },
      { text: 'Las condiciones climáticas.', isCorrect: false }
    ],
    explanation: 'El tiempo de reacción es exclusivamente humano: depende del cansancio, salud, alcohol, drogas o edad del conductor (la calzada y velocidad influyen en el frenado).',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 90,
    conasetId: 90,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuándo es más probable que usted pierda concentración cuando conduce? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Cuando hace funcionar los limpiaparabrisas.', isCorrect: false },
      { text: 'Cuando mira a través del espejo retrovisor.', isCorrect: false },
      { text: 'Cuando va escuchando música a alto volumen.', isCorrect: true },
      { text: 'Cuando utiliza un teléfono celular.', isCorrect: true },
      { text: 'Cuando mira un mapa del camino.', isCorrect: true }
    ],
    explanation: 'Música estridente, el uso del celular o consultar mapas al volante desvían gravemente la atención cognitiva y visual.',
    legalReference: 'Ley N° 21.377 (Ley No Chat)'
  },
  {
    id: 91,
    conasetId: 91,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué debería hacer el conductor del auto señalado con la flecha?',
    illustrationType: 'auto_flecha_peaton_91',
    isMultiple: false,
    options: [
      { text: 'Detenerse y esperar a que el peatón cruce.', isCorrect: false },
      { text: 'Señalizar con la mano al peatón para que retroceda.', isCorrect: false },
      { text: 'Continuar conduciendo lentamente.', isCorrect: true },
      { text: 'Detenerse, pero sólo si vienen más autos detrás suyo.', isCorrect: false }
    ],
    explanation: 'De acuerdo al cuestionario oficial y la situación gráfica, el peatón ya ha despejado la trayectoria del móvil y corresponde continuar con marcha lenta y precaución.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 92,
    conasetId: 92,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuáles son las 2 principales razones por las que no sería adecuado que usted adelantara al peatón en este momento? Marque dos respuestas',
    illustrationType: 'adelantar_peaton_angosto_92',
    isMultiple: true,
    options: [
      { text: 'Podría ensuciar al peatón.', isCorrect: false },
      { text: 'La calzada es angosta y el peatón podría desviarse inesperadamente hacia la derecha.', isCorrect: true },
      { text: 'El vehículo de la izquierda podría avanzar.', isCorrect: false },
      { text: 'Podría aparecer sorpresivamente algún vehículo en sentido contrario.', isCorrect: true }
    ],
    explanation: 'En caminos angostos con escasa visibilidad frontal existe el peligro de un peatón cambiando de paso imprevistamente y un auto en contra de improviso.',
    legalReference: 'Manual CONASET - Adelantamientos Peligrosos'
  },
  {
    id: 93,
    conasetId: 93,
    category: 'normativa',
    isCritical: false,
    text: 'En relación con los cruces ferroviarios a nivel, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)? Marque la o las respuesta(s) correcta(s)',
    isMultiple: true,
    options: [
      { text: 'Extrañamente, está permitido estacionar a 10 m de un cruce ferroviario a nivel.', isCorrect: false },
      { text: 'Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.', isCorrect: true },
      { text: 'Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario.', isCorrect: true },
      { text: 'Nada impide que pueda efectuar un adelantamiento en un cruce ferroviario, si no siente tren alguno en las proximidades.', isCorrect: false }
    ],
    explanation: 'Nunca se detenga sobre la vía férrea; si ya ingresó, despeje de inmediato. Apague la radio para oír timbres o silbatos del tren.',
    legalReference: 'Ley N° 18.290, Art. 104'
  },
  {
    id: 94,
    conasetId: 94,
    category: 'seguridad',
    isCritical: false,
    text: 'En esta ocasión usted va conduciendo a 70 km/h. ¿Qué hace usted? Marque dos respuestas',
    illustrationType: 'calzada_70_obstaculo_94',
    isMultiple: true,
    options: [
      { text: 'Frena en seco.', isCorrect: false },
      { text: 'Se desplaza hacia la izquierda.', isCorrect: false },
      { text: 'Continúa derecho.', isCorrect: true },
      { text: 'Frena suavemente.', isCorrect: true }
    ],
    explanation: 'No esquive bruscamente hacia pistas contrarias; mantenga la trayectoria recta frenando de forma progresiva y controlada.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 95,
    conasetId: 95,
    category: 'seguridad',
    isCritical: false,
    text: 'Al aproximarse a una curva hacia la izquierda usted debería mantenerse bien a la derecha. ¿Por qué?',
    isMultiple: false,
    options: [
      { text: 'Para superar el efecto de pendiente de la calzada.', isCorrect: false },
      { text: 'Para tener una mejor visual sobre el camino.', isCorrect: true },
      { text: 'Para permitirle el adelantamiento a quienes vienen rápido detrás suyo.', isCorrect: false },
      { text: 'Para estar en una ubicación más segura en caso que el vehículo se roncee.', isCorrect: false }
    ],
    explanation: 'Cerrarse a la derecha en curvas a la izquierda amplía sustancialmente el radio visual hacia la salida de la curva y el tráfico que viene de frente.',
    legalReference: 'Manual CONASET - Trazado de Curvas'
  },
  {
    id: 96,
    conasetId: 96,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted conduce por una vía rápida en muy buenas condiciones. Por seguridad, ¿qué distancia debería mantener usted respecto del vehículo que va delante suyo?',
    isMultiple: false,
    options: [
      { text: 'Un espacio equivalente al que usted recorre en 3 segundos.', isCorrect: true },
      { text: 'Un espacio igual al largo de un auto.', isCorrect: false },
      { text: '3 metros.', isCorrect: false },
      { text: 'Un espacio igual al largo de 3 autos.', isCorrect: false }
    ],
    explanation: 'La regla de oro de CONASET establece un mínimo de 3 segundos en condiciones ideales para evitar colisiones por alcance.',
    legalReference: 'Manual del Nuevo Conductor CONASET - Distancia de Seguimiento'
  },
  {
    id: 97,
    conasetId: 97,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted se aproxima a una curva hacia la izquierda. ¿Qué debería hacer?',
    isMultiple: false,
    options: [
      { text: 'Mantenerse bien a la derecha ya que así tardará menos en pasar la curva.', isCorrect: false },
      { text: 'Mantenerse bien a la derecha para tener una mejor visual sobre la curva.', isCorrect: true },
      { text: 'Mantenerse bien a la izquierda para evitar cualquier obstáculo que pueda haber en la cuneta.', isCorrect: false },
      { text: 'Mantenerse bien a la izquierda para hacer la curva menos pronunciada.', isCorrect: false }
    ],
    explanation: 'Mantenerse ceñido a la derecha optimiza el campo visual de la calzada y previene impactos si un vehículo en contra corta la curva invadiendo su pista.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 98,
    conasetId: 98,
    category: 'velocidad',
    isCritical: true,
    text: 'Usted conduce a 90 km/h. En condiciones normales, ¿cuál es la distancia mínima de seguridad que usted debería mantener respecto del vehículo que va adelante?',
    isMultiple: false,
    options: [
      { text: 'Unos 75 metros', isCorrect: true },
      { text: 'Unos 15 metros', isCorrect: false },
      { text: 'Unos 20 metros', isCorrect: false },
      { text: 'Unos 100 metros', isCorrect: false }
    ],
    explanation: 'A 90 km/h (25 m/s), la regla de los 3 segundos da 75 metros exactos de distancia prudente de seguimiento.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 99,
    conasetId: 99,
    category: 'seguridad',
    isCritical: false,
    text: 'Mire el dibujo. ¿Cuál es el peligro al que usted debe estar más atento(a)?',
    illustrationType: 'peligro_nino_helados_99',
    isMultiple: false,
    options: [
      { text: 'El niño puede cruzar corriendo.', isCorrect: true },
      { text: 'El vendedor de helados puede poner su vehículo en movimiento.', isCorrect: false },
      { text: 'El auto estacionado puede ponerse en movimiento.', isCorrect: false },
      { text: 'El vendedor de helados puede bajarse de su vehículo.', isCorrect: false }
    ],
    explanation: 'Cerca de carritos de helados o áreas de juegos infantiles los niños cruzan imprevistamente sin mirar el tráfico vehicular.',
    legalReference: 'Manual CONASET - Peatones y Niños'
  },
  {
    id: 100,
    conasetId: 100,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted pretende doblar hacia la izquierda en un cruce, pero hay vehículos estacionados que le obstruyen la visual. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Avanzar rápidamente, pero estando preparado para detenerse.', isCorrect: false },
      { text: 'Tocar la bocina y avanzar lentamente.', isCorrect: false },
      { text: 'Detenerse, luego avanzar lentamente hasta que tenga una visual plena.', isCorrect: true },
      { text: 'Tocar la bocina y avanzar rápidamente.', isCorrect: false }
    ],
    explanation: 'Deténgase en la línea imaginaria de visibilidad y asómese poco a poco hasta constatar que no vienen otros vehículos ni peatones.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 101,
    conasetId: 101,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?',
    illustrationType: 'pelota_autos_estacionados_101',
    isMultiple: false,
    options: [
      { text: 'Continuar a la misma velocidad, tocando la bocina.', isCorrect: false },
      { text: 'Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.', isCorrect: false },
      { text: 'Detenerse y señalar con la mano para que los niños crucen a recoger la pelota.', isCorrect: false },
      { text: 'Disminuir la velocidad y estar preparado para detenerse si aparece un niño.', isCorrect: true }
    ],
    explanation: 'Detrás de una pelota que rebota a la calzada casi con total certeza viene un niño corriendo a recogerla sin advertir el peligro.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 102,
    conasetId: 102,
    category: 'seguridad',
    isCritical: false,
    text: 'Al adelantar a animales que van por el camino, usted no debería...',
    isMultiple: false,
    options: [
      { text: 'acelerar el motor o tocar la bocina.', isCorrect: true },
      { text: 'cambiar a una marcha más baja.', isCorrect: false },
      { text: 'usar los señalizadores de viraje.', isCorrect: false },
      { text: 'tener las luces encendidas.', isCorrect: false }
    ],
    explanation: 'Ruidos estridentes de acelerador o bocinazos pueden espantar a los animales y hacer que salten descontroladamente sobre el vehículo.',
    legalReference: 'Manual CONASET - Animales en la Vía'
  },
  {
    id: 103,
    conasetId: 103,
    category: 'seguridad',
    isCritical: false,
    text: 'Al adelantar en un camino a una manada de ovejas, ¿qué hace usted? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'Deja un espacio lateral suficiente.', isCorrect: true },
      { text: 'Adelanta rápidamente y sin vacilaciones.', isCorrect: false },
      { text: 'Conduce lentamente.', isCorrect: true },
      { text: 'Toca la bocina levemente.', isCorrect: false },
      { text: 'Está preparado para detenerse.', isCorrect: true }
    ],
    explanation: 'Circule a paso de hombre, deje amplio espacio lateral y esté listo a frenar a cero si un animal se cruza de improviso.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 104,
    conasetId: 104,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va conduciendo por una calle de dos pistas y de doble sentido de tránsito en la cual hay vehículos estacionados al costado derecho. ¿Por cuáles 3 razones usted debe disminuir su velocidad? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'Pueden salir vehículos de su estacionamiento.', isCorrect: true },
      { text: 'Alguien puede abrir una puerta de un auto estacionado.', isCorrect: true },
      { text: 'Puede activar las alarmas de los automóviles.', isCorrect: false },
      { text: 'Para poder ser visto con mayor claridad por el tránsito que viene en contra.', isCorrect: false },
      { text: 'Entre los autos estacionados puede aparecer un niño corriendo.', isCorrect: true }
    ],
    explanation: 'Aperturas intempestivas de puertas, salidas sorpresivas de autos y peatones o niños cruzando entre coches ocultos son peligros inminentes.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 105,
    conasetId: 105,
    category: 'normativa',
    isCritical: false,
    text: 'Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?',
    illustrationType: 'cruce_en_t_105',
    isMultiple: false,
    options: [
      { text: 'Avanzar acelerando a fondo.', isCorrect: false },
      { text: 'Ponerse en marcha antes de que el vehículo azul llegue al cruce.', isCorrect: false },
      { text: 'Esperar hasta que el vehículo azul haya comenzado a virar.', isCorrect: true },
      { text: 'Avanzar lentamente.', isCorrect: false }
    ],
    explanation: 'El intermitente puede haber sido dejado por error o el conductor arrepentirse; no ingrese hasta verificar con certeza que efectivamente está virando.',
    legalReference: 'Manual CONASET - Cruces e Intersecciones'
  },
  {
    id: 106,
    conasetId: 106,
    category: 'normativa',
    isCritical: false,
    text: 'Usted se ha quedado detenido justo al medio de un cruce ferroviario con sistema automático de señales y barreras y no puede echar a andar el motor nuevamente. La campanilla del cruce comienza a sonar. ¿Qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Correr por la vía para intentar avisar al maquinista.', isCorrect: false },
      { text: 'Salir del vehículo y alejarse de él.', isCorrect: true },
      { text: 'Seguir intentando reiniciar la marcha del vehículo.', isCorrect: false },
      { text: 'Intentar despejar el cruce empujando su vehículo.', isCorrect: false }
    ],
    explanation: 'La prioridad absoluta es la vida de los ocupantes: evacuar de inmediato el auto y alejarse diagonalmente de la vía en dirección hacia donde viene el tren.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 107,
    conasetId: 107,
    category: 'seguridad',
    isCritical: false,
    text: '¿A qué debe estar especialmente atento el conductor del vehículo indicado con la flecha? Marque tres respuestas',
    illustrationType: 'fila_autos_estacionados_107',
    isMultiple: true,
    options: [
      { text: 'Irregularidades de la superficie de calzada.', isCorrect: false },
      { text: 'Peatones que puedan aparecer sorpresivamente entre autos estacionados para cruzar.', isCorrect: true },
      { text: 'Autos que abandonen sus lugares de estacionamiento.', isCorrect: true },
      { text: 'Lugares disponibles para estacionar.', isCorrect: false },
      { text: 'Puertas de automóviles estacionados que se abran.', isCorrect: true },
      { text: 'Automóviles que vengan detrás de él.', isCorrect: false }
    ],
    explanation: 'Al circular junto a una fila de vehículos estacionados, los 3 riesgos cruciales son peatones saliendo a ciegas, puertas que se abren e incorporaciones bruscas.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 108,
    conasetId: 108,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué debería hacer el conductor del auto indicado con la flecha?',
    illustrationType: 'esperar_peaton_calzada_108',
    isMultiple: false,
    options: [
      { text: 'Hacer señas con la mano a los peatones que están esperando poder cruzar.', isCorrect: false },
      { text: 'Pasar rápidamente por detrás del peatón que va cruzando la calzada.', isCorrect: false },
      { text: 'Esperar a que pase el peatón que va por la calzada.', isCorrect: true },
      { text: 'Decirle al peatón que no debería haber cruzado.', isCorrect: false }
    ],
    explanation: 'Los peatones que han iniciado el cruce tienen prioridad legal de paso; el conductor debe esperar pacientemente a que despejen la calzada.',
    legalReference: 'Ley N° 18.290, Art. 135'
  },
  {
    id: 109,
    conasetId: 109,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué debería hacer el conductor del auto señalado con la flecha?',
    illustrationType: 'auto_cruce_interseccion_109',
    isMultiple: false,
    options: [
      { text: 'Retroceder para salir del cruce.', isCorrect: false },
      { text: 'Esperar en el mismo lugar hasta tener luz verde.', isCorrect: false },
      { text: 'Esperar hasta tener luz roja.', isCorrect: false },
      { text: 'Continuar con precaución.', isCorrect: true }
    ],
    explanation: 'Si un vehículo ya ingresó legalmente a la intersección con verde pero quedó demorado para completar el viraje, debe despejar el cruce con precaución.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 110,
    conasetId: 110,
    category: 'seguridad',
    isCritical: false,
    text: '¿Cuál es el principal peligro cuando usted sobrepasa al bus que está detenido en la parada?',
    illustrationType: 'bus_parada_peligro_110',
    isMultiple: false,
    options: [
      { text: 'Que usted debe ceder el paso al bus si éste se pone en marcha.', isCorrect: false },
      { text: 'Que el auto que va adelante puede detenerse para ceder el paso a un peatón.', isCorrect: false },
      { text: 'Que alguien puede venir corriendo al bus desde el otro lado de la calle.', isCorrect: false },
      { text: 'Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar.', isCorrect: true }
    ],
    explanation: 'Los usuarios del transporte público recién descendidos suelen cruzar apresuradamente por delante del autobús, ocultos al campo visual del conductor.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 111,
    conasetId: 111,
    category: 'senales',
    isCritical: false,
    text: '¿Qué significa la señal que está efectuando el camión?',
    illustrationType: 'camion_senala_derecha_111',
    isMultiple: false,
    options: [
      { text: 'El camión va a disminuir la velocidad y va a detenerse.', isCorrect: false },
      { text: 'El conductor del camión le está indicando a usted que lo puede adelantar.', isCorrect: false },
      { text: 'El camión va a virar a la derecha.', isCorrect: true },
      { text: 'El conductor del camión ha olvidado apagar sus luces indicadoras de viraje.', isCorrect: false }
    ],
    explanation: 'La luz intermitente derecha encendida advierte formalmente la maniobra de viraje o cambio de pista hacia el costado derecho.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 112,
    conasetId: 112,
    category: 'seguridad',
    isCritical: false,
    text: '¿Qué debe hacer usted cuando va en una fila de autos? Marque tres respuestas',
    isMultiple: true,
    options: [
      { text: 'Debe concentrarse sólo en el vehículo que va inmediatamente delante suyo.', isCorrect: false },
      { text: 'Debe mantener un espacio suficiente respecto del vehículo que va delante suyo, de modo de posibilitar que otro vehículo lo adelante a usted e ingrese a dicho espacio.', isCorrect: true },
      { text: 'Debe mirar a buena distancia hacia adelante, eventualmente a través de los cristales de los otros vehículos, a fin de poder moderar la velocidad a tiempo si alguien frena.', isCorrect: true },
      { text: 'Debe mantenerse atento a los vehículos que van tanto delante como detrás suyo.', isCorrect: true },
      { text: 'Debe concentrarse sólo en el vehículo que va detrás suyo.', isCorrect: false }
    ],
    explanation: 'En caravana o fila, mirar a lo lejos previendo frenazos, dejar distancia de seguridad y vigilar el retrovisor previene colisiones múltiples en cadena.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 113,
    conasetId: 113,
    category: 'seguridad',
    isCritical: false,
    text: '¿Hacia dónde es más importante que usted mire en este momento?',
    illustrationType: 'puntos_atencion_abcd_113',
    isMultiple: false,
    options: [
      { text: 'A', isCorrect: false },
      { text: 'B', isCorrect: false },
      { text: 'C', isCorrect: true },
      { text: 'D', isCorrect: false }
    ],
    explanation: 'El sector C concentra la zona inmediata de conflicto crítico (apertura de puertas, peatones o ciclistas saliendo hacia la calzada).',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 114,
    conasetId: 114,
    category: 'seguridad',
    isCritical: false,
    text: 'En esta situación, ¿a cuáles 3 riesgos debe estar usted principalmente atento? Marque tres respuestas',
    illustrationType: 'ciclista_sentido_contrario_114',
    isMultiple: true,
    options: [
      { text: 'Al ciclista que viene en sentido contrario.', isCorrect: true },
      { text: 'Al tránsito en la intersección que hay más adelante.', isCorrect: false },
      { text: 'A las puertas de autos que pueden ser abiertas.', isCorrect: true },
      { text: 'A niños que pueden salir a la calzada por entre los autos.', isCorrect: true },
      { text: 'A los vehículos que pueden venir detrás suyo.', isCorrect: false },
      { text: 'A irregularidades de la superficie de calzada.', isCorrect: false }
    ],
    explanation: 'Ciclistas en dirección contraria, puertas de autos estacionados y niños ocultos entre carrocerías constituyen los mayores factores de riesgo urbano.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 115,
    conasetId: 115,
    category: 'seguridad',
    isCritical: false,
    text: 'Usted va conduciendo a 70 km/h que es la velocidad máxima permitida en esta vía. ¿Qué hace en esta situación? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'bus_parada_70kmh_115',
    isMultiple: true,
    options: [
      { text: 'Está preparado para actuar ya que alguien puede salir corriendo a la calzada.', isCorrect: true },
      { text: 'Está preparado para actuar ya que el bus puede ponerse en marcha.', isCorrect: true },
      { text: 'Frena y cede el paso al bus, si éste está por salir de la parada.', isCorrect: false },
      { text: 'Sigue conduciendo sin estar preparado para nada en especial, ya que usted tiene dominio de su vehículo.', isCorrect: false }
    ],
    explanation: 'Frente a un bus detenido en parada, reduzca preventivamente la velocidad y esté alerta al reinicio de marcha del bus o peatones cruzando.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 116,
    conasetId: 116,
    category: 'normativa',
    isCritical: false,
    text: '¿Qué hace usted ante esta situación?',
    illustrationType: 'calzada_angosta_peatones_116',
    isMultiple: false,
    options: [
      { text: 'Hace señales a los peatones para que se alejen de la calzada.', isCorrect: false },
      { text: 'Reduce su velocidad y continúa conduciendo.', isCorrect: false },
      { text: 'Hace señales de luces al vehículo que viene en contra para que espere a que usted haya pasado.', isCorrect: false },
      { text: 'Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones.', isCorrect: true }
    ],
    explanation: 'Si el obstáculo (peatones caminando por la calzada) está en su lado de la vía, usted debe ceder el paso al vehículo del sentido opuesto antes de sortearlos.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 117,
    conasetId: 117,
    category: 'seguridad',
    isCritical: false,
    text: 'Mientras va conduciendo su vehículo usted siente que lo están llamando a su teléfono celular, ¿qué hace usted para responder la llamada?',
    isMultiple: false,
    options: [
      { text: 'Reduce su velocidad.', isCorrect: false },
      { text: 'Espera hasta encontrar un lugar seguro donde detenerse.', isCorrect: true },
      { text: 'Conduce con una mano en el volante.', isCorrect: false },
      { text: 'Es especialmente cauteloso en las intersecciones.', isCorrect: false }
    ],
    explanation: 'Manipular el teléfono al conducir está prohibido por ley; debe detenerse en un lugar seguro y autorizado antes de contestar.',
    legalReference: 'Ley N° 21.377 (Ley No Chat)'
  },
  {
    id: 118,
    conasetId: 118,
    category: 'normativa',
    isCritical: false,
    text: 'Usted debería utilizar su teléfono celular en su automóvil sólo en la siguiente situación:',
    isMultiple: false,
    options: [
      { text: 'Si su vehículo tiene cambio automático.', isCorrect: false },
      { text: 'Si necesita efectuar una llamada de emergencia.', isCorrect: false },
      { text: 'Cuando se encuentra detenido en un lugar seguro.', isCorrect: true },
      { text: 'Al circular por un camino secundario.', isCorrect: false }
    ],
    explanation: 'Solo se permite manipular dispositivos digitales cuando el vehículo se encuentra completamente estacionado en un sitio habilitado.',
    legalReference: 'Ley No Chat / Art. 192 bis Ley 18.290'
  },
  {
    id: 119,
    conasetId: 119,
    category: 'seguridad',
    isCritical: false,
    text: 'En un camino muy transitado usted desea adelantar a un camión con remolque que va lentamente delante suyo, ¿qué debería hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Mantenerse bien atrás del camión hasta que pueda ver que tiene espacio suficiente como para adelantarlo.', isCorrect: true },
      { text: 'Esperar atrás del camión hasta que su conductor le indique que puede adelantarlo.', isCorrect: false },
      { text: 'Encender y apagar sus luces para que quienes vienen en contra le faciliten el adelantamiento.', isCorrect: false },
      { text: 'Seguir muy de cerca al camión desplazándose permanentemente hacia el centro de la calzada para poder ver hacia adelante.', isCorrect: false }
    ],
    explanation: 'Pegarse a la parte trasera de un camión quita todo el campo visual hacia adelante; distanciarse permite divisar con holgura la pista contraria.',
    legalReference: 'Manual del Nuevo Conductor CONASET'
  },
  {
    id: 120,
    conasetId: 120,
    category: 'accidentes',
    isCritical: false,
    text: 'La mayor parte de los accidentes de tránsito se produce en:',
    isMultiple: false,
    options: [
      { text: 'Carreteras', isCorrect: false },
      { text: 'Salidas de colegios', isCorrect: false },
      { text: 'Caminos rurales', isCorrect: false },
      { text: 'Intersecciones', isCorrect: true }
    ],
    explanation: 'Las intersecciones o cruces concentran la mayor frecuencia de colisiones e impactos por convergencia de trayectorias y no respeto a la preferencia.',
    legalReference: 'Estadísticas Oficiales CONASET'
  },
  {
    id: 121,
    conasetId: 121,
    category: 'accidentes',
    isCritical: false,
    text: 'Entre los accidentes de tránsito se distinguen distintos tipos de éstos. En Chile, ¿cuál es el tipo de accidente que origina la mayor cantidad de muertos?',
    isMultiple: false,
    options: [
      { text: 'Los choques contra obstáculos fijos.', isCorrect: false },
      { text: 'Las colisiones entre 2 o más vehículos.', isCorrect: false },
      { text: 'Los atropellos.', isCorrect: true },
      { text: 'Los volcamientos.', isCorrect: false }
    ],
    explanation: 'Históricamente en Chile los atropellos a peatones representan el porcentaje más alto de víctimas fatales en siniestros de tránsito.',
    legalReference: 'CONASET - Siniestralidad Vial'
  },
  {
    id: 122,
    conasetId: 122,
    category: 'seguridad',
    isCritical: false,
    text: 'Al estar estacionado, ¿qué debería hacer usted justo antes de poner su vehículo en movimiento?',
    isMultiple: false,
    options: [
      { text: 'Ajustar sus espejos.', isCorrect: false },
      { text: 'Seleccionar primera marcha.', isCorrect: false },
      { text: 'Mirar a su alrededor y chequear sus puntos ciegos.', isCorrect: true },
      { text: 'Señalizar.', isCorrect: false }
    ],
    explanation: 'Justo antes de mover el auto se debe girar la cabeza para verificar los ángulos ciegos no cubiertos por los espejos retrovisores.',
    legalReference: 'Manual CONASET'
  },
  {
    id: 123,
    conasetId: 123,
    category: 'seguridad',
    isCritical: false,
    text: 'Las fotografías muestran una secuencia cronológica de imágenes. ¿Cuáles son las 2 principales causas por las que surge esta situación de peligro? Marque dos respuestas',
    illustrationType: 'secuencia_adelantamiento_123',
    isMultiple: true,
    options: [
      { text: 'Por adelantar en un lugar prohibido.', isCorrect: true },
      { text: 'Por mala visibilidad.', isCorrect: false },
      { text: 'Porque el vehículo adelantado no anda lo suficientemente a la derecha.', isCorrect: false },
      { text: 'Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho.', isCorrect: true }
    ],
    explanation: 'Se conjugan dos infracciones graves: iniciar un sobrepaso en zona con prohibición y la incorporación intempestiva del vehículo lateral.',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 124,
    conasetId: 124,
    category: 'normativa',
    isCritical: false,
    text: 'Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?',
    isMultiple: false,
    options: [
      { text: 'Detenerse, porque la luz roja se lo está indicando.', isCorrect: false },
      { text: 'Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito.', isCorrect: true },
      { text: 'Avanzar, sólo si detrás suyo no vienen otros vehículos.', isCorrect: false },
      { text: 'Avanzar, sólo si está seguro que la luz roja está próxima a cambiar.', isCorrect: false }
    ],
    explanation: 'En la jerarquía del tránsito en Chile, las órdenes de Carabineros de servicio prevalecen sobre semáforos, señales verticales y demarcaciones.',
    legalReference: 'Ley N° 18.290, Art. 96'
  },
  {
    id: 125,
    conasetId: 125,
    category: 'normativa',
    isCritical: false,
    text: '¿En qué situación puede usted hacer uso de la bocina de su vehículo?',
    isMultiple: false,
    options: [
      { text: 'Cuando cede a otro el derecho a vía.', isCorrect: false },
      { text: 'Cuando saluda a otros usuarios de la vía.', isCorrect: false },
      { text: 'Cuando trata de prevenir a otros acerca de un peligro.', isCorrect: true },
      { text: 'Cuando desea manifestar su disgusto.', isCorrect: false }
    ],
    explanation: 'La bocina solo está autorizada para advertir un peligro inminente de siniestro o evitar un accidente, no para apurar ni quejarse.',
    legalReference: 'Ley N° 18.290, Art. 78'
  },
  {
    id: 126,
    conasetId: 126,
    category: 'normativa',
    isCritical: false,
    text: '¿Cuándo puede usted hacer sonar la bocina de su auto?',
    isMultiple: false,
    options: [
      { text: 'Para llamar la atención de un amigo.', isCorrect: false },
      { text: 'Para que le cedan el paso.', isCorrect: false },
      { text: 'Para apurar a un conductor que va más lento.', isCorrect: false },
      { text: 'Para prevenir la ocurrencia de un accidente.', isCorrect: true }
    ],
    explanation: 'Su uso legal se restringe con carácter exclusivo a la prevención oportuna de accidentes.',
    legalReference: 'Ley N° 18.290, Art. 78'
  },
  {
    id: 127,
    conasetId: 127,
    category: 'normativa',
    isCritical: false,
    text: 'Usted se va acercando a un cruce semaforizado. ¿Cuándo no debe usted ingresar al cruce aunque el semáforo esté en verde?',
    isMultiple: false,
    options: [
      { text: 'Cuando hay peatones esperando para cruzar.', isCorrect: false },
      { text: 'Cuando pasado el cruce su pista no esté lo suficientemente despejada.', isCorrect: true },
      { text: 'Cuando usted cree que la luz está próxima a cambiar.', isCorrect: false },
      { text: 'Cuando usted va a virar a la derecha.', isCorrect: false }
    ],
    explanation: 'Nunca se debe entrar a una intersección si la congestión posterior le obligará a quedar detenido bloqueando el cruce.',
    legalReference: 'Ley N° 18.290, Art. 129'
  },
  {
    id: 128,
    conasetId: 128,
    category: 'velocidad',
    isCritical: true,
    text: 'Fuera de la ciudad, usted va por una carretera de doble calzada con dos pistas por sentido. La velocidad máxima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van vehículos delante suyo, ¿por cuál pista circula usted?',
    isMultiple: false,
    options: [
      { text: 'Por la pista de la izquierda.', isCorrect: false },
      { text: 'Por la pista de la derecha.', isCorrect: true },
      { text: 'Por cualquiera de las dos pistas.', isCorrect: false }
    ],
    explanation: 'En carreteras de calzadas múltiples, la circulación normal debe realizarse siempre por la pista derecha; la izquierda se reserva para adelantamientos.',
    legalReference: 'Ley N° 18.290, Art. 120'
  },
  {
    id: 129,
    conasetId: 129,
    category: 'normativa',
    isCritical: false,
    text: 'En una carretera de doble calzada con dos pistas por sentido, ¿en cuáles 2 de las siguientes situaciones usted usaría la pista izquierda? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'Cuando va a virar a la izquierda.', isCorrect: true },
      { text: 'Al pasar a otro vehículo que va más lento.', isCorrect: true },
      { text: 'Al circular normalmente.', isCorrect: false },
      { text: 'Al conducir a una velocidad muy baja.', isCorrect: false }
    ],
    explanation: 'La pista izquierda solo debe emplearse para efectuar sobrepasos o para posicionarse ante un próximo viraje a la izquierda.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 130,
    conasetId: 130,
    category: 'normativa',
    isCritical: false,
    text: '¿En qué situación retrocede usted con su vehículo en un cruce?',
    isMultiple: false,
    options: [
      { text: 'Si no hay nadie detrás suyo.', isCorrect: false },
      { text: 'En ningún momento.', isCorrect: false },
      { text: 'Sólo si ha quedado detenido sobre el paso de peatones.', isCorrect: false },
      { text: 'Sólo si recibe indicación expresa de un Carabinero.', isCorrect: true }
    ],
    explanation: 'Está terminantemente prohibido retroceder en cruces e intersecciones, salvo orden expresa de un Carabinero dirigiendo el tránsito.',
    legalReference: 'Ley N° 18.290, Art. 143'
  },
  {
    id: 131,
    conasetId: 131,
    category: 'normativa',
    isCritical: false,
    text: 'Usted se aproxima a un cruce de calles no señalizado. Por la otra calle también se aproxima un vehículo que pretende pasar el cruce. ¿Quién tiene la prioridad para pasar?',
    isMultiple: false,
    options: [
      { text: 'El vehículo más grande.', isCorrect: false },
      { text: 'El vehículo que vaya a mayor velocidad.', isCorrect: false },
      { text: 'El otro vehículo, siempre que él se venga acercando al cruce por el lado derecho suyo.', isCorrect: true },
      { text: 'El otro vehículo, siempre que él se venga acercando al cruce por el lado izquierdo suyo.', isCorrect: false }
    ],
    explanation: 'Regla de preferencia de la derecha: todo conductor que enfrente un cruce no regulado debe ceder el paso al móvil que se aproxime por su derecha.',
    legalReference: 'Ley N° 18.290, Art. 139'
  },
  {
    id: 132,
    conasetId: 132,
    category: 'normativa',
    isCritical: false,
    text: 'Cuando dos vehículos van a cruzarse en una intersección en la que no hay señalización alguna, ¿quién debe ceder el paso?',
    isMultiple: false,
    options: [
      { text: 'El vehículo más pequeño.', isCorrect: false },
      { text: 'El vehículo que va por la calle de pistas más angostas.', isCorrect: false },
      { text: 'El que se acerca al cruce por la derecha del otro.', isCorrect: false },
      { text: 'El que se acerca al cruce por la izquierda del otro.', isCorrect: true }
    ],
    explanation: 'El conductor que se acerca por la izquierda debe ceder el paso al que viene por su derecha.',
    legalReference: 'Ley N° 18.290, Art. 139'
  },
  {
    id: 133,
    conasetId: 133,
    category: 'infantil',
    isCritical: true,
    text: '¿Es seguro permitir que los niños viajen en un vehículo de 3 o 5 puertas en el espacio que queda detrás de los asientos traseros?',
    isMultiple: false,
    options: [
      { text: 'No, en ninguna circunstancia.', isCorrect: true },
      { text: 'Sí, siempre que usted pueda ver sin problemas hacia atrás.', isCorrect: false },
      { text: 'Sí, si son menores de 10 años.', isCorrect: false },
      { text: 'No, a menos que los demás asientos estén ocupados.', isCorrect: false }
    ],
    explanation: 'Ese sector es el maletero o zona de deformación trasera por impacto: transportar personas allí es sumamente peligroso y está estrictamente prohibido.',
    legalReference: 'Ley N° 18.290, Art. 75'
  },
  {
    id: 134,
    conasetId: 134,
    category: 'infantil',
    isCritical: true,
    text: '¿Cuáles son las 2 formas más seguras para transportar una guagua en su automóvil? Marque dos respuestas',
    isMultiple: true,
    options: [
      { text: 'En brazos de un adulto que va con cinturón de seguridad.', isCorrect: false },
      { text: 'En brazos de un adulto de modo que el cinturón les sujete a ambos.', isCorrect: false },
      { text: 'En una silla de seguridad mirando hacia adelante.', isCorrect: false },
      { text: 'En el asiento delantero, en una silla de seguridad mirando hacia atrás, pero sólo si el vehículo no posee doble airbag.', isCorrect: true },
      { text: 'En el asiento trasero, en silla de seguridad mirando hacia atrás.', isCorrect: true }
    ],
    explanation: 'Las guaguas deben viajar a contramarcha. La ley chilena exige el asiento trasero como norma principal, y si va adelante el airbag debe estar desactivado.',
    legalReference: 'Ley N° 20.904 / Decreto Supremo 67'
  },
  {
    id: 135,
    conasetId: 135,
    category: 'infantil',
    isCritical: true,
    text: '¿Cuál es la forma más segura para llevar a un niño de 3 ó 4 años en su vehículo?',
    isMultiple: false,
    options: [
      { text: 'En la falda de un adulto compartiendo un mismo cinturón de seguridad.', isCorrect: false },
      { text: 'En la falda de un adulto que va con su cinturón de seguridad.', isCorrect: false },
      { text: 'En cualquier asiento, siempre que lleve puesto el cinturón de seguridad para adultos.', isCorrect: false },
      { text: 'En el asiento trasero, en una silla de seguridad.', isCorrect: true }
    ],
    explanation: 'Los niños hasta los 9 años (o estatura menor a 135 cm y 33 kg) deben viajar siempre en un Sistema de Retención Infantil homologado en el asiento trasero.',
    legalReference: 'Ley N° 20.904, Art. 75 Ley 18.290'
  },
  {
    id: 136,
    conasetId: 136,
    category: 'infantil',
    isCritical: true,
    text: 'La forma más segura de viajar en un automóvil para un niño menor de 2 años es:',
    isMultiple: false,
    options: [
      { text: 'En brazos de un adulto.', isCorrect: false },
      { text: 'Solo en el asiento delantero y con cinturón de seguridad.', isCorrect: false },
      { text: 'Solo en el asiento trasero y con cinturón de seguridad.', isCorrect: false },
      { text: 'En un asiento de seguridad mirando hacia atrás.', isCorrect: true }
    ],
    explanation: 'Hasta al menos los 2 años la cabeza del bebé representa un tercio de su peso: la posición a contramarcha protege la columna cervical en un frenazo.',
    legalReference: 'CONASET - Sistemas de Retención Infantil'
  },
  {
    id: 137,
    conasetId: 137,
    category: 'infantil',
    isCritical: true,
    text: 'En un vehículo de 3 o 5 puertas, ¿en qué condiciones sería seguro transportar niños pequeños en el espacio que queda detrás de los asientos traseros?',
    isMultiple: false,
    options: [
      { text: 'Al efectuar un viaje corto dentro de la ciudad.', isCorrect: false },
      { text: 'Al circular por calles o caminos de poco tránsito.', isCorrect: false },
      { text: 'Nunca.', isCorrect: true },
      { text: 'Siempre es seguro.', isCorrect: false }
    ],
    explanation: 'Bajo ninguna circunstancia. El maletero carece de anclajes, cinturones y protección estructural para personas.',
    legalReference: 'Ley N° 18.290'
  },
  {
    id: 138,
    conasetId: 138,
    category: 'normativa',
    isCritical: false,
    text: 'Usted está en una calle de un solo sentido de tránsito y desea virar a la izquierda. ¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s)? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'viraje_izquierda_un_sentido_138',
    isMultiple: true,
    options: [
      { text: 'Usted está bien situado para virar a la izquierda.', isCorrect: true },
      { text: 'Si después de virar usted volverá a virar nuevamente a la izquierda en el siguiente cruce, lo mejor es que se mantenga en la pista izquierda de la calle hacia la cual está virando.', isCorrect: true },
      { text: 'Usted nunca puede saber si la calle hacia la cual vira tiene un solo sentido de tránsito o dos. Por eso, siempre debe tomar la pista derecha de la calle hacia la cual vira.', isCorrect: false },
      { text: 'No es necesario que usted señalice que va a virar.', isCorrect: false }
    ],
    explanation: 'En vía unidireccional el viraje a la izquierda se efectúa desde la pista izquierda hacia la pista más conveniente según la ruta posterior.',
    legalReference: 'Ley N° 18.290, Art. 134'
  },
  {
    id: 139,
    conasetId: 139,
    category: 'senales',
    isCritical: false,
    text: '¿En cuál o cuáles de las siguientes situaciones puede usted virar a la izquierda sin que siempre deba detenerse antes? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'senales_viraje_izquierda_139',
    isMultiple: true,
    options: [
      { text: 'A', isCorrect: true },
      { text: 'B', isCorrect: true },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: true }
    ],
    explanation: 'En semáforo verde (A), semáforo amarillo intermitente (B) o Ceda el Paso libre (D) no es obligatorio detenerse por completo si el camino está expedito (a diferencia de C: señal PARE).',
    legalReference: 'Cuestionario Oficial CONASET'
  },
  {
    id: 140,
    conasetId: 140,
    category: 'senales',
    isCritical: false,
    text: '¿Frente a cuál o cuáles de las siguientes señales e indicaciones del semáforo debe usted detenerse siempre? Marque la o las respuesta(s) correcta(s)',
    illustrationType: 'senales_detencion_140',
    isMultiple: true,
    options: [
      { text: 'A', isCorrect: false },
      { text: 'B', isCorrect: true },
      { text: 'C', isCorrect: false },
      { text: 'D', isCorrect: true }
    ],
    explanation: 'Tanto frente al semáforo en fase roja (B) como frente a la señal reglamentaria PARE (D) la detención total de la marcha es 100% obligatoria en todos los casos.',
    legalReference: 'Ley N° 18.290, Arts. 104 y 172'
  }
];

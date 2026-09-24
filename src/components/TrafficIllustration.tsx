import React from 'react';

interface TrafficIllustrationProps {
  type: string;
  className?: string;
}

export const TrafficIllustration: React.FC<TrafficIllustrationProps> = ({ type, className = '' }) => {
  switch (type) {
    // ==========================================
    // SEÑAL: PARE (R-1)
    // ==========================================
    case 'senal_pare':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <polygon points="48,8 112,8 152,48 152,112 112,152 48,152 8,112 8,48" fill="#DC2626" stroke="#FFFFFF" strokeWidth="5" />
            <polygon points="50,14 110,14 146,50 146,110 110,146 50,146 14,110 14,50" fill="none" stroke="#FFFFFF" strokeWidth="3" />
            <text x="80" y="92" fill="#FFFFFF" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="34" textAnchor="middle" letterSpacing="2">
              PARE
            </text>
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Reglamentaria: PARE (R-1)
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: CEDA EL PASO (R-2)
    // ==========================================
    case 'senal_ceda_paso':
    case 'senal_ceda_paso_foto_265':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <polygon points="10,18 150,18 80,146" fill="#DC2626" stroke="#FFFFFF" strokeWidth="4" />
            <polygon points="28,26 132,26 80,126" fill="#FFFFFF" />
            <text x="80" y="58" fill="#DC2626" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" textAnchor="middle">
              CEDA EL
            </text>
            <text x="80" y="74" fill="#DC2626" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="14" textAnchor="middle">
              PASO
            </text>
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Reglamentaria: Ceda el Paso (R-2)
          </span>
        </div>
      );

    // ==========================================
    // SEÑALES DE VELOCIDAD MÁXIMA
    // ==========================================
    case 'senal_velocidad_70':
    case 'senal_velocidad_60':
    case 'senal_velocidad_50': {
      const speed = type === 'senal_velocidad_70' ? '70' : type === 'senal_velocidad_60' ? '60' : '50';
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <circle cx="80" cy="80" r="74" fill="#FFFFFF" stroke="#DC2626" strokeWidth="16" />
            <text x="80" y="85" fill="#0F172A" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="44" textAnchor="middle">
              {speed}
            </text>
            <text x="80" y="112" fill="#0F172A" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" letterSpacing="1" textAnchor="middle">
              MÁXIMA
            </text>
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Límite de Velocidad Máxima ({speed} km/h)
          </span>
        </div>
      );
    }

    // ==========================================
    // SEÑAL: NO ADELANTAR
    // ==========================================
    case 'senal_no_adelantar':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <circle cx="80" cy="80" r="74" fill="#FFFFFF" stroke="#DC2626" strokeWidth="15" />
            <rect x="88" y="60" width="28" height="42" rx="6" fill="#1E293B" />
            <circle cx="94" cy="56" r="4" fill="#475569" />
            <circle cx="110" cy="56" r="4" fill="#475569" />
            <rect x="44" y="52" width="28" height="42" rx="6" fill="#DC2626" />
            <circle cx="50" cy="48" r="4" fill="#991B1B" />
            <circle cx="66" cy="48" r="4" fill="#991B1B" />
            <line x1="28" y1="28" x2="132" y2="132" stroke="#DC2626" strokeWidth="12" strokeLinecap="round" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Reglamentaria: No Adelantar (R-14)
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: PAVIMENTO RESBALADIZO
    // ==========================================
    case 'senal_resbaladizo':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            <rect x="30" y="30" width="100" height="100" rx="8" transform="rotate(45 80 80)" fill="none" stroke="#000000" strokeWidth="2" />
            <path d="M62 68 C 62 60, 68 54, 76 54 L 92 54 C 98 54, 102 60, 104 68 L 108 78 C 110 82, 108 86, 104 86 L 62 86 C 58 86, 56 82, 58 78 Z" fill="#000000" />
            <path d="M 64 88 Q 55 96, 68 104 T 60 114" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
            <path d="M 98 88 Q 88 98, 102 106 T 92 116" fill="none" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Pavimento Resbaladizo
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: PROXIMIDAD DE SEMÁFORO
    // ==========================================
    case 'senal_semaforo_251':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            {/* Cuerpo semáforo */}
            <rect x="70" y="52" width="20" height="56" rx="4" fill="#000000" />
            <circle cx="80" cy="62" r="6" fill="#DC2626" />
            <circle cx="80" cy="80" r="6" fill="#F59E0B" />
            <circle cx="80" cy="98" r="6" fill="#10B981" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Proximidad de Semáforo
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: DOS SENTIDOS DE TRÁNSITO
    // ==========================================
    case 'senal_dos_sentidos_255':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            {/* Flecha hacia arriba */}
            <path d="M 68 112 L 68 62 M 68 56 L 58 72 M 68 56 L 78 72" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* Flecha hacia abajo */}
            <path d="M 92 48 L 92 98 M 92 104 L 82 88 M 92 104 L 102 88" stroke="#000000" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Dos Sentidos de Tránsito Más Adelante
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: CRUCE PEATONAL
    // ==========================================
    case 'senal_cruce_peatones_256':
    case 'senal_peatones':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            <circle cx="80" cy="50" r="8" fill="#000000" />
            <path d="M 76 60 L 84 60 L 88 85 L 98 105 M 84 85 L 70 105 M 76 66 L 64 80 M 84 66 L 96 78" fill="none" stroke="#000000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="50" y1="112" x2="110" y2="112" stroke="#000000" strokeWidth="4" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Cruce Peatonal
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: CICLISTAS EN LA VÍA
    // ==========================================
    case 'senal_ciclistas':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            <circle cx="56" cy="88" r="14" fill="none" stroke="#000000" strokeWidth="4" />
            <circle cx="104" cy="88" r="14" fill="none" stroke="#000000" strokeWidth="4" />
            <path d="M 56 88 L 74 74 L 92 88 L 76 88 Z M 74 74 L 88 58 L 98 58 M 74 74 L 70 60" fill="none" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Presencia de Ciclistas
          </span>
        </div>
      );

    // ==========================================
    // SEÑAL: ESCOLARES / NIÑOS (Q205)
    // ==========================================
    case 'senal_escolares_205':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <svg viewBox="0 0 160 160" className="w-28 h-28 drop-shadow-md">
            <rect x="26" y="26" width="108" height="108" rx="12" transform="rotate(45 80 80)" fill="#FBBF24" stroke="#000000" strokeWidth="4" />
            {/* Adulto llevando niño */}
            <circle cx="68" cy="50" r="7" fill="#000000" />
            <path d="M68 58 L68 85 L60 108 M68 85 L76 108 M68 64 L54 80 M68 64 L86 78" stroke="#000000" strokeWidth="4" strokeLinecap="round" fill="none" />
            <circle cx="94" cy="62" r="5" fill="#000000" />
            <path d="M94 68 L94 88 L88 108 M94 88 L100 108 M94 72 L86 78" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Señal Preventiva: Posible Presencia de Escolares
          </span>
        </div>
      );

    // ==========================================
    // TESTIGO LUZ DE ADVERTENCIA / HAZARD (Q7)
    // ==========================================
    case 'luz_advertencia':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-900 border border-slate-700 rounded-2xl text-white ${className}`}>
          <div className="relative flex items-center justify-center w-24 h-24 bg-red-950/80 border-2 border-red-500/60 rounded-2xl shadow-inner">
            <svg viewBox="0 0 100 100" className="w-16 h-16 animate-pulse">
              <polygon points="50,12 88,82 12,82" fill="none" stroke="#EF4444" strokeWidth="7" strokeLinejoin="round" />
              <polygon points="50,26 78,74 22,74" fill="#EF4444" />
            </svg>
          </div>
          <span className="mt-3 text-xs font-mono text-red-300 uppercase tracking-widest text-center">
            Testigo de Panel: Intermitentes de Advertencia de Peligro
          </span>
        </div>
      );

    // ==========================================
    // DIAGRAMA: ESTIMACIÓN DE VELOCIDAD Y ENCUENTRO (Q38)
    // ==========================================
    case 'reunion_velocidad_38':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-md bg-slate-800 rounded-xl p-4 text-white relative">
            <div className="text-xs font-bold text-center text-slate-300 mb-3">
              ¿Dónde se estimará el punto de encuentro?
            </div>
            {/* Carretera recta */}
            <div className="relative h-14 bg-slate-700 rounded-lg flex items-center px-4 justify-between border-y-2 border-dashed border-yellow-400/50">
              {/* Auto Azul */}
              <div className="flex flex-col items-center z-10">
                <div className="px-2.5 py-1 bg-blue-600 rounded text-[11px] font-black shadow">
                  AZUL (70 km/h)
                </div>
                <span className="text-[10px] text-blue-300">→</span>
              </div>

              {/* Puntos 1, 2, 3 */}
              <div className="flex gap-10 items-center">
                <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-400 flex items-center justify-center text-xs font-bold text-slate-200">1</span>
                <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-400 flex items-center justify-center text-xs font-bold text-slate-200">2</span>
                <span className="w-6 h-6 rounded-full bg-amber-500 border border-amber-300 flex items-center justify-center text-xs font-black text-slate-950 ring-2 ring-amber-400/50">3</span>
              </div>

              {/* Auto Rojo */}
              <div className="flex flex-col items-center z-10">
                <div className="px-2.5 py-1 bg-rose-600 rounded text-[11px] font-black shadow">
                  ROJO (90 km/h)
                </div>
                <span className="text-[10px] text-rose-300">←</span>
              </div>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Punto 3: Centro estimado erróneamente por ambos conductores
          </span>
        </div>
      );

    // ==========================================
    // ESCENARIO: CRUCE EN T CON VIRAJE (Q105)
    // ==========================================
    case 'cruce_en_t_105':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-64 h-48 bg-emerald-800/40 rounded-xl relative overflow-hidden border border-slate-300 flex items-center justify-center">
            {/* Calzada horizontal */}
            <div className="absolute top-10 w-full h-16 bg-slate-800 border-y-2 border-white/60">
              {/* Auto azul señalizando viraje */}
              <div className="absolute left-6 top-3 px-2 py-1 bg-blue-600 rounded text-[10px] font-bold text-white shadow flex items-center gap-1">
                <span>Auto Azul</span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              </div>
            </div>
            {/* Calzada vertical de empalme T */}
            <div className="absolute bottom-0 w-16 h-28 bg-slate-800 border-x-2 border-white/60">
              {/* Su vehículo esperando */}
              <div className="absolute bottom-3 left-1 px-1.5 py-1 bg-slate-900 border border-white text-white rounded text-[10px] font-bold">
                Su auto
              </div>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Cruce en T: Esperar hasta que el auto azul inicie efectivamente el viraje
          </span>
        </div>
      );

    // ==========================================
    // ESCENARIO: BUS DETENIDO EN PARADA (Q110, Q115, Q176)
    // ==========================================
    case 'bus_parada_peligro_110':
    case 'bus_parada_70kmh_115':
    case 'bus_intermitente_salida_176':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-sm h-36 bg-slate-800 rounded-xl p-3 relative overflow-hidden flex flex-col justify-between border border-slate-400">
            {/* Parada con bus */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-amber-500 text-slate-950 px-3 py-1.5 rounded-lg font-black text-xs shadow">
                <span>BUS DETENIDO</span>
                {type === 'bus_intermitente_salida_176' && (
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" title="Intermitente izquierdo parpadeando" />
                )}
              </div>
              <div className="text-[10px] text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                Peligro: Pasajeros cruzando por delante
              </div>
            </div>

            {/* Carril con auto aproximándose */}
            <div className="w-full border-t border-dashed border-white/50 pt-2 flex items-center justify-between">
              <span className="text-[10px] text-slate-300">Pista de sobrepaso</span>
              <div className="px-3 py-1 bg-blue-600 rounded text-xs font-bold text-white shadow">
                Su vehículo
              </div>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            {type === 'bus_intermitente_salida_176'
              ? 'Bus señalizando salida: Disminuir velocidad y ceder el paso si es seguro'
              : 'Peligro al sobrepasar bus: Peatón oculto puede cruzar de improviso'}
          </span>
        </div>
      );

    // ==========================================
    // ESCENARIO: PELOTA ENTRE AUTOS (Q101) & NIÑOS (Q99)
    // ==========================================
    case 'pelota_autos_estacionados_101':
    case 'peligro_nino_helados_99':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-md h-36 bg-slate-800 rounded-xl p-3 relative overflow-hidden flex items-center justify-between border border-slate-400">
            {/* Fila autos estacionados */}
            <div className="flex flex-col gap-2">
              <div className="px-2 py-1 bg-slate-600 text-white rounded text-[10px]">Auto Estacionado</div>
              <div className="px-2 py-1 bg-slate-600 text-white rounded text-[10px]">Auto Estacionado</div>
            </div>

            {/* Pelota / Niño */}
            <div className="flex flex-col items-center animate-bounce">
              <div className="w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow" />
              <span className="text-[10px] font-bold text-amber-300 mt-1">
                {type === 'peligro_nino_helados_99' ? '¡Niño cruzando!' : '¡Pelota rebotando!'}
              </span>
            </div>

            {/* Su auto */}
            <div className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-bold text-xs shadow">
              Su vehículo
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Precaución Extrema: Disminuir velocidad ante posible niño en la calzada
          </span>
        </div>
      );

    // ==========================================
    // CRUCE CEBRA CON PEATÓN (Q169, Q108, Q191, Q192)
    // ==========================================
    case 'peaton_cruce_cebra_169':
    case 'esperar_peaton_calzada_108':
    case 'peatones_calzada_viraje_191':
    case 'peatones_calzada_viraje_192':
    case 'cruce_cebra':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-xs h-32 bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-around px-4 border border-slate-400">
            <div className="w-4 h-24 bg-white" />
            <div className="w-4 h-24 bg-white" />
            <div className="w-4 h-24 bg-white" />
            <div className="w-4 h-24 bg-white relative flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500 border border-white" title="Peatón" />
            </div>
            <div className="w-4 h-24 bg-white" />
            <div className="w-4 h-24 bg-white" />
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Paso Cebra / Cruce: Detención total obligatoria para ceder el paso
          </span>
        </div>
      );

    // ==========================================
    // SEÑALES MANUALES DE VIRAJE CON BRAZO (Q143, Q144)
    // ==========================================
    case 'brazo_viraje_derecha_143':
    case 'brazo_viraje_izquierda_144':
    case 'brazo_viraje':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="grid grid-cols-3 gap-2 w-full max-w-md text-center text-xs">
            <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <span className="font-extrabold text-slate-900 block mb-1">A: Detención</span>
              <span className="text-slate-500 text-[11px] leading-tight">Brazo izquierdo hacia abajo</span>
            </div>
            <div className={`p-3 rounded-xl border shadow-sm flex flex-col items-center ${
              type === 'brazo_viraje_derecha_143' ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-500/20' : 'bg-white border-slate-200'
            }`}>
              <span className={`font-extrabold block mb-1 ${type === 'brazo_viraje_derecha_143' ? 'text-blue-900' : 'text-slate-900'}`}>
                B: Viraje Derecha
              </span>
              <span className="text-[11px] text-slate-600 leading-tight">Brazo doblado a 90° arriba</span>
            </div>
            <div className={`p-3 rounded-xl border shadow-sm flex flex-col items-center ${
              type === 'brazo_viraje_izquierda_144' ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-500/20' : 'bg-white border-slate-200'
            }`}>
              <span className={`font-extrabold block mb-1 ${type === 'brazo_viraje_izquierda_144' ? 'text-blue-900' : 'text-slate-900'}`}>
                C: Viraje Izquierda
              </span>
              <span className="text-[11px] text-slate-600 leading-tight">Brazo horizontal extendido</span>
            </div>
          </div>
          <span className="mt-3 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Señales con el Brazo Reglamentarias (Art. 138 Ley de Tránsito)
          </span>
        </div>
      );

    // ==========================================
    // DEMARCACIÓN: ZONA ACHURADA AMARILLA (Q246, Q263)
    // ==========================================
    case 'zona_achurada_amarilla_246':
    case 'zona_achurada_viraje_263':
    case 'zona_achurada':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-sm h-32 bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-300">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="yellowHatch" width="18" height="18" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="18" stroke="#FBBF24" strokeWidth="4" />
                </pattern>
              </defs>
              <rect x="20" y="15" width="85%" height="70%" fill="url(#yellowHatch)" stroke="#FBBF24" strokeWidth="3" rx="6" />
            </svg>
            <div className="absolute px-3 py-1 bg-slate-950 text-amber-300 font-black text-xs rounded border border-amber-400 shadow">
              NO BLOQUEAR CRUCE
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            {type === 'zona_achurada_viraje_263'
              ? 'Prohibido detenerse o virar en U sobre zonas achuradas'
              : 'Solo ingresar si la salida del cruce está despejada'}
          </span>
        </div>
      );

    // ==========================================
    // COMBINAR SEÑALES (Q242)
    // ==========================================
    case 'combinar_senales_242':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="flex flex-col items-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-400 rotate-45 flex items-center justify-center rounded-sm border border-black mb-2">
                <span className="-rotate-45 font-black text-xs text-black">1</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700">Curva</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white mb-2 shadow">
                <span className="font-black text-xs text-white">3</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700">Mantenga Der.</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-white rounded-full border-4 border-red-600 flex items-center justify-center mb-2 shadow">
                <span className="font-black text-xs text-red-600">4</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700">No Adelantar</span>
            </div>
            <div className="flex flex-col items-center p-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-amber-400 rotate-45 flex items-center justify-center rounded-sm border border-black mb-2">
                <span className="-rotate-45 font-black text-xs text-black">5</span>
              </div>
              <span className="text-[11px] font-bold text-slate-700">Resbaladizo</span>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Correspondencia Oficial de Señalización
          </span>
        </div>
      );

    // ==========================================
    // DISTANCIA DESDE LA ESQUINA (Q166)
    // ==========================================
    case 'distancia_esquina_166':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-64 h-36 bg-slate-800 rounded-xl p-3 relative border border-slate-400 flex flex-col justify-between">
            <div className="text-xs font-bold text-slate-300">Vértice de Esquina / Intersección</div>
            <div className="flex items-center justify-between border-b-2 border-amber-400 pb-1">
              <span className="text-xs font-bold text-slate-400">Esquina</span>
              <span className="text-sm font-black text-amber-400">← 10 Metros Mínimo →</span>
              <span className="text-xs font-bold text-emerald-400">Estacionar</span>
            </div>
            <div className="text-[11px] text-slate-400">
              Prohibido estacionar a menos de 10 m de la esquina (Art. 160 N° 2)
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Distancia Mínima Legal: 10 Metros
          </span>
        </div>
      );

    // ==========================================
    // DEMARCACIÓN LÍNEA MIXTA EN CALZADA (Q262)
    // ==========================================
    case 'demarcacion_lineas_262':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-64 h-32 bg-slate-800 rounded-xl relative p-3 flex justify-between items-center border border-slate-300">
            {/* Pista A */}
            <div className="flex-1 text-center border-r-2 border-dashed border-white">
              <span className="px-2 py-1 bg-emerald-600 rounded text-xs font-bold text-white">Pista A</span>
              <div className="text-[10px] text-emerald-300 mt-1">Línea segmentada (puede adelantar)</div>
            </div>
            {/* Pista B */}
            <div className="flex-1 text-center border-l-2 border-solid border-white">
              <span className="px-2 py-1 bg-rose-600 rounded text-xs font-bold text-white">Pista B</span>
              <div className="text-[10px] text-rose-300 mt-1">Línea continua (no traspasar)</div>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            El conductor de la Pista B NO puede traspasar la línea
          </span>
        </div>
      );

    // ==========================================
    // CAMIÓN ARTICULADO VIRAJE (Q142, Q186)
    // ==========================================
    case 'camion_articulado_curva_142':
    case 'camion_articulado_maniobra_186':
      return (
        <div className={`flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
          <div className="w-full max-w-sm h-36 bg-slate-800 rounded-xl p-3 relative overflow-hidden flex flex-col justify-between border border-slate-400">
            <div className="flex items-center justify-between">
              <div className="px-3 py-1 bg-amber-500 text-slate-950 font-black rounded text-xs">
                CAMIÓN ARTICULADO
              </div>
              <span className="text-[11px] text-amber-300 font-bold">Se abre a la izquierda para virar a la derecha</span>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-dashed border-slate-500">
              <span className="text-xs text-slate-400">No sobrepasar por la derecha</span>
              <div className="px-2.5 py-1 bg-blue-600 text-white font-bold rounded text-xs">
                Esperar detrás
              </div>
            </div>
          </div>
          <span className="mt-2 text-xs font-semibold text-slate-600 uppercase tracking-wider text-center">
            Camión articulado: Mantenerse detrás hasta que finalice la maniobra
          </span>
        </div>
      );

    default:
      return null;
  }
};

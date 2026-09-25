import React from 'react';
import { X, Scale, ShieldAlert, Award, BookOpen, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface LegalInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalInstructionsModal: React.FC<LegalInstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b-2 border-blue-600 shrink-0">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-blue-400" />
            <div>
              <h2 id="modal-title" className="text-lg font-bold tracking-tight">Instrucciones Legales y Normativa Oficial</h2>
              <p className="text-xs text-slate-300">Examen Teórico Licencia de Conducir Clase B · Chile</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="bg-blue-50 dark:bg-blue-950/50 border-l-4 border-blue-600 p-4 rounded-r-xl">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Fundamento Legal
            </h3>
            <p>
              El examen teórico de Licencia Clase B es una exigencia obligatoria que todo conductor de vehículo motorizado tiene a la hora de obtener su licencia de conducir en las Direcciones de Tránsito municipales de Chile. Su aprobación, por tanto, es paso necesario para la prueba práctica, ya que permite probar la existencia de conocimientos de las personas respecto a leyes de tránsito, además de elementos de seguridad y convivencia vial, entre otros.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-1">
                <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Estructura de Preguntas</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                El examen oficial incorpora <strong className="text-slate-900 dark:text-white">35 preguntas</strong>, de las cuales <strong className="text-slate-900 dark:text-white">3 tienen doble puntuación (2 puntos)</strong> correspondientes a temas críticos:
              </p>
              <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>Consumo de alcohol y drogas al volante.</li>
                <li>Velocidad y distancias de frenado/reacción.</li>
                <li>Sistemas de Retención Infantil (SRI).</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold mb-1">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Puntaje de Aprobación</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-xs">
                El examen suma un total de <strong className="text-slate-900 dark:text-white">38 puntos</strong>. Se exige obtener un mínimo de <strong className="text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-1 py-0.5 rounded font-bold">33 puntos</strong> para la aprobación (86,8%).
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Un solo error en una pregunta crítica resta 2 puntos directos.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Tiempo Límite</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                El tiempo máximo oficial para rendir el examen teórico es de <strong className="text-slate-900 dark:text-white">45 minutos continuos</strong>. Al agotarse el cronómetro, el examen se envía automáticamente.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Algoritmo Anti-Memorización Mecánica</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                El examen cuenta con un banco oficial de más de 1.000 preguntas para la clase B, lo cual implica que una persona no realiza el mismo test si tuviera que rendirlo nuevamente. Nuestro algoritmo imita este proceso barajando dinámicamente preguntas y alternativas para evitar la memorización mecánica, garantizando una preparación efectiva y basada en la comprensión real del temario.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Leyes Claves Incorporadas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="p-2 rounded bg-slate-100/70 dark:bg-slate-800">
                <span className="font-semibold text-slate-800 dark:text-white">Ley N° 18.290:</span> Ley de Tránsito General de Chile.
              </div>
              <div className="p-2 rounded bg-slate-100/70 dark:bg-slate-800">
                <span className="font-semibold text-slate-800 dark:text-white">Ley Emilia (N° 20.770):</span> Sanciones con cárcel efectiva por ebriedad y fuga.
              </div>
              <div className="p-2 rounded bg-slate-100/70 dark:bg-slate-800">
                <span className="font-semibold text-slate-800 dark:text-white">Ley Tolerancia Cero (N° 20.580):</span> Baja umbrales de alcohol a 0,3 y 0,8 g/l.
              </div>
              <div className="p-2 rounded bg-slate-100/70 dark:bg-slate-800">
                <span className="font-semibold text-slate-800 dark:text-white">Ley de Convivencia Vial (N° 21.088):</span> 50 km/h en zonas urbanas.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            Entendido, cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useId } from 'react';

export interface ChartHistoryItem {
  id: string;
  attemptNumber: number;
  points: number;
  percentage: number;
  correctAnswers: number;
  criticalCorrect: number;
  totalQuestions: number;
  isApproved: boolean;
  date: string;
  timeSpentSeconds: number;
  displayLabel: string;
}

interface MetricConfig {
  title: string;
  yUnit: string;
  domain: [number, number];
  threshold: number;
  thresholdLabel: string;
  dataKey: 'points' | 'percentage' | 'correctAnswers';
}

interface ProgressHistoryChartProps {
  data: ChartHistoryItem[];
  metricConfig: MetricConfig;
  currentExamId?: string;
  activeMetric: 'points' | 'percentage' | 'correctAnswers';
}

export const ProgressHistoryChart: React.FC<ProgressHistoryChartProps> = ({
  data,
  metricConfig,
  currentExamId,
  activeMetric,
}) => {
  const gradientId = useId();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center text-slate-400 text-sm">
        No hay datos de ensayos registrados todavía.
      </div>
    );
  }

  // Dimensiones del gráfico SVG
  const width = 800;
  const height = 280;
  const paddingLeft = 50;
  const paddingRight = 30;
  const paddingTop = 30;
  const paddingBottom = 40;

  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;

  const [minVal, maxVal] = metricConfig.domain;

  // Función de mapeo de coordenadas X e Y
  const getX = (index: number) => {
    if (data.length <= 1) return paddingLeft + chartWidth / 2;
    return paddingLeft + (index / (data.length - 1)) * chartWidth;
  };

  const getY = (val: number) => {
    const clamped = Math.max(minVal, Math.min(maxVal, val));
    const ratio = (clamped - minVal) / (maxVal - minVal);
    return paddingTop + chartHeight - ratio * chartHeight;
  };

  // Coordenada Y de la meta legal (threshold)
  const thresholdY = getY(metricConfig.threshold);

  // Puntos calculados
  const points = data.map((d, i) => {
    const val = d[metricConfig.dataKey];
    return {
      x: getX(i),
      y: getY(val),
      val,
      item: d,
      index: i,
    };
  });

  // Generar path SVG suave (curva o polilínea)
  let linePath = '';
  if (points.length === 1) {
    linePath = `M ${points[0].x - 20} ${points[0].y} L ${points[0].x + 20} ${points[0].y}`;
  } else {
    linePath = points.reduce((acc, curr, idx, arr) => {
      if (idx === 0) return `M ${curr.x} ${curr.y}`;
      const prev = arr[idx - 1];
      const cx1 = prev.x + (curr.x - prev.x) / 2;
      const cy1 = prev.y;
      const cx2 = prev.x + (curr.x - prev.x) / 2;
      const cy2 = curr.y;
      return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
    }, '');
  }

  // Generar path de relleno degradado bajo la curva
  let areaPath = '';
  if (points.length > 1) {
    const first = points[0];
    const last = points[points.length - 1];
    areaPath = `${linePath} L ${last.x} ${paddingTop + chartHeight} L ${first.x} ${paddingTop + chartHeight} Z`;
  }

  // Ticks de eje Y (4 divisiones)
  const yTicks = [
    minVal,
    Math.round(minVal + (maxVal - minVal) * 0.33),
    Math.round(minVal + (maxVal - minVal) * 0.66),
    maxVal,
  ];

  const activeHoverItem = hoveredIndex !== null && points[hoveredIndex] ? points[hoveredIndex] : null;

  return (
    <div className="w-full relative select-none">
      <div className="w-full overflow-x-auto overflow-y-hidden pb-1">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[540px] block"
          style={{ maxHeight: '320px' }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Líneas horizontales de la cuadrícula */}
          {yTicks.map((tickVal) => {
            const y = getY(tickVal);
            return (
              <g key={`ytick-${tickVal}`}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  className="stroke-slate-200 dark:stroke-slate-800"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text
                  x={paddingLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[11px] fill-slate-400 dark:fill-slate-500 font-mono font-medium"
                >
                  {tickVal}
                  {activeMetric === 'percentage' ? '%' : ''}
                </text>
              </g>
            );
          })}

          {/* Línea de umbral mínimo legal CONASET */}
          <line
            x1={paddingLeft}
            y1={thresholdY}
            x2={width - paddingRight}
            y2={thresholdY}
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="5 4"
          />
          <text
            x={width - paddingRight}
            y={thresholdY - 7}
            textAnchor="end"
            className="text-[11px] fill-emerald-600 dark:fill-emerald-400 font-bold"
          >
            {metricConfig.thresholdLabel}
          </text>

          {/* Área de degradado bajo la curva */}
          {areaPath && <path d={areaPath} fill={`url(#${gradientId})`} />}

          {/* Curva principal */}
          <path
            d={linePath}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Puntos de datos */}
          {points.map((p) => {
            const isApproved = p.item.isApproved;
            const isCurrent = p.item.id === currentExamId;
            const isHovered = hoveredIndex === p.index;

            return (
              <g
                key={`p-${p.item.id || p.index}`}
                className="cursor-pointer transition-transform"
                onMouseEnter={() => setHoveredIndex(p.index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Halo de hover o actual */}
                {(isHovered || isCurrent) && (
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isHovered ? 13 : 9}
                    fill={isApproved ? '#10b981' : '#f43f5e'}
                    opacity={isHovered ? 0.3 : 0.2}
                    className="transition-all duration-200"
                  />
                )}

                {/* Punto exterior blanco/oscuro */}
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={isHovered ? 7 : isCurrent ? 6 : 5}
                  fill={isApproved ? '#10b981' : '#f43f5e'}
                  className="stroke-white dark:stroke-slate-900 transition-all duration-200"
                  strokeWidth={2.5}
                />

                {/* Etiqueta X debajo del punto */}
                <text
                  x={p.x}
                  y={paddingTop + chartHeight + 20}
                  textAnchor="middle"
                  className={`text-[11px] font-semibold ${
                    isHovered || isCurrent
                      ? 'fill-blue-700 dark:fill-blue-400 font-bold'
                      : 'fill-slate-500 dark:fill-slate-400'
                  }`}
                >
                  {p.item.displayLabel}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tooltip interactivo flotante */}
      {activeHoverItem && (
        <div
          className="absolute z-30 pointer-events-none transition-all duration-150 ease-out bg-slate-900 text-white p-3.5 rounded-xl shadow-2xl border border-slate-700 text-xs min-w-[210px]"
          style={{
            left: `${Math.min(
              Math.max(10, (activeHoverItem.x / width) * 100),
              75
            )}%`,
            top: `${Math.max(10, (activeHoverItem.y / height) * 100 - 35)}%`,
            transform: 'translate(-50%, -100%)',
          }}
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
            <span className="font-bold text-slate-100">{activeHoverItem.item.displayLabel}</span>
            <span className="text-[10px] text-slate-400 font-mono">{activeHoverItem.item.date}</span>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Puntaje Obtenido:</span>
              <span className="font-bold text-sm text-white">
                {activeHoverItem.item.points} / 38 pts
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Porcentaje:</span>
              <span className="font-semibold text-white">{activeHoverItem.item.percentage}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Aciertos:</span>
              <span className="text-slate-200">
                {activeHoverItem.item.correctAnswers} / {activeHoverItem.item.totalQuestions}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Críticas (2 pts):</span>
              <span className="text-amber-400 font-medium">
                {activeHoverItem.item.criticalCorrect} / 3
              </span>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-slate-800">
              <span className="text-slate-400">Resultado:</span>
              <span
                className={`font-bold ${
                  activeHoverItem.item.isApproved ? 'text-emerald-400' : 'text-rose-400'
                }`}
              >
                {activeHoverItem.item.isApproved ? 'APROBADO' : 'REPROBADO'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

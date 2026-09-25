import { jsPDF } from 'jspdf';
import { Question, UserAnswer, QuestionCategory } from '../types/quiz';

export interface ExamPdfExportData {
  questions: Question[];
  userAnswers: Record<number, UserAnswer>;
  totalScore: number;
  percentage: number;
  correctCount: number;
  criticalCorrect: number;
  criticalTotal: number;
  criticalScoreEarned: number;
  isApproved: boolean;
  timeSpentSeconds: number;
  examDate?: string;
  examSessionId?: string;
  categoryStats: Record<string, { total: number; correct: number; points: number; maxPoints: number }>;
  mistakes: { question: Question; userAnswer: UserAnswer }[];
}

const CATEGORY_LABELS: Record<QuestionCategory, string> = {
  alcohol: 'Alcohol y Drogas (Crítica)',
  velocidad: 'Velocidad y Frenado (Crítica)',
  infantil: 'Sistemas Retención Infantil (Crítica)',
  mecanica: 'Mecánica y Mantenimiento',
  normativa: 'Normas y Ley de Tránsito',
  senales: 'Señalización y Semáforos',
  seguridad: 'Seguridad Vial y Conducta',
  clima: 'Clima y Conducción Nocturna',
  accidentes: 'Siniestros y Primeros Auxilios',
};

/**
 * Genera y descarga un informe PDF profesional con los resultados del examen.
 */
export function exportExamSummaryPDF(data: ExamPdfExportData): void {
  const {
    questions,
    totalScore,
    percentage,
    correctCount,
    criticalCorrect,
    criticalTotal,
    criticalScoreEarned,
    isApproved,
    timeSpentSeconds,
    examDate = new Date().toLocaleDateString('es-CL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    examSessionId = `EXAM-${Date.now().toString(36).toUpperCase()}`,
    categoryStats,
    mistakes,
  } = data;

  // Inicializar documento A4 (210 x 297 mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 210 mm
  const pageHeight = doc.internal.pageSize.getHeight(); // 297 mm
  const margin = 14;
  const contentWidth = pageWidth - margin * 2; // 182 mm

  let yPos = 14;

  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  // Función para imprimir pie de página en cada hoja
  const printFooter = (pageNo: number, totalPages: number) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139); // slate-500

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 10, pageWidth - margin, pageHeight - 10);

    doc.text(
      'Simulador Oficial Licencia Clase B Chile · Ley de Tránsito 18.290 (CONASET)',
      margin,
      pageHeight - 6
    );
    doc.text(`Página ${pageNo} de ${totalPages}`, pageWidth - margin, pageHeight - 6, {
      align: 'right',
    });
  };

  // =========================================================================
  // ENCABEZADO PRINCIPAL (PÁGINA 1)
  // =========================================================================
  // Barra superior de acento con colores de Chile (Azul, Blanco, Rojo)
  doc.setFillColor(30, 58, 138); // azul marino #1e3a8a
  doc.rect(margin, yPos, contentWidth, 3, 'F');
  yPos += 7;

  // Título y Subtítulo
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text('INFORME OFICIAL DE RESULTADOS DE SIMULACRO', margin, yPos);
  yPos += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text('Examen Teórico Licencia de Conductor Clase B · Normativa CONASET', margin, yPos);
  yPos += 6;

  // Caja de Metadatos de la Sesión
  doc.setFillColor(248, 250, 252); // slate-50
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.setLineWidth(0.3);
  doc.roundedRect(margin, yPos, contentWidth, 14, 2, 2, 'FD');

  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  doc.text(`Fecha y Hora: ${examDate}`, margin + 4, yPos + 5.5);
  doc.text(`Código de Sesión: ${examSessionId}`, margin + 4, yPos + 10.5);

  doc.text('Duración Examen: 45 min oficiales', margin + 95, yPos + 5.5);
  doc.text('Meta de Aprobación: 33 puntos (86.8%)', margin + 95, yPos + 10.5);
  yPos += 18;

  // =========================================================================
  // BANNER DE RESULTADO OFICIAL (APROBADO / REPROBADO)
  // =========================================================================
  const bannerHeight = 24;
  if (isApproved) {
    doc.setFillColor(5, 150, 105); // emerald-600
  } else {
    doc.setFillColor(220, 38, 38); // red-600
  }
  doc.roundedRect(margin, yPos, contentWidth, bannerHeight, 3, 3, 'F');

  // Texto dentro del Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  const statusTitle = isApproved
    ? 'EXAMEN OFICIAL: APROBADO'
    : 'EXAMEN OFICIAL: NO ALCANZASTE EL PUNTAJE';
  doc.text(statusTitle, margin + 6, yPos + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  const statusSubtitle = isApproved
    ? 'Has superado el estándar mínimo de 33 puntos sobre 38 exigido por la Dirección de Tránsito.'
    : 'Se requiere un mínimo de 33 puntos para aprobar. Revisa las respuestas incorrectas para reforzar.';
  doc.text(statusSubtitle, margin + 6, yPos + 15);

  // Puntaje Destacado a la Derecha del Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text(`${totalScore} / 38 pts`, pageWidth - margin - 6, yPos + 11, { align: 'right' });
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`${percentage}% de rendimiento`, pageWidth - margin - 6, yPos + 17, { align: 'right' });

  yPos += bannerHeight + 5;

  // =========================================================================
  // 4 CUADROS DE KPIs PRINCIPALES
  // =========================================================================
  const kpiBoxWidth = (contentWidth - 9) / 4; // 4 cajas con gap de 3mm
  const kpiHeight = 17;

  const kpis = [
    { label: 'PUNTAJE FINAL', value: `${totalScore} / 38`, sub: 'Meta: 33 pts' },
    { label: 'RESPUESTAS CORRECTAS', value: `${correctCount} / 35`, sub: `${percentage}% acierto` },
    { label: 'PREGUNTAS ERRADAS', value: `${35 - correctCount} / 35`, sub: 'A reforzar' },
    {
      label: 'PREGUNTAS CRÍTICAS (2x)',
      value: `${criticalCorrect} / ${criticalTotal}`,
      sub: `${criticalScoreEarned}/6 pts críticos`,
    },
  ];

  kpis.forEach((kpi, idx) => {
    const x = margin + idx * (kpiBoxWidth + 3);
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(x, yPos, kpiBoxWidth, kpiHeight, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text(kpi.label, x + 3, yPos + 4.5);

    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42);
    doc.text(kpi.value, x + 3, yPos + 11);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text(kpi.sub, x + 3, yPos + 15);
  });

  yPos += kpiHeight + 6;

  // =========================================================================
  // RENDIMIENTO POR ÁREA TEMÁTICA (TABLA RESUMEN)
  // =========================================================================
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text('Rendimiento por Categoría Temática', margin, yPos);
  yPos += 4.5;

  // Cabecera de la tabla
  doc.setFillColor(241, 245, 249); // slate-100
  doc.rect(margin, yPos, contentWidth, 6, 'F');
  doc.setFontSize(7.5);
  doc.setTextColor(71, 85, 105);
  doc.text('ÁREA DEL EXAMEN', margin + 3, yPos + 4.2);
  doc.text('PREGUNTAS', margin + 95, yPos + 4.2);
  doc.text('PUNTOS OBTENIDOS', margin + 130, yPos + 4.2);
  doc.text('% EFECTIVIDAD', margin + 165, yPos + 4.2);
  yPos += 6;

  // Filas de las categorías
  const catEntries = Object.entries(categoryStats);
  catEntries.forEach(([categoryKey, catData], index) => {
    const isEven = index % 2 === 0;
    if (isEven) {
      doc.setFillColor(250, 250, 250);
      doc.rect(margin, yPos, contentWidth, 5.5, 'F');
    }

    const catName = CATEGORY_LABELS[categoryKey as QuestionCategory] || categoryKey;
    const catPct = catData.total > 0 ? Math.round((catData.correct / catData.total) * 100) : 0;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(30, 41, 59);

    // Si es crítica, resaltar en negrita
    if (['alcohol', 'velocidad', 'infantil'].includes(categoryKey)) {
      doc.setFont('helvetica', 'bold');
    }

    doc.text(catName, margin + 3, yPos + 4);
    doc.setFont('helvetica', 'normal');
    doc.text(`${catData.correct} de ${catData.total}`, margin + 95, yPos + 4);
    doc.text(`${catData.points} de ${catData.maxPoints} pts`, margin + 130, yPos + 4);

    if (catPct >= 80) {
      doc.setTextColor(5, 150, 105);
    } else if (catPct >= 50) {
      doc.setTextColor(217, 119, 6);
    } else {
      doc.setTextColor(220, 38, 38);
    }
    doc.text(`${catPct}%`, margin + 165, yPos + 4);

    yPos += 5.5;
  });

  yPos += 4;

  // =========================================================================
  // RESUMEN DE PREGUNTAS ERRADAS / REVISIÓN CLAVE
  // =========================================================================
  if (mistakes.length > 0) {
    // Si no queda suficiente espacio en la página 1 para el encabezado y al menos 1 pregunta, saltar
    if (yPos > 230) {
      doc.addPage();
      yPos = 16;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(`Revisión Detallada de Preguntas Eradas (${mistakes.length} preguntas)`, margin, yPos);
    yPos += 4.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(
      'A continuación se detallan las preguntas donde hubo discrepancia, la opción correcta y el fundamento legal.',
      margin,
      yPos
    );
    yPos += 6;

    mistakes.forEach((item, index) => {
      const q = item.question;
      const userAns = item.userAnswer;
      const selected = userAns ? userAns.selectedOptionIndices : [];
      const correctIndices = q.options.map((opt, i) => (opt.isCorrect ? i : -1)).filter((i) => i !== -1);

      // Calcular altura requerida para esta pregunta
      const titleText = `Pregunta ${index + 1} de ${mistakes.length}: ${q.text}${
        q.isCritical ? ' [CRÍTICA - DOBLE PUNTAJE]' : ''
      }`;
      const titleLines = doc.splitTextToSize(titleText, contentWidth - 8);

      const correctOptTexts = q.options
        .filter((_, i) => correctIndices.includes(i))
        .map((opt) => `• ${opt.text}`);
      const correctLines = doc.splitTextToSize(`Respuesta Correcta: ${correctOptTexts.join(' / ')}`, contentWidth - 8);

      const userOptTexts = q.options
        .filter((_, i) => selected.includes(i))
        .map((opt) => `• ${opt.text}`);
      const userLines = doc.splitTextToSize(
        `Tu Respuesta: ${userOptTexts.length > 0 ? userOptTexts.join(' / ') : '(Sin responder)'}`,
        contentWidth - 8
      );

      const explanationLines = doc.splitTextToSize(`Fundamento CONASET: ${q.explanation}`, contentWidth - 8);

      const legalLines = q.legalReference
        ? doc.splitTextToSize(`Base Legal: ${q.legalReference}`, contentWidth - 8)
        : [];

      const estimatedHeight =
        6 +
        titleLines.length * 3.8 +
        userLines.length * 3.5 +
        correctLines.length * 3.5 +
        explanationLines.length * 3.5 +
        (legalLines.length > 0 ? legalLines.length * 3.5 + 2 : 0) +
        5;

      // Si sobrepasa el límite de la página, agregar nueva página
      if (yPos + estimatedHeight > pageHeight - 16) {
        doc.addPage();
        yPos = 16;
      }

      // Dibujar caja de la pregunta
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(q.isCritical ? 245 : 226, q.isCritical ? 158 : 232, q.isCritical ? 11 : 240); // borde ámbar si es crítica
      doc.setLineWidth(q.isCritical ? 0.5 : 0.3);
      doc.roundedRect(margin, yPos, contentWidth, estimatedHeight, 2, 2, 'FD');

      let innerY = yPos + 4.5;

      // Título
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(q.isCritical ? 180 : 15, q.isCritical ? 83 : 23, q.isCritical ? 9 : 42);
      doc.text(titleLines, margin + 4, innerY);
      innerY += titleLines.length * 3.8 + 1;

      // Tu Respuesta
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(220, 38, 38);
      doc.text(userLines, margin + 4, innerY);
      innerY += userLines.length * 3.5 + 1;

      // Respuesta Correcta
      doc.setTextColor(5, 150, 105);
      doc.setFont('helvetica', 'bold');
      doc.text(correctLines, margin + 4, innerY);
      innerY += correctLines.length * 3.5 + 1.5;

      // Fundamento
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text(explanationLines, margin + 4, innerY);
      innerY += explanationLines.length * 3.5;

      // Base legal si existe
      if (legalLines.length > 0) {
        innerY += 1.5;
        doc.setFont('helvetica', 'italic');
        doc.setTextColor(30, 58, 138); // azul
        doc.text(legalLines, margin + 4, innerY);
      }

      yPos += estimatedHeight + 3.5;
    });
  } else {
    // 0 errores: felicitaciones
    doc.setFillColor(236, 253, 245); // emerald-50
    doc.setDrawColor(167, 243, 208); // emerald-200
    doc.roundedRect(margin, yPos, contentWidth, 16, 2, 2, 'FD');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(5, 150, 105);
    doc.text('¡Puntaje Perfecto sin Errores!', margin + 5, yPos + 6.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(6, 95, 70);
    doc.text(
      'Has respondido correctamente las 35 preguntas oficiales seleccionadas en este simulacro.',
      margin + 5,
      yPos + 11.5
    );
    yPos += 20;
  }

  // =========================================================================
  // PIE DE PÁGINA EN TODAS LAS HOJAS
  // =========================================================================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    printFooter(i, totalPages);
  }

  // Guardar archivo PDF con nombre descriptivo
  const safeDate = new Date().toISOString().split('T')[0];
  const filename = `resumen-examen-conaset-${totalScore}pts-${safeDate}.pdf`;
  doc.save(filename);
}

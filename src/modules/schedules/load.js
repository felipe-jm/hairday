import { loadHours } from "../form/load-hours.js";

// Seleciona o input da data.
const selectedDate = document.getElementById("date");

export function daySchedules() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Renderiza as horas disponíveis
  loadHours({ date });
}

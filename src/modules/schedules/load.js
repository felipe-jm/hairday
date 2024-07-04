import { fetchScheduleByDay } from "../../services/fetch-schedule-by-day.js";
import { loadHours } from "../form/load-hours.js";
import { showSchedule } from "./show.js";

// Seleciona o input da data.
const selectedDate = document.getElementById("date");

export async function daySchedules() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Busca na API os agendamentos.
  const dailySchedules = await fetchScheduleByDay({ date });

  // Exibe os agendamentos.
  showSchedule({ dailySchedules });

  // Renderiza as horas disponíveis.
  loadHours({ date, dailySchedules });
}

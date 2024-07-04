import dayjs from "dayjs";
import { apiConfig } from "./api-config";

export async function fetchScheduleByDay({ date }) {
  try {
    // Faz a requisição para buscar os agendamentos do dia.
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte a resposta para JSON
    const data = await response.json();

    // Filtra os agendamentos pelo dia selecionado.
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    return [];
  }
}

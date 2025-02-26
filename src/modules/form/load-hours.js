import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { clickHours } from "./click-hours.js";

const hours = document.getElementById("hours");

export function loadHours({ date, dailySchedules }) {
  // Limpa a lista de horários.
  hours.innerHTML = "";

  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  // Obtém a lista de todos os horários ocupados.
  const opening = openingHours.map((hour) => {
    // Recupera somente a hora.
    const [scheduledHour] = hour.split(":");

    // Adicionar a hora na data e verificar se está no passado.
    const isHourPast = dayjs(date).add(scheduledHour, "hour").isBefore(dayjs());

    const isAvailable = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      isAvailable,
    };
  });

  // Renderiza os horários.
  opening.forEach(({ hour, isAvailable }) => {
    const li = document.createElement("li");

    li.classList.add("hour");
    li.classList.add(isAvailable ? "hour-available" : "hour-unavailable");

    li.textContent = hour;

    if (hour === "9:00") {
      addHeaderHour("Manhã");
    } else if (hour === "13:00") {
      addHeaderHour("Tarde");
    } else if (hour === "18:00") {
      addHeaderHour("Noite");
    }

    hours.appendChild(li);
  });

  // Adiciona o evento de clique nos horários disponíveis.
  clickHours();
}

function addHeaderHour(title) {
  const header = document.createElement("li");

  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}

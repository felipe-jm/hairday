import dayjs from "dayjs";
import { newSchedule } from "../../services/new-schedule.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// Data atual para o input.
const inputToday = dayjs().format("YYYY-MM-DD");

// Carrega a data atual.
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  // Previre o comportamento padrão do formulário de recarregar a página.
  event.preventDefault();

  try {
    // Recuperando o nome do cliente.
    const name = clientName.value;

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // Recupera o horário selecionado.
    const selectedHour = document.querySelector(".hour-selected");

    // Verifica se o horário foi selecionado.
    if (!selectedHour) {
      return alert("Selecione um horário!");
    }

    // Recupera somente a hora.
    const [hour] = selectedHour.innerText.split(":");

    // Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gera um ID
    const id = new Date().getTime();

    await newSchedule({ id, name, when });
  } catch (error) {
    console.log(error);
    alert("Não foi possível realizar o agendamento.");
  }
};

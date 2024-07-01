import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Data atual para o input.
const inputToday = dayjs().format("YYYY-MM-DD");

// Carrega a data atual.
selectedDate.value = inputToday;

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  // Previre o comportamento padrão do formulário de recarregar a página.
  event.preventDefault();
};

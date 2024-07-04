import { cancelSchedule } from "../../services/cancel-schedule";
import { daySchedules } from "./load";

const periods = document.querySelectorAll(".period");

// Gera evento click para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista.
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado.
      const item = event.target.closest("li");

      // Pega o id do agendamento para remover.
      const { id } = item.dataset;

      // Confirma que o id foi selecionado.
      if (id) {
        // COnfirma se o usuário quer cancelar.
        const isConfirm = confirm("Deseja realmente cancelar o agendamento?");

        if (isConfirm) {
          // Faz a requisição na API para cancelar o agendamento.
          await cancelSchedule(id);

          // Recarrega os agendamentos.
          daySchedules();
        }
      }
    }
  });
});

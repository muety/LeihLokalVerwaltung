import Database from "../../database/ENV_DATABASE";
import { notifier } from "@beyonk/svelte-notifications";

export default (customer, closePopup) => {
  if (confirm("Soll dieser Nutzer wirklich gelöscht werden?")) {
    return Database.removeDoc(customer)
      .then(() => notifier.success("Nutzer gelöscht!"))
      .then(closePopup)
      .catch((error) => {
        console.error(error);
        notifier.danger("Nutzer konnte nicht gelöscht werden!", 6000);
      });
  }
};
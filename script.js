

function getPostalFormValue(form, name) {
  const field = form.elements[name];
  return field ? String(field.value || "").trim() : "";
}

function preparePostalOrderEmail(event) {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const subject = "Commande postale — Le P’tiot Sampantais";

  const body = [
    "Bonjour,",
    "",
    "Je souhaite commander Le P’tiot Sampantais par la poste.",
    "",
    "Nom et prénom : " + getPostalFormValue(form, "nom_prenom"),
    "Adresse e-mail : " + getPostalFormValue(form, "email"),
    "",
    "Adresse postale complète :",
    getPostalFormValue(form, "adresse"),
    "",
    "Code postal : " + getPostalFormValue(form, "code_postal"),
    "Ville : " + getPostalFormValue(form, "ville"),
    "Pays : " + getPostalFormValue(form, "pays"),
    "",
    "Nombre d’exemplaires souhaités : " + getPostalFormValue(form, "exemplaires"),
    "Mode d’envoi choisi : " + getPostalFormValue(form, "mode_envoi"),
    "",
    "Preuve ou confirmation de paiement, si paiement par virement :",
    getPostalFormValue(form, "preuve_paiement"),
    "",
    "Téléphone : " + (getPostalFormValue(form, "telephone") || "Non renseigné"),
    "",
    "Message particulier :",
    getPostalFormValue(form, "message") || "Aucun",
    "",
    "Merci."
  ].join("\n");

  const mailto = "mailto:contact@sampans.org"
    + "?subject=" + encodeURIComponent(subject)
    + "&body=" + encodeURIComponent(body);

  window.location.href = mailto;
}

document.addEventListener("DOMContentLoaded", () => {
  const postalForm = document.getElementById("postalOrderForm");
  if (postalForm) {
    postalForm.addEventListener("submit", preparePostalOrderEmail);
  }
});

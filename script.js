
document.addEventListener("DOMContentLoaded", function () {
    const votingCard = document.querySelector(".voting-card");
    const resultCard = document.querySelector(".result-card");
    const selectedRating = document.getElementById("selectedRating");
    const submitButton = document.querySelector(".submit-btn");

    submitButton.addEventListener("click", function () {
  
      // Hier wird die ausgewählte Bewertung ermittelt
      const selectedRadio = document.querySelector('input[name="rating"]:checked');
  
      if (selectedRadio) {
        // den Wert des Votings in einer Variablen speichern
        const ratingValue = selectedRadio.value;
        // setze die Ziffer des Votings in das HTML Element mit der id "selectedRating"
        selectedRating.innerText = ` ${ratingValue} `;
  
        // verstecke .voting-card
        votingCard.style.display = "none";
        // zeige .result-card
        resultCard.style.display = "block";
      }
    });
  });
  
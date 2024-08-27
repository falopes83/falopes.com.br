const words = ["Designer UX", "Designer UI", "Web Designer", "Designer Gráfico"];
let i = 0;
let j = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

// Velocidades de digitação e exclusão
const typingSpeed = 80;  // Velocidade para digitar
const deletingSpeed = 80; // Velocidade para deletar

// Tempo de espera antes de começar a deletar ou passar para a próxima palavra
const pauseAfterTyping = 3000; // Pausa após a digitação (3 segundos)
const pauseAfterDeleting = 500; // Pausa após deletar antes de passar para a próxima palavra

function type() {
  const currentWord = words[i];
  
  if (!isDeleting && j <= currentWord.length) {
    typingElement.innerHTML = currentWord.substring(0, j);
    j++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && j >= 0) {
    typingElement.innerHTML = currentWord.substring(0, j);
    j--;
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && j > currentWord.length) {
    isDeleting = true;
    setTimeout(type, pauseAfterTyping); // Espera 3 segundos antes de começar a deletar
  } else if (isDeleting && j < 0) {
    isDeleting = false;
    i++;
    if (i >= words.length) i = 0;  // Volta para a primeira palavra após a última
    setTimeout(type, pauseAfterDeleting); // Espera 0,5 segundo antes de digitar a próxima palavra
  }
}

type();

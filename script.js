// Effetto scrittura sul sottotitolo
document.addEventListener("DOMContentLoaded", function() {
    const h3 = document.querySelector(".main h3");
    const text = h3.innerHTML;
    h3.innerHTML = "";
    let i = 0;
  
    function typeWriter() {
      if (i < text.length) {
        h3.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 25); // velocità di scrittura
      }
    }
    typeWriter();
  });
  
  // Cambia colore titolo al passaggio
  const h1 = document.querySelector(".main h1");
  h1.addEventListener("mouseenter", () => {
    h1.style.color = "#ff6347"; // arancione
  });
  h1.addEventListener("mouseleave", () => {
    h1.style.color = "#000"; // torna nero
  });
  
  // Paperelle che cadono
  function createDuck() {
    const duck = document.createElement("div");
    duck.innerHTML = "🦆";
    duck.style.position = "fixed";
    duck.style.left = Math.random() * window.innerWidth + "px";
    duck.style.top = "-50px";
    duck.style.fontSize = "2em";
    duck.style.transition = "top 3s linear";
    document.body.appendChild(duck);
  
    setTimeout(() => {
      duck.style.top = window.innerHeight + "px";
    }, 50);
  
    setTimeout(() => {
      duck.remove();
    }, 3000);
  }
  
  // Fa apparire paperelle quando clicchi
  document.addEventListener("click", createDuck);
  
document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

document.querySelectorAll(".faq-question").forEach(btn => {
  btn.onclick = () => {
    btn.nextElementSibling.classList.toggle("show");
  };
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  if (!email.includes("@")) {
    alert("Email inválido!");
    return;
  }

  alert("Mensagem enviada com sucesso!");
  e.target.reset();
});

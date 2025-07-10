function showTab(tab) {
  const phoneForm = document.getElementById("phoneSignup");
  const emailForm = document.getElementById("emailSignup");
  const buttons = document.querySelectorAll(".tab");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (tab === "phone") {
    phoneForm.style.display = "block";
    emailForm.style.display = "none";
    buttons[0].classList.add("active");
  } else {
    phoneForm.style.display = "none";
    emailForm.style.display = "block";
    buttons[1].classList.add("active");
  }
}

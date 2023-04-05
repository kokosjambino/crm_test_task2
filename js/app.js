function changeHeight() {
  const letters = document.getElementById("letters");
  const widgets = document.getElementById("widgets");
  const days = document.getElementById("days");
  const cases = document.getElementById("cases");

  console.log("letters",letters,widgets,days)

  if (window.matchMedia("(width: 320px)").matches) {
    letters.parentNode.insertBefore(letters, letters.previousElementSibling).textContent = "Благодарность клиентов";
    widgets.textContent = "30 виджетов";
    days.textContent = "Месяц аmoCRM";
  } else if(window.matchMedia("(width: 321px)").matches){
    letters.parentNode.insertBefore(letters, cases.nextElementSibling).textContent = "Благодарственные письма";
    widgets.textContent = "Виджеты";
    days.textContent = "35 дней";
  }
}
changeHeight();

window.addEventListener("resize", changeHeight);

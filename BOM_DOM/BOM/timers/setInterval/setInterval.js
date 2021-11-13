// Функции setInterval() и clearInterval() работают аналогично функциям setTimeout() и clearTimeout() с той лишь
// разницей, что setInterval() постоянно выполняет определенную функцию через промежуток времени.
function updateTime() {
  document.getElementById("time").innerHTML = new Date().toTimeString();
}
setInterval(updateTime, 1000);

// Здесь через каждую секунду (1000 миллисекунд) вызывается функция updateTime(), которая обновляет содержимое поля
// <div id="time" >, устанавливая в качестве его кода html текущее время.

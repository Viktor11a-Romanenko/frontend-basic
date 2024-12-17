const img = document.querySelector("#rick-img");
const btnUpdate = document.querySelector("#btn-update");
const statusEl = document.querySelector("#rick-status");
const nameEl = document.querySelector("#rick-name");
const originEl = document.querySelector("#rick-origin");

function getRick() {
  fetch("https://rickandmortyapi.com/api/character/1") // Получаем конкретного персонажа с ID 1
    .then((res) => res.json())
    .then((data) => {
      // Устанавливаем данные на страницу
      img.src = data.image; // Картинка персонажа
      nameEl.textContent = `Name: ${data.name}`; // Имя персонажа
      statusEl.textContent = `Status: ${data.status}`; // Статус персонажа
      originEl.textContent = `Origin: ${data.origin.name}`; // Origin персонажа
    })
    .catch((err) => console.error("Error fetching data:", err));
}
getRick();

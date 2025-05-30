const котики = [
  {
    назва: "Мейн-кун",
    опис:
      "Мейн-кун — це одна з найбільших порід домашніх котів. Вони мають густу, довгу шерсть, пухнастий хвіст та великі лапи. Дуже розумні, лагідні й часто поводяться як собаки: ходять за господарем, приносять іграшки.",
    зображення: "https://terra.vet/wp-content/uploads/56-4.jpg"
  },
  {
    назва: "Сфінкс",
    опис:
      "Сфінкси — безшерсті котики з м'якою, зморшкуватою шкірою. Вони дуже ласкаві, люблять тепло і постійно шукають обійми. Ця порода потребує догляду: регулярного купання та тепла.",
    зображення:
      "https://pets.24tv.ua/resources/photos/news/202103/1581546.jpg?v=1661263968000"
  },
  {
    назва: "Шотландська висловуха",
    опис:
      "Ці котики славляться своїми загнутими донизу вушками. Вони мають круглу мордочку, спокійний характер і дуже люблять сидіти поруч. Часто сплять у смішних позах, наприклад, як люди — на спині.",
    зображення:
      "https://www.purina.ua/sites/default/files/2021-01/Scottish%20Fold.2.jpg"
  },
  {
    назва: "Бенгальський кіт",
    опис:
      "Бенгали мають плямисту або мармурову шерсть, що нагадує леопарда. Вони дуже активні, розумні й допитливі. Люблять воду, можуть стрибати дуже високо і навіть відкривати двері.",
    зображення:
      "https://zoosvit.info/wp-content/uploads/2023/10/bengalskii_kit_3.jpg"
  }
];

function показатиКота() {
  const випадковий = котики[Math.floor(Math.random() * котики.length)];

  document.getElementById("вивід").innerHTML = `
    <h2>${випадковий.назва}</h2>
    <p>${випадковий.опис}</p>
    <img src="${випадковий.зображення}" alt="${випадковий.назва}">
  `;
}

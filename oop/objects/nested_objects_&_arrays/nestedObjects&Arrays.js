// Одни объекты могут содержать в качестве свойств другие объекты. Например, есть объект страны, у которой можно
// выделить ряд свойств. Одно из этих свойств может представлять столицу. Но у столицы мы также можем выделить свои
// свойства, например, название, численность населения, год основания:
let country = {
  name: "Германия",
  language: "немецкий",
  capital: {
    name: "Берлин",
    population: 3375000,
    year: 1237
  }
};
console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237
// В качестве свойств также могут использоваться массивы, в том числе массивы других объектов:
country = {
  name: "Швейцария",
  languages: ["немецкий", "французский", "итальянский"],
  capital: {
    name: "Берн",
    population: 126598
  },
  cities: [
    {name: "Цюрих", population: 378884},
    {name: "Женева", population: 188634},
    {name: "Базель", population: 164937}
  ]
};
// вывод всех элементов из country.languages
document.write("<h3>Официальные языки Швейцарии</h3>");
for (let i = 0; i < country.languages.length; i++) {
  document.write(country.languages[i] + "<br/>");
}
// вывод всех элементов из country.cities
document.write("<h3>Города Швейцарии</h3>");
for (let i = 0; i < country.cities.length; i++) {
  document.write(country.cities[i].name + "<br/>");
}


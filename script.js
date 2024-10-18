const animals = [
    { name: "León", details: "El león es conocido como el rey de la selva." },
    { name: "Elefante", details: "Los elefantes son los mamíferos terrestres más grandes." },
    { name: "Tigre", details: "El tigre es el felino más grande del mundo." },
    { name: "Jirafa", details: "La jirafa es conocida por su largo cuello." },
     { name: "ballena", details: "Llega a pesar hasta 400,000 libras (180 ton) o el equivalente a unos 33 elefantes y medir unos 98 pies (29 m) de largo. Su corazón es del tamaño de un automóvil pequeño y durante la temporada principal de alimentación puede consumir alrededor de 7,936 libras (3,600 kg) de krill por día.." },
     { name: "t rex ", details: "En posición bípeda, una gran cabeza, dos extremidades superiores muy cortas, una gran cola y dos patas muy potentes. Podía llegar a medir unos 13 metros de largo y unos 4 metros de altura. Esta última medida va hasta las caderas y está relacionada con la postura que adoptaba el Tyrannosaurus rex.." },
     { name: "loro", details: "se caracterizan por tener un pico curvado, con una mandíbula inferior con cierta movilidad en su conexión con el cráneo y situada en una posición bastante vertical.." },
     { name: "ajolote", details: " el ajolote cuenta con unas cuantas branquias externas con aspecto de plumas que le proporcionan oxígeno y su aspecto único." },
];

const listElement = document.getElementById("list");
const detailsElement = document.getElementById("details");

// Cargar la lista de animales
animals.forEach(animal => {
    const listItem = document.createElement("li");
    listItem.textContent = animal.name;
    listItem.addEventListener("click", () => showDetails(animal));
    listElement.appendChild(listItem);
})
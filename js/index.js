const juegos = [
  {
    imagen: "../assets/forza.png",
    logo: "../assets/forzaIcon.png",
    nombre: "Forza Motorsport",
    modalidad: "Carreras",
    lanzamiento: 2023,
    descripcion:
      "Nueva edición del simulador de conducción de Turn 10, rediseñado por completo para la actual generación.",
  },
  {
    imagen: "../assets/gp7.jpg",
    logo: "../assets/gp7logo.png",
    nombre: "Gran Turismo 7",
    modalidad: "Carreras",
    lanzamiento: 2023,
    descripcion:
      "El regreso de la aclamada serie de juegos de carreras con una experiencia de conducción realista.",
  },
  {
    imagen: "../assets/zelda.png",
    logo: "../assets/zeldalogo.webp",
    nombre: "The Legend of Zelda: Breath of the Wild 2",
    modalidad: "Aventura",
    lanzamiento: 2023,
    descripcion:
      "La esperada secuela del exitoso juego de aventuras de Nintendo con nuevos desafíos y misterios.",
  },
  {
    imagen: "../assets/cyber.jpg",
    logo: "../assets/cyberlogo.jpg",
    nombre: "Cyberpunk 2077",
    modalidad: "RPG",
    lanzamiento: 2020,
    descripcion:
      "Explora un futurista mundo abierto en este juego de rol de acción ambientado en Cyberpunk.",
  },
  {
    imagen: "../assets/red.jpg",
    logo: "../assets/redlogo.jpg",
    nombre: "Red Dead Redemption 2",
    modalidad: "Aventura",
    lanzamiento: 2018,
    descripcion:
      "Embárcate en una épica aventura en el Viejo Oeste como Arthur Morgan en esta obra maestra de Rockstar Games.",
  },
  {
    imagen: "../assets/witch.jpeg",
    logo: "../assets/witcherlogo.jpg",
    nombre: "The Witcher 4",
    modalidad: "RPG",
    lanzamiento: 2024,
    descripcion:
      "La próxima entrega de la serie The Witcher con un nuevo protagonista y emocionantes historias.",
  },
  {
    imagen: "../assets/halo.jpg",
    logo: "../assets/halologo.jpg",
    nombre: "Halo Infinite",
    modalidad: "Shooter",
    lanzamiento: 2021,
    descripcion:
      "El Jefe Maestro regresa en una nueva aventura en este icónico shooter de Xbox.",
  },
  {
    imagen: "../assets/final.jpeg",
    logo: "../assets/finalogo.webp",
    nombre: "Final Fantasy XVI",
    modalidad: "RPG",
    lanzamiento: 2023,
    descripcion:
      "Sumérgete en un mundo de magia y aventuras en la última entrega de la serie Final Fantasy.",
  },
  {
    imagen: "../assets/fifa.webp",
    logo: "../assets/fifalogo.jpg",
    nombre: "FIFA 24",
    modalidad: "Deportes",
    lanzamiento: 2023,
    descripcion:
      "La próxima entrega de la popular franquicia de juegos de fútbol de EA Sports.",
  },
  {
    imagen: "../assets/warzone.jpg",
    logo: "../assets/warzonelogo.png",
    nombre: "Call of Duty: Warzone 2",
    modalidad: "Battle Royale",
    lanzamiento: 2023,
    descripcion:
      "La secuela del exitoso juego de Battle Royale de Call of Duty con nuevas armas y mapas.",
  },
];
const search = document.getElementById("buscar");
const category = document.getElementById("categoria");
const container = document.getElementById("container");
juegos.forEach((item) => {
  container.innerHTML += `    <div class="card">
  <img
    src="${item.imagen}"
    class="card__image"
    alt="Game image"
  />
  <div class="card__overlay">
    <div class="card__header">
      <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
      <img class="card__thumb" src="${item.logo}" alt="Game logo" />
      <div class="card__header-text">
        <p class="card__name">${item.nombre}</p>
        <p class="card__gender">Modalidad: <span>${item.modalidad}</span></p>
        <p class="card__date">Lanzamiento: <span>${item.lanzamiento}</span></p>
      </div>
    </div>
    <p class="card__description">
    ${item.descripcion}
    </p>
  </div>
</div>`;
});

function filtrar() {
  const arrayFilter = juegos.filter((item) => {
    if (category.value != "default") {
      return (
        item.nombre.toLowerCase().includes(search.value.toLowerCase()) &&
        item.modalidad.toLowerCase() == category.value.toLowerCase()
      );
    } else {
      return item.nombre.toLowerCase().includes(search.value.toLowerCase());
    }
  });
  if (arrayFilter.length > 0) {
    container.innerHTML = "";
  }
  arrayFilter.forEach((item) => {
    container.innerHTML += `    <div class="card">
    <img
      src="${item.imagen}"
      class="card__image"
      alt="Game image"
    />
    <div class="card__overlay">
      <div class="card__header">
        <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
          <path />
        </svg>
        <img class="card__thumb" src="${item.logo}" alt="Game logo" />
        <div class="card__header-text">
          <p class="card__name">${item.nombre}</p>
          <p class="card__gender">Modalidad: <span>${item.modalidad}</span></p>
          <p class="card__date">Lanzamiento: <span>${item.lanzamiento}</span></p>
        </div>
      </div>
      <p class="card__description">
      ${item.descripcion}
      </p>
    </div>
  </div>`;
  });
}

import "./style.css";

interface Artista {
	nombre: string;
	año: number;
	activo: boolean;
	genero: string;
}

const artistaA: Artista = {
	nombre: "The Beatles",
	año: 1960,
	activo: true,
	genero: "🎵 Pop Rock",
};
const artistaB: Artista = {
	nombre: "Queen",
	año: 1970,
	activo: false,
	genero: "🎸 Rock",
};
const artistaC: Artista = {
	nombre: "AC DC",
	año: 1973,
	activo: true,
	genero: "🤘 Hard Rock",
};
const artistaD: Artista = {
	nombre: "Ludwig van Beethoven",
	año: 1770,
	activo: false,
	genero: "🎼 Clásica",
};
const artistaE: Artista = {
	nombre: "The Rolling Stones",
	año: 1962,
	activo: true,
	genero: "🎸 Rock",
};
const estilosTitulo = "font-weight: 700; font-size: 1rem; background-color: green";

console.log(`%c${artistaA.nombre}`, estilosTitulo);
console.log(`Año de fundación: ${artistaA.año}`);
console.log(`Activo: ${artistaA.activo}`);
console.log(`Género musical: ${artistaA.genero}`);

console.log("####################");

console.log(`%c${artistaB.nombre}`, estilosTitulo);
console.log(`Año de fundación: ${artistaB.año}`);
console.log(`Activo: ${artistaB.activo}`);
console.log(`Género musical: ${artistaB.genero}`);

console.log("####################");

console.log(`%c${artistaC.nombre}`, estilosTitulo);
console.log(`Año de fundación: ${artistaC.año}`);
console.log(`Activo: ${artistaC.activo}`);
console.log(`Género musical: ${artistaC.genero}`);

console.log("####################");

console.log(`%c${artistaD.nombre}`, estilosTitulo);
console.log(`Año de fundación: ${artistaD.año}`);
console.log(`Activo: ${artistaD.activo}`);
console.log(`Género musical: ${artistaD.genero}`);

console.log("####################");

console.log(`%c${artistaE.nombre}`, estilosTitulo);
console.log(`Año de fundación: ${artistaE.año}`);
console.log(`Activo: ${artistaE.activo}`);
console.log(`Género musical: ${artistaE.genero}`);

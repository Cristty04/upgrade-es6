//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que
// 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const found = ages.filter(element => element >= 18);
console.log(found);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
//const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numerosPares = ages.filter(element => element %2 == 0);
console.log(numerosPares);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el
// gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

let juego = streamers.filter(streamer => streamer.gameMorePlayed == 'League of Legends');
console.log(juego);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el 
//caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.
//const streamers = [
	//{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	//{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	//{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	//{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//];

let juegos = streamers.filter(streamer => streamer.name.includes('u'));
console.log(juegos);


//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su
//propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.Además, pon el valor
//de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

let players = streamers.filter(streamer => streamer.gameMorePlayed.includes('Legends'));

for (player of players){
	if (player.age >= 35){
		player.gameMorePlayed = player.gameMorePlayed.toUpperCase()
		console.log(player);
	}

}


//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que 
//incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el 
//streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//const streamers = [
	//{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	//{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	//{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	//{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//];

let jugadores = streamers.filter(streamer => streamer.name.includes('u'));
console.log(juegos);

//5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que 
//incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el
//streamer 'Rubius'. Si introduzco 'i',me deberia de mostrar el streamer 'Rubius' e 'Ibai'.En este caso, 
//muestra solo los streamers filtrados cuando hagamos click en el button.
//const streamers = [
	//{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	//{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	//{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	//{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
//];
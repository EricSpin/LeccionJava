var clave  = prompt("Ingrese el nombre a Buscar!");

var estudiante1={
nombre: "Ivan",
genero: "masculino",
edad: 27,
arreglodenotas: [10,7,10],
ciudad: "santa elena",
lenguajefavorito: "java",
trabajo: true,
};

var estudiante2={
nombre: "javier",
genero: "masculino",
edad: 25,
arreglodenotas: [10,7,10],
ciudad: "santa elena",
lenguajefavorito: "jc++",
trabajo: true,
};

var estudiante3={
nombre: "mariela",
genero: "femenino",
edad: 30,
arreglodenotas: [10,7,10],
ciudad: "santa elena",
lenguajefavorito: "java",
trabajo: true,

};

var estudiante4={
nombre: "ana",
genero: "femenino",
edad: 28,
arreglodenotas: [10,7,10],
ciudad: "santa elena",
lenguajefavorito: "flash",
trabajo: true,

};

var estudiante5={
nombre: "Juan",
genero: "Maculino",
edad: 28,
arreglodenotas: [10,7,10],
ciudad: "libertad",
lenguajefavorito: "java",
trabajo: true,

};


function printHTML(mensaje)
{

	var outputDiv= document.getElementById("output");
	outputDiv.innerHTML = mensaje;

}


if (clave == "S")
{
alert("GRACIAS POR SU VISITA");

}
	else if (clave == estudiante1.nombre  || clave == estudiante2.nombre || clave == estudiante3.nombre  || clave == estudiante4.nombre  || clave == estudiante5.nombre){

	alert("si existe");
	if (clave == estudiante1.nombre){
		alert("nombre: " + estudiante1.nombre + " " + estudiante1.genero + " " + estudiante1.edad + " " + estudiante1.arreglodenotas + " " + estudiante1.ciudad + " ");
	}
	

}
	else {
	alert("NO existe");
}



var html = "<h1>RECORD DE ESTUDIANTES</h1>";
var saludo = "<p>Nonmbre " + estudiante1.nombre +"</p>";
saludo += "<p>   Genero " + estudiante1.genero + "</p>";
saludo += "<p>   edad " + estudiante1.edad + "</p>";
saludo += "<p>   Notas " + estudiante1.arreglodenotas + "</p>";
saludo += "<p>   Ciudad " + estudiante1.ciudad + "</p>";
saludo += "<p>   Lenguaje " + estudiante1.lenguajefavorito + "</p>";
saludo += "<p>   Trabajo " + estudiante1.trabajo + "</p>";
saludo += "<p>" + "</p>";

saludo += "<p>   Nombre " + estudiante2.nombre + "</p>";
saludo += "<p>   edad" + estudiante2.genero + "</p>";
saludo += "<p>   Edad " + estudiante2.edad + "</p>";
saludo += "<p>   Notas " + estudiante2.arreglodenotas + "</p>";
saludo += "<p>   Ciudad " + estudiante2.ciudad + "</p>";
saludo += "<p>   Lenguaje " + estudiante2.lenguajefavorito + "</p>";
saludo += "<p>   Trabajo " + estudiante2.trabajo + "</p>";

saludo += "<p>   Nombre " + estudiante3.nombre + "</p>";
saludo += "<p>   edad" + estudiante3.genero + "</p>";
saludo += "<p>   Edad " + estudiante3.edad + "</p>";
saludo += "<p>   Notas " + estudiante3.arreglodenotas + "</p>";
saludo += "<p>   Ciudad " + estudiante3.ciudad + "</p>";
saludo += "<p>   Lenguaje " + estudiante3.lenguajefavorito + "</p>";
saludo += "<p>   Trabajo " + estudiante3.trabajo + "</p>";


saludo += "<p>   Nombre " + estudiante4.nombre + "</p>";
saludo += "<p>   edad" + estudiante4.genero + "</p>";
saludo += "<p>   Edad " + estudiante4.edad + "</p>";
saludo += "<p>   Notas " + estudiante4.arreglodenotas + "</p>";
saludo += "<p>   Ciudad " + estudiante4.ciudad + "</p>";
saludo += "<p>   Lenguaje " + estudiante4.lenguajefavorito + "</p>";
saludo += "<p>   Trabajo " + estudiante4.trabajo + "</p>";


saludo += "<p>   Nombre " + estudiante5.nombre + "</p>";
saludo += "<p>   edad" + estudiante5.genero + "</p>";
saludo += "<p>   Edad " + estudiante5.edad + "</p>";
saludo += "<p>   Notas " + estudiante5.arreglodenotas + "</p>";
saludo += "<p>   Ciudad " + estudiante5.ciudad + "</p>";
saludo += "<p>   Lenguaje " + estudiante5.lenguajefavorito + "</p>";
saludo += "<p>   Trabajo " + estudiante5.trabajo + "</p>";

printHTML (saludo);

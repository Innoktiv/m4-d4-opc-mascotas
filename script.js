class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this.tipo = tipo;
    }

    get getTipo() {
        return `El tipo de animal es un: ${this.tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get getNombreMascota() {
        return this._nombreMascota;
    }
    set setNombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }

    get getEnfermedad() {
        return this._enfermedad;
    }
    set setEnfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}

// PARTE 2
const formulario = document.querySelector('form');
const listaResultados = document.getElementById('listaResultados');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Formu enviao")

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const tipoAnimal = document.getElementById('tipo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const enfermedad = document.getElementById('enfermedad').value;

    let mascota;

    switch (tipoAnimal) {
        case 'perro':
        mascota = new Mascota(nombre, direccion, telefono, 'perro', nombreMascota, enfermedad);
        break;
        case 'gato':
        mascota = new Mascota(nombre, direccion, telefono, 'gato', nombreMascota, enfermedad);
        break;
        case 'conejo':
        mascota = new Mascota(nombre, direccion, telefono, 'conejo', nombreMascota, enfermedad);
        break;
        default:
        console.error('Tipo de animal no válido');
        return;
    }

    // Mostrar los datos a modo de lista
    mostrarDatos(mascota);

    // Limpiar el formulario
    formulario.reset();
});

// PARTE 3
// function mostrarDatos(mascota) {
//     const datos = `${mascota.datosPropietario()} <br> ${mascota.getTipo}, mientras que el nombre de la mascota es: ${mascota.getNombreMascota()} y la enfermedad es: ${mascota.getEnfermedad()}`;
//     const li = document.createElement('li');
//     li.innerHTML = datos;
//     listaResultados.appendChild(li);
// }
function mostrarDatos(mascota) {
    const datosPropiedad = mascota.datosPropietario();
    const tipoAnimal = mascota.getTipo;
    const nombreMascota = mascota.getNombreMascota;
    const enfermedad = mascota.getEnfermedad;

    const datos = `${datosPropiedad} <br> ${tipoAnimal}, mientras que el nombre de la mascota es: ${nombreMascota} y la enfermedad es: ${enfermedad}`;  
    const li = document.createElement('li');
    li.innerHTML = datos;
    listaResultados.appendChild(li);
}
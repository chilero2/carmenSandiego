const datos = document.getElementById('datos');
const btn = document.getElementById('enviar');
const box = document.getElementById('text');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const fragment = document.createDocumentFragment();
    const par1 = document.createElement('P');
    par1.textContent = datos.value.toUpperCase();
    fragment.appendChild(par1);
    const nombre = document.createElement('P');
    const nom = datos.value.split(' ')[0];
    nombre.textContent = 'Nombre: ' + nom;
    fragment.appendChild(nombre);
    const apellidos = document.createElement('P');
    const ap1 = datos.value.split(' ')[1];
    const ap2 = datos.value.split(' ')[2];
    apellidos.textContent = 'Apellidos: ' + ap1 + ' ' +  ap2;
    fragment.appendChild(apellidos);
    const fecha = document.createElement('P');
    const anyo = datos.value.split(' ')[3];
    fecha.textContent = 'Fecha Nacimiento: ' + anyo;
    fragment.appendChild(fecha);
    const nApellido = document.createElement('P');
    nApellido.textContent  = 'Número de letras del apellido: '  + (ap1.length + ap2.length);
    fragment.appendChild(nApellido);

    const usuario = document.createElement('P');
    usuario.textContent = nom.charAt(0) + ap1 + ap2.charAt(0) + anyo.substring(2,4);
    fragment.appendChild(usuario);

    box.appendChild(fragment);

    



} )
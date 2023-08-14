// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        const usuario = { id: 1, nombre: 'John Doe' };
        resolve(usuario);
      } else {
        reject('Usuario no encontrado');
      }
    }, 2000);
  });
}

async function obtenerUsuarioAsync(id) {
  try {
    const usuario = await obtenerUsuario(id);
    return usuario;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

obtenerUsuarioAsync(1)
  .then(usuario => {
    console.log(usuario);
  })
  .catch(error => {
    console.error(error);
  });

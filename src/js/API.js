const url = 'http://localhost:3000/'

// Obteniendo los datos de la API
export const obtenerDatos = async (facultad) => {
    try {
        const respuesta = await fetch(`${url}${facultad}`);
        const datos = await respuesta.json();

        return datos;
    } catch (error) {
        console.log('Fetch Error', error)
    }
}
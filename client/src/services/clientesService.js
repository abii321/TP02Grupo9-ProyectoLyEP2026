import axios from "axios";

const API_URL = "http://localhost:3001/api/clientes";

const crearCliente = async (cliente) => {
    const respuesta = await axios.post(API_URL, cliente);
    return respuesta.data;
};

const obtenerClientes = async () => {
    const respuesta = await axios.get(API_URL);
    return respuesta.data;
};

// NUEVA FUNCIÓN: Obtener un cliente por su ID
const obtenerClientePorId = async (id) => {
    const respuesta = await axios.get(`${API_URL}/${id}`);
    return respuesta.data;
};

const eliminarCliente = async (id) => {
    const respuesta = await axios.delete(`${API_URL}/${id}`);
    return respuesta.data;
};

export default {
    crearCliente,
    obtenerClientes,
    obtenerClientePorId,
    eliminarCliente
};
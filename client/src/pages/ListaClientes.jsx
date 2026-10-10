import "../css/listaclientes.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FormCliente from "../components/FormCliente";
import clientesService from "../services/clientesService"; // Importamos tu servicio

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Función para cargar clientes desde tu API
  const cargarClientes = async () => {
    try {
      setLoading(true);
      const data = await clientesService.obtenerClientes();
      setClientes(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  // Función para manejar el borrado
  const handleEliminar = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
      try {
        await clientesService.eliminarCliente(id);
        // Filtramos usando _id (MongoDB)
        setClientes(clientes.filter((cliente) => cliente._id !== id));
      } catch (err) {
        alert("Ocurrió un error al eliminar el cliente");
      }
    }
  };

  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.name?.lastname?.toLowerCase().includes(busqueda.toLowerCase()) ||
      cliente.address?.city?.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) {
    return <h2>Cargando clientes...</h2>;
  }

  if (error) {
    return <h2>Error al cargar los clientes.</h2>;
  }

  const agregarClienteVisual = (nuevoCliente) => {
    setClientes([nuevoCliente, ...clientes]);
  };

  return (
    <div className="clientes-container">
      <h1>Clientes</h1>
      <FormCliente onCrear={agregarClienteVisual} />

      <hr />

      <div className="contenedor-buscador">
        <h2 className="titulo-buscador">Buscar Clientes</h2>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar por apellido o ciudad"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <p className="cantidad-clientes">
          Clientes encontrados: {clientesFiltrados.length}
        </p>
      </div>
      
      <table className="tabla-clientes">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Ciudad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientesFiltrados.map((cliente) => (
            /* Usamos _id para la key */
            <tr key={cliente._id}>
              {/* Recortamos el ID de Mongo para que no se vea tan largo, opcional */}
              <td>{cliente._id.substring(0, 6)}...</td>
              <td>
                {cliente.name?.firstname} {cliente.name?.lastname}
              </td>
              <td>{cliente.email}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.address?.city}</td>
              <td style={{ display: "flex", gap: "10px" }}>
                <Link
                  className="btn-ficha"
                  /* Usamos _id para la navegación */
                  to={`/clientes/${cliente._id}`}
                >
                  Ver Ficha
                </Link>
                <button 
                  className="btn-eliminar"
                  onClick={() => handleEliminar(cliente._id)}
                  style={{ backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaClientes;
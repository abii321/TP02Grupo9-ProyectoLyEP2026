// src/pages/DetalleCliente.jsx
import '../css/detallecliente.css'
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clientesService from "../services/clientesService"; // Importamos el servicio

const DetalleCliente = () => {
  const { id } = useParams(); // Este 'id' ahora es el _id de MongoDB (ej. "65f3a...")
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const [cliente, setCliente] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const cargarCliente = async () => {
      try {
        // Buscamos el cliente directamente en tu backend
        const data = await clientesService.obtenerClientePorId(id);
        setCliente(data);
      } catch (err) {
        console.error("Error al cargar el cliente:", err);
        setError(true);
      }
    };

    cargarCliente();
  }, [id]);

  const eliminarCliente = async () => {
    if (window.confirm("¿Estás seguro de eliminar este cliente?")) {
      try {
        // Eliminamos el cliente usando el servicio (que apunta a tu backend)
        await clientesService.eliminarCliente(id);
        setMensaje("Cliente eliminado correctamente");

        setTimeout(() => {
          navigate("/clientes");
        }, 2000);
      } catch (err) {
        setMensaje("Error al eliminar cliente");
      }
    }
  };

  if (error) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Error al cargar la ficha del cliente.</h2>;
  }

  if (!cliente) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Cargando ficha del cliente...</h2>;
  }

  return (
    <div className="detalle-cliente">
      <h1>Ficha del Cliente</h1>
      <p>Rol actual: {role}</p>

      {mensaje && <p className='mensaje-eliminado'>{mensaje}</p>}

      <p>
        <strong>ID:</strong> {cliente._id} {/* Cambiamos .id por ._id */}
      </p>

      <p>
        <strong>Nombre:</strong>{" "}
        {cliente.name?.firstname} {cliente.name?.lastname}
      </p>

      <p>
        <strong>Email:</strong> {cliente.email}
      </p>

      <p>
        <strong>Teléfono:</strong> {cliente.phone}
      </p>

      <h2>Dirección</h2>

      <p>
        <strong>Calle:</strong> {cliente.address?.street || "No registrada"}
      </p>

      <p>
        <strong>Número:</strong> {cliente.address?.number || "No registrado"}
      </p>

      <p>
        <strong>Código Postal:</strong> {cliente.address?.zipcode || "No registrado"}
      </p>

      <p>
        <strong>Ciudad:</strong> {cliente.address?.city}
      </p>

      <h2>Credenciales</h2>

      <p>
        <strong>Usuario:</strong> {cliente.username}
      </p>

      <p>
        <strong>Contraseña:</strong> {cliente.password}
      </p>

      {role?.trim() === "Gerencia" && (
        <button className='btn-eliminar' onClick={eliminarCliente}>
          Eliminar Cliente
        </button>
      )}
    </div>
  );
};

export default DetalleCliente;
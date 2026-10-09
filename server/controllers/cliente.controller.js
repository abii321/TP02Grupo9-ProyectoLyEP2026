import Cliente from "../models/cliente.model.js";

// ==========================================
// ISSUE #3: Consultar clientes (GET)
// ==========================================
export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener clientes", error: error.message });
    }
};

export const getClienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const cliente = await Cliente.findById(id);
        if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el cliente", error: error.message });
    }
};

// ==========================================
// ISSUE #4: Modificar clientes (POST, PUT, DELETE)
// ==========================================
export const createCliente = async (req, res) => {
    try {
        const { username, email, password, name, address, phone } = req.body;
        if (!username || !email || !password || !name?.firstname || !name?.lastname || !address?.city) {
            return res.status(400).json({ message: "Faltan campos obligatorios" });
        }
        const clienteExistente = await Cliente.findOne({ email });
        if (clienteExistente) return res.status(400).json({ message: "El email ya está registrado" });

        const nuevoCliente = new Cliente({ username, email, password, name, address, phone });
        const clienteGuardado = await nuevoCliente.save();
        res.status(201).json(clienteGuardado);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el cliente", error: error.message });
    }
};

export const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const clienteActualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!clienteActualizado) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar", error: error.message });
    }
};

export const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const clienteEliminado = await Cliente.findByIdAndDelete(id);
        if (!clienteEliminado) return res.status(404).json({ message: "Cliente no encontrado" });
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar", error: error.message });
    }
};
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
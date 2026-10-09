import { Router } from "express";
import { getClientes, getClienteById } from "../controllers/cliente.controller.js";
import { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.controller.js";

const router = Router();

// Rutas del Issue #8
router.get("/clientes", getClientes);
router.get("/clientes/:id", getClienteById);
// ISSUE #4: Modificar clientes
router.post("/clientes", createCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);

export default router;
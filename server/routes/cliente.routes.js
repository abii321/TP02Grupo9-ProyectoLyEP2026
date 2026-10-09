import { Router } from "express";
import { getClientes, getClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente.controller.js";

const router = Router();

// ISSUE #3: Consultar clientes
router.get("/clientes", getClientes);
router.get("/clientes/:id", getClienteById);

// ISSUE #4: Modificar clientes
router.post("/clientes", createCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);

export default router;
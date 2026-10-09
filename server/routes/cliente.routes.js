import { Router } from "express";
import { getClientes, getClienteById } from "../controllers/cliente.controller.js";

const router = Router();

// Rutas del Issue #8
router.get("/clientes", getClientes);
router.get("/clientes/:id", getClienteById);

export default router;
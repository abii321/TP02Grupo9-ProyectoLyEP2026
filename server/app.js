import express from "express";
import cors from "cors";
import clienteRoutes from "./routes/cliente.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", clienteRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Huellitics API funcionando"
  });
});

export default app;
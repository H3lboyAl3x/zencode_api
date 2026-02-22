import express from "express";
import * as controlador from "../controladores/controlador.js";

const router = express.Router();

// =====router do candidato=====
router.post("/candidato", controlador.criar_candidato);
router.get("/candidato", controlador.buscar_todos_candidatos);
router.get("/candidato/:id", controlador.buscar_candidato);
router.put("/candidato/:id", controlador.atualizar_candidato);
router.delete("/candidato/:id", controlador.apagar_candidato);

// =====router da credencia=====
router.post("/credencia", controlador.criar_credencia);
router.get("/credencia", controlador.buscar_todas_credencias);
router.get("/credencia/:id", controlador.buscar_credencia);
router.put("/credencia/:id", controlador.atualizar_credencia);
router.delete("/credencia/:id", controlador.apagar_credencia);

export default router;